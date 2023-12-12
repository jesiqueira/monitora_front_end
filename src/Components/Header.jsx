import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../Assets/logo.svg'
import { ReactComponent as Detalhe } from '../Assets/detalheAtivo.svg'
import { UserContext } from '../Contexts/UserContext'

const Header = () => {
  const { user, userLogout, menusair, setMenusair } = React.useContext(UserContext)
  // console.log(user);

  const toggleMenu = () => {
    setMenusair(!menusair)
  }
  return (
    <>
      <header className={styles.header}>
        <nav className={`${styles.nav}`}>
          <Link className={styles.logo} to="/" aria-label="Logo - Home">
            <Logo /> Monitora
          </Link>
          <div className={styles.menu}>
            <div className={styles.link}>
              <Link to="">Colaborador</Link>
              <Link to="">Descarte</Link>
              <Link to="">Equipamento</Link>
              <Link to="">Admin</Link>
            </div>
            {user ? (
              <div className={styles.dropdown_menu}>
                <Link to="#" onClick={toggleMenu}>
                  Edmar
                  <Detalhe />
                </Link>
                {menusair && (
                  <div className={styles.submenu}>
                    <ul>
                      <li>
                        <Link to="#" onClick={userLogout}>
                          Sair
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <Link className={styles.login} to="/login">
                Login
              </Link>
            )}
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
