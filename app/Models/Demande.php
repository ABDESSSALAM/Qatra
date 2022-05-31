<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Demande extends Model
{
    use HasFactory;
    //serialzation

    protected $fillable=['SanguinP','Hospitale','IdCitoyen','IdUrg'];

    // relations
    /**
     * Get the Citoyen that owns the Demande
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function citoyen(): BelongsTo
    {
        return $this->belongsTo(Citoyen::class, 'foreign_key', 'other_key');
    }

    /**
     * Get the urgence that owns the Demande
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function urgence(): BelongsTo
    {
        return $this->belongsTo(Urgene::class, 'IdUrg');
    }
}
