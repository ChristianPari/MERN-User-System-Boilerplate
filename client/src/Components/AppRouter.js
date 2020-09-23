// packages
import React from 'react'
import { Route, Switch } from 'react-router-dom'

// components
import Home from './Home'
import Login from './Login'
import Register from './Register'
import Button from './Button'
import { useTheme } from '../Hooks/themeContext'

// utils
import darkModeTheming from '../utils/darkModeTheming'

export default function AppRouter() {
  
  const darkTheme = useTheme()
  const themeStyles = darkModeTheming(darkTheme)

  return (
    <Switch>

      <Route exact path='/'>
        <Home />
      </Route>

      <Route exact path='/login'>
        <Login />
      </Route>

      <Route exact path='/register'>
        <Register />
      </Route>

      <Route path='/'>

        <div
          style={themeStyles.text}
        >
          <h1>404 Error</h1>

          <Button
            text={"Back to Home"}
            onClick={() => {window.location = window.location.origin}}
            style={themeStyles.btn}
          />
        </div>

      </Route>

    </Switch>
  )
}