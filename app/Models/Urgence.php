<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Urgence extends Model
{
    use HasFactory;
    //serialisation
    protected $fillable=['Association','Ville','Volontaire'];
    //relations

    public function ville(){
        return $this->belognsTo(Ville::class);
    }
    
    public function association(){
        return $this->belognsTo(Association::class);
    }

    // one to one with demande
    /**
     * Get the demande associated with the Urgence
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function demande()
    {
        return $this->hasOne(Demande::class, 'IdUrg', 'IdUrg');
    }

    /**
     * Get the volontaire that owns the Urgence
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function volontaire()
    {
        return $this->belongsTo(Volontaire::class, 'Volontaire');
    }
}
