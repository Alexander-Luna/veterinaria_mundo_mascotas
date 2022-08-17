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
                'tipo' => 'Administrador'
            ],
            [
                'tipo' => 'Vendedor'
            ],
            [
                'tipo' => 'Veterinario'
            ]
        ]);
    }
}
