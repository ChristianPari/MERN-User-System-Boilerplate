import React from 'react'

// components
import Input from './Input'
import Button from './Button'

export default function Form(props) {
  // title
  // inputs
  // subitFunction

  const btn_onClick = () => {
    props.submitFunc(document.getElementById(props.id))
  }
  
  return (
    <div>
      <h2
        style={props.theme === 'light' ?
          {color: 'black'} :
          {color: 'white'}}
      >
        {props.title}
      </h2>
      <form
        id={props.id}
      >
        {
          Array.isArray(props.inputs) ?
          props.inputs.map(inProps => 
            <Input 
              theme={props.theme}
              key={props.inputs.indexOf(inProps)}
              ph={inProps.ph}
              name={inProps.name}
              type={inProps.type}
              style={inProps.style}
              id={inProps.id}
              onChange={inProps.onChange}
            />
          ) : "Dev Warning! No inputs, Check code"
        }
      </form>
      <Button
        theme={props.theme}
        text={"Submit"}
        onClick={btn_onClick}
      />
    </div>
  )
}