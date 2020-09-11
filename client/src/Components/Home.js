import React from "react"

// components
import Button from "./Button"

export default function Home() {

	const loginLink = window.location.origin + "/login";
	const regLink = window.location.origin + "/register";

	return (
		<div className="home">
			<h1>Welcome to our Service</h1>
			<p>
				Need an account?
        <Button 
          style={{color: 'white', backgroundColor: 'black'}}
          text={"Sign Up"}
          onClick={() => {window.location = regLink}}
        />
				<br />
				Already a user?
				<Button 
          style= {{color: 'white', backgroundColor: 'black'}}
          text={"Login"}
          onClick={() => {window.location = loginLink}}
        />
			</p>
		</div>
	)

}