import React, { useEffect, useState } from 'react';
import './Products.css';
import ProductCard from '../../components/ProductCard/ProductCard';

function Products() {
  const [products, setProducts] = useState([]);

  function fetchData() {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="product-container">
      {products.map((prod) => {
        return (
          <ProductCard
          key={prod.id}
            image={prod.image}
            title={prod.title}
            price={prod.price}
            rate={prod.rating.rate}
            count={prod.rating.count}
            category={prod.category}
            description={prod.description}/>
        );
      })}
    </div>
  );
}

export default Products