// src/components/RequireAuth.jsx
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const location = useLocation();

  if (!user || !user.id) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
