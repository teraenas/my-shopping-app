import React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import { useSearch } from '../../components/SearchProvider/SearchProvider';
import './Home.css';

function Home({ productList, error }) {
  const { searchTerm } = useSearch();

  if (!error)
    return (
      <section className="product-page">
        <div className="container">
          {productList
            .filter(product =>
              product.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </section>
    );
  return (
    <section className="product-page">
      <div className="container">{error}</div>
    </section>
  );
}

export default Home;
