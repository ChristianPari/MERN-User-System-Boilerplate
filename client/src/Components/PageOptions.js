import React from 'react'

// components
import Button from './Button'

export default function PageOptions(props) {
  return (
    <div className="options">
    <Button
      theme={'light'}
      text="Light Mode"
    />
    <Button
      theme={'dark'}
      text="Dark Mode"
      style={{
        color: 'white', 
        backgroundColor: 'black',
        borderColor: 'white'
      }}
    />
    </div>
  )
}