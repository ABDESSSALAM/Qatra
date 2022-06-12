<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Carnavale;

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
    
}
