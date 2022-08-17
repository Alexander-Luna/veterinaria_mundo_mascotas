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
            $table->bigIncrements('cod_historial_clinico');
            $table->double('peso',10,2)->nullable();
            $table->double('frecuencia_cardiaca',10,2)->nullable();
            $table->double('frecuencia_respiratoria',10,2)->nullable();
            $table->double('temperatura',10,2)->nullable();
            $table->string('descripcion')->nullable();
            $table->unsignedBigInteger('cod_mascota');
            $table->unsignedBigInteger('cod_cita');
            $table->foreign('cod_mascota')
            ->references('cod_mascota')->on('mascotas')->cascadeOnUpdate();
            $table->foreign('cod_cita')
            ->references('cod_cita')->on('citas')->cascadeOnUpdate();
            $table->timestamps();

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
