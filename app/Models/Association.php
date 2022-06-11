<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Association extends Model
{
    use HasFactory;

    //serialisation

    protected $fillable=['responsable','dateCreation','Ville','etat','nomAssoc'];
    public $timestamps = false;
    //relations

    public function ville(){
        return $this->belognsTo(Ville::class);
    }

    public function caranavales(){
        return $this->hasMany(Carnavale::class);
    }

    public function urgences(){
        return $this->hasMany(Urgence::class);
    }

    public function responsable(){
        return $this->belongsTo(User::class,'responsable');
    }
}
