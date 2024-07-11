import { Link, usePage } from "@inertiajs/react";
import { useEffect } from "react";

export default function Sidebar() {
    const { authorization } = usePage().props;
    const { url } = usePage();

    return (
        <div
            className="nk-sidebar nk-sidebar-fixed is-light "
            data-content="sidebarMenu"
        >
            <div className="nk-sidebar-element nk-sidebar-head">
                <div className="nk-sidebar-brand">
                    <a
                        href="html/index.html"
                        className="logo-link nk-sidebar-logo"
                    >
                        <img
                            className="logo-light logo-img"
                            src="/images/logo.png"
                            srcSet="/images/logo2x.png 2x"
                            alt="logo"
                        />
                        <img
                            className="logo-dark logo-img"
                            src="/images/logo-dark.png"
                            srcSet="/images/logo-dark2x.png 2x"
                            alt="logo-dark"
                        />
                        <img
                            className="logo-small logo-img logo-img-small"
                            src="/images/logo-small.png"
                            srcSet="/images/logo-small2x.png 2x"
                            alt="logo-small"
                        />
                    </a>
                </div>
                <div className="nk-menu-trigger me-n2">
                    <a
                        href="#"
                        className="nk-nav-toggle nk-quick-nav-icon d-xl-none"
                        data-target="sidebarMenu"
                    >
                        <em className="icon ni ni-arrow-left"></em>
                    </a>
                    <a
                        href="#"
                        className="nk-nav-compact nk-quick-nav-icon d-none d-xl-inline-flex"
                        data-target="sidebarMenu"
                    >
                        <em className="icon ni ni-menu"></em>
                    </a>
                </div>
            </div>
            <div className="nk-sidebar-element">
                <div className="nk-sidebar-content">
                    <div className="nk-sidebar-menu" data-simplebar>
                        <ul className="nk-menu">
                            <li className="nk-menu-heading">
                                <h6 className="overline-title text-primary-alt">
                                    Dashboards
                                </h6>
                            </li>
                            {authorization.admin && (
                                <li
                                    className={`nk-menu-item ${
                                        url === route("dashboard")
                                            ? "active current-page"
                                            : ""
                                    }`}
                                >
                                    <Link
                                        href={route("dashboard")}
                                        className="nk-menu-link"
                                    >
                                        <span className="nk-menu-icon">
                                            <em className="icon ni ni-cart-fill"></em>
                                        </span>
                                        <span className="nk-menu-text">
                                            Daftar Absensi
                                        </span>
                                    </Link>
                                </li>
                            )}
                            <li className="nk-menu-item">
                                <a
                                    href="html/index-sales.html"
                                    className="nk-menu-link"
                                >
                                    <span className="nk-menu-icon">
                                        <em className="icon ni ni-activity-round-fill"></em>
                                    </span>
                                    <span className="nk-menu-text">Sales</span>
                                </a>
                            </li>
                            <li className="nk-menu-item">
                                <a
                                    href="html/index-analytics.html"
                                    className="nk-menu-link"
                                >
                                    <span className="nk-menu-icon">
                                        <em className="icon ni ni-growth-fill"></em>
                                    </span>
                                    <span className="nk-menu-text">
                                        Analytics
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
