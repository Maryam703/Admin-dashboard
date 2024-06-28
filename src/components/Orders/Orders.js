import React from "react";
import "./Orders.css";
import Order from "../Api/OrdersApi";
import { Link } from "react-router-dom";

export default function Orders() {
  return (
    <>
      <div className="order-container">
       <div className="order-header">
        <div className="order-heading">#Orders</div>
        <Link to="/Modal" className="order-btn">Add Products</Link>
        </div>

        <table>
                <thead>
                <tr>
                  <th>Order-Id</th>
                  <th>Product</th>
                  <th>image</th>
                  <th>price</th>
                  <th>quantity</th>
                  <th>Adress</th>
                  <th>Status</th>
                </tr>
                </thead>
        {Order.map((item) => {
          return (
                <tbody>
                <tr>
                  <td>#{item.id}</td>
                  <td>{item.productName}</td>
                  <td className="img-container"><img className="order-img" src={item.image} alt={item.name}/></td>
                  <td>${item.price}</td>
                  <td>{item.quantity}</td>
                  <td>{item.Adress}</td>
                  <td>#{item.status}</td>
                </tr>
                </tbody>
              
          );
        })}
         </table>
      </div>
    </>
  );
}
