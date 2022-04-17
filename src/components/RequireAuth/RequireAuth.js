import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";

function RequireAuth({ children }) {
    const location = useLocation();

    if (!auth.currentUser) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}

export default RequireAuth;