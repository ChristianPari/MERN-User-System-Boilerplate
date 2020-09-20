import React from 'react'

// components
import Button from "./Button"
import { useTheme, useThemeUpdate } from '../Hooks/themeContext'

// utils
import darkModeTheming from '../utils/darkModeTheming'

export default function DarkModeBtn() {
  const toggleTheme = useThemeUpdate()
  const darkTheme = useTheme()
  const themeStyles = darkModeTheming(darkTheme)

  return (
    <Button 
      onClick={toggleTheme}
      text={darkTheme? 'Toggle Light Mode' : 'Toggle Dark Mode'}
      style={themeStyles.btn}
    />
  )
}