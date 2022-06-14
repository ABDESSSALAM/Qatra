<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Carnavale;
use App\Models\Demandes;
use Illuminate\Support\Facades\Auth;
use Exception;
class HomeController extends Controller
{
   
    //get last For carnavales for home page

    public function getnbrCarnavales($nbr){
        $carnavals = DB::table('carnavales')
        ->join('villes','carnavales.Ville','=','villes.id')
        ->select('carnavales.*','villes.nomVille')
        ->orderBy('dateDebut','DESC')
        ->take($nbr)
        ->get();
        return response()->json($carnavals);
    }

    //get all carnavales
    public function getCarnavales(){
        $carnavals = DB::table('carnavales')
        ->join('villes','carnavales.Ville','=','villes.id')
        ->select('carnavales.*','villes.nomVille')
        ->orderBy('dateDebut','DESC')
        ->get();
        return response()->json($carnavals);
    }
    
    //get for city carnavales
    public function getVilleCarnavales($id){
        //id ville from response
        
        $carnavals = DB::table('carnavales')
        ->join('villes','carnavales.Ville','=','villes.id')
        ->select('carnavales.*','villes.nomVille')
        ->where('ville', $id)
        ->orderBy('dateDebut','DESC')
        ->get();
        return response()->json($carnavals);
    }

    //get last 4 urgences
    public function getNbrUrgence($nbr){
        
        $urgences=DB::table('urgences')
        ->join('villes','urgences.Ville','=','villes.id')
        ->join('demandes','urgences.CodeD','=','demandes.CodeD')
        ->join('users','demandes.IdCitoyen','=','users.id')
        ->select(
            'urgences.*',
            'villes.nomVille',
            'demandes.SanguinP',
            'demandes.Hospitale',
            'users.telephone'
            )
        ->OrderBy('created_at','DESC')
        ->take($nbr)
        ->get();

        return response()->json($urgences);
    }


    //get all urgences
    public function getUrgences(){
        $urgences=DB::table('urgences')
        ->join('villes','urgences.Ville','=','villes.id')
        ->join('demandes','urgences.CodeD','=','demandes.CodeD')
        ->join('users','demandes.IdCitoyen','=','users.id')
        ->select(
            'urgences.*',
            'villes.nomVille',
            'demandes.SanguinP',
            'demandes.Hospitale',
            'users.telephone'
            )
        ->OrderBy('created_at','DESC')
        ->get();

        return response()->json($urgences);
    }
    public function getUrgenceVille($id){
        
        $urgences=DB::table('urgences')
        ->join('villes','urgences.Ville','=','villes.id')
        ->join('demandes','urgences.CodeD','=','demandes.CodeD')
        ->join('users','demandes.IdCitoyen','=','users.id')
        ->where('villes.id','=',$id)
        ->select(
            'urgences.*',
            'villes.nomVille',
            'demandes.SanguinP',
            'demandes.Hospitale',
            'users.telephone'
            )
        
        ->OrderBy('created_at','DESC')
        ->get();

        return response()->json($urgences);
    }

    //get ville
    public function getVilles(){
        $villes=DB::table('villes')->select('id','nomVille')->get();
        return response()->json($villes);

    }
    

    //get demandes for citoyen
    public function getDemandeCitoyen(){
        $user=Auth::user();
        $role =$user->role;
        if($role!=1){
            return response([
                'message'=>'not allowed'
            ]);
        }

        $urgences=DB::table('demandes')
        ->where('IdCitoyen',$user->id)
        ->get();
        return response()->json($urgences);

    }

    //add demande par citoyen
    public function addDemande(Request $request){

             $user=Auth::user();
             if($user->role !=1){
                return response(['message'=>'pas autorisé']);
             }
             $idUser=$user->id;
            $demande=Demandes::create([
            'SanguinP'=>$request->input('sangP'),
            'Hospitale'=>$request->input('hospitale'),
            'IdCitoyen'=>$idUser,
            'Etat'=>0
            
            ]);

            if($demande){
                return response([
                    'message'=>'ok'
                ]);
            }
    }

    public function addParticipationCarnavale(Request $request){
        $user=Auth::user();
        try{
            DB::beginTransaction();
            DB::table('carnaval_volontaires')
             ->insert([
                'IdVolontaire'=>$user->id,
                'IdCarnaval'=>$request->input('Idcarnavale')
            ]);
            DB::commit();
            return response(['message'=>'ok']);
        }catch(Exception $e){
                DB::rollback();
                return response(['message'=>$e->getMessage()]);
        }
        
    }
}
