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
        DB::table('rols')->insert([
            [
                'codigo' => 'R001',
                'tipo' => 'Administrador'
            ],
            [
                'codigo' => 'R002',
                'tipo' => 'Vendedor'
            ],
            [
                'codigo' => 'R003',
                'tipo' => 'Veterinario'
            ]
        ]);
    }
}
