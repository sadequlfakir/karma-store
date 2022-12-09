import React, { useEffect, useState } from 'react';
import BlogCard from '../components/blog/BlogCard';
import {BiLoaderAlt} from 'react-icons/bi'

const Blog = () => {

    const [ post, setPost ] = useState([]);

    const [loading, setLoading] = useState(false);

    useEffect(() => {

        const fetchBlogs = async () => {
            setLoading(true)
            const blogs = await fetch("https://dummyjson.com/posts")
            const jsPost = await blogs.json();
            setPost(jsPost.posts)
            setLoading(false)
        }

        return () => fetchBlogs();

    },[])

    return (
        <div className="min-h-[50vh] mb-28 mt-20 mx-[14%]">
            {
                loading ? 
                <div className=" h-24 flex justify-center items-center">
                        <BiLoaderAlt className='text-3xl text-orange animate-spin' />  {/* Loading 🔥 👈 */}
                </div>
                : null
            }
            {
                post.map((post, idx) => {
                    const { body, reactions, title, userId ,tags } = post;
                    return(
                        <BlogCard 
                            tag1={tags[0]}
                            tag2={tags[1]}
                            tag3={tags[2]}
                            userid={userId}
                            reaction={reactions}
                            title={title.slice(0, 39)}
                            body={body.slice(0, 209)}
                        />
                    )
                })
            }
        </div>
    )
};

export default Blog;