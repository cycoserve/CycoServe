import PageEndHero from '@/components/elements/PageEndHero'
import SectionWrap from '@/components/elements/SectionWrap'
import RootLayout from '@/components/layouts/RootLayout'
import ResourcesGridComponent from '@/components/page/resources/ResourcesGridComponent'
import ResourcesHero from '@/components/page/resources/ResourcesHero'
import CompanyHero from '@/components/sections/heros/CompanyHero'
import React from 'react'

function ResourcesPage() {
    return (
        <>
            <RootLayout>
                <ResourcesHero />
            </RootLayout>
        </>

    )
}

export default ResourcesPage