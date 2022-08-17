<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Proveedor extends Model
{
    use HasFactory;
    protected $primaryKey='cod_proveedor';
    protected $fillable = [
        'cod_proveedor',
        'nombre',
        'descripcion',
        'direccion',
        'numero_celular'
    ];

}
