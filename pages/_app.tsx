import {
  ClerkProvider,
  RedirectToUserProfile,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider>
      {/* <SignedIn>
        <RedirectToUserProfile/>
      </SignedIn> */}
      <Component {...pageProps} />
    </ClerkProvider>
  );
}
