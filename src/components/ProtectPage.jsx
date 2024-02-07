import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export default function ProtectPage({ children, requiredAdmin }) {
  const { userInfo } = useAuthContext();

  if (userInfo === undefined) {
    return <></>;
  } else if (userInfo === null || (requiredAdmin && !userInfo.isAdmin)) {
    return <Navigate to="/" replace />;
  } else {
    return children;
  }
}
