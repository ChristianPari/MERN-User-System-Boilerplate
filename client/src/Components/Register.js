import React from "react"

export default function Register() {

    const loginLink = window.location.origin + "/login";

    return (
        <div className="register">
            <h1>Register Today</h1>
            <p>
                Already have an account?
			    <a href={loginLink}>
                    Login
			    </a>
            </p>
        </div>
    )
}