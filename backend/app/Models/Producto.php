<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Producto extends Model
{
    use HasFactory;
    protected $primaryKey='cod_producto';
    protected $fillable = [
        'cod_producto',
        'nombre',
        'imagen',
        'codigo',
        'fecha_caducidad',
        'descripcion',
        'precio_compra',
        'precio_venta',
        'cantidad',
        'cod_categoria'
    ];

}
