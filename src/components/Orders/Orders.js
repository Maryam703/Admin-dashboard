import React from "react";
import "./Orders.css";
import Order from "../Api/OrdersApi";

export default function Orders() {
  return (
    <>
      <div className="order-container">
       <div className="order-header">
        <div className="order-heading">#Orders</div>
        <button className="order-btn">Add Products</button>
        </div>

        <table>
                <thead>
                <tr>
                  <th>Order-Id</th>
                  <th>User</th>
                  <th>Product</th>
                  <th>image</th>
                  <th>price</th>
                  <th>quantity</th>
                  <th>Adress</th>
                  <th>Status</th>
                </tr>
                </thead>
        {Order.map((Order) => {
          return (
                <tbody>
                <tr>
                  <td>{Order.id}</td>
                  <td>{Order.userName}</td>
                  <td>{Order.productName}</td>
                  <td className="img-container"><img className="order-img" src="{Order.image}" alt="image"/></td>
                  <td>${Order.price}</td>
                  <td>{Order.quantity}</td>
                  <td>{Order.Adress}</td>
                  <td>#{Order.status}</td>
                </tr>
                </tbody>
              
          );
        })}
         </table>
      </div>
    </>
  );
}
