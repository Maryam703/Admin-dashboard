import React from 'react'
import Products from '../Api/ProductsApi'
import "./Product.css"

export default function Product() {
  return (
    <div className='product-container'>
      <div className='product-header'>
      <div className='product-heading'>#Products</div>
      </div>
      <table>
        <thead>
            <th>Product-Id</th>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Quantity</th>
        </thead>
        {Products.map((item) => {
            return(
                <tbody>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td className="img-container"><img className="order-img" src="{Order.image}" alt="image"/></td>
                    <td>${item.price}</td>
                    <td>{item.quantity}</td>
                </tbody>
            )
        })}
      </table>
    </div>
  )
}
