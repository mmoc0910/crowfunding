import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useHistory } from "react-router-dom";
import { getToken } from "utils/auth";

export default function useAuthorization() {
  const navigate = useNavigate();
  const history = useHistory();

  const { user } = useSelector((state) => state.auth);
  const { refreshToken } = getToken();
  React.useEffect(() => {
    if (user === undefined && refreshToken === undefined) {
      navigate("/sign-in");
    } else {
      const previousPath = history.location.pathname;
      console.log("Previous path:", previousPath);
      navigate("/");
    }
  }, [navigate, refreshToken, user]);
}
