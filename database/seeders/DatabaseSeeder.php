<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Role;
use App\Models\User;
use App\Models\UserData;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $admin = User::create([
            'fullname' => 'Muhammad Mizzy',
            'username' => 'mizzy',
            'email' => 'mizzy12342@gmail.com',
            'password' => Hash::make("1234567890")
        ]);

        $role = new Role;
        $role->isAdmin = true;
        $admin->role()->save($role);


        $user = [
            [
                'fullname' => 'Emirzal Azmi Habibie',
                'username' => 'Emir',
                'email' => 'emir@gmail.com',
                'password' => Hash::make("1234567890")
            ],
            [
                'fullname' => 'User2',
                'username' => 'user2',
                'email' => 'user2@gmail.com',
                'password' => Hash::make("1234567890")
            ],
            [
                'fullname' => 'User3',
                'username' => 'user3',
                'email' => 'user3@gmail.com',
                'password' => Hash::make("1234567890")
            ]
        ];

        foreach ($user as $u) {
            $result = User::create($u);
            UserData::create([
                'users_id' => $result->id,
                'no_transfer' => "273649746923 (Mandiri)"
            ]);
        }

        $this->call([
            AbsensiSeeder::class
        ]);
    }
}
