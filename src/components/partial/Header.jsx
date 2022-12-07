import React, { useContext } from 'react';
import { Link,NavLink } from 'react-router-dom';
import {BsFillHandbagFill, BsSearch} from 'react-icons/bs'
import { GlobalState } from '../../store';

const Header = () => {

    const {totalQty} = useContext(GlobalState)

    return (
        <div className=" mt-[40px] py-4 px-[2%] mx-[8%] shadow-[0_10px_30px_rgb(0,0,0,10%)] flex justify-between items-center">
            <div className="w-[137px] h-[50px]">
                <Link to='/' >
                    <img className='object-cover' src="/img/logo.webp" alt="" />
                </Link>
            </div>
            <div className="flex items-center gap-12">
                <ul className='flex gap-12 text-xs font-medium items-center uppercase'>
                    <li className='hover:text-primary '>
                        <NavLink style={({isActive}) => ({color: isActive ? '#ffba00' : 'black'})} to='/'>Home</NavLink>
                    </li>
                    <li className='hover:text-primary'>
                        <NavLink style={({isActive}) => ({color: isActive ? '#ffba00' : 'black'}) } to='shop'>Shop</NavLink>
                    </li>
                    <li className='hover:text-primary'>
                        <NavLink style={({isActive}) => ({color: isActive ? '#ffba00' : 'black'})} to='blog'>Blog</NavLink>
                    </li>
                    <li className='hover:text-primary'>
                        <NavLink style={({isActive}) => ({color: isActive ? '#ffba00' : 'black'})} to='pages'>Pages</NavLink>
                    </li>
                    <li className='hover:text-primary'>
                        <NavLink style={({isActive}) => ({color: isActive ? '#ffba00' : 'black'})} to='contact'>Contact</NavLink>
                    </li>
                </ul>
                <div className="flex gap-6 text-[#555] items-center">
                    <div className="relative">
                        <span className='w-[18px] h-[18px] absolute -top-2 -left-5 flex justify-center items-center text-xs rounded-full bg-primary text-white'>{totalQty}</span>
                        <Link to='cart'>
                            <button className='hover:text-primary'><BsFillHandbagFill /></button>
                        </Link>
                    </div>
                    <button className='hover:text-primary'><BsSearch /></button>
                </div>
            </div>
        </div>
    )
};

export default Header;