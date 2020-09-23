import React from 'react'

// components
import Button from './Button'

// hooks
import useLocalStorage from '../Hooks/useLocalStorage'

export default function ResetVisits(props) {

  const [visits, setVisits] = useLocalStorage('visits', {})

  return (
    <div className='resets'>
      <Button 
        className='resetVisits'
        text={'Reset ALL Visits'}
        onClick={() => setVisits({})}
        style={props.btnTheme}
        />
      <Button 
        className='resetVisits'
        text={`Reset ${props.pageName.toUpperCase()} Visits`}
        onClick={() => {
          if (visits[props.pageName]) delete visits[props.pageName] 
          setVisits({...visits})
        }}
        style={props.btnTheme}
      />
    </div>
  )
}