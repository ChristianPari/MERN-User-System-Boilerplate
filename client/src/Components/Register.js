import React from "react"

// components
import Button from "./Button";
import Form from "./Form"
import { regReq } from '../utils/user_Requests'

// utils
import { regInputs } from "../utils/user_Inputs"

export default function Register() {

  const loginLink = "/login";

  return (
    <div className="register">
      <Form 
        title={"Register for an Account"}
        submitFunc={regReq}
        id={"registerForm"}
        inputs={regInputs}
      />
      <p>
        Already have an account?
		    <Button 
          style={{
            color: 'white', 
            backgroundColor: 'black'
          }}
          text={"Login"}
          onClick={() => {window.location = loginLink}}
        />
      </p>
    </div>
  )
}