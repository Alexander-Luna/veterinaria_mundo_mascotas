import React from 'react'
import { Route, Link, Navigate } from 'react-router-dom'
const Public = ({ component: Component, ...rest }) => {
  const userLogged = false

  if (userLogged) {
    return < Navigate to="/" />
  }

  return <Route {...rest} render={Component} />

}

export default Public