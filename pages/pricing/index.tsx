"client"
import PricingTable from '@/components/elements/PricingTable'
import MetaTags from '@/components/headers/MetaData'
import RootLayout from '@/components/layouts/RootLayout'
import React from 'react'

function PricingPage() {
    return (
        <>
            <MetaTags
                title="Plans & Pricing - AI/ML Powered Digital Marketing Agency"
                description="CycoServe Labs is leading the way in open-source innovation, offering powerful tools for web development, AI, and data-driven technologies. Join us in making technology more accessible and open to innovators worldwide."
                url="https://cycoserve.com/company/pricing"
                imageUrl="https://cycoserve.com/assets/images/og-image.jpg"
            />
            <RootLayout>
                <div className="text-center pt-32">
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
                        Plans & <span className="bg-clip-text text-transparent bg-orange-500 ">Pricing</span>
                    </h1>
                </div>
                <div className='min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-zinc-900 to-black pb-24 px-4 lg:px-8'>

                    <PricingTable />
                </div>
            </RootLayout>
        </>
    )
}

export default PricingPage