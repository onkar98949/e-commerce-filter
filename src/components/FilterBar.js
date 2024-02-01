import React, { useState, useEffect } from 'react'

const FilterBar = ({ onSendProducts }) => {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState('');
    const [priceRange, setPriceRange] = useState(1500);
    const [discountRange, setDiscountRange] = useState(20);

    useEffect(() => {
        const fetchProducts = async () => {
            fetch('https://dummyjson.com/products?limit=28')
                .then(res => res.json())
                .then(response => {

                    let filteredProducts = response.products;
                    if (category === '') { setProducts(response.products); }
                    else {
                        filteredProducts = filteredProducts.filter(product => product.category === category);
                    }

                    if (priceRange > 0) {
                        filteredProducts = filteredProducts.filter(product => product.price <= priceRange);
                    }

                    if (discountRange > 0) {
                        filteredProducts = filteredProducts.filter(product => product.discountPercentage <= discountRange);
                    }

                    setProducts(filteredProducts);
                    onSendProducts(products);
                    
                });
        }
        fetchProducts();

    }, [category,priceRange,products])

    const handlefilter = (category) => {
        setCategory(category);
    }

    const handlePriceRangeChange = (e) => {
        setPriceRange(Number(e.target.value));
    };

    const handleDiscountRangeChange = (e) => {
        setDiscountRange(Number(e.target.value));
    };


    return (
        <div className='filter_container'>
            <h1 className='text-3xl text-center mt-3 mb-5 font-semibold'>Filters</h1>
            <div className='categories'>
                <h2 className='text-2xl mb-2 font-serif'>Categories</h2>
                <input type="radio" id="null" name="categories" value='' defaultChecked onChange={() => { handlefilter("") }} />
                <label className='text-lg m-1' for="html">All</label><br />
                <input type="radio" id="smartphones" name="categories" value="smartphones" onChange={() => { handlefilter("smartphones") }} />
                <label className='text-lg m-1' for="css">Smartphones</label><br />
                <input type="radio" id="laptops" name="categories" value="laptops" onChange={() => { handlefilter("laptops") }} />
                <label className='text-lg m-1' for="javascript">Laptops</label><br />
                <input type="radio" id="skincare" name="categories" value="skincare" onChange={() => { handlefilter("skincare") }} />
                <label className='text-lg m-1' for="css">Skin Care</label><br />
                <input type="radio" id="fragrances" name="categories" value="fragrances" onChange={() => { handlefilter("fragrances") }} />
                <label className='text-lg m-1' for="css">Fragrances</label><br />
                <input type="radio" id="groceries" name="categories" value="groceries" onChange={() => { handlefilter("groceries") }} />
                <label className='text-lg m-1' for="css">Groceries</label><br />
              
            </div>

            <label className='pricefilter'>
                <h2 className='text-2xl mb-2 font-serif'>Max Price:- ${priceRange}</h2>
                <input
                    type="range"
                    min="0"
                    max="1500"
                    step="30"
                    value={priceRange}
                    onChange={handlePriceRangeChange}
                />
            </label>

            <label className='pricefilter'>
                <h2 className='text-2xl mb-2 font-serif'>Max Discount:- {discountRange}%</h2>
                <input
                    type="range"
                    min="0"
                    max="20"
                    step="5"
                    value={discountRange}
                    onChange={handleDiscountRangeChange}
                />
            </label>

        </div>
    )
}

export default FilterBar