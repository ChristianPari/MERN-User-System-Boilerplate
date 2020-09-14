import React from "react"

// components
import Button from "./Button"

export default function Login() {

	const regLink = "/register";

	return (
		<div className="login">
			<h1>Login to Your Account</h1>
			<p>
				Need an account?
        <Button 
          style={{color: 'white', backgroundColor: 'black'}}
          text={"Sign Up"}
          onClick={() => { window.location = regLink }}
        />
			</p>
		</div>
	)
}