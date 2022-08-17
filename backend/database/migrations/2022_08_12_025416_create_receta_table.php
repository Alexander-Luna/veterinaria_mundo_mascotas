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
        Schema::create('recetas', function (Blueprint $table) {
            $table->bigIncrements('cod_receta');
            $table->string('codigo');
            $table->string('indicaciones');
            $table->string('medicamento')->nullable();
            $table->string('dosis')->nullable();
            $table->unsignedBigInteger('cod_historial_clinico');
            $table->foreign('cod_historial_clinico')
            ->references('cod_historial_clinico')->on('historial_clinicos')->cascadeOnUpdate();
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
        Schema::dropIfExists('recetas');
    }
};
