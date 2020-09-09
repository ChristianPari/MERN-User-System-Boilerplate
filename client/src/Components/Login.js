import React from "react"

export default function Login() {

	const regLink = window.location.origin + "/register";

	return (
		<div className="login">
			<h1>Login to Your Account</h1>
			<p>
				Need an account?
				<a href={regLink}>
					Register
				</a>
			</p>
		</div>
	)
}