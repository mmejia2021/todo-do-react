import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from '../auth';
import { ListRoutes, useAuthStore } from "../Pages";
import { useEffect } from "react";
const AppRouter = () => {

  //const authStatus = 'checking';
  //const authStatus = 'not-authenticated';

  const { status, checkAuthToken } = useAuthStore();

  useEffect(() => {
    checkAuthToken();
  }, [])
/*   if (status === 'checking') {
 
  } */

  return (
    <>
      <Routes>
        {
          (status === 'not-authenticated')
            ?(
              <>
              <Route path='/auth/*' element={< Login />} />
              <Route path='/' element={<Navigate to='/auth/login' />} />
              </>
            )
            :
            <>
              <Route path='*' element={<ListRoutes />} />
              <Route path='/*' element={<Navigate to='/' />} />
            </>
        }
      </Routes>
    </>
  )
}

export default AppRouter
