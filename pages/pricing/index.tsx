"client"
import PricingTable from '@/components/elements/PricingTable'
import RootLayout from '@/components/layouts/RootLayout'
import React from 'react'

function PricingPage() {
    return (
        <>
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