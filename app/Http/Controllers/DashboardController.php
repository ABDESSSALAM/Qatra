<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Models\Volontaire;
use App\Models\User;
use App\Models\Association;
use App\Models\Carnavale;

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
        $role =Auth::user()->role;
        if($role!=3){
            return response([
                'message'=>'not allowed'
            ]);
        }

        $data=$request->validate([
            'dateDebut'=>'required|date_format:Y-m-d',
            'dateFin'=>'required|date_format:Y-m-d',
            'coordinates'=>'regex:/^-?[0-9]+(\.\d+)?$/',
            'Association'=>'required',
            'Ville'=>'required',
            'location'=>'required|string'
        ]);
        $carnavale=Carnavale::create([
            'dateDebut'=>$data['dateDebut'],
            'dateFin'=>$data['dateFin'],
            'coordinates'=>$data['lat'],
            
            'Association'=>$data['Association'],
            'Ville'=>$data['Ville'],
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
        ->select('demandes.*','users.telephone')
        ->where('IdUrg',null)
        ->get();
        return response()->json($urgence);
    }
}
