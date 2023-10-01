import Link from 'next/link';
import React from 'react'

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className='bg-white text-black pt-10'>
            <h1 className='text-2xl flex justify-center font-bold'>About us</h1>
            <ul className='flex justify-center gap-8 underline'>
                <li>
                    <Link href='/about/contact'>Contact</Link>
                </li>
                <li>
                    <Link href='/about/team'>Team</Link>
                </li>
            </ul>
            {children}
        </main>
    )
}