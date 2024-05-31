import DashboardPageTitle from '@/components/Dashboards/DashboardPageTitle'
import ProductTable from '@/components/Dashboards/ProductTable'
import DashLayout from '@/components/Layouts/DashLayouts'
import SectionWrap from '@/components/elements/SectionWrap'
import React from 'react'

function Products() {
    return (
        <>
            <DashLayout>
                <SectionWrap>
                
                        <DashboardPageTitle subtitle={'View, Add and Edit all products'}>
                            Products
                        </DashboardPageTitle>
            

                    <div className="div container px-4 border bg-white rounded-lg mx-auto h-full py-4">
                        <ProductTable />
                    </div>
                </SectionWrap>
            </DashLayout>
        </>
    )
}

export default Products