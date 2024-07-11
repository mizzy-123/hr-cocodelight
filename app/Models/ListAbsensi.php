<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ListAbsensi extends Model
{
    use HasFactory;

    protected $table = "list_absensi";

    public function user_list_absensi(): HasMany
    {
        return $this->hasMany(UserListAbsensi::class, 'list_absensi_id');
    }

    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['date'] ?? false, function ($query, $date) {
            return $query->whereDate("created_at", $date);
        });
    }
}
