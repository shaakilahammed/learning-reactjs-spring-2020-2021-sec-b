<?php
namespace App\Http\Controllers;
use App\Http\Controllers\DairyController;
use Illuminate\Support\Facades\Route;

Route::get('events', [DairyController::class,'index']);
Route::post('event/store', [DairyController::class,'Store']);
Route::get('event/{id}', [DairyController::class,'Edit']);
Route::post('event/{id}', [DairyController::class,'Update']);
Route::delete('event/{id}', [DairyController::class,'Delete']);



