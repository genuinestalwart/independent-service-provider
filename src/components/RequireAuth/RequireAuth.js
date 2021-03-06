import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function RequireAuth({ children }) {
    const location = useLocation();
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/register" state={{ from: location }} replace />;
    }

    return children;
}

export default RequireAuth;