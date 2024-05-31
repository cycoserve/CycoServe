import RootLayout from "@/components/Layouts/RootLayout";
import HeaderSpace from "@/components/elements/HeaderSpace";
import { RedirectToUserProfile, SignIn, SignedIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <>
     
        <HeaderSpace />
        <SignedIn>
          <RedirectToUserProfile />
        </SignedIn>
        <div className="div flex justify-center items-center z-20 py-20">
          <SignIn />
        </div>
 
    </>
  );
}