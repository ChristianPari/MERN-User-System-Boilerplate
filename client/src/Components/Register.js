import React from "react"

// components
import Button from "./Button";

export default function Register() {

  const loginLink = window.location.origin + "/login";

  return (
    <div className="register">
      <h1>Register Today</h1>
      <p>
        Already have an account?
		    <Button 
          style={{color: 'white', backgroundColor: 'black'}}
          text={"Login"}
          onClick={() => {window.location = loginLink}}
        />
      </p>
    </div>
  )
}