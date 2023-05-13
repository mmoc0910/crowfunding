import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getToken } from "utils/auth";

export default function useAuthorization() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { refreshToken } = getToken();
  React.useEffect(() => {
    if (user === undefined && refreshToken === undefined) {
      navigate("/sign-in");
    } else {
      navigate("/");
    }
  }, [navigate, refreshToken, user]);
}
