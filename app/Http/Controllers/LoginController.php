<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Inertia\Response;

class LoginController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Authentication/Login');
    }

    public function authenticate(Request $request): RedirectResponse
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

                // $password = $request->only('password');
                $loginField = filter_var($request->account, FILTER_VALIDATE_EMAIL) ? 'email' : 'username';

                // Membangun credentials untuk attempt
                $credentials = [
                    $loginField => $request->account,
                    'password' => $request->password,
                ];

                if (!Auth::attempt($credentials)) {
                    return redirect('/login')->with("error", "The provided password does not match our records.")->withInput();
                }

                Log::info('User authenticated successfully.');

                $request->session()->regenerate();

                Log::info('Session regenerated.');

                return redirect('/dashboard');
            }
        } catch (\Throwable $th) {
            return redirect('/login')->with("error", $th->getMessage())->withInput();
        }
    }

    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard("web")->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect(route("login"));
    }
}
