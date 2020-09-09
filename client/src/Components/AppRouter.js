// packages
import React from 'react'
import { Route, Switch } from 'react-router-dom'

// components
import Home from './Home'
import Login from './Login'
import Register from './Register'

export default function AppRouter() {
    return (
      <Switch>
        <Route
          exact path='/'
        >
          <Home />
        </Route>
        <Route
          exact path='/login'
        >
          <Login />
        </Route>
        <Route
          exact path='/register'
        >
          <Register />
        </Route>
        <Route
          path='/'
        >
          <div>
            <h1>404 Error</h1>
            <a
              href={window.location.origin}
            >
              Back to Home
           </a>
          </div>
        </Route>
      </Switch>
  )
}
