import React, { useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductFilter } from '../components'
import Card from '../components/product/Card';
import { GlobalState } from '../store';
import {BiLoaderAlt} from 'react-icons/bi'

const Shop = () => {

    const {addToCart} = useContext(GlobalState);

    // Add product from server 🔥 👇

    const [products, setProducts] = useState([]);
    const [filterdProducts, setFilter] = useState([]);

    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const prd = await fetch('https://dummyjson.com/products?limit=100');
            const jsPrd = await prd.json();
            setProducts(jsPrd.products);
            setLoading(false);
        };

        return () => fetchData();

    },[]);

    // Product filtering by Url 🔥 👇

    const [searchParams] = useSearchParams();
    const search = searchParams.get('search') === null ? '' : searchParams.get('search');
    
    const filterProducts = () => {
        if(search.length){
            setLoading(true);
            const filtered = products.filter(product => {
                return product.title.toLowerCase().includes(search.toLowerCase());
            });
            setFilter(filtered);
            setLoading(false)
        }
    };

    useEffect(() => {
       filterProducts();
    }, [products]);
    console.log("filterProducts", filterdProducts)


    return (
        <div className="min-h-[50vh] my-28 mx-[10%]">
            <div className="my-16 text-center">
                <ProductFilter />
            </div>
                {
                    loading ? 
                    <div className=" h-24 flex justify-center items-center">
                         <BiLoaderAlt className='text-3xl text-orange animate-spin' />  {/* Loading 🔥 👈 */}
                    </div>
                    : null
                }
                <div className="grid grid-cols-4 gap-5">
                    {   
                        (search.length >= 1) ? 
                        filterdProducts.length == 0 ? 
                        <div className="mt-24 col-span-4 text-center">
                            <p className='text-3xl font-bold'>Product Not found</p> {/* Poduct Not found Text 🔥 👈 */}
                        </div>
                        :filterdProducts?.map((product, idx) => {
                            const { title, price, thumbnail } = product;
                            return (
                                <Card
                                    key={`product_${idx}`}
                                    name={title}
                                    price={price}
                                    rPrice={product?.regularPrice ?? 0}
                                    imgUrl={thumbnail}
                                    handleAddToCart={() => addToCart({...product, qty: 1})}
                                    singleViewLink={`/view/${product.id}`}
                                />
                            )
                        })
                        :products.map((product,idx) => 
                            <Card
                                key={`product_${idx}`}
                                name={product.title}
                                price={product.price}
                                rPrice={product?.regularPrice ?? 0}
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

export default Shop;