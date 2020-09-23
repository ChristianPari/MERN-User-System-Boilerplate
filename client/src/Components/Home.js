import React from "react"

// components
import Button from "./Button"
import DarkModeBtn from './DarkModeBtn'
import ResetVisits from './ResetVisits'

// utils
import darkModeTheming from '../utils/darkModeTheming'

// hooks
import { useTheme } from '../Hooks/themeContext'
import usePageVisits from '../Hooks/usePageVisits'

export default function Home(props) {

	const loginLink = "/login"
  const regLink = "/register"
  const loggedInUser = sessionStorage.getItem('user')
  const darkTheme = useTheme()
  const themeStyles = darkModeTheming(darkTheme)
  usePageVisits('home')

  if (loggedInUser) {
    document.title = loggedInUser
  }

	return (
    <div 
      className="home"
      style={themeStyles.text}
    >
			<h1>{loggedInUser? `Welcome, ${loggedInUser}!` : 'Welcome to Our Service'}</h1>
			{
        !loggedInUser ?

        <div className='user_actions'>
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
        </div> :
        
        <div className='user_welcome'>
          <Button 
            className='logout_button'
            text={'Logout'}
            onClick={() => {
              sessionStorage.removeItem('user')
              window.location = '/'
            }}
            style={themeStyles.btn}
          />
        </div>
      }
      <ResetVisits 
        btnTheme={themeStyles.btn}
        pageName={'home'}
      />
      <DarkModeBtn />
		</div>
	)

}