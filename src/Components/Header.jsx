import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../Assets/logo.svg'
import { UserContext } from '../Contexts/UserContext'

const Header = () => {
  const { user, userLogout } = React.useContext(UserContext)
  // console.log(user);
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav}`}>
        <Link className={styles.logo} to="/" aria-label="Logo - Home">
          <Logo /> Monitora
        </Link>
        {user ? (
          <span className={styles.nome}>
            {user.nome}
            <button onClick={userLogout}>Sair</button>
          </span>
        ) : (
          <Link className={styles.login} to="/login">
            Login
          </Link>
        )}
      </nav>
    </header>
  )
}

export default Header
