<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{
    use HasFactory;
    protected $primaryKey='cedula_cliente';
    protected $fillable = [
        'cedula_cliente',
        'nombre',
        'apellido',
        'direccion',
        'email',
        'numero_celular',
        'created_at',
        'updated_at'
    ];
    protected $hidden = [
        'created_at',
        'updated_at'
    ];
}
