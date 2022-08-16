<?php

use App\Http\Controllers\API\CategoriaController;
use App\Http\Controllers\API\ClienteController;
use App\Http\Controllers\API\ProductoController;
use App\Http\Controllers\API\RecetaController;
use App\Http\Controllers\API\UsuarioController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/usuario',[UsuarioController::class,'index']);
Route::get('/receta',[RecetaController::class,'index']);
Route::get('/producto',[ProductoController::class,'index']);
Route::get('/cliente',[ClienteController::class,'index']);
Route::get('/categoria',[CategoriaController::class,'index']);
