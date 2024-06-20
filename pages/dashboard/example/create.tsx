import DashboardPageTitle from '@/components/Dashboards/DashboardPageTitle'
import CreateProduct from '@/components/Dashboards/product/CreateProduct'
import ProductTable from '@/components/Dashboards/product/ProductTable'
import DashLayout from '@/components/Layouts/DashLayouts'
import SectionWrap from '@/components/elements/SectionWrap'
import React from 'react'
import CustomerTable from '@/components/Dashboards/customer/CustomerTable'
import CreateCustomer from '@/components/Dashboards/customer/CreateCustomer'
import withAuth from '@/utils/withAuth'
import ArticleForm from '@/components/Dashboards/article/CreateArticleForm'


function Customers() {
    return (
        <>
            <DashLayout>
                <SectionWrap>
                    <div className="div flex items-center container lg:px-8  mx-auto ">
                        <DashboardPageTitle subtitle={'View, Add and Edit all products'}>
                            Articles Plus
                        </DashboardPageTitle>
                        {/* <CreateCustomer /> */}
                    </div>



                    <div className="div container lg:px-8 bg-white rounded-lg mx-auto h-full">
                      <ArticleForm />
                    </div>
                </SectionWrap>
            </DashLayout>
        </>
    )
}

export default withAuth(Customers)