<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Producto extends Model
{
    use HasFactory;
    protected $fillable = [
        'nombre',
        'codigo',
        'fecha_caducidad',
        'descripcion',
        'precio_compra',
        'precio_venta',
        'cantidad',
        'codigo_categoria'
    ];

}
