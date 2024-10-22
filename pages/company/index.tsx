import MetaTags from '@/components/headers/MetaData'
import RootLayout from '@/components/layouts/RootLayout'
import CompanyHero from '@/components/sections/heros/CompanyHero'
import React from 'react'

function CompanyPage() {
    return (
        <>
            <MetaTags
                title="Compant Information - AI/ML Powered Digital Marketing Agency"
                description="CycoServe Labs is leading the way in open-source innovation, offering powerful tools for web development, AI, and data-driven technologies. Join us in making technology more accessible and open to innovators worldwide."
                url="https://cycoserve.com/company/"
                imageUrl="https://cycoserve.com/assets/images/og-image.jpg"
            />
            <RootLayout>
                <CompanyHero />
            </RootLayout>
        </>

    )
}

export default CompanyPage