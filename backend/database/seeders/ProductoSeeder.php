<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('productos')->truncate();
        DB::table('productos')->insert([
            [
                'codigo'=> 'P001',
                'nombre'=> 'Buen Can',
                'imagen'=> '',
                'fecha_caducidad'=> '2023-02-15',
                'descripcion'=> 'Sabor a pollo',
                'precio_compra'=> 26.00,
                'precio_venta'=> 30.00,
                'cantidad'=> 5,
                'codigo_categoria'=> 'C001'
            ],
            [
                'codigo'=> 'P002',
                'nombre'=> 'Collar acolchado',
                'imagen'=> '',
                'fecha_caducidad'=> '',
                'descripcion'=> 'Collar acolchado',
                'precio_compra'=> 6.50,
                'precio_venta'=> 7.00,
                'cantidad'=> 9,
                'codigo_categoria'=> 'C002'
            ],
            [
                'codigo'=> 'P003',
                'nombre'=> 'Pro Can',
                'imagen'=> '',
                'fecha_caducidad'=> '2023-03-20',
                'descripcion'=> 'Receta original pollo',
                'precio_compra'=> 42.00,
                'precio_venta'=> 50.00,
                'cantidad'=> 13,
                'codigo_categoria'=> 'C001'
            ]
        ]);
    }
}
