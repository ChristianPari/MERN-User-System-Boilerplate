import React from "react"

// components
import Button from "./Button";
import Form from "./Form"
import PageOptions from './PageOptions'
import { regReq } from '../utils/user_Requests'

// utils
import { regInputs } from "../utils/user_Inputs"

export default function Register(props) {

  const loginLink = "/login";

  return (
    <div className="register">
      <Form 
        theme={props.theme}
        title={"Register for an Account"}
        submitFunc={regReq}
        id={"registerForm"}
        inputs={regInputs}
      />
      <p
        style={props.theme === 'light' ?
          {color: 'black'} :
          {color: 'white'}}
      >
        <big>Already have an account?</big>
		    <Button
          theme={props.theme}
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