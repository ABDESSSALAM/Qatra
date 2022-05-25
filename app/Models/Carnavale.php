<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Carnavale extends Model
{
    use HasFactory;
    //serialisation

    //relations

    public function Ville(){
        return $this->belognsTo(Ville::class);
    }
    public function Association(){
        return $this->belognsTo(Association::class);
    }
}
