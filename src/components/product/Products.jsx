import React, { useContext, useEffect, useState } from 'react';
import { GlobalState } from '../../store';
import Card from './Card';
// import { products } from '../../data';

const Products = () => {

    const [products, setProducts] = useState([]);
    const {addToCart} = useContext(GlobalState)

    useEffect(() => {

        const fetchData = async () => {
            const prd = await fetch('https://dummyjson.com/products?limit=100');
            const jsPrd = await prd.json();
            setProducts(jsPrd.products);
        };

        return () => fetchData();

    },[]);
    
    console.log('Product', products)
    
    return (
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5 px-10">
            {
            products.map((product,idx) => 
                <Card
                    key={`product_${idx}`}
                    name={product.title}
                    price={product.price}
                    rPrice={product.regularPrice}
                    imgUrl={product.thumbnail}
                    handleAddToCart={() => addToCart({...product, qty: 1})}
                    singleViewLink={`/view/${product.id}`}
                />
            )
        }
        </div>
    )
};

export default Products;