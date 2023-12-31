import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Login from './Components/Login/Login'
import { UserStorage } from './Contexts/UserContext'
import Colaborador from './Components/Colaborador/Colaborador'
import Descarte from './Components/Descarte/Descarte'
import Administrador from './Components/Administrador/Administrador'
import ProtectedRoute from './Components/Helper/ProtectedRoute'
import ProtectedRouteAdmin from './Components/Helper/ProtectedRouteAdmin'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="colaborador/*"
              element={
                <ProtectedRoute>
                  <Colaborador />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="descarte/*"
              element={
                <ProtectedRoute>
                  <Descarte />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="admin/*"
              element={
                <ProtectedRouteAdmin>
                  <Administrador />
                </ProtectedRouteAdmin>
              }
            ></Route>
            <Route path="login/*" element={<Login />}></Route>
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  )
}

export default App
