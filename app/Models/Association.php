<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Association extends Model
{
    use HasFactory;

    //serialisation

    //relations

    public function Ville(){
        return $this->belognsTo(Ville::class);
    }

    public function Caranavales(){
        return $this->hasMany(Carnavale::class);
    }

    public function Urgences(){
        return $this->hasMany(Urgence::class);
    }
}
