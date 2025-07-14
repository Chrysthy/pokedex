import { ThemeGlobalStyle } from './styles/themes'
import { ThemeProvider } from './contexts/ThemesContext'
import { ThemeTogglerButton } from './components/ThemeTogglerButton/ThemeTogglerButton'
import Home from './pages/Home';

function App() {

  return (

    <ThemeProvider>

      <Home/>
      
      <ThemeGlobalStyle />
      <ThemeTogglerButton />

    </ThemeProvider>
  )
}

export default App;