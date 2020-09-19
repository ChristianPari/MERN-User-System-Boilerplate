import React from 'react'

export default function Button(props) {
  return(
    <button 
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
  cursor: 'pointer'
}

const lightTheme = {
  borderColor: 'black'
}

const darkTheme = {
  color: 'white',
  backgroundColor: 'black',
  borderColor: 'white'
}