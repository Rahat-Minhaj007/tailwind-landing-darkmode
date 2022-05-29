import ThemeProvider from "./ThemeContext";

const AppProvider = ({ childre = null }) => {
    return (

        <ThemeProvider>
            {childre}
        </ThemeProvider>

    )

}
export default AppProvider;