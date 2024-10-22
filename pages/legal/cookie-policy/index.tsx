import MetaTags from '@/components/headers/MetaData'
import RootLayout from '@/components/layouts/RootLayout'
import CookiePolicyComponent from '@/components/legal/CookiePolicyComponent'
import React from 'react'



function CookiePolicy() {
    return (
        <>
            <MetaTags
                title="Cookie Policy - AI/ML Powered Digital Marketing Agency"
                description="CycoServe Labs is leading the way in open-source innovation, offering powerful tools for web development, AI, and data-driven technologies. Join us in making technology more accessible and open to innovators worldwide."
                url="https://cycoserve.com/company/cookie-policy"
                imageUrl="https://cycoserve.com/assets/images/og-image.jpg"
            />
            <RootLayout>
                <CookiePolicyComponent />
            </RootLayout>
        </>

    )
}

export default CookiePolicy