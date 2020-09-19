import React from 'react'

// components
import Input from './Input'
import Button from './Button'

export default function Form(props) {

  const btn_onClick = () => {
    props.submitFunc(document.getElementById(props.id))
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
              onChange={inProps.onChange}
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