import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
  <>
  <div className="flex justify-center items-center pt-12 mx-auto w-full">
  <SignUp />
  </div>

  </>
  );
}