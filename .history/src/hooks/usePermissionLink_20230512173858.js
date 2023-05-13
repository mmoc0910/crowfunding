import React from "react";
import { useSelector } from "react-redux";

export default function usePermissionLink({ permission, href }) {
  const { user, permissions } = useSelector((state) => state.auth);
  React.useEffect(() => {
    if (user) {
    }
  }, [user]);
}
