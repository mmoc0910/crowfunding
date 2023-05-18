import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getToken } from "utils/auth";

const RequireAuthPage = ({ children }) => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  React.useEffect(() => {
    const { refreshToken } = getToken();
    if (user === undefined && refreshToken === undefined) {
      navigate("/sign-in");
    }
  }, [navigate, user]);
  if (!user) return null;
  return <>{children}</>;
};

export default React.memo(RequireAuthPage);
