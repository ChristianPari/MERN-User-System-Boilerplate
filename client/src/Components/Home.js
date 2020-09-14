import React from "react"

// components
import Button from "./Button"

export default function Home() {

	const loginLink = "/login";
	const regLink = "/register";

	return (
		<div className="home">
			<h1>Welcome to our Service</h1>
			<p>
				Need an account?
        <Button 
          className="register_button"
          style={{color: 'white', backgroundColor: 'black'}}
          text={"Sign Up"}
          onClick={() => {window.location = regLink}}
        />
				<br />
				Already a user?
        <Button 
          className="login_button"
          style= {{color: 'white', backgroundColor: 'black'}}
          text={"Login"}
          onClick={() => {window.location = loginLink}}
        />
			</p>
		</div>
	)

}