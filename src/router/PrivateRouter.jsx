import { Navigate } from "react-router-dom";
import { useAuthStore } from "../hooks";

export const PrivateRouter = ({ children }) => {

    const { status } = useAuthStore();



    return (status === 'authenticated')
        ? children
        : <Navigate to='/auth/login' />
}

