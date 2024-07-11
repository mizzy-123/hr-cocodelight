<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Role extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'isAdmin',
        'isUser',
    ];

    public function User(): BelongsTo
    {
        return $this->belongsTo(User::class, 'users_id');
    }
}
