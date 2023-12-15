import React from 'react'
import styles from './Descarte.module.css'
import { UserContext } from '../../Contexts/UserContext'
import FecharMenu from '../Helper/FecharMenu'

const Descarte = () => {
  const { setMenuadmin, setMenusair } = React.useContext(UserContext)
  const menuClose = [setMenusair, setMenuadmin]
  return (
    <div className={styles.descarte}>
      <FecharMenu menuToClose={menuClose} />
      Descartes
    </div>
  )
}

export default Descarte
