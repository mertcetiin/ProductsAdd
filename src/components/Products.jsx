import React, { useState } from 'react';

function Products() {
    const [count, setCount] = useState(0);
    const [products, setProducts] = useState(['Dress', 'Phone', 'Laptop']);
    const [filteredProducts, setFilteredProducts] = useState(products);

    const onCounter = () => {
        setCount((prev) => prev + 1);
    };

    const deCounter = () => {
        if (count > 0) {
            setCount((prev) => prev - 1);
        }
    };

    const handleFilterChange = (e) => {
        const filteredItems = products.filter((item) =>
            item.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setFilteredProducts(filteredItems);
    };

    return (
        <div>
            <input
                placeholder='Filter'
                onChange={handleFilterChange}
            />

            <div className='products-container'>
                {filteredProducts.map((item, id) => (
                    <div key={id} className='product'>
                        <h2>{item}</h2>
                        <button onClick={onCounter}>Add</button>
                        <button onClick={deCounter}>Clear</button>
                    </div>
                ))}
            </div>
            <br />
            <br />
            <span>{count}</span>
        </div>
    );
}

export default Products;