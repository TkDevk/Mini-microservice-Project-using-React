import { useContext, useState } from 'react'

import PropTypes from "prop-types"


import { createContext } from "react";

const ThemeContext = createContext();

export const useThemeContext = ()=>{
    return useContext(ThemeContext)
}

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light');


    return (
        <ThemeContext.Provider
            value={
                {
                    theme,
                    setTheme: () => setTheme(theme === "white" ? "black" : "white"),
                }}>
            {children}
        </ThemeContext.Provider>
    )

}

ThemeProvider.propTypes = {
    children: PropTypes.any,
}

export default ThemeProvider