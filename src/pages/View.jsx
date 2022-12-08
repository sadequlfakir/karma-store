import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiFillPlusSquare, AiFillMinusSquare, AiFillStar } from 'react-icons/ai'
import {SlDiamond} from 'react-icons/sl'
import {BsHeart} from 'react-icons/bs'
// import { products } from '../data'; // import default product 🔥 👈
import { GlobalState } from '../store';

const View = () => {

    const [product, setProduct] = useState({});

    useEffect(() => {

        const fetchPData = async () => {
            const sprd = await fetch(`https://fakestoreapi.com/products/${id}`)
            const jsSprd = await sprd.json();
            setProduct(jsSprd);
        }
        
        return () => fetchPData()

    }, [])

    // show single Product without api 🔥 👇

    //const { id } = useParams();
    //const [product, setProduct] = useState({});

    // useEffect(() => {
    //     const filtered = products.filter(product => product.id == id )

    //     if(filtered.length) {
    //         setProduct(filtered[0]);
    //     }
    // }, []);

    const [qty, setQty] = useState(1);
    const onChangeH = (e) => setQty(e.target.value);
    const [tab, setTab] = useState('description');
    const {addToCart} = useContext(GlobalState)

    return (
        <div className="min-h-[60vh] mx-[8%] my-20">
            {
                product !== null &&
                    <div className="flex gap-10">
                        <div className="w-[540px] h-[580px]">
                            <img className='w-full h-full object-contain' src={product.image} alt="" />
                        </div>
                        <div className=" mt-24">
                            <h1 className='text-2xl text-[#333] font-medium'>{product.title}</h1>
                            <h2 className='text-2xl text-primary font-bold mt-2'>${product.price}</h2>
                            <ul className='py-4 border-b'>
                                <li className="flex items-center gap-[38px]">
                                    <p className='text-sm text-[#444]'>Category</p>
                                    <p className=' text-sm text-orange'>: Shoe</p>
                                </li>
                                <li className="flex items-center gap-8 mt-1.5">
                                    <p className='text-sm text-[#444]'>Availibility</p>
                                    <p className='text-sm text-[#444]'>: In Stock</p>
                                </li>
                            </ul>
                            <p className='max-w-[460px] text-secondary text-sm leading-6 py-4'>
                                Mill Oil is an innovative oil filled radiator with the most modern technology. If you are looking for something that can make your interior look awesome, and at the same time give you the pleasant warm feeling during the winter.
                            </p>
                            <div className="">
                                <div className="flex items-center mt-10">
                                    <p className='mr-2 text-secondary'>Quantity:</p>
                                    <div className="flex items-center">
                                        <button disabled={qty <= 1} onClick={() => setQty(prev => prev -1)} className='text-2xl text-secondary'><AiFillMinusSquare /></button>
                                        <input className='max-w-[60px] px-3 text-center focus:outline-none' maxlength="3" onChange={onChangeH} value={qty} type="text" />
                                        <button onClick={() => setQty(prev => prev +1)} className='text-2xl text-secondary'><AiFillPlusSquare /></button>
                                    </div>
                                </div>
                                <div className=" mt-7 flex items-center gap-2.5">
                                    <button onClick={() => addToCart({...product, qty:Number(qty)})} className='uppercase text-white px-12 py-2.5 font-medium text-sm rounded-md bg-gradient-to-r from-primary to-orange'>add to cart</button>
                                    <button className='w-10 h-10 flex items-center justify-center text-sm rounded-full bg-sky hover:bg-gradient-to-r from-primary to-orange text-white'><SlDiamond /></button>
                                    <button className='w-10 h-10 flex items-center justify-center text-sm rounded-full bg-sky hover:bg-gradient-to-r from-primary to-orange text-white'><BsHeart /></button>
                                </div>
                            </div>
                        </div>
                    </div>
            }
            <div className="my-14 border">
                <div className="flex gap-4 items-center justify-center text-xs py-2.5 bg-[#e8f0f2] ">
                    <button onClick={() => setTab('description')} className={`px-[30px] py-3 bg-white border ${tab === 'description' ? ' bg-gradient-to-r from-primary to-orange ' : ''}`} >Description</button>
                    <button onClick={() => setTab('specifiaction')} className={`px-[30px] py-3 bg-white border ${tab === 'specifiaction' ? ' bg-gradient-to-r from-primary to-orange ' : ''}`}>Specification</button>
                    <button onClick={() => setTab('comments')} className={`px-[30px] py-3 bg-white border ${tab === 'comments' ? ' bg-gradient-to-r from-primary to-orange ' : ''}`}>Comments</button>
                    <button onClick={() => setTab('reviews')} className={`px-[30px] py-3 bg-white border ${tab === 'reviews' ? ' bg-gradient-to-r from-primary to-orange ' : ''}`}>Reviews</button>
                </div>
                <div className="p-[30px]">
                    <div className={`${tab === 'description' ? 'block' : 'hidden'}`}>
                        <p className='text-sm text-secondary leading-6 mb-4'>
                            Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s pictures feature women of all shapes and sizes enjoying themselves .Born between the two world wars, Beryl Cook eventually left Kendrick School in Reading at the age of 15, where she went to secretarial school and then into an insurance office. After moving to London and then Hampton, she eventually married her next door neighbour from Reading, John Cook. He was an officer in the Merchant Navy and after he left the sea in 1956, they bought a pub for a year before John took a job in Southern Rhodesia with a motor company. Beryl bought their young son a box of watercolours, and when showing him how to use it, she decided that she herself quite enjoyed painting. John subsequently bought her a child’s painting set for her birthday and it was with this that she produced her first significant work, a half-length portrait of a dark-skinned lady with a vacant expression and large drooping breasts. It was aptly named ‘Hangover’ by Beryl’s husband and
                            <br />
                            <br />
                            It is often frustrating to attempt to plan meals that are designed for one. Despite this fact, we are seeing more and more recipe books and Internet websites that are dedicated to the act of cooking for one. Divorce and the death of spouses or grown children leaving for college are all reasons that someone accustomed to cooking for more than one would suddenly need to learn how to adjust all the cooking practices utilized before into a streamlined plan of cooking that is more efficient for one person creating less
                        </p>
                    </div>
                    <ul className={`${tab === 'specifiaction' ? 'block' : 'hidden'}`}>
                        <li className='py-3.5 px-16 flex items-center'>
                            <p className='w-1/2 text-sm text-secondary'>Width</p>
                            <p className='w-1/2 text-sm text-secondary'>128mm</p>
                        </li>
                        <li className='py-3.5 px-16 flex items-center border-t'>
                            <p className='w-1/2 text-sm text-secondary'>Height</p>
                            <p className='w-1/2 text-sm text-secondary'>508mm</p>
                        </li>
                        <li className='py-3.5 px-16 flex items-center border-t'>
                            <p className='w-1/2 text-sm text-secondary'>Depth</p>
                            <p className='w-1/2 text-sm text-secondary'>85mm</p>
                        </li>
                        <li className='py-3.5 px-16 flex items-center border-t'>
                            <p className='w-1/2 text-sm text-secondary'>Weight</p>
                            <p className='w-1/2 text-sm text-secondary'>52gm</p>
                        </li>
                        <li className='py-3.5 px-16 flex items-center border-t'>
                            <p className='w-1/2 text-sm text-secondary'>Quality checking</p>
                            <p className='w-1/2 text-sm text-secondary'>yes</p>
                        </li>
                        <li className='py-3.5 px-16 flex items-center border-t'>
                            <p className='w-1/2 text-sm text-secondary'>Freshness Duration</p>
                            <p className='w-1/2 text-sm text-secondary'>03days</p>
                        </li>
                        <li className='py-3.5 px-16 flex items-center border-t'>
                            <p className='w-1/2 text-sm text-secondary'>When packeting</p>
                            <p className='w-1/2 text-sm text-secondary'>Without touch of hand</p>
                        </li>
                        <li className='py-3.5 px-16 flex items-center border-t'>
                            <p className='w-1/2 text-sm text-secondary'>Each Box contains</p>
                            <p className='w-1/2 text-sm text-secondary'>60pcs</p>
                        </li>
                    </ul>
                    <div className={`${tab === 'comments' ? 'block' : 'hidden'}`}>
                        <div className="w-[48%]">
                            <div className="">
                                <div className="">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <div className="w-[70px] h-[71px] rounded-full bg-sky">
                                                <img className='w-full h-full rounded-full object-cover' src="/review-1.webp" alt="" />
                                            </div>
                                            <div className="ml-4">
                                                <h6 className='text-sm font-medium text-[#222]'>Blake Ruiz</h6>
                                                <p className='text-xs font-medium text-[#777777] mt-1.5'>12th Feb, 2018 at 05:56 pm</p>
                                            </div>
                                        </div>
                                        <button className='px-[28px] py-1.5 rounded-2xl border border-solid border-[#e0e0e0] hover:border-primary hover:bg-primary hover:text-white text-sm text-[#222]'>Reply</button>
                                    </div>
                                    <p className='text-sm text-secondary leading-6 py-3'> 
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    </p>
                                </div>
                                <div className="pl-[28px]">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <div className="w-[70px] h-[71px] rounded-full bg-sky">
                                                <img className='w-full h-full rounded-full object-cover' src="/review-2.webp" alt="" />
                                            </div>
                                            <div className="ml-4">
                                                <h6 className='text-sm font-medium text-[#222]'>Blake Ruiz</h6>
                                                <p className='text-xs font-medium text-[#777777] mt-1.5'>12th Feb, 2018 at 05:56 pm</p>
                                            </div>
                                        </div>
                                        <button className='px-[28px] py-1.5 rounded-2xl border border-solid border-[#e0e0e0] hover:border-primary hover:bg-primary hover:text-white text-sm text-[#222]'>Reply</button>
                                    </div>
                                    <p className='max-w-[93%] text-sm text-secondary leading-6 py-3'> 
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    </p>
                                </div>
                                <div className="">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <div className="w-[70px] h-[71px] rounded-full bg-sky">
                                                <img className='w-full h-full rounded-full object-cover' src="/review-3.webp" alt="" />
                                            </div>
                                            <div className="ml-4">
                                                <h6 className='text-sm font-medium text-[#222]'>Blake Ruiz</h6>
                                                <p className='text-xs font-medium text-[#777777] mt-1.5'>12th Feb, 2018 at 05:56 pm</p>
                                            </div>
                                        </div>
                                        <button className='px-[28px] py-1.5 rounded-2xl border border-solid border-[#e0e0e0] hover:border-primary hover:bg-primary hover:text-white text-sm text-[#222]'>Reply</button>
                                    </div>
                                    <p className='text-sm text-secondary leading-6 py-3'> 
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${tab === 'reviews' ? 'block' : 'hidden'}`}>
                        <div className="w-[48%]">
                            <div className="flex gap-9">
                                <div className="w-[240px] py-5 bg-[#e8f0f2] text-center ">
                                    <h1 className='text-2xl font-medium'>Overall</h1>
                                    <h2 className='text-5xl font-bold bg-gradient-to-r from-primary to-orange bg-clip-text text-transparent	 mt-1'>4.0</h2>
                                    <p className='text-sm text-secondary font-medium mt-2'>(03 Reviews)</p>
                                </div>
                                <div className="">
                                    <h3 className='text-lg font-semibold text-[#333]'>Based on 3 Reviews</h3>
                                    <ul className='mt-2'>
                                        <li className='flex items-center text-sm text-secondary mt-1'>
                                            <p className='mr-0.5'>5 Star </p>
                                            <p className='flex items-center'>
                                                <AiFillStar className='text-primary' />
                                                <AiFillStar className='text-primary' />
                                                <AiFillStar className='text-primary' />
                                                <AiFillStar className='text-primary' />
                                                <AiFillStar className='text-primary' />
                                            </p>
                                            <p className='ml-0.5'> 01 </p>
                                        </li>
                                        <li className='flex items-center text-sm text-secondary mt-1'>
                                            <p className='mr-0.5'>4 Star </p>
                                            <p className='flex items-center'>
                                                <AiFillStar className='text-primary' />
                                                <AiFillStar className='text-primary' />
                                                <AiFillStar className='text-primary' />
                                                <AiFillStar className='text-primary' />
                                                <AiFillStar className='text-primary' />
                                            </p>
                                            <p className='ml-0.5'> 01 </p>
                                        </li>
                                        <li className='flex items-center text-sm text-secondary mt-1'>
                                            <p className='mr-0.5'>3 Star </p>
                                            <p className='flex items-center'>
                                                <AiFillStar className='text-primary' />
                                                <AiFillStar className='text-primary' />
                                                <AiFillStar className='text-primary' />
                                                <AiFillStar className='text-primary' />
                                                <AiFillStar className='text-primary' />
                                            </p>
                                            <p className='ml-0.5'> 01 </p>
                                        </li>
                                        <li className='flex items-center text-sm text-secondary mt-1'>
                                            <p className='mr-0.5'>2 Star </p>
                                            <p className='flex items-center'>
                                                <AiFillStar className='text-primary' />
                                                <AiFillStar className='text-primary' />
                                                <AiFillStar className='text-primary' />
                                                <AiFillStar className='text-primary' />
                                                <AiFillStar className='text-primary' />
                                            </p>
                                            <p className='ml-0.5'> 01 </p>
                                        </li>
                                        <li className='flex items-center text-sm text-secondary mt-1'>
                                            <p className='mr-0.5'>1 Star </p>
                                            <p className='flex items-center'>
                                                <AiFillStar className='text-primary' />
                                                <AiFillStar className='text-primary' />
                                                <AiFillStar className='text-primary' />
                                                <AiFillStar className='text-primary' />
                                                <AiFillStar className='text-primary' />
                                            </p>
                                            <p className='ml-0.5'> 01 </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-9">
                                <div className="">
                                        <div className="flex items-center">
                                            <div className="w-[70px] h-[71px] rounded-full bg-sky">
                                                <img className='w-full h-full rounded-full object-cover' src="/review-1.webp" alt="" />
                                            </div>
                                            <div className="ml-4">
                                                <h6 className='text-sm font-medium text-[#222]'>Blake Ruiz</h6>
                                                <p className=' flex items-center font-medium text-[#777777] mt-1.5'>
                                                    <AiFillStar className='text-primary' />
                                                    <AiFillStar className='text-primary' />
                                                    <AiFillStar className='text-primary' />
                                                    <AiFillStar className='text-primary' />
                                                    <AiFillStar className='text-primary' />
                                                </p>
                                            </div>
                                        </div>
                                    <p className='text-sm text-secondary leading-6 py-3'> 
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    </p>
                                </div>
                                <div className="">
                                        <div className="flex items-center">
                                            <div className="w-[70px] h-[71px] rounded-full bg-sky">
                                                <img className='w-full h-full rounded-full object-cover' src="/review-2.webp" alt="" />
                                            </div>
                                            <div className="ml-4">
                                                <h6 className='text-sm font-medium text-[#222]'>Blake Ruiz</h6>
                                                <p className=' flex items-center font-medium text-[#777777] mt-1.5'>
                                                    <AiFillStar className='text-primary' />
                                                    <AiFillStar className='text-primary' />
                                                    <AiFillStar className='text-primary' />
                                                    <AiFillStar className='text-primary' />
                                                    <AiFillStar className='text-primary' />
                                                </p>
                                            </div>
                                        </div>
                                    <p className='text-sm text-secondary leading-6 py-3'> 
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    </p>
                                </div>
                                <div className="">
                                        <div className="flex items-center">
                                            <div className="w-[70px] h-[71px] rounded-full bg-sky">
                                                <img className='w-full h-full rounded-full object-cover' src="/review-3.webp" alt="" />
                                            </div>
                                            <div className="ml-4">
                                                <h6 className='text-sm font-medium text-[#222]'>Blake Ruiz</h6>
                                                <p className=' flex items-center font-medium text-[#777777] mt-1.5'>
                                                    <AiFillStar className='text-primary' />
                                                    <AiFillStar className='text-primary' />
                                                    <AiFillStar className='text-primary' />
                                                    <AiFillStar className='text-primary' />
                                                    <AiFillStar className='text-primary' />
                                                </p>
                                            </div>
                                        </div>
                                    <p className='text-sm text-secondary leading-6 py-3'> 
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default View;