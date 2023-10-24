import { Route, Routes } from "react-router-dom";

import { Login } from '../auth';
import { ListRouter } from "../Pages";
const AppRouter = () => {

  const authStatus = 'checking';
  return (
    <>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<ListRouter />} />
      </Routes>
    </>
  )
}

export default AppRouter
