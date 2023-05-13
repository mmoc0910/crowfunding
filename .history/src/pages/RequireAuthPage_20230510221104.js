import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getToken } from "utils/auth";

const RequireAuthPage = ({ children }) => {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);
  const { refreshToken } = getToken();
  React.useEffect(() => {
    if (user === undefined && refreshToken === undefined) {
      navigate("/sign-in");
    }
  }, [navigate, refreshToken, user]);
  return <>{children}</>;
};

export default RequireAuthPage;
