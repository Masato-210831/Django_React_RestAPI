import { useState } from "react"

const Basic2 = () => {

  const [products, setProducts] = useState([])
  console.log(products)
  const newProducts = () => {
    setProducts([...products, {
      id : products.length,
      name: 'Hello React'
    }])
  }
  
  return (
    <>
      <button onClick={newProducts} >Add New Product</button>   
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name} id:{product.id}</li>
        ))}
      </ul>
    </>
  )
}

export default Basic2
