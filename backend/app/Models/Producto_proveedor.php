<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Producto_proveedor extends Model
{
    use HasFactory;
    protected $fillable = [
        'cod_producto',
        'cod_proveedor'
    ];
    protected $hidden = [
        'created_at',
        'updated_at'
    ];
}
