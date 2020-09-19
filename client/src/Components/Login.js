import React from "react"

// components
import Button from "./Button"
import Form from "./Form"
import PageOptions from './PageOptions'
import { loginReq } from '../utils/user_Requests'

// utils
import { loginInputs } from "../utils/user_Inputs"

export default function Login(props) {

	const regLink = "/register";

	return (
		<div className="login">
      <Form 
        title={"Login to Your Account"}
        submitFunc={loginReq}
        id={"loginForm"}
        inputs={loginInputs}
        theme={props.theme}
      />
			<p
        style={props.theme === 'light' ? 
          {color: 'black'} : 
          {color: 'white'}}
      >
				<big>Need an account? </big>
        <Button
          text={"Sign Up"}
          theme={props.theme}
          onClick={() => { window.location = regLink }}
        />
			</p>
      <PageOptions
        setTheme={props.themer}
        curTheme={props.theme}
      />
		</div>
	)
}