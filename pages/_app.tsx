import type { AppProps } from "next/app";
import Layout from "../components/layout/layout";
import "../sass/main.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
