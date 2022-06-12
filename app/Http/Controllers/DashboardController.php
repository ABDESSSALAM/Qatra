<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Models\Volontaire;
use App\Models\User;
use App\Models\Association;
use App\Models\Carnavale;
use App\Models\Urgence;

class DashboardController extends Controller
{
    //$role =Auth::user()->role;
    //$volontaire = Volontaire::with('user')->get();

    //get all volontaire
    public function getVolontaires(){
        //aviable only for verfied association and admin

        //origin traitement
        $volontaire=DB::table('users')
        ->join('volontaires','users.id','=','volontaires.IdVolontaire')
        ->join('villes','volontaires.Ville','=','villes.id')
        ->select(
            'users.nom',
            'users.prenom',
            'users.telephone',
            'villes.nomVille',
            'volontaires.SanguinV')->get();
        return response()->json($volontaire);
        /*$role =Auth::user()->role;
        if($role>3){
            $volontaire=Volontaire::with('user')->get();
            return response($volontaire);
        }
        */
    }

    //get all association

    public function getAssociation(){
        
        
        $associations = DB::table('associations')
        ->join('users','associations.responsable','=','users.id')
        ->join('villes','associations.Ville','=','villes.id')
        ->select(
            'associations.IdAssoc',
            'associations.nomAssoc',
            'associations.etat',
            'users.telephone',
            'villes.nomVille'
        )->get();
        return response()->json($associations);


        //only for admin role==5
        $role =Auth::user()->role;
        if($role==5){
        
            //get associations
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

    //add carnavale
    public function addCarnavale(Request $request){
        //only for association
        $user=Auth::user();
        $role =$user->role;
        if($role!=3){
            return response([
                'message'=>'not allowed'
            ]);
        }
        $assoc=DB::table('associations')
        ->where('responsable',$user->id)
        ->get()
        ->first()->IdAssoc;
        $carnavale=Carnavale::create([
            'dateDebut'=>$request->input('dateDebut'),
            'dateFin'=>$request->input('dateFin'),
            'coordinates'=>$request->input('coordinates'),
            'Association'=>$assoc,
            'Ville'=>$request->input('ville'),
            'location'=>$request->input('location')
        ]);
        if($carnavale){
            return response([
                'message'=>'ok'
            ]);
        }
    }

    public function getDemandes(){
        $urgence=DB::table('demandes')
        ->join('citoyens','demandes.IdCitoyen','=','citoyens.IdCitoyen')
        ->join('users','citoyens.IdCitoyen','=','users.id')
        ->select('demandes.*','users.telephone','citoyens.Ville')
        ->where('IdUrg',null)
        ->get();
        return response()->json($urgence);
    }

    public function AddUrgence(Request $request){
        //only for association
        $user=Auth::user();
        $role =$user->role;
        if($role!=3){
            return response([
                'message'=>'not allowed'
            ]);
        }
        $assoc=DB::table('associations')
        ->where('responsable',$user->id)
        ->get()
        ->first()->IdAssoc;
        $urgence = Urgence::create([
            'Ville'=>$request->input('Ville'),
            'Association'=>$assoc,
        ]);
        if($urgence){
            return response([
                'message'=>'ok'
            ]);
        }
    }

    public function test(){
        $assoc=DB::table('associations')
        ->where('responsable',3)
        ->get()
        ->first()->IdAssoc;
        //$idAssoc=$assoc->IdAssoc;
        dd($assoc);
    }
}
