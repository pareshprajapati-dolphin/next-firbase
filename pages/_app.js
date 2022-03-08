import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";

import { RouteGuard } from "../components/routerGuard";
import "../styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next.js 11 - Basic HTTP Authentication Example</title>
      </Head>

      <RouteGuard>
        <Component {...pageProps} />
      </RouteGuard>
    </>
  );
}

export default App;
