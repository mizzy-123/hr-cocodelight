export default function LayoutAuth({ children }) {
    return (
        <div className="nk-app-root">
            <div className="nk-main ">
                <div className="nk-wrap nk-wrap-nosidebar">
                    <div className="nk-content ">
                        <div className="nk-block nk-block-middle nk-auth-body wide-xs">
                            <div className="brand-logo pb-4 text-center">
                                <a href="html/index.html" className="logo-link">
                                    <img
                                        className="logo-light logo-img logo-img-lg"
                                        src="/images/logo.png"
                                        srcSet="/images/logo2x.png 2x"
                                        alt="logo"
                                    />
                                    <img
                                        className="logo-dark logo-img logo-img-lg"
                                        src="/images/logo-dark.png"
                                        srcSet="/images/logo-dark2x.png 2x"
                                        alt="logo-dark"
                                    />
                                </a>
                            </div>
                            {children}
                        </div>
                        <div className="nk-footer nk-auth-footer-full">
                            <div className="container wide-lg">
                                <div className="row g-3">
                                    <div className="col-lg-12">
                                        <div className="nk-block-content text-center text-lg-left">
                                            <p className="text-soft">
                                                &copy; 2022 CryptoLite. All
                                                Rights Reserved.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
