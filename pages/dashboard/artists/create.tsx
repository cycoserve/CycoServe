import DashboardPageTitle from '@/components/Dashboards/DashboardPageTitle'
import DashLayout from '@/components/Layouts/DashLayouts'
import SectionWrap from '@/components/elements/SectionWrap'
import React from 'react'
import withAuth from '@/utils/withAuth'
import CreateArtistForm from '@/components/Dashboards/artist/CreateArtistForm'





function CreateArtist() {
    return (
        <>
            <DashLayout>
                <SectionWrap>
                    <div className="div flex items-center container lg:px-8 mx-auto ">
                        <DashboardPageTitle subtitle={'View, Add and Edit all products'}>
                            Add New Artist
                        </DashboardPageTitle>
                        {/* <CreateCustomer /> */}
                    </div>



                    <div className="div container lg:px-8 mx-auto h-full">
                       <CreateArtistForm />
                    </div>
                </SectionWrap>
            </DashLayout>
        </>
    )
}

export default withAuth(CreateArtist)