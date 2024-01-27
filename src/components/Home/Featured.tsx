import React from 'react'
import { BlogCard } from './PostCard'
import { getAllPosts } from '@/services/posts'
import { Posts } from '@/typings/posts';

const Featured = async () => {
    const posts = await getAllPosts() as Posts;
    console.log(posts?.posts)
    return (
        <>
            <h2 className="text-3xl font-semibold">Featured</h2>
            <i>Some of the best performing posts...</i>

            <div className="flex flex-wrap justify-start gap-4 my-6">
                {posts?.posts ? posts.posts.map((post) => (
                    <BlogCard key={post._id} post={post} />
                )) : <></>}
            </div>
        </>
    )
}

export default Featured