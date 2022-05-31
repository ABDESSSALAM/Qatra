<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Carnavale;

class HomeController extends Controller
{
    //get all carnavales

    public function test(){


        /**
         * where
         * $carnavals = DB::table('carnavales')
           // ->where('IdCarnaval','>','1')
            //->get();
         */


        /*
        ------order by
        /*
        $carnavals = DB::table('carnavales')
        ->orderBy('IdCarnaval','DESC')
        ->get();
        */

        /**
         * group by
         * $carnavals = DB::table('carnavales')
        ->get()->groupBy('Ville');
        
         */
        
        
        $carnavals=DB::table('carnavales')->get()->groupBy('dateDebut');
        return response()->json($carnavals);
        dd($carnavals);

        // $carnavals=Carnavale::orderBy('dateDebut','DESC')->get();
        // return response()->json($carnavals);
    }


    
    
}
