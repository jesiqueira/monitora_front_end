import React from 'react'

const FecharMenu = ({ menuToClose }) => {
  const fecharMenu = React.useCallback(() => {
    menuToClose.forEach((menu) => {
      menu(false)
    })
  }, [menuToClose])

  // Utilizando uma ref para rastrear se a função já foi chamada
  const fecharMenuChamadoRef = React.useRef(false)

  React.useEffect(() => {
    // Verifica se a função ainda não foi chamada
    if (!fecharMenuChamadoRef.current) {
      fecharMenu() // Fecha o menu na primeira renderização
      fecharMenuChamadoRef.current = true // Atualiza a ref para indicar que a função foi chamada
    }
  }, [fecharMenu])

  return null
}

export default FecharMenu
