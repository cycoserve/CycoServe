import DashboardPageTitle from '@/components/Dashboards/DashboardPageTitle'
import ProductTable from '@/components/Dashboards/product/ProductTable'
import CreateProduct from '@/components/Dashboards/product/CreateProduct'
import DashLayout from '@/components/Layouts/DashLayouts'
import SectionWrap from '@/components/elements/SectionWrap'
import React from 'react'
import withAuth from '@/utils/withAuth'

function Products() {
    return (
        <>
            <DashLayout>
                <SectionWrap>
                    <div className="div flex items-center container lg:px-8 mx-auto ">
                        <DashboardPageTitle subtitle={'View, Add and Edit all products'}>
                            Products 
                        </DashboardPageTitle>
                        <CreateProduct />
                    </div>



                    <div className="div container lg:px-8 mx-auto h-full">
                        <ProductTable />
                    </div>
                </SectionWrap>
            </DashLayout>
        </>
    )
}

export default withAuth(Products)