import { Navigate, Route, Routes } from "react-router-dom"
import NavBar from "../../components/NavBar"
import Home from "../Home"
import SignupPage from "../SignupPage"

export const ListRoutes = () => {
  return (
    <>

      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </>
  )
}

export default ListRoutes
