import Link from 'next/link'
import React, { FC } from 'react'

const TheHeader: FC = () => {
    return (
        <header className='flex justify-center gap-8 pt-5 pb-5 bg-black text-white'>
            <Link href='/'>Home</Link>
            <Link href='/blog'>Blog</Link>
            <Link href='/about'>About</Link>
        </header>
    )
}

export default TheHeader