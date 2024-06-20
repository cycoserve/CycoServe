import { AuthContextProvider } from "@/contexts/AuthContext";
import "@/styles/globals.css";
import "@/styles/noscript.css";



import '@fortawesome/fontawesome-svg-core/styles.css';
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
  <AuthContextProvider>
      <Component {...pageProps} />
  </AuthContextProvider>


  );
}
