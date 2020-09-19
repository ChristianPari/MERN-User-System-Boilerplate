import React from 'react'

export default function Button(props) {
  return(
    <button 
      onClick={props.onClick}
      style={{...defaultStyle, ...props.style}}  
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
  cursor: 'pointer'
}