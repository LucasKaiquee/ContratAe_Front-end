import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
    const authenticated = sessionStorage.getItem("authenticated")
    return authenticated === "true" ? <Outlet /> : <Navigate to="/Entrar" />;
}

export default ProtectedRoute