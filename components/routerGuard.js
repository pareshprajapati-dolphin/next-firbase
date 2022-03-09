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
    const publicPaths = ["/login", "/register"];
    const path = url.split("?")[0];
    if (!localStorage.getItem("user") && !publicPaths.includes(path)) {
      setAuthorized(false);
      if (path === "/login") {
        router.push("/login");
      } else router.push("/register");
    } else {
      setAuthorized(true);
    }
  }

  return authorized && children;
}
