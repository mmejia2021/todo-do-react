import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Login from './auth/Login'
import SignupPage from './Paginas/SignupPage'
import Home from './Paginas/Home'
import NavBar from './components/NavBar'
import { useState } from 'react'

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();


  function logout() {
     navigate("/");
  }

  return (
    <>

      <NavBar user={user} logout={logout} />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>

    </>
  )
}

export default App
