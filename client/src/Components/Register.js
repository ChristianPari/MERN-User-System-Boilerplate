import React from "react"

// components
import Button from "./Button";
import Form from "./Form"
import { regReq } from '../utils/user_Requests'
import { useTheme, useThemeUpdate } from '../Hooks/themeContext'

// utils
import { regInputs } from "../utils/user_Inputs"
import darkModeTheming from '../utils/darkModeTheming'

export default function Register(props) {

  const loginLink = "/login"
  const darkTheme = useTheme()
  const toggleTheme = useThemeUpdate()
  const themeStyles = darkModeTheming(darkTheme)

  return (
    <div 
      className="register"
      style={themeStyles.text}  
    >
      <Form 
        title={"Register for an Account"}
        submitFunc={regReq}
        id={"registerForm"}
        inputs={regInputs}
        inputStyle={themeStyles.input}
        btnStyle={themeStyles.btn}
      />
      <p>
        <big>Already have an account?</big>
		    <Button
          theme={props.theme}
          text={"Login"}
          style={themeStyles.btn}
          onClick={() => {window.location = loginLink}}
        />
      </p>
      <Button
        onClick={toggleTheme}
        style={themeStyles.btn}
        text={'Toggle Dark Mode'}
      />
    </div>
  )
}