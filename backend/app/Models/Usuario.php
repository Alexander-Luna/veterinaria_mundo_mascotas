<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    use HasFactory;
    protected $fillable = [
        'nombres',
        'apellido',
        'cedula',
        'numero_celular',
        'codigo_rol',
        'direccion',
        'password',
        'email'
    ];
    protected $hidden = [
        'created_at',
        'updated_at'
    ];

}
