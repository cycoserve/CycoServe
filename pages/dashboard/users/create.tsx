import DashboardPageTitle from '@/components/Dashboards/DashboardPageTitle'
import DashLayout from '@/components/Layouts/DashLayouts'
import SectionWrap from '@/components/elements/SectionWrap'
import React from 'react'
import withAuth from '@/utils/withAuth'
import UserForm from '@/components/Dashboards/user/UserForm'
import { AuthContextProvider } from '@/contexts/AuthContext'


function CreateUserPage() {
    return (
        <>
            <DashLayout>
                <SectionWrap>
                    <div className="div flex items-center container lg:px-8  mx-auto ">
                        <DashboardPageTitle subtitle={'View, Add and Edit all users'}>
                            Add User
                        </DashboardPageTitle>
                        {/* <CreateUser /> */}
                    </div>

                    <div className="div container lg:px-8 bg-white rounded-lg mx-auto h-full">
                        <AuthContextProvider>
                                 <UserForm />
                        </AuthContextProvider>
                 
                    </div>
                </SectionWrap>
            </DashLayout>
        </>
    )
}

export default withAuth(CreateUserPage)
