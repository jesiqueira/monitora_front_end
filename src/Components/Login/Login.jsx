import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginForm from './LoginForm'
import { UserContext } from '../../Contexts/UserContext'
import styles from './Login.module.css'

const Login = () => {
  const { logado } = React.useContext(UserContext)
  if (logado === true) return <Navigate to="/" />

  return (
    <section className={`${styles.login} container`}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
        </Routes>
      </div>
    </section>
  )
}

export default Login
