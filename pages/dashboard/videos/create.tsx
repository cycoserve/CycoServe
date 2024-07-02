import DashboardPageTitle from '@/components/Dashboards/DashboardPageTitle'
import DashLayout from '@/components/Layouts/DashLayouts'
import SectionWrap from '@/components/elements/SectionWrap'
import React from 'react'
import withAuth from '@/utils/withAuth'


function Customers() {
    return (
        <>
            <DashLayout>
                <SectionWrap>
                    <div className="div flex items-center container mx-auto ">
                        <DashboardPageTitle subtitle={'View, Add and Edit all products'}>
                            Add Product
                        </DashboardPageTitle>
                        {/* <CreateCustomer /> */}
                    </div>



                    <div className="div container bg-white rounded-lg mx-auto h-full">
                    
                    </div>
                </SectionWrap>
            </DashLayout>
        </>
    )
}

export default withAuth(Customers)