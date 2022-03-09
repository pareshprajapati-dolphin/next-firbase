import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouteGuard } from "../components/routerGuard";
import "../styles/globals.css";
import useFullPageLoader from "../hooks/useFullPageLoader";
import { useEffect } from "react";
import { useRouter } from "next/router";

function App({ Component, pageProps }) {
  const [loader, showLoader, hideLoader] = useFullPageLoader();
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
      showLoader();
    };
    const handleComplete = () => {
      hideLoader();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  return (
    <>
      <Head>
        <title>Next.js -Basic Authentication Example</title>
      </Head>
      <RouteGuard>
        <Component {...pageProps} />
      </RouteGuard>

      {loader}
    </>
  );
}

export default App;
