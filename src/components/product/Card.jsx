import React from 'react';
import {TfiReload} from 'react-icons/tfi'
import {BsHandbag, BsHeart, BsArrowsMove} from 'react-icons/bs'
import { Link } from 'react-router-dom';

const Card = ({ name, price, rPrice, imgUrl, handleAddToCart, singleViewLink }) => {
    return (
        <div className="max-w-[255px] overflow-hidden">
            <div className="group w-[255px] h-[271px] overflow-hidden select-none">
                <img className='w-full h-full scale-100 group-hover:scale-125 duration-700 ease-in-out object-contain' src={imgUrl} alt="" />
            </div>
            <div className="mt-5">
                <h6 className='uppercase min-h-[48px] max-h-12 overflow-hidden font-medium text-[#222222] '>{name}</h6>
                <div className="font-medium text-sm text-[#222222] mt-2">
                    <span className='mr-5'>${price}.00</span>
                    <span className='text-secondary line-through'>${rPrice}.00</span>
                </div>
                <div className="mt-3 flex gap-2 items-center text-sm mb-2 select-none">
                    <button onClick={handleAddToCart} className='flex items-center group w-[30px] hover:w-[114px] duration-500 relative overflow-hidden' >
                        <span className=" z-20 min-w-[30px] h-[30px] flex justify-center items-center bg-sky hover:bg-gradient-to-l from-orange to-primary text-white rounded-full">
                            <BsHandbag />
                        </span>
                        <span className='z-10 min-w-[85px] hidden group-hover:block pl-2 absolute group-hover:right-0 uppercase text-[#222222] text-xs font-medium '>add to cart</span>
                    </button>
                    <button to='/' className='flex items-center group w-[30px] hover:w-[95px] duration-500 relative overflow-hidden' >
                        <span className="z-20 min-w-[30px] h-[30px] flex justify-center items-center bg-sky hover:bg-gradient-to-l from-orange to-primary text-white rounded-full">
                            <BsHeart />
                        </span>
                        <span className='z-10 min-w-[65px] hidden group-hover:block pl-2 absolute group-hover:right-0 uppercase text-[#222222] text-xs font-medium'>wishlist</span>
                    </button>
                    <Link to='/' className='flex items-center group w-[30px] hover:w-[94px] duration-500 relative overflow-hidden' >
                        <span className="z-20 min-w-[30px] h-[30px] flex justify-center items-center bg-sky hover:bg-gradient-to-l from-orange to-primary text-white rounded-full">
                            <TfiReload />
                        </span>
                        <span className='z-10 min-w-[65px] hidden group-hover:block pl-2 absolute group-hover:right-0 uppercase text-[#222222] text-xs font-medium'>compare</span>
                    </Link>
                    <Link to={singleViewLink} className='flex items-center group w-[30px] hover:w-[114px] duration-500 relative overflow-hidden' >
                        <span className="z-20 min-w-[30px] h-[30px] flex justify-center items-center bg-sky hover:bg-gradient-to-l from-orange to-primary text-white rounded-full">
                            <BsArrowsMove />
                        </span>
                        <span className='z-10 min-w-[85px] hidden group-hover:block pl-2 absolute group-hover:right-0 uppercase text-[#222222] text-xs font-medium'>view more</span>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default Card;