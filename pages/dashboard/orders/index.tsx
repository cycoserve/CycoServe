import DashboardPageTitle from '@/components/Dashboards/DashboardPageTitle'
import CreateProduct from '@/components/Dashboards/product/CreateProduct'
import ProductTable from '@/components/Dashboards/product/ProductTable'
import DashLayout from '@/components/Layouts/DashLayouts'
import SectionWrap from '@/components/elements/SectionWrap'
import React from 'react'
import OrderTable from '@/components/Dashboards/order/OrderTable'
import CreateOrder from '@/components/Dashboards/order/CreateOrder'
import withAuth from '@/utils/withAuth'

function Orders() {
    return (
        <>
            <DashLayout>
            <SectionWrap>
                    <div className="div flex items-center container lg:px-8  mx-auto ">
                        <DashboardPageTitle subtitle={'View, Add and Edit all products'}>
                           Orders
                        </DashboardPageTitle>
                       <CreateOrder />
                    </div>
                    <div className="div container lg:px-8 px-0 mx-auto h-full">
                     <OrderTable />
                    </div>
                </SectionWrap>
            </DashLayout>
        </>
    )
}

export default withAuth(Orders)