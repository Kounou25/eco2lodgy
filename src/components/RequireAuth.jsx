import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const user = localStorage.getItem("user");

  if (!user) {
    console.log("⛔ Aucun utilisateur trouvé, redirection");
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  try {
    const parsedUser = JSON.parse(user);
    if (!parsedUser.id) {
      console.log("⛔ Utilisateur invalide, redirection");
      return <Navigate to="/login" state={{ from: location }} replace />;
    }

    console.log("✅ Utilisateur connecté :", parsedUser.username);
    return children;

  } catch (error) {
    console.log("⛔ Erreur de parsing localStorage, redirection");
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};

export default RequireAuth;
