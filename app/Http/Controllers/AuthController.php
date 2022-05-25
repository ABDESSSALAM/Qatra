<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Cookie;
class AuthController extends Controller
{
    //
    public function user(){
       return "hello";
        // return Auth::user();
    }


    //add new user
    public function register(Request $request ){
        $fields = $request->validate([
            'nom'=>'required|max:25',
            'prenom'=>'required|max:25',
            'email'=>'required|email|unique:users,email',
            'telephone'=>'required|between:10,13',
            'password'=>'required',
            'role'=>'required'
        ]);

        $user = User::create([
            'nom'=>$fields['nom'],
            'prenom'=>$fields['prenom'],
            'telephone'=>$fields['telephone'],
            'email'=>$fields['email'],
            'password'=>bcrypt($fields['password']),
            'role'=>$fields['role']
        ]);

        $token = $user->createToken('myapptoken')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response($response, 201);



      /* $feilds= $request->validate([
            'nom'=>'required|max:25',
            'prenom'=>'required|max:25',
            'telephone'=>'required|between:10,13',
            'email'=>'required|email|unique:users,email',
            'password'=>'required',
            'role'=>'required'
        ]);

        $data = $request->all();
        return User.create([
            'nom'=>$data['nom'],
            'prenom'=>$data['prenom'],
            'telephone'=>$data['telephone'],
            'email'=>$data['email'],
            'password'=>Hash::make($data['password']),
            'role'=>$data['role']
        ]);
        */

    }

    //logging
    public function login(Request $request){
        $request->validate([
            'email' => 'required',
            'password' => 'required',
        ]);

       if(!Auth::attempt(['email' => $email, 'password' => $password])){
           return response([
            'message'=>'inccorect'
           ],401);
           //401 HTTP UNAUTHORIZED
       } 
       $user = Auth::user();
       $token=$user->createToken('token')->plainTextToken;
       $cookie=cookie('jwt',$token,60*48);
       return response([
           'message'=>'Success'
       ])->withCookie($cookie);
    }

    //log out

    public function logout(){
        $cookie=Cookie::forget('jwt');
        return response([
            'message'=>'Success'
        ])->withCookie($cookie);
    }
}
