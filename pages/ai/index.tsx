import SectionWrap from '@/components/elements/SectionWrap'
import RootLayout from '@/components/layouts/RootLayout'
import HomeHero from '@/components/sections/heros/HomeHero'
import React from 'react'

function AIPage() {
    return (
        <>
            <RootLayout>
                <HomeHero />
                <SectionWrap>
                          <div className='text-white'>Artificial Intelligence Applications</div> 
                </SectionWrap>
         
            </RootLayout>
        </>

    )
}

export default AIPage