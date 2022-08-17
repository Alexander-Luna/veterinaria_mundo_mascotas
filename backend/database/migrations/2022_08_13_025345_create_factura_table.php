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
        Schema::create('facturas', function (Blueprint $table) {
            $table->bigIncrements('cod_factura');
            $table->string('codigo');
            $table->string('cedula_cliente');
            $table->string('codigo_producto');
            $table->double('total_a_pagar',10,2);
            $table->timestamp('fecha');
            $table->foreign('cedula_cliente')
            ->references('cedula_cliente')->on('cliente')->cascadeOnUpdate();
            $table->foreign('cod_producto')
            ->references('cod_producto')->on('productos')->cascadeOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('facturas');
    }
};
