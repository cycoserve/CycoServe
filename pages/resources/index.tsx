import PageEndHero from '@/components/elements/PageEndHero'
import SectionWrap from '@/components/elements/SectionWrap'
import MetaTags from '@/components/headers/MetaData'
import RootLayout from '@/components/layouts/RootLayout'
import ResourcesGridComponent from '@/components/page/resources/ResourcesGridComponent'
import ResourcesHero from '@/components/page/resources/ResourcesHero'
import CompanyHero from '@/components/sections/heros/CompanyHero'
import React from 'react'

function ResourcesPage() {
    return (
        <>
            <MetaTags
                title="Resources - AI/ML Powered Digital Marketing Agency"
                description="CycoServe Labs is leading the way in open-source innovation, offering powerful tools for web development, AI, and data-driven technologies. Join us in making technology more accessible and open to innovators worldwide."
                url="https://cycoserve.com/company/resources"
                imageUrl="https://cycoserve.com/assets/images/og-image.jpg"
            />
            <RootLayout>
                <ResourcesHero />
            </RootLayout>
        </>

    )
}

export default ResourcesPage