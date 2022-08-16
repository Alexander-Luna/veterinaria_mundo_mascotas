import React from 'react'
import { Route, Link, Routes, BrowserRouter, Navigate, NavLink, Redirect } from 'react-router-dom'

const Protected = ({ component: Component, ...rest }) => {

  const userLogged = false

  if (!userLogged) {

    return <Navigate to="/login" />
  }

  return <Route {...rest} render={Component} />

}

export default Protected