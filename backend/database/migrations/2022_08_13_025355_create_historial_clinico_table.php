<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('historial_clinicos', function (Blueprint $table) {
            $table->id();
            $table->string('codigo');
            $table->double('peso',10,2)->nullable();
            $table->double('frecuencia_cardiaca',10,2)->nullable();
            $table->double('frecuencia_respiratoria',10,2)->nullable();
            $table->double('temperatura',10,2)->nullable();
            $table->string('descripcion')->nullable();
            $table->string('codigo_mascota');
            $table->string('codigo_cita');


        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('historial_clinicos');
    }
};
