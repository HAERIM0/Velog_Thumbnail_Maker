import { RecoilRoot } from "recoil";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import PageTemplate from "../components/PageTemplate";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <PageTemplate>
        <Component {...pageProps} />
      </PageTemplate>
    </RecoilRoot>
  );
}

export default MyApp;
