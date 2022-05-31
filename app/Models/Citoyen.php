<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Citoyen extends Model
{
    use HasFactory;
    
    //serialization
    protected $fillable=['CIN'];

    //relations
    public function demandes(){
        $this->hasMany(Demande::class,'IdCitoyen');
    }

    /**
     * Get the user that owns the Citoyen
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'IdCitoyen');
    }
}
