import DashboardPageTitle from '@/components/Dashboards/DashboardPageTitle'
import DashLayout from '@/components/Layouts/DashLayouts'
import SectionWrap from '@/components/elements/SectionWrap'
import React from 'react'
import CustomerTable from '@/components/Dashboards/customer/CustomerTable'
import CreateCustomer from '@/components/Dashboards/customer/CreateCustomer'
import withAuth from '@/utils/withAuth'

function Customers() {
    return (
        <>
            <DashLayout>
            <SectionWrap>
                    <div className="div flex items-center container lg:px-8 mx-auto ">
                        <DashboardPageTitle subtitle={'View, Add and Edit all products'}>
                           Customers
                        </DashboardPageTitle>
                        <CreateCustomer />
                    </div>



                    <div className=" container lg:px-8 mx-auto h-full">
                       <CustomerTable />
                    </div>
                </SectionWrap>
            </DashLayout>
        </>
    )
}

export default withAuth(Customers)