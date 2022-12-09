import React, { useContext, useEffect, useState } from 'react';
import Card from '../components/product/Card';
import { GlobalState } from '../store';
// import { items } from '../../data2';
// import { items } from '../data2';

const Test = () => {


    const [items, setItems] = useState([]);
    const {addToCart} = useContext(GlobalState);

    useEffect(() => {

        const fetchData = async () => {
            const itm = await fetch('https://dummyjson.com/products?limit=100')
            // setItems(await itm.json());
            const itms = await itm.json();
            setItems(itms.products);
        }

        return () => fetchData();

    },[]);
    

    return ( 
        <div className="min-h-[95.2vh] mb-28 mt-20 mx-[10%]">
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5 px-10">
                {
                    items.map((product,idx) => 
                        <Card
                            key={`product_${idx}`}
                            name={product.title}
                            price={product.price}
                            // rPrice={product.regularPrice}
                            imgUrl={product.thumbnail}
                            handleAddToCart={() => addToCart({...product, qty: 1})}
                            singleViewLink={`/view/${product.id}`}
                        />
                    )
                }
            </div>
        </div>
    )
};

export default Test;