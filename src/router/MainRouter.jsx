import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "../auth";
import HomeRoutes from "../Pages/routes/HomeRoutes";
import { useAuthStore } from '../hooks';
import { useEffect } from "react";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";

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

            {/* <Routes> */}
            {/*  {
                    (status === 'not-authenticated')
                        ?
                        (
                            <>
                                ejemplo de ruta Publica
                                 <Route path="auth/login" element={<PublicRouter>
                                    <Login />
                                </PublicRouter>} />
                                <Route path="auth/*" element={< Login />} />
                                <Route path="/*" element={<Navigate to="auth/login" />} />
                            </>
                        )
                        :
                        (
                            <> ejemplo de ruta privada
                                 <Route path="/*" element={
                                    <PrivateRouter>
                                    <HomeRoutes />
                                </PrivateRouter>} />
                                <Route path="/*" element={< HomeRoutes />} />
                            </>
                        )

                } */}

            {/*  </Routes>*/}

            <Routes>
                {/* ejemplo de ruta Publica */}
                <Route path="auth/login" element={
                    <PublicRouter>
                        <Login />
                    </PublicRouter>} />

                {/* ejemplo de ruta privada */}
                <Route path="/*" element={
                    <PrivateRouter>
                        <HomeRoutes />
                    </PrivateRouter>} />
            </Routes>
        </>
    )
}
