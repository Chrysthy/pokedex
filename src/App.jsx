import { ThemeGlobalStyle } from './styles/themes'
import { ThemeProvider } from './contexts/ThemesContext'
import { ThemeTogglerButton } from './components/ThemeTogglerButton/ThemeTogglerButton'

function App() {

  return (

    <ThemeProvider>

      <ThemeGlobalStyle />
      <ThemeTogglerButton />

    </ThemeProvider>
  )
}

export default App;