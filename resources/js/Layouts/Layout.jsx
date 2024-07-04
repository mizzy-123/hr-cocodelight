import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
    return (
        <>
            <div className="nk-app-root">
                <div className="nk-main">
                    {/* Sidebar */}
                    <Sidebar />
                    <div className="nk-wrap">
                        {/* Header */}
                        <Header />

                        {/* Main content */}
                        {children}

                        {/* Footer */}
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
}
