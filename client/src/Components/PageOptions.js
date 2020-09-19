import React from 'react'

// components
import Button from './Button'

export default function PageOptions(props) {
  return (
    <div className="options">
    <Button
      theme={'light'}
      text="Light Mode"
      onClick={props.curTheme === 'dark' ? props.setTheme : null}
    />
    <Button
      theme={'dark'}
      text="Dark Mode"
      onClick={props.curTheme === 'light' ? props.setTheme : null}
      style={{
        color: 'white', 
        backgroundColor: 'black',
        borderColor: 'white'
      }}
    />
    </div>
  )
}