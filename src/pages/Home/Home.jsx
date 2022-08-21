import React, { useEffect } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import './Home.css';

function Home(props) {
  if (!props.error)
    return (
      <section className="product-page">
        <div className="container">
          {props.productList
            .filter(product =>
              product.title
                .toLowerCase()
                .includes(props.searchTerm.toLowerCase())
            )
            .map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </section>
    );
  return <div>{props.error}</div>;
}

export default Home;
