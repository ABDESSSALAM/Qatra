<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Volontaire extends Model
{
    use HasFactory;
    //serialisation
    protected $fillable=['CIN','SanguinV','Ville'];
    //relations

    public function ville(){
        return $this->belognsTo(Ville::class);
    }

    /**
     * Get the user that owns the Volontaire
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'IdVolontaire');
    }

    //many to many with caranavale

    /**
     * The carnavals that belong to the Volontaire
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function carnavals()
    {
        return $this->belongsToMany(Carnavale::class, 'carnaval_volontaires', 'IdVolontaire', 'IdCarnaval');
    }

    //many to many with urgence
   /**
    * Get all of the urgences for the Volontaire
    *
    * @return \Illuminate\Database\Eloquent\Relations\HasMany
    */
   public function urgences()
   {
       return $this->hasMany(Urgence::class, 'Volontaire');
   }
}
