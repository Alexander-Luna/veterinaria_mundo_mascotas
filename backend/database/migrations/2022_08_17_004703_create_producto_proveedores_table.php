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
        Schema::create('producto_proveedores', function (Blueprint $table) {
            $table->unsignedBigInteger('cod_producto');
            $table->unsignedBigInteger('cod_proveedor');
            $table->foreign('cod_producto')
            ->references('productos')->on('cod_producto')->cascadeOnUpdate();
            $table->foreign('cod_proveedor')
            ->references('proveedores')->on('cod_proveedor')->cascadeOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('producto_proveedores');
    }
};
