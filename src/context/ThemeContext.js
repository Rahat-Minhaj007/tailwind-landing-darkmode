import { createContext, useState } from "react";

export const ThemeContext = createContext();
const { Provider } = ThemeContext;
const ThemeProvider = ({ children = null }) => {
    const [themeMode, setThemeMode] = useState("");
    const value = [themeMode, setThemeMode];
    return <Provider value={value}>{children}</Provider>
}

export default ThemeProvider;