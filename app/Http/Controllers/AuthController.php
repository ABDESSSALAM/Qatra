<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\User;
use App\Models\Citoyen;
use App\Models\Demande;
use App\Models\Volontaire;
use App\Models\Association;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    //add new user
    public function register(Request $request ){


        //step 2
        $role=$request->input('role');
        if($role != 1 && $role != 2 && $role != 3 && $role != 5){
            return response([
                "role"=>$role,
                'message'=>'unable to create user with this role'
            ]);
        }
        //step 3

        $user = User::create([
            'nom'=>$request->input('nom'),
            'prenom'=>$request->input('prenom'),
            'telephone'=>$request->input('telephone'),
            'email'=>$request->input('email'),
            'password'=>bcrypt($request->input('password')),
            'role'=>$request->input('role')
        ]);

        $token = $user->createToken('token')->plainTextToken;
        $idUser=$user->id;
        //step 4 - 1
        switch($role){
            case 1:
                 //add citoyen
                $citoyen=Citoyen::create([
                    'IdCitoyen'=>$idUser,
                    'CIN'=>$request->input('CIN'),
                    'Ville'=>$request->input('ville')
                ]);
                //add demande
                $demande=Demande::create([
                    'SanguinP'=>$request->input('sangP'),
                    'Hospitale'=>$request->input('hospitale'),
                    'IdCitoyen'=>$idUser,
                    'Etat'=>0
                    
                ]);
                break;
            case 2:
                $volonatire=Volontaire::create([
                    'IdVolontaire'=>$idUser,
                    'CIN'=>$request->input('CIN'),
                    'SanguinV'=>$request->input('SangV'),
                    'Ville'=>$request->input('ville')
                ]);
                break;
            case 3:
                
                $association=Association::create([
                    'responsable'=>$idUser,
                    'dateCreation'=>$request->input('dateCreation'),
                    'Ville'=>$request->input('ville'),
                    'etat'=>0,
                    'nomAssoc'=>$request->input('NomAssoc')
                ]);
                break;
        }
        

       
        $cookie=cookie('jwt',$token,60*48,null,null,true,true);

        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response($response, 201)->cookie($cookie);
    }
    
   


    //logging
    public function login(Request $request) {

        $data=$request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);
        

        $email = $data['email'];
        $password = $data['password'];

       if(!Auth::attempt(['email' => $email, 'password' => $password])){
           return response([
            'message'=>'inccorect'
           ],401);
           //401 HTTP UNAUTHORIZED
       }
       
       $user = Auth::user();
       $token= $user->createToken('token')->plainTextToken;
       $cookie=cookie('jwt',$token);
     //  setcookie('jwt',$token,time()+(24*3600));
       

       return response([
           'user'=>$user,
           'token'=>$token,
           'message'=>'Success'
       ], 200)->withCookie($cookie);
    }

    //log out

    public function logout(Request $request){
       
        
        Auth::user()->tokens()->delete();
        $cookie = Cookie::forget('jwt');
       $request->session()->invalidate();

        $request->session()->regenerateToken();
        return response([
            'message'=>'Success'
        ])->withCookie($cookie);
    }

    //get user
    public function user(){
        return Auth::user();
    }

    public function AssociationInfo(){
        //role 3 and 4
        $user=Auth::user();
        $userRole=$user->role;
        if($userRole !=3 || $userRole !=4){
            return response([
                'message'=>'insifisante pour ce role'
            ]);
        }
        $userID=$user->id;
        
        $assoc=DB::table('associations')
        ->where('responsable','=',$userID)
        ->select('IdAssoc')->get();
        return response()->json($assoc);
    }
}
