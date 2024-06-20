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

import CreateArticle from '@/components/Dashboards/article/CreateArticle'
// import UppercaseTable from '@/components/Dashboards/lowercase/UppercaseTable'

function Uppercase() {
    return (
        <>
            <DashLayout>
                <SectionWrap>
                    <div className="div flex items-center container shrink-0 lg:px-8 mx-auto ">
                        <DashboardPageTitle subtitle={'View, Add and Edit all products'}>
                            Uppercase
                        </DashboardPageTitle>
                        <CreateArticle />
                    </div>



                    <div className="div container lg:px-8 mx-auto h-full shrink-0">
                        {/* <UppercaseTable /> */}
                    </div>
                </SectionWrap>
            </DashLayout>
        </>
    )
}

export default withAuth(Uppercase)