import MetaTags from '@/components/headers/MetaData'
import RootLayout from '@/components/layouts/RootLayout'
import PrivacyPolicyComponent from '@/components/legal/PrivacyPolicyComponent'
import React from 'react'


function PrivacyPolicy() {
    return (
        <>
            <MetaTags
                title="Privacy Policy - AI/ML Powered Digital Marketing Agency"
                description="CycoServe Labs is leading the way in open-source innovation, offering powerful tools for web development, AI, and data-driven technologies. Join us in making technology more accessible and open to innovators worldwide."
                url="https://cycoserve.com/company/privacy-policy"
                imageUrl="https://cycoserve.com/assets/images/og-image.jpg"
            />
            <RootLayout>
                <PrivacyPolicyComponent />
            </RootLayout>
        </>

    )
}

export default PrivacyPolicy