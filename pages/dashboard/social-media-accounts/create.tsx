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
import CreateProductForm from '@/components/Dashboards/product/CreateForm'
import ProductForm from '@/components/Dashboards/product/CreateProductForm'


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
                        <ProductForm />
                    </div>
                </SectionWrap>
            </DashLayout>
        </>
    )
}

export default withAuth(Customers)