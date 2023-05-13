import React from "react";
import { useSelector } from "react-redux";

export default function usePermissionLink({ permission, href }) {
  const { user, permissions } = useSelector((state) => state.auth);
  React.useEffect(() => {
    if (user) {
      if (permissions.some((item) => item === permission)) return href;
      else return "/abc";
    } else {
      return "/login";
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [permissions, user]);
}
