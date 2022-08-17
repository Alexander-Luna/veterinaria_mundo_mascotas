<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class Usuario extends Authenticatable
{
    use HasFactory,HasApiTokens,Notifiable;
    protected $table='usuarios';
    protected $fillable = [
        'nombres',
        'apellido',
        'cedula',
        'numero_celular',
        'codigo_rol',
        'direccion',
        'email'
    ];
    protected $hidden = [
        'created_at',
        'password',
        'updated_at'
    ];

}
