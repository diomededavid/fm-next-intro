import {delay} from "@/lib/delay";


// Dynamically render content based off the params it's in


const getData = async (slug) => {
    const post = await delay(5000);
    return {slug};
}

export default async function BlogPost({params}) {
    const {slug} = params;
    const post = await getData(slug);

    return <>
        <div>{post.slug}</div>
    </>
}
