<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategoriaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categorias')->truncate();
        DB::table('categorias')->insert([
            [
                'nombre' => 'Comestibles',
                'descripcion' => 'Producto para el cuidado de sus mascotas'
            ],
            [
                'nombre' => 'Accesorios',
                'descripcion' => 'Lo menor en accesorios para sus mascotas'
            ]
        ]);
    }
}
