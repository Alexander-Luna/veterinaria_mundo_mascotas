<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pedido extends Model
{
    use HasFactory;
    protected $primaryKey='cod_pedido';
    protected $fillable = [
        'cod_pedido',
        'total_a_pagar',
        'fecha_pedido',
        'fecha_entrega',
        'cod_proveedor',
        'cod_producto',
        'created_at',
        'updated_at'
    ];
    protected $hidden = [
        'created_at',
        'updated_at'
    ];

}
