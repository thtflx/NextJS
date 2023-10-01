import Link from "next/link";

async function getData(id: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: { // у Next js есть объект next, а у next есть revalidate (время запросов), tags
            revalidate: 60,
        }
    });

    return response.json();
}



type Props = {
    params: {
        id: string
    }
}

export async function generateMetadata({ params: { id } }: Props) {
    const post = await getData(id);

    return {
        title: post.title
    }
}

export default async function page({ params: { id } }: Props) {
    const post = await getData(id)

    return (
        <div className="flex justify-center min-h-screen">
            <div className='text-black pt-10 w-[600px]'>
                <Link href='/blog' className="py-1 px-2 border-black border-[2px]">BACK</Link>
                <h1 className="mt-5">Post page {id}</h1>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
        </div>
    )
}