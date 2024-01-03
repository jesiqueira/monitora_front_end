import React from 'react'
import styles from './Header.module.css'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Logo } from '../Assets/logo.svg'
import { ReactComponent as Detalhe } from '../Assets/detalheAtivo.svg'
import { UserContext } from '../Contexts/UserContext'

const Header = () => {
  const { user, userLogout, menusair, setMenusair, menuadmin, setMenuadmin } = React.useContext(UserContext)

  const toggleMenu = () => {
    setMenusair(!menusair)
  }
  const toggleMenuAdmin = () => {
    setMenuadmin(!menuadmin)
  }
  return (
    <header className={styles.header}>
      <NavLink className={styles.logo} to="/" end aria-label="Logo - Home">
        <Logo />
        <h1>Monitora</h1>
      </NavLink>
      {user ? (
        <nav className={styles.navegacao}>
          <div className={styles.links}>
            <NavLink to="/colaborador" className={(nav) => (nav.isActive ? styles.active : ' ')}>
              Colaborador
            </NavLink>
            <NavLink to="/descarte" className={(nav) => (nav.isActive ? styles.active : ' ')}>
              Descarte
            </NavLink>
            <NavLink to="/equipamento" className={(nav) => (nav.isActive ? styles.active : ' ')}>
              Equipamento
            </NavLink>
            {user.is_admin ? (
              <div className={styles.dropdown_menu}>
                {/* className={(nav) => (nav.isActive ? styles.active : ' ')} */}
                <NavLink
                  to="#"
                  onClick={() => {
                    toggleMenuAdmin()
                  }}
                  className={menuadmin ? styles.active : ''}
                >
                  Admin
                  <Detalhe />
                </NavLink>
                {menuadmin && (
                  <div className={styles.submenu}>
                    <ul>
                      <li>
                        <NavLink to="/site">Site</NavLink>
                      </li>
                      <li>
                        <NavLink to="/admin">Usuário</NavLink>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              ''
            )}
          </div>
          <div className={`${styles.dropdown_menu}`}>
            <NavLink
              to="#"
              onClick={() => {
                toggleMenu()
              }}
              className={menusair ? styles.active : ''}
            >
              {user.login}
              <Detalhe />
            </NavLink>
            {menusair && (
              <div className={styles.submenu}>
                <ul>
                  <li>
                    <NavLink to="#">Perfil</NavLink>
                  </li>
                  <li>
                    <NavLink to="#" end onClick={userLogout}>
                      Sair
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </nav>
      ) : (
        <NavLink className={styles.login} to="/login" end>
          Login
        </NavLink>
      )}
    </header>
  )
}

export default Header
