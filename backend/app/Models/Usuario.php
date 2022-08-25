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
    protected $primaryKey='cod_user';
    protected $fillable = [
        'cod_user',
        'nombres',
        'apellido',
        'cedula',
        'numero_celular',
        'cod_rol',
        'direccion',
<<<<<<< HEAD
        'email',
        'password'
=======
        'is_register',
        'email'
>>>>>>> 3635401 (Mejora de back-end)
    ];
    protected $hidden = [
        'created_at',
        'password',
        'updated_at'
    ];

}
