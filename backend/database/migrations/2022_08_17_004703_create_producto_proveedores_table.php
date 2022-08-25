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
        Schema::dropIfExists('producto_proveedores');
    }
};
