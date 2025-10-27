import { useContext } from "react";
import { useLocation, Navigate } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function ProtectedRouter({ children }) {
  const { isLoggedIn } = useContext(CurrentUserContext);
  const location = useLocation();

  if (isLoggedIn) {
    return children;
  }
  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
}
