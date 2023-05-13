import React from "react";
import { useSelector } from "react-redux";

export default function usePermissionLink({ permission, href }) {
  const [url, setUrl] = React.useState("");
  const { user, permissions } = useSelector((state) => state.auth);
  console.log(permissions);
  React.useEffect(() => {
    if (user) {
      if (permissions) {
        if (permissions.some((item) => item === permission)) setUrl(href);
        else setUrl("/abc");
      }
    } else {
      setUrl("/sign-in");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [permissions, user]);
  return url;
}
