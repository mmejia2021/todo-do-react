import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "../../components/NavBar";
import SignupPage from "../SignupPage";
import Home from '../Home';

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
