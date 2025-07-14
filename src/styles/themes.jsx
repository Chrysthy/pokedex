import { createGlobalStyle } from "styled-components";
import { useContext } from "react";
import { ThemesContext } from "../contexts/ThemesContext";

export const themes = {
    light: {
        background: "#ffffff",
        color: "#000000",
    },

    dark: {
        background: "#000000",
        color: "#ffffff",
    }
}

export const GlobalStyle = createGlobalStyle`

body {
        background-color: ${(props) => props.theme.background};
        color: ${(props) => props.theme.color};
        transition: background-color 0.3s ease, color 0.3s ease;
    }
;

`

export const ThemeGlobalStyle = () => {
    const { theme } = useContext(ThemesContext);
    return <GlobalStyle theme={theme} />;
};