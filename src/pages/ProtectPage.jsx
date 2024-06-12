import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import Spinner from "../components/Spinner";

const ProtectPage = ({ children, requiredAdmin }) => {
  const { userInfo } = useAuthContext();

  if (userInfo === undefined) {
    return <Spinner text="로그인 정보를 확인중입니다!" />;
  } else if (userInfo === null || (requiredAdmin && !userInfo.isAdmin)) {
    return <Navigate to="/" replace />;
  } else {
    return children;
  }
};

export default ProtectPage;
