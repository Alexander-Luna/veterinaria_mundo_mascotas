<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UsuarioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        DB::table('usuarios')->insert([
            [
                'nombre' => 'Alexander',
                'apellido' => 'Luna',
                'cedula' => '0202433918',
                'codigo_rol' => 'R001',
                'numero_celular' => '0985726434',
                'email' => 'paulluna99@gmail.com',
                'direccion' => 'San Miguel de Bolivar',
                'password' => 'admin'
            ],
            [
                'nombre' => 'Wilson',
                'apellido' => 'Paredes',
                'cedula' => '',
                'codigo_rol' => 'R001',
                'numero_celular' => '',
                'email' => 'wilsonparedes@gmail.com',
                'direccion' => 'Guaranda',
                'password' => 'admin'
            ]
        ]);
    }
}
