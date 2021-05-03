<?php
namespace App\Http\Controllers;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\PostController;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/posts',[PostController::class, 'index']);

Route::get('/posts/{id}',[PostController::class, 'singleBlog']);

// Route::get('events', [DairyController::class,'index']);
// Route::post('event/store', [DairyController::class,'Store']);
// Route::get('event/{id}', [DairyController::class,'Edit']);
// Route::post('event/{id}', [DairyController::class,'Update']);
// Route::delete('event/{id}', [DairyController::class,'Delete']);



