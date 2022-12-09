import React, { useContext } from 'react';
import { AiFillPlusSquare, AiFillMinusSquare } from 'react-icons/ai'
import { BsTrash} from 'react-icons/bs'
import { GlobalState } from '../store';

const shipping = 5.00 ;

const Cart = () => {

    const {bag, totalQty, totalPrice, removeToCart, removeQty, addQty} = useContext(GlobalState);

    return (
        <div className="min-h-[90vh] mt-24 mx-[8%]">
            <div className="flex items-center border-b pb-3 text-sm font-medium text-secondary px-4">
                <p className='w-[61%]'>Product</p>
                <div className="flex-1 flex justify-between items-center mr-[7%]">
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                </div>
            </div>
            <div className="">
                {
                    bag.map((product, idx) =>
                        <div key={idx} className="py-[30px] flex items-center border-b">
                            <div className="flex items-center w-[60%]">
                                <div className="w-[152px] h-[102px] border-b-2">
                                    <img className='w-full h-full object-contain' src={product.thumbnail} alt="" />
                                </div>
                                <p className='max-w-[504px] text-sm text-secondary ml-[30px]'>{product.title}</p>
                            </div>
                            <div className="flex-1 flex items-center justify-between">
                                <p className='text-sm text-[#222222] font-medium'>${product.price}</p>
                                <div className="flex items-center">
                                    <button onClick={()=> removeQty(idx)} className='text-2xl text-secondary'><AiFillMinusSquare /></button>
                                    <input className='max-w-[70px] px-5 text-center focus:outline-none' maxlength="3" value={product.qty} type="text" />
                                    <button onClick={()=> addQty(idx)} className='text-2xl text-secondary'><AiFillPlusSquare /></button>
                                </div>
                                <p className='w-24 text-sm text-[#222222] font-medium'>${(product.qty * product.price)}</p>
                            </div>
                            <div className="w-[7%] flex justify-end">
                                <button onClick={() => removeToCart(idx)}>
                                    <BsTrash className='text-2xl hover:text-primary ' />
                                </button>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className="py-[30px] px-4 flex items-center justify-end border-b">
                <p className='text-sm font-medium text-left'>Subtotal</p>
                <p className='w-24 text-sm font-medium text-right ml-[9.5%]'>${totalPrice.toFixed(2)}</p>
            </div>
            <div className="py-[30px] px-4 flex items-center justify-end border-b ">
                <p className='text-sm font-medium text-left'>Shipping</p>
                <p className='text-sm text-secondary text-left ml-[6%]'>Local Delivary <b>: ${shipping}</b></p>
            </div>
            <div className="py-[30px] px-4 flex items-center justify-end ">
                <p className='font-medium text-left'>Total</p>
                <p className='w-24 text-sm font-medium text-right ml-[11%]'>${(totalPrice + totalQty * shipping).toFixed(2)}</p>
            </div>
            <div className="text-right px-4 py-[30px]">
                <button className='uppercase font-medium text-sm px-10 py-2.5 hover:text-[#007bff] bg-[#e8f0f2]'>continue shipping</button>
                <button className='uppercase font-medium text-sm text-white px-8 py-2.5 bg-gradient-to-r from-primary to-orange bg-secondary'>proceed to checkout</button>
            </div>
        </div>
    )
};

export default Cart;