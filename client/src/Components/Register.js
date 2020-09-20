import React from "react"

// components
import Button from "./Button";
import DarkModeBtn from './DarkModeBtn'
import Form from "./Form"
import { regReq } from '../utils/user_Requests'
import ResetVisits from './ResetVisits'

// utils
import { regInputs } from "../utils/user_Inputs"
import darkModeTheming from '../utils/darkModeTheming'

// hooks
import { useTheme } from '../Hooks/themeContext'
import useLocalStorage from '../Hooks/useLocalStorage'

export default function Register(props) {

  const loginLink = "/login"
  const darkTheme = useTheme()
  const themeStyles = darkModeTheming(darkTheme)
  const [visits, setVisits] = useLocalStorage('visits', {})

  window.onload = () => {
    visits.register? visits.register += 1 : visits['register'] = 1
    setVisits({...visits, 'register': visits.register})
  }

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
        <big>Already have an account? </big>
		    <Button
          theme={props.theme}
          text={"Login"}
          style={themeStyles.btn}
          onClick={() => {window.location = loginLink}}
        />
      </p>
      <ResetVisits 
        btnTheme={themeStyles.btn}
        btnOnClick={setVisits}
        pageVisits={visits}
        pageName={'register'}
      />
      <DarkModeBtn />
    </div>
  )
}