<?php

namespace App\Http\Controllers\Admin\Panel;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PanelController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin');
    }
}
