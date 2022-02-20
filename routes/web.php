<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\URL;
use Inertia\Inertia;
use App\Http\Controllers\Admin\User\UserController as UserController;


if (App::environment('production')) {
    URL::forceScheme('https');
}
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// ADMIN PANEL
Route::group([
    'middleware' => ['auth', 'verified'],
    'prefix' => 'admin',
    'namespace' => 'Admin'
], function() {
    Route::group([
        'prefix' => 'users',
        'namespace' => 'User'
    ], function() {
        Route::get('/all', [UserController::class, 'index']);
        Route::post('/search-user', [UserController::class, 'getSingleUser']);
        Route::delete('/{id}', [UserController::class, 'destroy']);
    });

    Route::get('/users', function () {
       return Inertia::render('Admin/Users');
    })->name('users-panel');
});


// USERS
Route::group([
    'middleware' => ['auth', 'verified'],
    'prefix' => 'users',
], function () {
    Route::get('/', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});



require __DIR__.'/auth.php';
