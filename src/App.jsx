import { useState } from 'react'
import './App.css'
import { themes } from './styles/themes'
import { ThemeProvider } from './contexts/ThemesContext'
import { ThemeTogglerButton } from './components/ThemeTogglerButton/ThemeTogglerButton'
import { createGlobalStyle } from 'styled-components'

function App() {

  return (
    <>
      <ThemeProvider>

        <ThemeTogglerButton />

      </ThemeProvider>

    </>
  )
}

const GlobalStyle = createGlobalStyle`

* {
  margin:0;
  padding: 0;
  box-sizing: border-box;
}

`

export default App;
