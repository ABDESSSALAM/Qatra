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
            'volontaires.IdVolontaire',
            'users.nom',
            'users.prenom',
            'users.telephone',
            'villes.nomVille',
            'volontaires.SanguinV',
            )->get();
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
            'associations.responsable',
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

    //get association actif
    public function associationActif(){
        $associations = DB::table('associations')
        ->join('users','associations.responsable','=','users.id')
        ->join('villes','associations.Ville','=','villes.id')
        ->where('etat',1)
        ->select(
            'associations.IdAssoc',
            'associations.nomAssoc',
            'associations.etat',
            'associations.responsable',
            'users.telephone',
            'villes.nomVille'
        )->get();
        return response()->json($associations);
    }
    //get association actif
    public function associationNonActif(){
        $associations = DB::table('associations')
        ->join('users','associations.responsable','=','users.id')
        ->join('villes','associations.Ville','=','villes.id')
        ->where('etat',0)
        ->select(
            'associations.IdAssoc',
            'associations.nomAssoc',
            'associations.responsable',
            'associations.etat',
            'users.telephone',
            'villes.nomVille'
        )->get();
        return response()->json($associations);
    }
    //verifie association

    public function verifyAssociation(Request $request){

    //only for admin role=5
        $role =Auth::user()->role;
        if($role!=5){
             return response(['message'=>'non authorizer']);
        }
        try{
            DB::beginTransaction();
            DB::table('associations')
            ->where('IdAssoc',$request->input('IdAssoc'))
            ->update(['etat'=>1]);
            DB::table('users')
            ->where('id',$request->input('IdUser'))
            ->update(['role'=>4]);
            DB::commit();
            return response(['message'=>'ok']);
        }catch(Exception $e){
            DB::rollback();
            return response(['message'=>$e->getMessage()]);
         }
        $user=User::where('id',$id)->update(['role'=>3]);
            return response($user);
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
        ->whereNotIn('CodeD',function($rq){
            $rq->select('CodeD')->from('urgences');
        })
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
            'codeD'=>$request->input('codeD'),
            'Association'=>$assoc,
        ]);
        //update etat de demande
        if($urgence){
            return response([
                'message'=>'ok'
            ]);
        }
    }

    public function getCopleteUrgences(){
        
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
