<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RolSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('rols')->truncate();
        DB::table('rols')->insert([
            [
                'cod_rol'=>0,
                'tipo' => 'Administrador'
            ],
            [   'cod_rol'=>1,
                'tipo' => 'Vendedor/Veterinario'
            ],
            [
                'cod_rol'=>2,
                'tipo' => 'Cliente'
            ]
        ]);
    }
}
