import { useContext } from "react"
import { themes } from "../../styles/themes"
import { ThemesContext } from "../../contexts/ThemesContext"


export const ThemeTogglerButton = () => {

    const { theme, setTheme } = useContext(ThemesContext)

    return (

        <div>

            <button
                onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}

            >Change Theme</button>

        </div>

    )
}
