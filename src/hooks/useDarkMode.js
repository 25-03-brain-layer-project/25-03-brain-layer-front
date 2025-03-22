// useDarkMode.js

import { useEffect, useState } from "react";

function useDarkMode() {
    const [isDark, setIsDark] = useState(() => {
        // 로컬 스토리지에 저장된 설정 불러오기
        const saved = localStorage.getItem("theme");
        return saved === "dark";
    });

    useEffect(() => {
        const root = document.documentElement;
        if (isDark) {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDark]);

    return [isDark, setIsDark];
}

export default useDarkMode;
