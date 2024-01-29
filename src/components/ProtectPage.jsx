import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export default function ProtectPage({ children, requiredAdmin }) {
  const { userInfo } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    // NOTE: 비로그인 redirect
    if (!userInfo) {
      navigate("/");
      return;
    }

    // NOTE: 어드민 redirect
    if (requiredAdmin && !userInfo.isAdmin) navigate("/");
  }, [userInfo, navigate, requiredAdmin]);

  // NOTE: Navigate 사용하는 방법도 있다!
  // if (!userInfo || (userInfo && !userInfo.isAdmin)) {
  //   return <Navigate to="/" replace />;
  // }

  return children;
}
