import React from 'react'

export default function Input(props) {
  return (
    <input
      id={props.id}
      placeholder={props.ph}
      name={props.name}
      type={props.type}
      style={
        props.theme === 'light' ? 
          {
            ...defaultStyle,
            ...lightTheme, 
            ...props.style
          } :
          {
            ...defaultStyle,
            ...darkTheme,
            ...props.style
          }}  
    />
  )
}

const defaultStyle ={
  border: 'none',
  padding: 10,
  borderRadius: 7,
}

const lightTheme = {
  color: 'white',
  backgroundColor: 'black'
}

const darkTheme = {
  color: 'black',
  backgroundColor: 'white'
}