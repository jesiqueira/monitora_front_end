import React from 'react'

const validacao = {
  tipo: {
    regex: /^[a-zA-Z]+$/,
    message: 'Somente letras são permitidas. ',
  },
}

const useFiltroForm = (type) => {
  const [value, setValor] = React.useState('')
  const [error, setError] = React.useState(null)

  function validate(value) {
    if (type === false) return true
    if (value.length === 0) {
      setError('Preencha um valor.')
      return false
    } else if (validacao[type] && !validacao[type].regex.test(value)) {
      setError(validacao[type].message)
      return false
    } else {
      setError(null)
      return true
    }
  }
  function onChange({ target }) {
    if (error) validate(target.value)
    setValor(target.value)
  }

  return {
    value,
    setValor,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  }
}

export default useFiltroForm
