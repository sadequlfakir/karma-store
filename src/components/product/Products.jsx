import React from 'react';
import Card from './Card';
import { products } from '../../data';

const Products = ({addToCart}) => {
    return (
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5 px-10">
            {
            products.map((product,idx) => 
                <Card
                    key={`product_${idx}`}
                    name={product.name}
                    price={product.price}
                    rPrice={product.regularPrice}
                    imgUrl={product.imgUrl}
                    handleAddToCart={() => addToCart({...product, qty: 1})}
                    singleViewLink={`/view/${product.id}`}
                />
            )
        }
        </div>
    )
};

export default Products;