import React from 'react'

export default function Input(props) {
  return (
    <input
      id={props.id}
      placeholder={props.ph}
      name={props.name}
      type={props.type}
      style={{...defaultStyle, ...props.style}}  
    />
  )
}

const defaultStyle = {
  color: 'white',
  border: 'none',
  padding: 10,
  borderRadius: 7,
  backgroundColor: 'black'
}