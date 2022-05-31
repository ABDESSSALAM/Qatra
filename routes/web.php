<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\DashboardController;


//route to test queries
Route::get('/test',[DashboardController::class,'test']);

Route::view('/{path?}', 'index')
     ->where('path', '.*')
     ->name('react');
