import { Navigate, useLocation } from "react-router-dom";
import { useAuthStore } from "../hooks";

export const PrivateRouter = ({ children }) => {

    const { status } = useAuthStore();

    const {pathname, location} = useLocation();

    console.log(location);

    return (status === 'authenticated')
        ? children
        : <Navigate to='/auth/login' />
}

