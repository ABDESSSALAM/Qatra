<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Carnavale extends Model
{
    use HasFactory;
    //serialisation

    //relations

    public function ville(){
        return $this->belognsTo(Ville::class);
    }
    public function association(){
        return $this->belognsTo(Association::class);
    }

    /**
     * The volontaires that belong to the Carnavale
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function volontaires(): BelongsToMany
    {
        return $this->belongsToMany(Volontaire::class, 'carnaval_volontaires', 'IdCarnaval', 'IdVolontaire');
    }
}
