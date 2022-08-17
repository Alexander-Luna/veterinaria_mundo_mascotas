<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cita extends Model
{
    use HasFactory;
    protected $primaryKey='cod_cita';
    protected $fillable = [
        'cod_cita',
        'fecha',
        'hora',
        'tipo'
    ];
}
