import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function useAuthorization() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  React.useEffect(() => {
    if (!user) {
      navigate("/sign-in");
    }
  }, [navigate, user]);
}
