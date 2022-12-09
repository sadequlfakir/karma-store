import React from 'react';
import {Products} from '../components'

const Home = () => {

    return (
        <div className="min-h-[95.2vh] mb-28 mt-20 mx-[10%]">
            <div className="my-12">
                <h1 className='text-center font-semibold text-4xl my-6'>Latest Products</h1>
            </div>
            {/* Latest Products 🔥 👇 */}
            <Products />
        </div>
    )
};

export default Home;