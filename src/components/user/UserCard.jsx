import React from 'react';

const USerCard = ({ imgUrl, id, firstname, age, gender, phone, email, height, username, password}) => {
    return (
        <div className="flex gap-5 items-center border border-solid py-3 pl-3 rounded-lg shadow-sm hover:shadow-md">
            <div className=" w-20 h-20 border">
                <img className='w-full h-full object-cover' src={imgUrl} alt="" />
            </div>
            <ul className="">
                <li className='text-sm'>
                    <span className='text-[#333]'>Id :</span>
                    <span className='text-secondary ml-2'>{id},</span> <br />
                </li>
                <li className='text-sm'>
                    <span className='text-[#333]'>Firstname :</span> <span className='text-secondary ml-2'>{firstname},</span>
                    <span className='text-[#333] ml-3'>Age :</span> <span className='text-secondary'>{age},</span>
                </li>
                <li className='text-sm'>
                    <span className='text-[#333]'>Gender :</span> <span className='text-secondary'>{gender},</span>
                    <span className='text-[#333] ml-3'>Height :</span> <span className='text-secondary'>{height},</span>
                </li>
                <li className='text-sm'>
                    <span className='text-[#333]'>Phone :</span> <span className='text-secondary'>{phone},</span> <br />
                    <span className='text-[#333]'>Email :</span> <span className='text-secondary'>{email},</span>
                </li>
                <li className='text-sm'>
                    <span className='text-[#333]'>Username :</span> <span className='text-secondary'>{username},</span> <br />
                    <span className='text-[#333]'>Password :</span> <span className='text-secondary'>{password},</span>
                </li>
            </ul>
        </div>
    )
};

export default USerCard;