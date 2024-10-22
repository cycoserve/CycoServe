import MetaTags from '@/components/headers/MetaData'
import RootLayout from '@/components/layouts/RootLayout'
import ServicesHero from '@/components/page/services/ServicesHero'
import React from 'react'

function ServicesPage() {
    return (
        <>
            <MetaTags
                title="Services - AI/ML Powered Digital Marketing Agency"
                description="CycoServe Labs is leading the way in open-source innovation, offering powerful tools for web development, AI, and data-driven technologies. Join us in making technology more accessible and open to innovators worldwide."
                url="https://cycoserve.com/company/services"
                imageUrl="https://cycoserve.com/assets/images/og-image.jpg"
            />
            <RootLayout>
                <ServicesHero />
            </RootLayout>
        </>
    )
}

export default ServicesPage