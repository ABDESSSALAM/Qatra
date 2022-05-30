<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Volontaire extends Model
{
    use HasFactory;
    //serialisation

    //relations

    public function ville(){
        return $this->belognsTo(Ville::class);
    }

    /**
     * Get the user that owns the Volontaire
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'IdVolontaire');
    }

    //many to many relation
}
