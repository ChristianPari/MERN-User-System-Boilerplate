import React from "react"

// components
import Button from "./Button"
import DarkModeBtn from './DarkModeBtn'
import Form from "./Form"
import { loginReq } from '../utils/user_Requests'
import ResetVisits from './ResetVisits'

// utils
import { loginInputs } from "../utils/user_Inputs"
import darkModeTheming from '../utils/darkModeTheming'

// hooks
import { useTheme } from '../Hooks/themeContext'
import useLocalStorage from '../Hooks/useLocalStorage'

export default function Login(props) {

  const regLink = "/register";
  const darkTheme = useTheme()
  const themeStyles = darkModeTheming(darkTheme)
  const [visits, setVisits] = useLocalStorage('visits', 0)

  window.onload = () => {
    visits.login? visits.login += 1 : visits['login'] = 1
    setVisits({...visits, 'login': visits.login})
  }

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
      <ResetVisits 
        btnTheme={themeStyles.btn}
        btnOnClick={setVisits}
        pageVisits={visits}
        pageName={'login'}
      />
      <DarkModeBtn />
		</div>
	)
}