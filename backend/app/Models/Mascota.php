<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mascota extends Model
{
    use HasFactory;
    protected $primaryKey='cod_mascota';
    protected $fillable = [
        'cod_mascota',
        'codigo',
        'nombre',
        'raza',
        'fecha_nacimiento',
        'cod_especie',
        'cedula_cliente',
        'created_at',
        'updated_at'
    ];
    protected $hidden = [
        'created_at',
        'updated_at'
    ];

}
