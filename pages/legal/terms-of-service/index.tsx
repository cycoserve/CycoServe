import MetaTags from '@/components/headers/MetaData'
import RootLayout from '@/components/layouts/RootLayout'
import TOSComponent from '@/components/legal/TOSComponent'
import React from 'react'



function TermsOfService() {
    return (
        <>
            <MetaTags
                title="Terms Of Service - AI/ML Powered Digital Marketing Agency"
                description="CycoServe Labs is leading the way in open-source innovation, offering powerful tools for web development, AI, and data-driven technologies. Join us in making technology more accessible and open to innovators worldwide."
                url="https://cycoserve.com/company/terms-of-service"
                imageUrl="https://cycoserve.com/assets/images/og-image.jpg"
            />
            <RootLayout>
                <TOSComponent />
            </RootLayout>


        </>

    )
}

export default TermsOfService