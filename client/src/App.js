import React from 'react'
import {connect} from 'react-redux'
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'

import {Offers, Upload, Login, BlogView} from './components'

let PrivateRoute = ({component: Component, isAuthenticated, ...rest}) =>
    <Route
        {...rest}
        render = {props =>
            isAuthenticated
            ? <Component {...props} />
            : <Redirect
                to = {{
                    pathname: "/login",
                    state: {from: props.location}
                }}
            />
        }
    />

const state2props = state => ({
    isAuthenticated: state.Auth.isAuthenticated
})

PrivateRoute = connect(state2props, null)(PrivateRoute)

function App() {
  return (<BrowserRouter><Switch>
      <PrivateRoute path="/upload" component={Upload} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/view/:id?" component={BlogView} />
      <PrivateRoute path="/:id?" component={Offers} />
      </Switch></BrowserRouter>
  )
}

export default App
