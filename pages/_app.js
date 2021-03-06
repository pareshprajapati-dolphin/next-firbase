import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouteGuard } from "../components/routerGuard";
import "../styles/globals.css";
import useFullPageLoader from "../hooks/useFullPageLoader";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { store } from "../store/store";
import { Provider, useDispatch, useSelector } from "react-redux";
import { signOut } from "../store/userSlice";

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
  }, [router, showLoader, hideLoader]);

  return (
    <>
      {/* <Head>
        <title>`${}Basic Authentication Example`</title>
      </Head> */}

      {/* <Head>
        <meta charset="UTF-8" />
        <meta name="keywords" content="titla, meta, nextjs" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
         <Head>
        <title>{`${Component.title} My page title`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="page title" />
        <meta property="og:title" content={`${Component.title} page`} /> 
      </Head> */}

      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      {loader}
    </>
  );
}

export default App;
