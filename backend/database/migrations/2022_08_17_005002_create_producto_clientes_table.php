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
        Schema::create('producto_clientes', function (Blueprint $table) {
            $table->unsignedBigInteger('cod_producto');
            $table->string('cedula_cliente');
            $table->foreign('cedula_cliente')
            ->references('clientes')->on('cedula_cliente')->cascadeOnUpdate();
            $table->foreign('cod_producto')
            ->references('productos')->on('cod_producto')->cascadeOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('producto_clientes');
    }
};
