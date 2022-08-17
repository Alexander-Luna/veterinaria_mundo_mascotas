<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Especie extends Model
{
    use HasFactory;
    protected $primaryKey='cod_especie';
    protected $fillable = [
        'cod_especie',
        'nombre_especie'
    ];
}
