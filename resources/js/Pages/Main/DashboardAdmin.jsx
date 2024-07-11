import Layout from "@/Layouts/Layout";
import { usePage } from "@inertiajs/react";
import { useEffect } from "react";

export default function DashboardAdmin() {
    const { date_now, data_absen } = usePage().props;

    useEffect(() => {
        console.log(data_absen);
    }, []);
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
                                                                        <div className="form-icon form-icon-right">
                                                                            <em className="icon ni ni-calendar-alt"></em>
                                                                        </div>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control date-picker"
                                                                            data-date-format="yyyy-mm-dd"
                                                                            value={
                                                                                date_now
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
                                                            >
                                                                <em className="icon ni ni-reports"></em>
                                                                <span>
                                                                    Reports
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
                                                                Recent Orders
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
