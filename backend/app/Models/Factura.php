<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Factura extends Model
{
    use HasFactory;
    protected $primaryKey='cod_factura';
    protected $fillable = [
        'cod_factura',
        'codigo',
        'cedula_cliente',
        'cod_producto',
        'total_a_pagar',
        'fecha',
        'created_at',
        'updated_at'
    ];
    protected $hidden = [
        'created_at',
        'updated_at'
    ];

}
