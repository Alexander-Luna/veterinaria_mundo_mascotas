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
        Schema::create('mascota_citas', function (Blueprint $table) {
            $table->unsignedBigInteger('cod_mascota');
            $table->unsignedBigInteger('cod_cita');
            $table->foreign('cod_mascota')
            ->references('cod_mascota')->on('mascotas')->cascadeOnUpdate();
            $table->foreign('cod_cita')
            ->references('cod_cita')->on('citas')->cascadeOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('mascota_citas');
    }
};
