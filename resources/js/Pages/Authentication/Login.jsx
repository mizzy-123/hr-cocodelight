import { Link, router, useForm, usePage } from "@inertiajs/react";
import LayoutAuth from "./LayoutAuth";
import { useEffect, useState } from "react";

export default function Login() {
    const { errors, csrf_token, flash } = usePage().props;
    const {
        data,
        setData,
        post,
        processing,
        errors: error,
        reset,
    } = useForm({
        account: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const account = formData.get("account");
        const password = formData.get("password");

        router.post(route("post.login"), {
            _token: csrf_token,
            account: account,
            password: password,
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
                                <h4 className="nk-block-title">Sign-In</h4>
                                <div className="nk-block-des">
                                    <p>
                                        Access the Dashlite panel using your
                                        email and passcode.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {flash.success && (
                            <div className="alert alert-success alert-icon">
                                <em className="icon ni ni-check-circle"></em>{" "}
                                <strong>Register successfull</strong>.{" "}
                                {flash.success}
                            </div>
                        )}
                        {flash.error && (
                            <div className="alert alert-danger alert-icon">
                                <em className="icon ni ni-cross-circle"></em>{" "}
                                <strong>Login failed</strong>. {flash.error}
                            </div>
                        )}
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <div className="form-label-group">
                                    <label
                                        className="form-label"
                                        htmlFor="default-01"
                                    >
                                        Email or Username
                                    </label>
                                </div>
                                <div className="form-control-wrap">
                                    <input
                                        name="account"
                                        type="text"
                                        className={`form-control form-control-lg ${
                                            errors.account && "is-invalid"
                                        }`}
                                        id="default-01"
                                        placeholder="Enter your email address or username"
                                    />
                                    {errors.account && (
                                        <div className="invalid-feedback">
                                            {errors.account}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-label-group">
                                    <label
                                        className="form-label"
                                        htmlFor="password"
                                    >
                                        Passcode
                                    </label>
                                    <a
                                        className="link link-primary link-sm"
                                        href="html/pages/auths/auth-reset-v2.html"
                                    >
                                        Forgot Code?
                                    </a>
                                </div>
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
                                    {errors.account && (
                                        <div className="invalid-feedback">
                                            {errors.account}
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
                                        "Log In"
                                    )}
                                </button>
                            </div>
                        </form>
                        <div className="form-note-s2 text-center pt-4">
                            {" "}
                            New on our platform?{" "}
                            <Link href={route("register")}>
                                Create an account
                            </Link>
                        </div>
                        <div className="text-center pt-4 pb-3">
                            <h6 className="overline-title overline-title-sap">
                                <span>OR</span>
                            </h6>
                        </div>
                        <ul className="nav justify-center gx-4">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Facebook
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Google
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </LayoutAuth>
        </>
    );
}
