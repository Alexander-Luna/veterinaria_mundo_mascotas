<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categoria extends Model
{
    use HasFactory;
    protected $primaryKey='cod_categoria';
    protected $fillable = [
        'cod_categoria',
        'nombre',
        'descripcion'
    ];
}
