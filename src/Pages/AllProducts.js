import React, { useEffect, useState } from 'react'
import { add } from '../store/cartSlice';
import { useDispatch } from 'react-redux';
import FilterBar from '../components/FilterBar';

const AllProducts = () => {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    const [isLoading,setIsLoading] = useState(true);

    const receiveProductsFromChild = (products) => {
        setProducts(products);  
        setIsLoading(false);
    };

    const handleAdd = (product) => {
        dispatch(add(product));
    }

    return (
        <div className='w-full'>
            <div className='flex'>
                <FilterBar onSendProducts={receiveProductsFromChild} />
                <div className='products_container'>
                    <h1 className='text-center font-sans font-semibold text-3xl mt-6'>PRODUCTS</h1>
                    <div className='productsWrapper'>

                        {!isLoading?(products.map((product) => (
                            <div className='card' key={product.id}>
                                <img src={product.thumbnail} alt='imageproduct' className='mx-auto' />
                                <h4>{product.title}</h4>
                                 <h5>${product.price} (<span className='text-yellow-500 text-sm'>{product.discountPercentage}%</span>)</h5>
                                <button className='btn' onClick={() => { handleAdd(product) }}>Add to Cart</button>
                            </div>
                        ))):(<p className='text-2xl'>Loading...</p>)}
                    </div>
                </div>
            </div>
            <br />
        </div>
    )
}

export default AllProducts