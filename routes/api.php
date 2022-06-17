<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\DashboardController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::post('/register',[AuthController::class,'register']);
Route::post('/login',[AuthController::class,'login']);
Route::get('/villes',[HomeController::class,'getVilles']);

Route::prefix('carnavale')->group(function(){
    Route::get('/all',[HomeController::class,'getCarnavales']);
    Route::get('/ville/{id}',[HomeController::class,'getVilleCarnavales']);
    Route::get('/{id}',[HomeController::class,'getnbrCarnavales']);
});
Route::prefix('urgences')->group(function(){
    Route::get('/all',[HomeController::class,'getUrgences']);
    Route::get('/ville/{id}',[HomeController::class,'getUrgenceVille']);
    Route::get('/{nbr}',[HomeController::class,'getNbrUrgence']);
    
});



Route::middleware('auth:sanctum')->group(function(){
    Route::get('/user',[AuthController::class,'user']);
    Route::get('/demandesCitoyen',[HomeController::class,'getDemandeCitoyen']);
    Route::get('/carnavaleAssoc',[DashboardController::class,'carnavaleAssoc']);
    Route::get('/volontaires',[DashboardController::class,'getVolontaires']);
    Route::get('/associations',[DashboardController::class,'getAssociation']);
    Route::get('/demandes',[DashboardController::class,'getDemandes']);
    Route::get('/associationActif',[DashboardController::class,'associationActif']);
    Route::get('/associationNonActif',[DashboardController::class,'associationNonActif']);
    // Route::get('/volontaires',[DashboardController::class,'getVolontaires']);
    // Route::get('/associations',[DashboardController::class,'getAssociation']);
    // Route::get('/demandes',[DashboardController::class,'getDemandes']);

    Route::post('editCarnavale',[DashboardController::class,'editCarnavale']);
    Route::post('verifyAssociation',[DashboardController::class,'verifyAssociation']);
    Route::post('/addDemande',[HomeController::class,'addDemande']);
    Route::post('/addParticipationCarnavale',[HomeController::class,'addParticipationCarnavale']);
    Route::post('/logout',[AuthController::class,'logout']);
    Route::post('/addCarnavale',[DashboardController::class,'addCarnavale']);
    Route::post('/addUrgence',[DashboardController::class,'AddUrgence']);
    Route::post('/addParticipationUrgence',[HomeController::class,'addParticipationUrgence']);
});

