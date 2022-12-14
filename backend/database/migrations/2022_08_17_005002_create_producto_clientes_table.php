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
            $table->unsignedBigInteger('cod_user');
            $table->foreign('cod_user')
            ->references('cod_user')->on('usuarios')->cascadeOnUpdate();
            $table->foreign('cod_producto')
            ->references('cod_producto')->on('productos')->cascadeOnUpdate();
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
        Schema::dropIfExists('producto_clientes');
    }
};
