<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Absensi Karyawan</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            text-align: center;
        }
        .company-details {
            margin-bottom: 20px;
        }
        .company-logo {
            max-width: 100px;
            margin-bottom: 10px;
        }
        .date {
            font-size: 1.2em;
            margin-bottom: 20px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        th, td {
            padding: 10px;
            border: 1px solid #ddd;
            text-align: left;
        }
        th {
            background-color: #f4f4f4;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="company-details">
            <img src="logo.png" alt="Company Logo" class="company-logo">
            <h2>Nama Perusahaan</h2>
            <p>Alamat Perusahaan</p>
        </div>
        <div class="date">
            {{ $date }}
        </div>
        <table>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Nama</th>
                    <th>Jam Masuk</th>
                    <th>Jam Keluar</th>
                    <th>No Rekening</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($data_absen as $item)
                <tr>
                    <td>{{ $loop->iteration }}</td>
                    <td>{{ $item["user"]["fullname"] }}</td>
                    <td>{{ $item["jam_masuk"] }}</td>
                    <td>{{ $item["jam_keluar"] }}</td>
                    <td>{{ $item["no_transfer"] }}</td>
                </tr>
                @endforeach
                <!-- Tambahkan baris lain sesuai kebutuhan -->
            </tbody>
        </table>
    </div>
</body>
</html>