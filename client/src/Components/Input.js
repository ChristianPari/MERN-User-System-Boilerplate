import React from 'react'

export default function Input(props) {
  return (
    <input
      id={props.id}
      placeholder={props.ph}
      name={props.name}
      type={props.type}
      style={{...defaultStyle, ...props.style}}
      onChange={props.onChange}
    />
  )
}

const defaultStyle ={
  borderStyle: 'solid',
  borderColor: 'gray',
  padding: 10,
  borderRadius: 7,
  margin: 1
}