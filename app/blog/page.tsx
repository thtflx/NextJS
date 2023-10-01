import { Metadata } from 'next'
import Link from 'next/link';

async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        next: { // у Next js есть объект next, а у next есть revalidate (время запросов), tags
            revalidate: 60,
        }
    });

    return response.json();
}


export const metadata: Metadata = {
    title: 'Blog | next'
}


export default async function page() {
    const posts = await getData();

    console.log(posts);

    return (
        <div className='flex justify-center pt-10'>
            <div className='bg-white text-black '>
                <h1 className='font-bold mb-2 text-2xl'>Blog page</h1>
                <ul className='list-disc'>
                    {posts.map((post: any) => (
                        <li key={post.id} className=''>
                            <Link href={`/blog/${post.id}`}>{post.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        
    )
}
