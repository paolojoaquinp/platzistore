import "../styles/globals.css";
import type { AppProps } from "next/app";
import AppContext from "@context/AppContext";
import useInitialState from "@hooks/useInitialState";
import Header from "@components/Header";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <Head>
        <title>React Shop</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}
