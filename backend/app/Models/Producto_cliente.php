<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Producto_cliente extends Model
{
    use HasFactory;
    protected $fillable = [
        'cod_producto',
        'cedula_cliente'
    ];
    protected $hidden = [
        'created_at',
        'updated_at'
    ];
}
