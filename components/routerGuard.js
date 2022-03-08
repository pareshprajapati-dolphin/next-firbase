import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export { RouteGuard };

function RouteGuard({ children }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    // on initial load - run auth check
    authCheck(router.asPath);
  }, []);

  function authCheck(url) {
    // redirect to login page if accessing a private page and not logged in
    const publicPaths = ["/login"];
    const path = url.split("?")[0];
    if (!localStorage.getItem("user") && !publicPaths.includes(path)) {
      setAuthorized(false);
      router.push({
        pathname: "/login",
      });
    } else {
      setAuthorized(true);
    }
  }

  return authorized && children;
}
