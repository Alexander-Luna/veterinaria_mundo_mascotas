<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsuarioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('usuarios')->truncate();
        DB::table('usuarios')->insert([
            [
                'nombres' => 'Alexander',
                'apellido' => 'Luna',
                'cedula' => '0202433918',
                'cod_rol' => 1,
                'numero_celular' => '0985726434',
                'email' => 'paulluna99@gmail.com',
                'direccion' => 'San Miguel de Bolivar',
                'password' => bcrypt('admin')
            ],
            [
                'nombres' => 'Wilson',
                'apellido' => 'Paredes',
                'cedula' => '',
                'cod_rol' => 1,
                'numero_celular' => '',
                'email' => 'wilsonparedes@gmail.com',
                'direccion' => 'Guaranda',
                'password' => bcrypt('admin')
            ]
            ,
            [
                'nombres' => 'Juan',
                'apellido' => 'Perez',
                'cedula' => '0101010101',
                'cod_rol' => 3,
                'numero_celular' => '0911111111',
                'email' => 'jperez@gmail.com',
                'direccion' => 'Guaranda',
                'password' => bcrypt('cliente')
            ],
            [
                'nombres' => 'Admin',
                'apellido' => 'Admin',
                'cedula' => '0250366989',
                'cod_rol' => 1,
                'numero_celular' => '',
                'email' => 'admin@gmail.com',
                'direccion' => 'Guaranda',
                'password' => bcrypt('admin')
            ]
        ]);
    }
}
