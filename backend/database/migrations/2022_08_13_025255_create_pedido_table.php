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
            $table->unsignedBigInteger('cod_proveedor');
            $table->unsignedBigInteger('cod_producto');
            $table->foreign('cod_producto')
            ->references('cod_producto')->on('productos')->cascadeOnUpdate();
            $table->foreign('cod_proveedor')
            ->references('cod_proveedor')->on('proveedores')->cascadeOnUpdate();
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
       Schema::dropIfExists('pedidos');
    }
};
