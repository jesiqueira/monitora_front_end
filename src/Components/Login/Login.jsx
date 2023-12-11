import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginForm from './LoginForm'

const Login = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
      </Routes>
    </div>
  )
}

export default Login
