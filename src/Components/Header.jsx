import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../Assets/logo.svg'
import { ReactComponent as Detalhe } from '../Assets/detalheAtivo.svg'
import { UserContext } from '../Contexts/UserContext'

const Header = () => {
  const { user, userLogout, menusair, setMenusair, menuadmin, setMenuadmin } = React.useContext(UserContext)
  // console.log(user);

  const toggleMenu = () => {
    setMenusair(!menusair)
  }
  const toggleMenuAdmin = () => {
    setMenuadmin(!menuadmin)
  }
  return (
    <>
      <header className={styles.header}>
        <nav className={`${styles.nav}`}>
          <Link className={styles.logo} to="/" aria-label="Logo - Home">
            <Logo /> Monitora
          </Link>

          {user ? (
            <div className={styles.menu}>
              <div className={styles.link}>
                <Link to="/colaborador">Colaborador</Link>
                <Link to="/descarte">Descarte</Link>
                <Link to="">Equipamento</Link>
                {user.is_admin ? (
                  <div className={styles.dropdown_menu}>
                    <Link to="#" onClick={toggleMenuAdmin}>
                      Admin
                      <Detalhe />
                    </Link>
                    {menuadmin && (
                      <div className={styles.submenu}>
                        <ul>
                          <li>
                            <Link to="#">Site</Link>
                          </li>
                          <li>
                            <Link to="/admin">Usuário</Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                ) : (
                  ''
                )}
              </div>
              <div className={styles.dropdown_menu}>
                <Link to="#" onClick={toggleMenu}>
                  {user.login}
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
            </div>
          ) : (
            <Link className={styles.login} to="/login">
              Login
            </Link>
          )}
        </nav>
      </header>
    </>
  )
}

export default Header
