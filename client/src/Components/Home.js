import React from "react"

// components
import Button from "./Button"
import PageOptions from './PageOptions'

export default function Home(props) {

	const loginLink = "/login";
  const regLink = "/register";
  
  const 
  textStyle = props.theme === 'light' ?
    {color: 'black'} :
    {color: 'white'};

	return (
		<div className="home">
			<h1
        style={textStyle}
      >Welcome to our Service</h1>
			<p
        style={textStyle}
      >
				<big>Need an account? </big>
        <Button 
          className="register_button"
          text={"Sign Up"}
          onClick={() => {window.location = regLink}}
        />
				<br />
				<big>Already a user? </big>
        <Button 
          className="login_button"
          text={"Login"}
          onClick={() => {window.location = loginLink}}
        />
			</p>
      <PageOptions 
        setTheme={props.themer}
        curTheme={props.theme}
      />
		</div>
	)

}