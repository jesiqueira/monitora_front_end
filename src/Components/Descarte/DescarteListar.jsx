import React from 'react'
import styles from './DescarteListar.module.css'
import { ReactComponent as Restaurar } from '../../Assets/restaurar.svg'

const DescarteListar = () => {
  const [mostrarModal, setMostrarModal] = React.useState(false)
  const [confirmarcao, setConfirmacao] = React.useState(false)
 
  function modal() {
    const modal = document.querySelector('#confirmacao_restauro')
    modal.addEventListener('click', (e) => {
      if (e.target.id === 'confirmacao_restauro' || e.target.id === 'fechar') {
        setMostrarModal(false)
      }
    })
    setMostrarModal(true)
  }

  function botaoConfirmar () {
    setConfirmacao(true)
  }

  return (
    <>
    {console.log(confirmarcao)}
      <table className={styles.content}>
        <thead>
          <tr>
            <th>Patrimônio</th>
            <th>Serial</th>
            <th>Login</th>
            <th>Data</th>
            <th>Restaurar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>MSG0000012345</td>
            <td>FSD546216</td>
            <td>jesiqueira</td>
            <td>20/11/2015</td>
            <td>
              <span id="restaurar" onClick={modal}>
                <Restaurar />
              </span>
            </td>
          </tr>
          <tr>
            <td>MSG0000012347</td>
            <td>FSD546217</td>
            <td>jesiqueira</td>
            <td>23/11/2015</td>
            <td>
              <span>
                <Restaurar />
              </span>
            </td>
          </tr>
          <tr>
            <td>MSG0000012348</td>
            <td>FSD546218</td>
            <td>jesiqueira</td>
            <td>25/11/2015</td>
            <td>
              <span>
                <Restaurar />
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <div className={mostrarModal ? `${styles.modalContainer} ${styles.mostrar}` : `${styles.modalContainer}`} id="confirmacao_restauro">
        <div className={styles.modal}>
          <button className={styles.fechar} id="fechar">
            x
          </button>
          
          <div className={styles.conteudoModal}>
          <h3>Você tem certeza que deseja restaurar esse equipamento?</h3>
          <span className={styles.confirmar}  id='confirmacao' onClick={botaoConfirmar}>Confirmar</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default DescarteListar
