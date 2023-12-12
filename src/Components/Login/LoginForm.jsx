import React from 'react'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import useForm from '../../Hooks/useForm'
import { UserContext } from '../../Contexts/UserContext'
// import { Link } from 'react-router-dom'

const LoginForm = () => {
  const login = useForm('login') //Validacao do formulário se campos estão de acordo com a validação
  const password = useForm()

  const { userLogin, error, loading } = React.useContext(UserContext)

  function handleSubmit(envet) {
    envet.preventDefault()

    if (login.validate() && password.validate()) {
      userLogin(login.value, password.value)
    }
  }

  return (
    <div>
      {/* <Link to="/">Monitora</Link> */}
      <section>
        <form onSubmit={handleSubmit}>
          <Input label="Login" type="text" name="login" {...login} />
          <Input label="Senha" type="password" name="password" {...password} />

          {loading ? <Button disabled>Carregando....</Button> : <Button>Entrar</Button>}

          {error && <p>{error}</p>}
        </form>
      </section>
    </div>
  )
}

export default LoginForm
