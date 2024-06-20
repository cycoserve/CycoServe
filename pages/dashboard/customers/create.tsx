import DashboardPageTitle from '@/components/Dashboards/DashboardPageTitle'
import DashLayout from '@/components/Layouts/DashLayouts'
import SectionWrap from '@/components/elements/SectionWrap'
import React from 'react'
import withAuth from '@/utils/withAuth'
import CreateCustomerForm from '@/components/Dashboards/customer/CreateCustomerForm'


function Customers() {
    return (
        <>
            <DashLayout>
                <SectionWrap>
                    <div className="div flex items-center container lg:px-8 mx-auto ">
                        <DashboardPageTitle subtitle={'View, Add and Edit all products'}>
                            Add New Customer
                        </DashboardPageTitle>
                        {/* <CreateCustomer /> */}
                    </div>



                    <div className="div container lg:px-8 mx-auto h-full">
                        <CreateCustomerForm />
                    </div>
                </SectionWrap>
            </DashLayout>
        </>
    )
}

export default withAuth(Customers)