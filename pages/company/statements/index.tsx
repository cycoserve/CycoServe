import MetaTags from '@/components/headers/MetaData'
import RootLayout from '@/components/layouts/RootLayout'
import StatementsHero from '@/components/sections/heros/StatementsHero'
import React from 'react'

function StatementsPage() {
    return (
        <>
            <MetaTags
                title=''
                description=''
                imageUrl=''
            />
            <RootLayout>
                <StatementsHero />
                <div>StatementsPage</div>
            </RootLayout>
        </>

    )
}

export default StatementsPage