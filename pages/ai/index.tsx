import SectionWrap from '@/components/elements/SectionWrap'
import RootLayout from '@/components/Layouts/RootLayout'
import HomeHero from '@/components/Sections/HomeHero'
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