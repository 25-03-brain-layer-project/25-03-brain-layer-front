// Layout.js

import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
    return (
        <div className="flex flex-col min-h-screen bg-rose-50 text-black dark:bg-neutral-800 dark:text-white">
            <Header />
            <main className="flex-grow p-6">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Layout;
