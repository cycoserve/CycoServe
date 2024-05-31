import RootLayout from "@/components/Layouts/RootLayout";
import Spacer from "@/components/Spacer";
import HeaderSpace from "@/components/elements/HeaderSpace";
import { SignOutButton, UserProfile } from "@clerk/nextjs";

const UserProfilePage = () => (
    <>
        <RootLayout>
            <HeaderSpace />
            <div className="py-12 mb-4 flex flex-col justify-center items-center mx-auto">
                <UserProfile path="/user-profile" />
            </div>
            <Spacer />
        </RootLayout>
    </>

);

export default UserProfilePage;