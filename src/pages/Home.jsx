import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import Product from "../components/Product";
import Hero from "../components/Hero"

const Home = () => {

  const { filterProducts } = useContext(ProductContext);

  return (
    <div>
      <Hero />
      <section className='py-16'>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-7 max-w-sm mx-auto md:max-w-none md:mx-0">
            {
              filterProducts ? (
                filterProducts.map((product) => (
                  <Product product={product} key={product.id} />
                ))
              )
                :
                (
                  <div className="w-full h-screen justify-center items-center flex">
                    <div className="loader"></div>
                  </div>
                )
            }
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
