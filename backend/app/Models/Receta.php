<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Receta extends Model
{
    use HasFactory;
    protected $primaryKey='cod_receta';
    protected $fillable = [
        'cod_receta',
        'indicaciones',
        'medicamento',
        'cod_historial_clinico',
        'dosis',
        'created_at',
        'updated_at'
    ];
    protected $hidden = [
        'created_at',
        'updated_at'
    ];

}
