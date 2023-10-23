import { Route, Routes } from "react-router-dom";

import { Login } from '../auth';
import { ListRouter } from "../Pages";
import { getEnvVaraibles } from '../helpers';
const AppRouter = () => {

  const authStatus = 'authenticated';
  console.log(getEnvVaraibles());
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
