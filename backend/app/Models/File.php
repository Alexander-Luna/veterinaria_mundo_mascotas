<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class File extends Model
{
    use HasFactory;

    protected $primaryKey='id_file';
    protected $fillable=[
        'path',
        'name',
        'extension',
        'type',
        'id_user'
    ];
    protected $hidden=[
        'created_at',
        'updated_at'
    ];
}
