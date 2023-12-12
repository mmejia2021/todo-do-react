import { Navigate } from "react-router-dom";
import { useAuthStore } from "../hooks";

export const PublicRouter = ({ children }) => {

    const { status } = useAuthStore();
    return (status === 'not-authenticated')
        ? children
        : <Navigate to='/home' />
}

