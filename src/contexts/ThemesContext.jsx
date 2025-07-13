import { createContext, useState } from "react";
import { themes } from "../styles/themes";

export const ThemesContext = createContext();

export const ThemeProvider = (props) => {

    const [theme, setTheme] = useState(themes.light)

    return (
        <ThemesContext.Provider value={{ theme, setTheme }}>
            {props.children}
        </ThemesContext.Provider>
    )
}

