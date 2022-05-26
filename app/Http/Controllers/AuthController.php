<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\User;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    //add new user
    public function register(Request $request ){
        $data = $this::_validate($request, [
            'nom'=>'required|max:25',
            'prenom'=>'required|max:25',
            'email'=>'required|email|unique:users,email',
            'telephone'=>'required|between:10,13',
            'password'=>'required',
            'role'=>'required',
        ]);

        if ($data instanceof Response) return $data;

        $fields = $data;

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
           'message'=>'Success'
       ], 200)->withCookie($cookie);
    }

    //log out

    public function logout(){
        $cookie = Cookie::forget('jwt');
        return response([
            'message'=>'Success'
        ])->withCookie($cookie);
    }
}
