// custom theme handler

import React, { useContext, useState } from 'react'
import useLocalStorage from './useLocalStorage'

const ThemeContext = React.createContext()
const ThemeUpdateContext = React.createContext()

export function useTheme() {
  return useContext(ThemeContext)
}

export function useThemeUpdate() {
  return useContext(ThemeUpdateContext)
}

export function ThemeProvider({ children }) {

  const [theme, setTheme] = useLocalStorage('darkTheme', false)
  const [darkTheme, setDarkTheme] = useState(theme)

  document.getElementById('root').style.backgroundColor = darkTheme? 'black' : 'white'

  function toggleTheme() {
    setTheme(theme => !theme)
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  )
}