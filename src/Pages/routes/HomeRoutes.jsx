import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "../../ui/componentes/NavBar";
import Home from "../dashboard/Home";
import SignupPage from "../register/SignupPage";

export default function HomeRoutes() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="signup" element={< SignupPage />} />
                <Route path="home" element={< Home />} />
                <Route path="/*" element={<Navigate to="/home" />} />
            </Routes>
        </>
    )
}
