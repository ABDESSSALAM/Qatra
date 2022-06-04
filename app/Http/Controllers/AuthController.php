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
        //step 1 : validation
        //step 2 : role only 1 2 3 to regester new user
        //step 3 : create user
        //step 4-1 : role 1 => user + citoyen + demande
        //step 4-2: role 2 => user + volontaire
        //step 4-3 : role 3 => user + association


        //step 1
        $fields = $request->validate([
            'nom'=>'required|max:25',
            'prenom'=>'required|max:25',
            'email'=>'required|email|unique:users,email',
            'telephone'=>'required|between:10,13',
            'password'=>'required|min:7',
            'role'=>'required',
            'CIN'=>'required|between:6,8',
            'ville'=>'required',
        ]);

        //step 2
        $role=$fields['role'];
        if($role != 1 && $role != 2 && $role != 3){
            return response([
                'message'=>'unable to create user with this role'
            ]);
        }
        //step 3

        $user = User::create([
            'nom'=>$fields['nom'],
            'prenom'=>$fields['prenom'],
            'telephone'=>$fields['telephone'],
            'email'=>$fields['email'],
            'password'=>bcrypt($fields['password']),
            'role'=>$fields['role']
        ]);

        $token = $user->createToken('token')->plainTextToken;
        $idUser=$user->id();
        //step 4 - 1
        switch($role){
            case 1:
                 //add citoyen
                $citoyen=Citoyen::create([
                    'IdCitoyen'=>$idUser,
                    'CIN'=>$feilds['CIN']
                ]);
                //add demande
                $demande=Demande::create([
                    'SanguinP'=>$request->input('sangP'),
                    'Hospitale'=>$request->input('hospitale'),
                    'IdCitoyen'=>$idUser,
                    
                ]);
                break;
            case 2:
                $volonatire=Volontaire::create([
                    'IdVolontaire'=>$idUser,
                    'CIN'=>$feilds['CIN'],
                    'SanguinV'=>$request->input('SangV'),
                    'Ville'=>$feilds['ville']
                ]);
                break;
            case 3:
                $dateCreation=date_create_from_format('Y-m-d',$request->input('DateCreation'));
                $association=Association::create([
                    'responsable'=>$idUser,
                    'dateCreation'=>$dateCreation,
                    'Ville'=>$feilds['ville'],
                    'etat'=>0,
                    'nomAssoc'=>$request->input('NomAssoc')
                ]);
                break;
        }
        

       
        $cookie=cookie('jwt',$token,60*48);

        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response($response, 201);
    }
    
   


    //logging
    public function login(Request $request) {
        $data = $this::_validate($request, [
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if ($data instanceof Response) return $data;

        $email = $data['email'];
        $password = $data['password'];

       if(!Auth::attempt(['email' => $email, 'password' => $password])){
           return response([
            'message'=>'inccorect'
           ],401);
           //401 HTTP UNAUTHORIZED
       }

       $user = $this::_user();
       $token= $user->createToken('token')->plainTextToken;
       $cookie=cookie('jwt',$token,60*48);

       return response([
           'user'=>$user,
           'token'=>$token,
           'message'=>'Success'
       ], 200)->withCookie($cookie);
    }

    //log out

    public function logout(){
        $cookie = Cookie::forget('jwt');
        auth()->user()->tokens()->delete();
        return response([
            'message'=>'Success'
        ])->withCookie($cookie);
    }

    //get user
    public function user(){
        $user=Auth::user();
        return response()->json($user);
    }
}
