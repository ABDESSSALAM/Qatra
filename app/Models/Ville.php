<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ville extends Model
{
    use HasFactory;

    //serialization here


    //relations
    public function Associations(){
        return $this->hasMany(Associations::class,'Ville');
    }
    /**
     * Get all of the Carnavales for the Ville
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function Carnavales(): HasMany
    {
        return $this->hasMany(Carnavale::class,'Ville');
    }

    public function Volontaires(){
        return $this->hasMany(Volontaire::class,'Ville');
    }
    public function Urgences(){
        return $this->hasMany(Urgence::class,'Ville');
    }
}
