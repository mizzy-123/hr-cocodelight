import Layout from "@/Layouts/Layout";
import { router, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function DashboardAdmin() {
    const { date_now, data_absen } = usePage().props;
    const { url } = usePage();
    const [inputDate, setInputDate] = useState(date_now);

    useEffect(() => {
        console.log(data_absen);
        const currentUrl = new URL(url, window.location.origin);
        const params = new URLSearchParams(currentUrl.search);
        setInputDate(params.get("date"));
        console.log("url: ", currentUrl);
    }, [inputDate]);

    const handleClickExportPdf = (e) => {
        e.preventDefault();
        const currentUrl = new URL(url, window.location.origin);
        const params = new URLSearchParams(currentUrl.search);
        params.append("export", "pdf");
        const resultUrl = `${currentUrl.origin}${
            currentUrl.pathname
        }?${params.toString()}`;
        window.open(resultUrl, "_blank");
    };

    const handleChangeDate = (e) => {
        // Ambil nilai dari input
        let dateValue = e.target.value;

        // Ubah format tanggal jika diperlukan
        let formattedDate = formatDate(dateValue);

        // Set nilai input dengan format yang diinginkan
        // e.value = formattedDate;
        const urlHref = new URL(window.location.href);
        const params = new URLSearchParams(urlHref.search);
        params.set("date", formattedDate);
        const resultUrl = `${urlHref.origin}${
            urlHref.pathname
        }?${params.toString()}`;
        router.get(resultUrl);
        console.log(urlHref.search);
    };

    function formatDate(dateString) {
        // Buat objek Date dari string tanggal
        let dateObj = new Date(dateString);

        // Ambil tahun, bulan, dan tanggal
        let year = dateObj.getFullYear();
        let month = ("0" + (dateObj.getMonth() + 1)).slice(-2); // Tambah 1 karena bulan dimulai dari 0
        let day = ("0" + dateObj.getDate()).slice(-2);

        // Gabungkan ke dalam format YYYY-MM-DD
        let formattedDate = year + "-" + month + "-" + day;

        return formattedDate;
    }

    return (
        <>
            <Layout>
                <div className="nk-content ">
                    <div className="container-fluid">
                        <div className="nk-content-inner">
                            <div className="nk-content-body">
                                <div className="nk-block-head nk-block-head-sm">
                                    <div className="nk-block-between">
                                        <div className="nk-block-head-content">
                                            <h3 className="nk-block-title page-title">
                                                Dashboard
                                            </h3>
                                        </div>
                                        <div className="nk-block-head-content">
                                            <div className="toggle-wrap nk-block-tools-toggle">
                                                <a
                                                    href="#"
                                                    className="btn btn-icon btn-trigger toggle-expand me-n1"
                                                    data-target="pageMenu"
                                                >
                                                    <em className="icon ni ni-more-v"></em>
                                                </a>
                                                <div
                                                    className="toggle-expand-content"
                                                    data-content="pageMenu"
                                                >
                                                    <ul className="nk-block-tools g-3">
                                                        <li>
                                                            <div className="drodown">
                                                                <div className="form-group">
                                                                    <div className="form-control-wrap">
                                                                        {/* <div className="form-icon form-icon-right">
                                                                            <em className="icon ni ni-calendar-alt"></em>
                                                                        </div> */}
                                                                        <input
                                                                            type="date"
                                                                            className="form-control"
                                                                            value={
                                                                                inputDate
                                                                            }
                                                                            onChange={
                                                                                handleChangeDate
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                {/* <a
                                                                    href="#"
                                                                    className="dropdown-toggle btn btn-white btn-dim btn-outline-light"
                                                                    data-bs-toggle="dropdown"
                                                                >
                                                                    <em className="d-none d-sm-inline icon ni ni-calender-date"></em>
                                                                    <span>
                                                                        <span className="d-none d-md-inline">
                                                                            Harian
                                                                        </span>
                                                                    </span>
                                                                    <em className="dd-indc icon ni ni-chevron-right"></em>
                                                                </a> */}
                                                                {/* <div className="dropdown-menu dropdown-menu-end">
                                                                    <ul className="link-list-opt no-bdr">
                                                                        <li>
                                                                            <a href="#">
                                                                                <span>
                                                                                    Harian
                                                                                </span>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">
                                                                                <span>
                                                                                    Bulanan
                                                                                </span>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">
                                                                                <span>
                                                                                    Tahunan
                                                                                </span>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div> */}
                                                            </div>
                                                        </li>
                                                        <li className="nk-block-tools-opt">
                                                            <a
                                                                href="#"
                                                                className="btn btn-primary"
                                                                onClick={
                                                                    handleClickExportPdf
                                                                }
                                                            >
                                                                <em className="icon ni ni-reports"></em>
                                                                <span>
                                                                    Export to
                                                                    pdf
                                                                </span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="nk-block">
                                    <div className="row g-gs">
                                        <div className="col-xxl-8">
                                            <div className="card card-full">
                                                <div className="card-inner">
                                                    <div className="card-title-group">
                                                        <div className="card-title">
                                                            <h6 className="title">
                                                                Daftar absensi
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="nk-tb-list mt-n2">
                                                    <div className="nk-tb-item nk-tb-head">
                                                        <div className="nk-tb-col">
                                                            <span>No.</span>
                                                        </div>
                                                        <div className="nk-tb-col tb-col-sm">
                                                            <span>Nama</span>
                                                        </div>
                                                        <div className="nk-tb-col tb-col-md">
                                                            <span>
                                                                Jam masuk
                                                            </span>
                                                        </div>
                                                        <div className="nk-tb-col">
                                                            <span>
                                                                Jam keluar
                                                            </span>
                                                        </div>
                                                        <div className="nk-tb-col">
                                                            <span>
                                                                No.rek/Dana/dll
                                                            </span>
                                                        </div>
                                                    </div>
                                                    {data_absen &&
                                                        data_absen.map(
                                                            (value, i) => (
                                                                <div
                                                                    className="nk-tb-item"
                                                                    key={i}
                                                                >
                                                                    <div className="nk-tb-col">
                                                                        <span className="tb-lead">
                                                                            <a href="#">
                                                                                {i +
                                                                                    1}
                                                                            </a>
                                                                        </span>
                                                                    </div>
                                                                    <div className="nk-tb-col tb-col-sm">
                                                                        <div className="user-card">
                                                                            {/* <div className="user-avatar sm bg-purple-dim">
                                                                <span>
                                                                    AB
                                                                </span>
                                                            </div> */}
                                                                            <div className="user-name">
                                                                                <span className="tb-lead">
                                                                                    {
                                                                                        value
                                                                                            .user
                                                                                            .username
                                                                                    }
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="nk-tb-col tb-col-md">
                                                                        <span className="tb-sub">
                                                                            {
                                                                                value.jam_masuk
                                                                            }
                                                                        </span>
                                                                    </div>
                                                                    <div className="nk-tb-col">
                                                                        <span className="tb-sub">
                                                                            {
                                                                                value.jam_keluar
                                                                            }
                                                                        </span>
                                                                    </div>
                                                                    <div className="nk-tb-col">
                                                                        <span className="tb-sub tb-amount">
                                                                            {
                                                                                value.no_transfer
                                                                            }
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            )
                                                        )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
            ;
        </>
    );
}
