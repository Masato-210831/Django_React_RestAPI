import React, {useState} from 'react'

const Basic2 = () => {

  const [products, setProducts] = useState([])
 
  const newProduct = () => {
    setProducts([...products, {id:products.length, name:'hello react'}])
    // setProducts(products.push({id:products.length, name:'hello react'}))
  }

  return (
    <div>
      <button onClick={newProduct}>Add New Product</button>
      <ul>
        {products.map(product => <li key={product.id}>{product.name} id: {product.id}</li>)}
      </ul>
    </div>
  )
}

export default Basic2
