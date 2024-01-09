import { Routes, Route } from "react-router-dom";
import { Login } from "../auth";
import HomeRoutes from "../pages/routes/HomeRoutes";
import { useAuthStore } from '../hooks';
import { useEffect } from "react";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";

export default function MainRouter() {

    const {status, checkAuthToken } = useAuthStore();

    useEffect(() => {
        checkAuthToken();
    }, [])

    if (status === 'checking') {
        return <h3>Cargando...</h3>
    }
    return (
        <>
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
