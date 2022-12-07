import { createContext, useEffect, useState } from "react";

export const GlobalState = createContext();

//  save data in localStorage 👇

const getCarts = () => {
    let cartsData = localStorage.getItem('carts')
    if(cartsData){
        return JSON.parse(localStorage.getItem('carts'))
    }else{
        return [];
    }
}


const Provider = ({children}) => {

    const [bag, setBag] = useState(getCarts());

    useEffect(() => {
        localStorage.setItem("carts", JSON.stringify(bag))
    }, [bag]);

    const addToCart = (product) => {
        const oldBag = [...bag]
        const productIndex = oldBag.findIndex((pd) => pd.id === product.id );
        if(productIndex < 0){
            setBag([...oldBag, product])
        }else{
            oldBag[productIndex].qty += 1;
            setBag(oldBag)
        }
    };
    // const removeToCart = (index) => {
    //     const updateCart = [...bag]
    //     const item = updateCart[index]
    //     if(item.qty > 1){
    //         item.qty -= 1;
    //     }else{
    //        setBag(prev => [...prev.filter((_,idx) => idx !== index)])
    //     }
    // };
    
    const removeToCart = (index) => {
        setBag(bag.filter((_,idx) => idx !== index))
    }
    const totalPrice = bag.reduce((acc,pd) => acc + (pd.price * pd.qty),0);
    const totalQty = bag.reduce((acc,pd) => acc + pd.qty ,0);

    

    const addQty = (index) => {
        const updateQty = [...bag]
        const itm = updateQty[index]
        if(itm.qty < 10){
            itm.qty += 1;
            setBag(updateQty)
        }
    }
    const removeQty = (index) => {
        const updateQty = [...bag]
        const itm = updateQty[index]
        if(itm.qty > 1){
            itm.qty -= 1;
            setBag(updateQty)
        }
    }

    return (
        <GlobalState.Provider
            value={{
                bag,
                setBag,
                addToCart,
                totalPrice,
                totalQty,
                removeToCart,
                addQty,
                removeQty
            }}
        >
            {children}
        </GlobalState.Provider>
    )
}

export default Provider;