import React from "react";
import { useSelector } from "react-redux";

export default function usePermissionLink({ permission, href }) {
  const [url, setUrl] = React.useState("");
  const { user, permissions } = useSelector((state) => state.auth);
  React.useEffect(() => {
    if (user) {
      if (permissions.some((item) => item === permission)) setUrl(href);
      else setUrl("/abc");
    } else {
      setUrl("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [permissions, user]);
  return url;
}
