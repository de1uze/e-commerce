import React, { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext();


const ProductProvider = ({ children }) => {

  const [products, setProducts] = useState([]);
  const [productQuery, setProductQuery] = useState("")

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    setProductQuery(e.target.value)
  }

  const filterProducts = products.filter(item => {
    if (productQuery) {
      if (productQuery === "men's clothing" || productQuery === "men" || productQuery === "me" || productQuery === "m") {
        return item.category === "men's clothing";
      }
      else if (productQuery === "women's clothing" || productQuery === "women" || productQuery === "wome" || productQuery === "wom"
        || productQuery === "wo" || productQuery === "w") {
        return item.category === "women's clothing";
      }
      else if (productQuery === "electronics" || productQuery === "electronics" || productQuery === "electronic" || productQuery === "electroni" || productQuery === "electron" || productQuery === "electro" || productQuery === "electr" || productQuery === "elect" || productQuery === "elec" || productQuery === "ele" || productQuery === "el" || productQuery === "e") {
        return item.category === "electronics";
      }
      else if (productQuery === "jewelery" || productQuery === "jeweler" || productQuery === "jewele" || productQuery === "jewel" || productQuery === "jewe" || productQuery === "jew" || productQuery === "je" || productQuery === "j") {
        return item.category === "jewelery";
      }
      else {
        return (

          <div className="w-full h-screen justify-center items-center flex">
            <div className="loader"></div>
          </div>

        )
      }
    }
    return true;
  });

  return <ProductContext.Provider value={
    { products, productQuery, setProductQuery, handleChange, filterProducts }
  }>
    {children}
  </ProductContext.Provider>
};

export default ProductProvider;
