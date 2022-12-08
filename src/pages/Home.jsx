import React, { useContext } from 'react';
import {Products} from '../components'
import { GlobalState } from '../store';

const Home = () => {

    return (
        <div className="min-h-[95.2vh] my-28 mx-[10%]">
            <div className="">
                <h1 className='text-center font-semibold text-4xl my-6'>Latest Products</h1>
            </div>
            <Products />
        </div>
    )
};

export default Home;