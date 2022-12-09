import React from 'react';
import { Link } from 'react-router-dom';
import { BiUser } from 'react-icons/bi'
import { AiOutlineEye, AiOutlineCalendar, AiOutlineLike } from 'react-icons/ai'

const BlogCard = ({ tag1, tag2, tag3, tag4, userid, reaction, imgUrl, title, body }) => {
    return (
        <div className="flex gap-8 mb-5">
            <div className="w-[140px] pt-[30px]">
                <p className='max-w-[140px] text-right'>
                    <Link to='/' className='text-[#333] hover:text-secondary'>{tag1}, </Link>
                    <Link to='/' className='text-orange hover:text-secondary'>{tag2}, </Link>
                    <Link to='/' className='text-[#333] hover:text-secondary'>{tag3}, </Link>
                    <Link to='/' className='text-[#333] hover:text-secondary'>{tag4}</Link>
                </p>
                <ul className='pt-5'>
                    <li className='flex justify-end text-sm text-[#333] pb-4'> <p>UserId : {userid}</p> <BiUser className='ml-3 text-xl' /></li>
                    <li className='flex justify-end text-sm text-[#333] pb-4'> <p>12 Dec, 2018</p> <AiOutlineCalendar className='ml-3 text-xl' /></li>
                    <li className='flex justify-end text-sm text-[#333] pb-4'><p>1.2M Views</p> <AiOutlineEye className='ml-3 text-xl' /></li>
                    <li className='flex justify-end items-center text-sm text-[#333] pb-4'> <p>{reaction}</p> <AiOutlineLike className='ml-3 text-xl' /></li>
                </ul>
            </div>
            <div className="">
                <div className="w-[540px] h-[272px]">
                    <img className='w-full h-full object-cover' src='/img/blog-cover.webp' alt="" />
                </div> 
                <div className="pt-5">
                    <Link to='/'>
                        <h2 className='text-2xl font-semibold hover:text-orange transition-all duration-300'>{title}</h2>
                    </Link>
                    <p className='max-w-[540px] text-sm leading-6 text-[#777777] mt-2'>
                        {body}
                    </p>
                    <Link to='/' className='uppercase inline-block text-xs text-[#333] hover:text-orange px-[30px] py-2 border border-solid  mt-6'> view more</Link>
                </div>
            </div>
        </div>
    )
};

export default BlogCard;