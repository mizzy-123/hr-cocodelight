<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserListAbsensi extends Model
{
    use HasFactory;

    protected $table = "user_list_absensi";

    protected $fillable = [
        'users_id',
        'list_absensi_id',
        'jam_masuk',
        'jam_keluar'
    ];
}
