import { Link, router, usePage } from "@inertiajs/react";
import LayoutAuth from "./LayoutAuth";
import { useState } from "react";

export default function Register() {
    const { errors, csrf_token } = usePage().props;
    const [loading, setLoading] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const fullname = formData.get("fullname");
        const email = formData.get("email");
        const username = formData.get("username");
        const password = formData.get("password");
        const password_confirmation = formData.get("password_confirmation");

        router.post(route("register"), {
            _token: csrf_token,
            fullname: fullname,
            email: email,
            username: username,
            password: password,
            password_confirmation: password_confirmation,
        });

        router.on("finish", (event) => {
            setLoading(false);
        });
    };
    return (
        <>
            <LayoutAuth>
                <div className="card">
                    <div className="card-inner card-inner-lg">
                        <div className="nk-block-head">
                            <div className="nk-block-head-content">
                                <h4 className="nk-block-title">Register</h4>
                                <div className="nk-block-des">
                                    <p>Create New Dashlite Account</p>
                                </div>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label
                                    className="form-label"
                                    htmlFor="fullname"
                                >
                                    Fullname
                                </label>
                                <div className="form-control-wrap">
                                    <input
                                        name="fullname"
                                        type="text"
                                        className={`form-control form-control-lg ${
                                            errors.fullname && "is-invalid"
                                        }`}
                                        id="fullname"
                                        placeholder="Enter your name"
                                    />
                                    {errors.fullname && (
                                        <div className="invalid-feedback">
                                            {errors.fullname}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="form-group">
                                <label
                                    className="form-label"
                                    htmlFor="username"
                                >
                                    Username
                                </label>
                                <div className="form-control-wrap">
                                    <input
                                        name="username"
                                        type="text"
                                        className={`form-control form-control-lg ${
                                            errors.username && "is-invalid"
                                        }`}
                                        id="username"
                                        placeholder="Enter your email address or username"
                                    />
                                    {errors.username && (
                                        <div className="invalid-feedback">
                                            {errors.username}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="email">
                                    Email
                                </label>
                                <div className="form-control-wrap">
                                    <input
                                        name="email"
                                        type="text"
                                        className={`form-control form-control-lg ${
                                            errors.email && "is-invalid"
                                        }`}
                                        id="email"
                                        placeholder="Enter your email address or username"
                                    />
                                    {errors.email && (
                                        <div className="invalid-feedback">
                                            {errors.email}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="form-group">
                                <label
                                    className="form-label"
                                    htmlFor="password"
                                >
                                    Password
                                </label>
                                <div className="form-control-wrap">
                                    <a
                                        href="#"
                                        className="form-icon form-icon-right passcode-switch lg"
                                        data-target="password"
                                    >
                                        <em className="passcode-icon icon-show icon ni ni-eye"></em>
                                        <em className="passcode-icon icon-hide icon ni ni-eye-off"></em>
                                    </a>
                                    <input
                                        name="password"
                                        type="password"
                                        className={`form-control form-control-lg ${
                                            errors.password && "is-invalid"
                                        }`}
                                        id="password"
                                        placeholder="Enter your passcode"
                                    />
                                    {errors.password && (
                                        <div className="invalid-feedback">
                                            {errors.password}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="form-group">
                                <label
                                    className="form-label"
                                    htmlFor="password_confirmation"
                                >
                                    Confirm Password
                                </label>
                                <div className="form-control-wrap">
                                    <a
                                        href="#"
                                        className="form-icon form-icon-right passcode-switch lg"
                                        data-target="password_confirmation"
                                    >
                                        <em className="passcode-icon icon-show icon ni ni-eye"></em>
                                        <em className="passcode-icon icon-hide icon ni ni-eye-off"></em>
                                    </a>
                                    <input
                                        name="password_confirmation"
                                        type="password"
                                        className={`form-control form-control-lg ${
                                            errors.password_confirmation &&
                                            "is-invalid"
                                        }`}
                                        id="password_confirmation"
                                        placeholder="Enter your passcode"
                                    />
                                    {errors.password_confirmation && (
                                        <div className="invalid-feedback">
                                            {errors.password_confirmation}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="form-group">
                                <button
                                    className="btn btn-lg btn-primary btn-block"
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <>
                                            <span
                                                className="spinner-border spinner-border-sm"
                                                aria-hidden="true"
                                            ></span>
                                            <span role="status">
                                                Loading...
                                            </span>
                                        </>
                                    ) : (
                                        "Register"
                                    )}
                                </button>
                            </div>
                        </form>
                        <div className="form-note-s2 text-center pt-4">
                            {" "}
                            Already have an account?{" "}
                            <Link href={route("login")}>
                                <strong>Sign in instead</strong>
                            </Link>
                        </div>
                    </div>
                </div>
            </LayoutAuth>
        </>
    );
}
