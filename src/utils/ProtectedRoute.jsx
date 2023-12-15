import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ authenticated }) => {
    return authenticated ? <Outlet /> : <Navigate to="/Entrar" />;
}

export default ProtectedRoute