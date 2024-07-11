<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Tighten\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                ]);
            },
            'bodyClass' => $this->getBodyClass($request),
            'auth' => [
                'user' => $request->user(),
            ],
            'flash' => [
                'message' => fn () => $request->session()->get('message'),
                'success' => fn () => $request->session()->get('success'),
                'error' => fn () => $request->session()->get('error')
            ],
            'authorization' => function () use ($request) {
                if ($request->user() != null) {
                    return [
                        'user' => fn () => $request->user()->can('user', $request->user()),
                        'admin' => fn () => $request->user()->can('admin', $request->user()),
                    ];
                }
            },
            'date_now' => fn () => now()->format('Y-m-d'),
        ]);
    }

    protected function getBodyClass(Request $request): String
    {
        if ($request->is('login')) {
            return 'nk-body bg-white npc-default pg-auth';
        } else if ($request->is('register')) {
            return 'nk-body bg-lighter npc-default pg-auth';
        }

        return 'nk-body bg-lighter npc-default has-sidebar';
    }
}
