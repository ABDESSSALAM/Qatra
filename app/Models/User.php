<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    //add telephone to users
    protected $fillable = [
        'nom',
        'prenom',
        'email',
        'telephone',
        'password',
        'role',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
    // relations
    /**
     * Get the association associated with the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function association()
    {
        return $this->hasOne(Association::class, 'responsable');
    }
    /**
     * Get the user associated with the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function volontaire()
    {
        return $this->hasOne(Volontaire::class, 'IdVolontaire');
    }

    /**
     * Get the citoyen associated with the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function citoyen()
    {
        return $this->hasOne(Citoyen::class, 'IdCitoyen');
    }
}
