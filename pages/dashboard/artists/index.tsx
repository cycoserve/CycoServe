import DashboardPageTitle from '@/components/Dashboards/DashboardPageTitle'
import CreateProduct from '@/components/Dashboards/product/CreateProduct'
import DashLayout from '@/components/Layouts/DashLayouts'
import SectionWrap from '@/components/elements/SectionWrap'
import React from 'react'
import withAuth from '@/utils/withAuth'
import CreateArtistBtn from '@/components/Dashboards/artist/CreateArtistBtn'
import ArtistTable from '@/components/Dashboards/artist/ArtistTable'


function Artists() {
    return (
        <>
            <DashLayout>
                <SectionWrap>
                    <div className="div flex items-center container lg:px-8 mx-auto ">
                        <DashboardPageTitle subtitle={'View, Add and Edit all Artists'}>
                            All Artists
                        </DashboardPageTitle>
                       <CreateArtistBtn />
                    </div>



                    <div className="div container lg:px-8 mx-auto h-full">
                      <ArtistTable />
                    </div>
                </SectionWrap>
            </DashLayout>
        </>
    )
}

export default withAuth(Artists)