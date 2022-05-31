<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Models\Volontaire;
use App\Models\User;
use App\Models\Association;

class DashboardController extends Controller
{
    //$role =Auth::user()->role;
    //$volontaire = Volontaire::with('user')->get();

    //get all volontaire
    public function getVolontaires(){
        //aviable only for verfied association and admin
        $role =Auth::user()->role;
        if($role>3){
            $volontaire=Volontaire::with('user')->get();
            return response($volontaire);
        }
    }

    //get all association

    public function getAssociation(){

        //only for admin role==5
        $role =Auth::user()->role;
        if($role==5){
         $associations=Association::all();
        return response($associations);   
        }
    }


    //verifie association

    public function verifyAssociation($id){

    //only for admin role=5
        $role =Auth::user()->role;
        if($role==5){
            $user=User::where('id',$id)->update(['role'=>3]);
            return response($user); 
        }
        
        //return 1 mean ok /\ 0=non 
    }


    //to test routes
    public function test(){
        
    }
}
