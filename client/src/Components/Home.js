import React from "react"

export default function Home() {

	const loginLink = window.location.origin + "/login";
	const regLink = window.location.origin + "/register";

	return (
		<div className="home">
			<h1>Welcome to our Service</h1>
			<p>
				Need an account?
				<a href={regLink}>
					Register
				</a>
				<br />
				Already a user?
				<a href={loginLink}>
					Login
				</a>
			</p>
		</div>
	)

}