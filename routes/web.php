<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\HomeController;
use App\Http\Controllers\DashboardController;


//route to test queries
Route::get('/test',[HomeController::class,'test']);
Route::get('/test2',[DashboardController::class,'test']);

Route::prefix('t')->group(function(){
     Route::get('/hf',[HomeController::class,'test']);
});

Route::view('/{path?}', 'index')
     ->where('path', '.*')
     ->name('react');
