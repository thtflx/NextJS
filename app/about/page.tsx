import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About | next ',
}

const page = () => {
    return (
        <div className='flex justify-center min-h-screen bg-white text-black pt-10'>Select subitem</div>
    )
}

export default page