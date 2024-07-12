<?php

namespace App\Http\Controllers;

use App\Models\ListAbsensi;
use App\Models\Role;
use App\Models\User;
use Barryvdh\DomPDF\Facade\Pdf;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        if (Gate::check("admin")) {
            // $dataAbsen = ListAbsensi::filter(request(['date']))->first();
            $dataAbsen = ListAbsensi::filter(request(['date']))->first();

            if ($dataAbsen) {
                if ($request->get("export") == "pdf") {
                    $role = Role::where('isAdmin', true)->get();
                    $searchAdmin = [];
                    foreach ($role as $r) {
                        $user = $r->user;
                        // $searchAdmin = array_merge($searchAdmin, $user);
                        $searchAdmin[] = $user->id;
                    }
                    $userListAbsensi = $dataAbsen->user_list_absensi()->whereNotIn('users_id', $searchAdmin)->get();
                    $pdf = Pdf::loadView('pdf.tabel_absen', [
                        'date' => Carbon::parse($dataAbsen->created_at)->locale('id_ID')->isoFormat('dddd, D MMMM YYYY'),
                        'data_absen' => $userListAbsensi->map(function ($list_absen) {
                            return [
                                'id' => $list_absen->id,
                                'jam_keluar' => $list_absen->jam_keluar,
                                'jam_masuk' => $list_absen->jam_masuk,
                                'list_absensi_id' => $list_absen->list_absensi_id,
                                'users_id' => $list_absen->users_id,
                                'user' => User::find($list_absen->users_id),
                                'no_transfer' => User::find($list_absen->users_id)->user_data->no_transfer,
                                'created_at' => $list_absen->created_at,
                                'updated_at' => $list_absen->updated_at,
                            ];
                        })
                    ]);
                    return $pdf->stream("Data Absensi.pdf");
                } else {
                    $role = Role::where('isAdmin', true)->get();
                    $searchAdmin = [];
                    foreach ($role as $r) {
                        $user = $r->user;
                        // $searchAdmin = array_merge($searchAdmin, $user);
                        $searchAdmin[] = $user->id;
                    }
                    $userListAbsensi = $dataAbsen->user_list_absensi()->whereNotIn('users_id', $searchAdmin)->get();
                    return Inertia::render('Main/DashboardAdmin', [
                        'data_absen' => $userListAbsensi->map(function ($list_absen) {
                            return [
                                'id' => $list_absen->id,
                                'jam_keluar' => $list_absen->jam_keluar,
                                'jam_masuk' => $list_absen->jam_masuk,
                                'list_absensi_id' => $list_absen->list_absensi_id,
                                'users_id' => $list_absen->users_id,
                                'user' => User::find($list_absen->users_id),
                                'no_transfer' => User::find($list_absen->users_id)->user_data->no_transfer,
                                'created_at' => $list_absen->created_at,
                                'updated_at' => $list_absen->updated_at,
                            ];
                        })
                    ]);
                }
                // Proses lebih lanjut dengan $userListAbsensi
            } else {
                // Handle jika tidak ada data yang ditemukan
                return Inertia::render('Main/DashboardAdmin');
            }
            // if ($dataAbsen != null) {
            //     return Inertia::render('Main/DashboardAdmin', [
            //         'data_absen' => $dataAbsen
            //     ]);
            // }

            // return Inertia::render('Main/DashboardAdmin');

            // return dd(request(['date']));
        } else if (Gate::check("user")) {
            return Inertia::render("Main/DashboardUser");
        }
    }
}
