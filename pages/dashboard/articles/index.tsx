import DashboardPageTitle from '@/components/Dashboards/DashboardPageTitle'
import DashLayout from '@/components/Layouts/DashLayouts'
import SectionWrap from '@/components/elements/SectionWrap'
import React from 'react'
import withAuth from '@/utils/withAuth'
import CreateArticle from '@/components/Dashboards/article/CreateArticle'
import ArticlesTable from '@/components/Dashboards/article/ArticleTable'




function Customers() {
    return (
        <>
            <DashLayout>
                <SectionWrap>
                    <div className="div flex items-center container shrink-0 lg:px-8 mx-auto ">
                        <DashboardPageTitle subtitle={'View, Add and Edit all products'}>
                            Articles
                        </DashboardPageTitle>
                        <CreateArticle />
                    </div>



                    <div className="div container lg:px-8 mx-auto h-full shrink-0">
                        <ArticlesTable />
                    </div>
                </SectionWrap>
            </DashLayout>
        </>
    )
}

export default withAuth(Customers)