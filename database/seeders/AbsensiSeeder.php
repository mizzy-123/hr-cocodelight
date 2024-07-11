<?php

namespace Database\Seeders;

use App\Models\ListAbsensi;
use App\Models\User;
use App\Models\UserListAbsensi;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AbsensiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = User::all();

        $date_now = now();
        $ymd = $date_now->format('Y-m-d');
        $his = $date_now->format('H:i:s');
        $newTime = $date_now->addHours(5);
        $newHis = $newTime->format('H:i:s');
        foreach ($user as $u) {
            $cek = ListAbsensi::whereDate('created_at', $ymd)->count();
            if ($cek == 0) {
                $list_absensi = ListAbsensi::create();
                UserListAbsensi::create([
                    'users_id' => $u->id,
                    'list_absensi_id' => $list_absensi->id,
                    'jam_masuk' => $his,
                    'jam_keluar' => $newHis
                ]);
            } else {
                $list_absensi = ListAbsensi::whereDate('created_at', $ymd)->first();
                UserListAbsensi::create([
                    'users_id' => $u->id,
                    'list_absensi_id' => $list_absensi->id,
                    'jam_masuk' => $his,
                    'jam_keluar' => $newHis
                ]);
            }
        }
    }
}
