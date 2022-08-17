<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Historial_clinico extends Model
{
    use HasFactory;
    protected $primaryKey='cod_historial_clinico';
    protected $fillable = [
        'cod_historial_clinico',
        'peso',
        'frecuencia_cardiaca',
        'frecuencia_respiratoria',
        'temperatura',
        'descripcion',
        'cod_mascota',
        'cod_cita',
        'created_at',
        'updated_at'
    ];
    protected $hidden = [
        'created_at',
        'updated_at'
    ];

}
