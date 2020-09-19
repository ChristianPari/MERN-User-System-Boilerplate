import React from "react"

// components
import Button from "./Button"
import { useTheme, useThemeUpdate } from '../Hooks/themeContext'

// utils
import darkModeTheming from '../utils/darkModeTheming'

export default function Home(props) {

	const loginLink = "/login"
  const regLink = "/register"
  const darkTheme = useTheme()
  const toggleTheme = useThemeUpdate()
  const themeStyles = darkModeTheming(darkTheme)

	return (
    <div 
      className="home"
      style={themeStyles.text}
    >
			<h1>Welcome to our Service</h1>
			<p>
				<big>Need an account? </big>
        <Button 
          className="register_button"
          text={"Sign Up"}
          onClick={() => {window.location = regLink}}
          style={themeStyles.btn}
        />
				<br />
				<big>Already a user? </big>
        <Button 
          className="login_button"
          text={"Login"}
          onClick={() => {window.location = loginLink}}
          style={themeStyles.btn}
        />
			</p>
      <Button
        onClick={toggleTheme}
        text={'Toggle Dark Mode'}
        style={themeStyles.btn}
      />
		</div>
	)

}