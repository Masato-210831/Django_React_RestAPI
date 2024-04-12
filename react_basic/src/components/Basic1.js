import React, {useState} from "react";

const Basic1 = () => {



  const [product, setProducts] = useState({name:'', price:''})

  return (
    <>
      <form >
        <input type="text" value={product.name} onChange={e => setProducts({...product, name: e.target.value})} />
        <input type="text" value={product.price} onChange={e => setProducts({...product, price: e.target.value})} />
      </form>
      <h1>Product name is {product.name}</h1>
      <h1>Product price is {product.price}</h1>
      <h1>Hello React2</h1>
    </>
  );
};

export default Basic1;
