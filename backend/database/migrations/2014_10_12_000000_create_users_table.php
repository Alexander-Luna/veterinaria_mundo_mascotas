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
        Schema::create('usuarios', function (Blueprint $table) {
            $table->id();
            $table->string('nombres');
            $table->string('apellido');
            $table->string('cedula',10)->nullable()->unique();
            $table->string('numero_celular',13)->nullable();
            $table->unsignedBigInteger('cod_rol');
            $table->string('direccion')->nullable();
            $table->string('email')->unique();
            $table->foreign('cod_rol')
            ->references('cod_rol')->on('rols')->cascadeOnUpdate();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
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
        Schema::dropIfExists('usuarios');
    }
};
