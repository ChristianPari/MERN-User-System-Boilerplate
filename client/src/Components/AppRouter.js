// packages
import React from 'react'
import { Route, Switch } from 'react-router-dom'

// components
import Home from './Home'
import Login from './Login'
import Register from './Register'
import Button from './Button'

export default function AppRouter(props) {
  return (
    <Switch>

      <Route exact path='/' >
        <Home 
          theme={props.theme}
          themer={props.themer}
        />
      </Route>

      <Route exact path='/login' >
        <Login 
          theme={props.theme}
          themer={props.themer}
        />
      </Route>

      <Route exact path='/register' >
        <Register 
          theme={props.theme}
          themer={props.themer}
        />
      </Route>

      <Route path='/' >

        <div>
          <h1>404 Error</h1>

          <Button
            text={"Back to Home"}
            onClick={() => {window.location = window.location.origin}}
            style={props.theme === "light" ? "" : {
              color: "white",
              backgroundColor: "black",
              borderColor: 'white'
            }}
          />

        </div>

      </Route>

    </Switch>
  )
}