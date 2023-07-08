'use client' // client component by adding to top, by default Next is using server components by default
import React from "react";
import Link from "next/link";

import {useRouter} from "next/navigation";


// Can use node file and serve
export default function Contact() {
    const router = useRouter()

    return (
        <>
            <h1>Contact</h1>
            <Link href="/">Home</Link>
            {/*Can only do if client component. Must  specify the 'use client' tags at head of page */}
            <button onClick={() => router.push('/blog/abcdf')}>Blog Post</button>
        </>
    )
}
