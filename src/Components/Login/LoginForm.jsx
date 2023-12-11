import React from 'react'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import useForm from '../../Hooks/useForm'
import { getUsuarios } from '../../services/api'
// import { Link } from 'react-router-dom'

const LoginForm = () => {
  const login = useForm('login')
  const password = useForm()
  // console.log(password.value)
  const user = async () => {
    const response = await getUsuarios()
    console.log(response)
  }
  function handleSubmit(envet) {
    envet.preventDefault()
    user()
  }
  return (
    <div>
      {/* <Link to="/">Monitora</Link> */}
      <section>
        <form onSubmit={handleSubmit}>
          <Input label="Login" type="text" name="login" {...login} />
          <Input label="Senha" type="password" name="password" {...password} />
          <Button>Entrar</Button>
        </form>
      </section>
    </div>
  )
}

export default LoginForm
