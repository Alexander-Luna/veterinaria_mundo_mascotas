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
        Schema::create('productos', function (Blueprint $table) {
            $table->bigIncrements('cod_producto');
            $table->string('codigo');
            $table->string('nombre');
            $table->string('imagen')->nullable();
            $table->string('fecha_caducidad')->nullable();
            $table->string('descripcion')->nullable();
            $table->double('precio_compra', 10, 2);
            $table->double('precio_venta', 10, 2);
            $table->integer('cantidad');
            $table->string('codigo_categoria')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('productos');
    }
};
