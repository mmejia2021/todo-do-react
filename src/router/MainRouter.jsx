import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "../auth";
import HomeRoutes from "../Pages/routes/HomeRoutes";
import { useAuthStore } from '../hooks';
import { useEffect } from "react";

export default function MainRouter() {

const { status, checkAuthToken } = useAuthStore();
//const status2 = 'not-authenticated';

useEffect(() => {
    checkAuthToken();
  }, [])

if (status === 'checking') {
return <h3>Cargando...</h3>
}
    return (
        <>

            <Routes>
                {
                    (status === 'not-authenticated')
                        ?
                        (
                            <>
                                <Route path="auth/*" element={< Login />} />
                                <Route path="/*" element={<Navigate to="auth/login" />} />
                            </>
                        )
                        :
                        (
                            <>
                                <Route path="/*" element={< HomeRoutes />} />
                            </>
                        )

                    }
                    
            </Routes>
        </>
    )
}
