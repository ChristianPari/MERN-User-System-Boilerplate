import React from 'react'

// components
import Button from './Button'

export default function ResetVisits(props) {

  return (
    <div className='resets'>
      <Button 
        className='resetVisits'
        text={'Reset ALL Visits'}
        onClick={() => props.btnOnClick({})}
        style={props.btnTheme}
        />
      <Button 
        className='resetVisits'
        text={`Reset ${props.pageName.toUpperCase()} Visits`}
        onClick={() => {
          if (props.pageVisits[props.pageName]) delete props.pageVisits[props.pageName] 
          props.btnOnClick({...props.pageVisits})
        }}
        style={props.btnTheme}
      />
    </div>
  )
}