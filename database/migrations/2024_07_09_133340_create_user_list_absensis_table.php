<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('user_list_absensi', function (Blueprint $table) {
            $table->id();
            $table->foreignId("users_id")->constrained("users")->onDelete("cascade");
            $table->foreignId("list_absensi_id")->constrained("list_absensi")->onDelete("cascade");
            $table->time("jam_masuk");
            $table->time("jam_keluar");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_list_absensis');
    }
};
