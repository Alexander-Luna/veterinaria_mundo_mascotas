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
        Schema::create('pedidos', function (Blueprint $table) {
            $table->bigIncrements('cod_pedido');
            $table->double('total_a_pagar',10,2);
            $table->timestamp('fecha_pedido');
            $table->timestamp('fecha_entrega')->nullable();
            $table->string('codigo_producto');
            $table->string('cedula_proveedor');
            $table->foreign('cedula_producto')
            ->references('cedula_producto')->on('productos')->cascadeOnUpdate();
            $table->foreign('cedula_proveedor')
            ->references('cedula_proveedor')->on('proveedores')->cascadeOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
       Schema::dropIfExists('pedidos');
    }
};
