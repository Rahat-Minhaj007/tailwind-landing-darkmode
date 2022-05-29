import ThemeProvider from "./ThemeContext";

const AppProvider = ({ children = null }) => {
    return (

        <ThemeProvider>
            {children}
        </ThemeProvider>

    )

}
export default AppProvider;