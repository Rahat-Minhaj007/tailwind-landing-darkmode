import { useEffect, useState } from "react";

const useDarkMode = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
    const colorTheme = theme === 'light' ? 'dark' : 'light';

    useEffect(() => {
        const root = window.document.documentElement;

        root.classList.add(theme)
        root.classList.remove(colorTheme)
        localStorage.setItem('theme', theme)

    }, [theme, colorTheme])
    return [setTheme, colorTheme];
};

export default useDarkMode;