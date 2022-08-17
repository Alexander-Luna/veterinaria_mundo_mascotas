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
        Schema::create('mascotas', function (Blueprint $table) {
            $table->bigIncrements('cod_mascota');
            $table->string('codigo')->nullable();
            $table->string('nombre');
            $table->string('raza')->nullable();
            $table->date('fecha_nacimiento')->nullable();
            $table->unsignedBigInteger('cod_especie');
            $table->string('cedula_cliente');
            $table->foreign('cod_especie')
            ->references('cod_especie')->on('especies')->cascadeOnUpdate();
            $table->foreign('cedula_cliente')
            ->references('cedula_cliente')->on('clientes')->cascadeOnUpdate();
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
        Schema::dropIfExists('mascotas');
    }
};
