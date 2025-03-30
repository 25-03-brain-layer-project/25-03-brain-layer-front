// Header.js

import useDarkMode from "../hooks/useDarkMode";
import {Link} from "react-router-dom"; // 경로는 상황에 따라 수정

function Header() {
    const [isDark, setIsDark] = useDarkMode();

    return (
        <header
            className="bg-indigo-100 dark:bg-gray-950 text-black dark:text-white px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">🧠 Brain Layer Viewer</h1>
            <nav className="space-x-4">
                <Link to="/" className="hover:underline">Home</Link>
                <Link to="/viewer" className="hover:underline">Viewer</Link>
            </nav>
            <button
                className="bg-indigo-300 dark:bg-gray-700 text-sm px-3 py-1 rounded"
                onClick={() => setIsDark(!isDark)}
            >
                {isDark ? "☀️ Light" : "🌙 Dark"}
            </button>
        </header>
    );
}

export default Header;
