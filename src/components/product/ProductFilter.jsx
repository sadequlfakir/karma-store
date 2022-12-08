import React from 'react';

const ProductFilter = () => {
    return (
        <form method='GET'>
            <input 
                className='px-3 py-1.5 border border-primary rounded-md'
                placeholder='Search product' 
                name='search' 
                type="text" 
            />
            &nbsp;&nbsp;
            <button className='ml-3 border border-primary rounded-md border-solid px-4 py-1.5' type='submit'>Search</button>
        </form>
    )
};

export default ProductFilter;