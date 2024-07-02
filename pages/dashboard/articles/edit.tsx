import DashboardPageTitle from '@/components/Dashboards/DashboardPageTitle'
import DashLayout from '@/components/Layouts/DashLayouts'
import SectionWrap from '@/components/elements/SectionWrap'
import React from 'react'
import withAuth from '@/utils/withAuth'
import EditArticle from '@/components/Dashboards/article/EditArticle'


function Customers() {
    return (
        <>
            <DashLayout>
                <SectionWrap>
                    <div className="div flex items-center container mx-auto ">
                        <DashboardPageTitle subtitle={'View, Add and Edit all products'}>
                            Edit Article
                        </DashboardPageTitle>
                        {/* <CreateCustomer /> */}
                    </div>



                    <div className="div container px-4 border bg-white rounded-lg mx-auto h-full py-4">
                      <EditArticle />
                    </div>
                </SectionWrap>
            </DashLayout>
        </>
    )
}

export default withAuth(Customers)