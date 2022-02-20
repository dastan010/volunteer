<?php

namespace App\Http\Controllers\Admin\User;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * @var User
     */
    private $users;

    public function __construct(User $users)
    {
        $this->users = $users;
    }

    public function index()
    {
        return User::where('isAdmin', 0)->orderBy('name')->get();
    }

    public function destroy($id)
    {
        $user = $this->users->find($id);
        $user->delete();
    }

    public function getSingleUser(Request $request)
    {
        return User::where('name', 'like', '%'. $request->userName .'%')->get();
    }
}
