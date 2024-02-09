import { useContext, useState } from 'react'
import PropTypes from "prop-types"
import { createContext } from "react";

const ThemeContext = createContext();

export const useThemeContext = () => {
    return useContext(ThemeContext)
}

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(
        window.localStorage.getItem("theme") || "dark"
    );

    const setColorTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        window.localStorage.setItem("theme", newTheme);
    };
    return (
        <ThemeContext.Provider
            value={
                {
                    theme,
                    setColorTheme
                }}>
            {children}
        </ThemeContext.Provider>
    )

}

ThemeProvider.propTypes = {
    children: PropTypes.any,
}

export default ThemeProvider