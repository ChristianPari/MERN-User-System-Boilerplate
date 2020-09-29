import React, { useState } from 'react'

// components
import Input from './Input'
import Button from './Button'

export default function Form(props) {

  const initialState = props.inputs.reduce(
    (initial, input) => {
      initial[input.name] = ''
      return initial
    }, {})

  const [formValues, setFormValues] = useState(initialState)

  const btn_onClick = () => {
    props.submitFunc(formValues)
  }
  
  return (
    <div>
      <h2>
        {props.title}
      </h2>
      <form
        id={props.id}
      >
        {
          Array.isArray(props.inputs) ?
          props.inputs.map(inProps => 
            <Input 
              key={props.inputs.indexOf(inProps)}
              ph={inProps.ph}
              name={inProps.name}
              type={inProps.type}
              style={props.inputStyle}
              id={inProps.id}
              onChange={(e) => {
                setFormValues({
                  ...formValues, 
                  [e.target.name]: e.target.value
                })
              }}
            />
          ) : "Dev Warning! No inputs, Check code"
        }
      </form>
      <Button
        text={"Submit"}
        onClick={btn_onClick}
        style={props.btnStyle}
      />
    </div>
  )
}