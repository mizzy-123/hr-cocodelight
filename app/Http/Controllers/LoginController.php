<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class LoginController extends Controller
{
    public function index()
    {
        return Inertia::render('Authentication/Login');
    }

    public function authenticate(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'account' => 'required',
            'password' => 'required'
        ]);

        try {
            if ($validate->fails()) {
                return redirect('/login')->withErrors($validate)
                    ->withInput();
            } else {
                $user = User::where('email', $request->account)->orWhere('username', $request->account)->first();

                if (!$user || !Hash::check($request->password, $user->password)) {
                    return redirect('/login')->with("error", "The provided password does not match our records.")->withInput();
                }

                Log::info('User authenticated successfully.');

                $request->session()->regenerate();

                Log::info('Session regenerated.');

                return redirect()->intended('/dashboard');
            }
        } catch (\Throwable $th) {
            return redirect('/login')->with("error", $th->getMessage())->withInput();
        }
    }
}
