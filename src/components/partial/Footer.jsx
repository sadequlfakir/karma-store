import React from 'react';
import {FaLongArrowAltRight} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className="bg-[#222222] px-[10%] py-[100px]">
            <div className="flex gap-6 text-white">
                <div className="w-[285px]">
                    <h2 className='text-lg font-semibold'>About Us</h2>
                    <p className='mt-6 text-sm text-[#777777] leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, numquam? Laboriosam quo dolore qui atque illo, dolorum fugiat.</p>
                </div>
                <div className="w-[320px]">
                    <h2 className='text-lg font-semibold'>Newsletter</h2>
                    <p className='mt-6 text-sm text-[#777777]'>Stay update with our latest</p>
                    <div className="flex items-center h-9 mt-4">
                        <input className='text-sm px-5 py-2 w-[280px] focus:outline-none' type="email" placeholder='Enter email' name="" id="" />
                        <button className='bg-orange h-full px-3.5 bg-gradient-to-l from-orange to-primary'><FaLongArrowAltRight /></button>
                    </div>
                </div>
                <div className="w-[305px]">
                    <h2 className='text-lg font-semibold'>Instragram Feed </h2>
                </div>
                <div className="flex-1">
                    <h2 className='text-lg font-semibold'>Follow Us</h2>
                    <p className='mt-6 text-sm text-[#777777]'>Let us be social</p>
                </div>
            </div>
            <p className='text-center text-secondary text-sm mt-20'>Copyright &copy; 2022 All rights reserved | This template is made with 🧡 by <span className='text-primary'>Sadequl</span></p>
        </div>
    )
};

export default Footer;