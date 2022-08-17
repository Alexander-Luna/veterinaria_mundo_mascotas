<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\CategoriaController;
use App\Http\Controllers\API\CitaController;
use App\Http\Controllers\API\ClienteController;
use App\Http\Controllers\API\EspecieController;
use App\Http\Controllers\API\FacturaController;
use App\Http\Controllers\API\Historia_ClinicaController;
use App\Http\Controllers\API\MascotaController;
use App\Http\Controllers\API\ProductoController;
use App\Http\Controllers\API\ProveedorController;
use App\Http\Controllers\API\RecetaController;
use App\Http\Controllers\API\RolController;
use App\Http\Controllers\API\UsuarioController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(AuthController::class)->prefix('auth')->group(function () {
    Route::post('/', 'login');
    Route::middleware('auth:api')->group(function () {
        Route::get('/logout', [AuthController::class, 'logout']);
    });
});

Route::middleware('auth:api')->group(function () {
    Route::controller(CategoriaController::class)->prefix('categoria')->group(function () {
        Route::get('/', 'index');
        Route::post('/', 'store');
        Route::get('/{id}', 'show');
        Route::delete('/{id}', 'destroy');
        Route::put('/{id}', 'update');
    });

    Route::controller(CitaController::class)->prefix('cita')->group(function () {
        Route::get('/', 'index');
        Route::post('/', 'store');
        Route::get('/{id}', 'show');
        Route::delete('/{id}', 'destroy');
        Route::put('/{id}', 'update');
    });

    Route::controller(ClienteController::class)->prefix('cliente')->group(function () {
        Route::get('/', 'index');
        Route::post('/', 'store');
        Route::get('/{id}', 'show');
        Route::delete('/{id}', 'destroy');
        Route::put('/{id}', 'update');
    });

    Route::controller(EspecieController::class)->prefix('especie')->group(function () {
        Route::get('/', 'index');
        Route::post('/', 'store');
        Route::get('/{id}', 'show');
        Route::delete('/{id}', 'destroy');
        Route::put('/{id}', 'update');
    });

    Route::controller(FacturaController::class)->prefix('factura')->group(function () {
        Route::get('/', 'index');
        Route::post('/', 'store');
        Route::get('/{id}', 'show');
        Route::delete('/{id}', 'destroy');
        Route::put('/{id}', 'update');
    });

    Route::controller(Historia_ClinicaController::class)->prefix('historia-clinica')->group(function () {
        Route::get('/', 'index');
        Route::post('/', 'store');
        Route::get('/{id}', 'show');
        Route::delete('/{id}', 'destroy');
        Route::put('/{id}', 'update');
    });

    Route::controller(MascotaController::class)->prefix('mascota')->group(function () {
        Route::get('/', 'index');
        Route::post('/', 'store');
        Route::get('/{id}', 'show');
        Route::delete('/{id}', 'destroy');
        Route::put('/{id}', 'update');
    });

    Route::controller(ProductoController::class)->prefix('producto')->group(function () {
        Route::get('/', 'index');
        Route::post('/', 'store');
        Route::get('/{id}', 'show');
        Route::delete('/{id}', 'destroy');
        Route::put('/{id}', 'update');
    });

    Route::controller(ProveedorController::class)->prefix('proveedor')->group(function () {
        Route::get('/', 'index');
        Route::post('/', 'store');
        Route::get('/{id}', 'show');
        Route::delete('/{id}', 'destroy');
        Route::put('/{id}', 'update');
    });

    Route::controller(RecetaController::class)->prefix('receta')->group(function () {
        Route::get('/', 'index');
        Route::post('/', 'store');
        Route::get('/{id}', 'show');
        Route::delete('/{id}', 'destroy');
        Route::put('/{id}', 'update');
    });

    Route::controller(RolController::class)->prefix('rol')->group(function () {
        Route::get('/', 'index');
        Route::post('/', 'store');
        Route::get('/{id}', 'show');
        Route::delete('/{id}', 'destroy');
        Route::put('/{id}', 'update');
    });

    Route::controller(ProductoController::class)->prefix('producto')->group(function () {
        Route::get('/', 'index');
        Route::post('/', 'store');
        Route::get('/{id}', 'show');
        Route::delete('/{id}', 'destroy');
        Route::put('/{id}', 'update');
    });
    Route::controller(UsuarioController::class)->prefix('usuario')->group(function () {
        Route::get('/', 'index');
        Route::post('/', 'store');
        Route::get('/{id}', 'show');
        Route::delete('/{id}', 'destroy');
        Route::put('/{id}', 'update');
    });
});
