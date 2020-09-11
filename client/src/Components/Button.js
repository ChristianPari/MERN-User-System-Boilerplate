import React from 'react'

export default function Button(props) {
  return(
    <button 
      style={{...defaultStyle, ...props.style}}
      onClick={props.onClick}  
    >
      {props.text}
    </button>
  )
}

const defaultStyle = {
  padding: 7,
  borderRadius: 7,
  fontSize: 'small',
  fontWeight: '900',
  backgroundColor: 'blue',
  color: 'red',
  curser: 'pointer'
}