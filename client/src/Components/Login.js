import React from "react"

// components
import Button from "./Button"
import Form from "./Form"
import { loginReq } from '../utils/user_Requests'
import { useTheme, useThemeUpdate } from '../Hooks/themeContext'

// utils
import { loginInputs } from "../utils/user_Inputs"
import darkModeTheming from '../utils/darkModeTheming'

export default function Login(props) {

  const regLink = "/register";
  const darkTheme = useTheme()
  const toggleTheme = useThemeUpdate()
  const themeStyles = darkModeTheming(darkTheme)

	return (
    <div 
      className="login"
      style={themeStyles.text}
    >
      <Form 
        title={"Login to Your Account"}
        submitFunc={loginReq}
        id={"loginForm"}
        inputs={loginInputs}
        inputStyle={themeStyles.input}
        btnStyle={themeStyles.btn}
      />
			<p>
				<big>Need an account? </big>
        <Button
          text={"Sign Up"}
          onClick={() => { window.location = regLink }}
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