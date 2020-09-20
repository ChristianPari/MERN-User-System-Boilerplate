import React from "react"

// components
import Button from "./Button"
import DarkModeBtn from './DarkModeBtn'
import ResetVisits from './ResetVisits'

// utils
import darkModeTheming from '../utils/darkModeTheming'

// hooks
import { useTheme } from '../Hooks/themeContext'
import useLocalStorage from '../Hooks/useLocalStorage'

export default function Home(props) {

	const loginLink = "/login"
  const regLink = "/register"
  const darkTheme = useTheme()
  const themeStyles = darkModeTheming(darkTheme)
  const [visits, setVisits] = useLocalStorage('visits', {})

  window.onload = () => {
    visits.home? visits.home += 1 : visits['home'] = 1
    setVisits({...visits, 'home': visits.home})
  }

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
      <ResetVisits 
        btnTheme={themeStyles.btn}
        btnOnClick={setVisits}
        pageVisits={visits}
        pageName={'home'}
      />
      <DarkModeBtn />
		</div>
	)

}