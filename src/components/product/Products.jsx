import React, { useContext, useEffect, useState } from 'react';
import { GlobalState } from '../../store';
import Card from './Card';
// import { products } from '../../data';

const Products = () => {

    const [products, setProducts] = useState([]);
    const {addToCart} = useContext(GlobalState)

    useEffect(() => {

        const fetchData = async () => {
            const prd = await fetch('https://fakestoreapi.com/products');
            const jsPrd = await prd.json();
            console.log(jsPrd);
            setProducts(jsPrd);
        };

        return () => fetchData();

    },[]);
    console.log(products);
    return (
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5 px-10">
            {
            products.map((product,idx) => 
                <Card
                    key={`product_${idx}`}
                    name={product.title}
                    price={product.price}
                    rPrice={product.regularPrice}
                    imgUrl={product.image}
                    handleAddToCart={() => addToCart({...product, qty: 1})}
                    singleViewLink={`/view/${product.id}`}
                />
            )
        }
        </div>
    )
};

export default Products;