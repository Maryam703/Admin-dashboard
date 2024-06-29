import React, { useState } from "react";
import Products from "../Api/ProductsApi";
import "./Product.css";
import Modal from "../Modal/Modal";

export default function Product() {
  const [openModal, setOpenModal] = useState(false);
  const [productEditabe, setProductEditabe] = useState({});

  const OpenModal = () => {
    setOpenModal(true);
    setProductEditabe(null);
  };

  const CloseModal = () => {
    setOpenModal(false);
    setProductEditabe(null);
  };

  const Editdetails = (item) => {
    setProductEditabe(item);
    setOpenModal(true);
  };

  return (
    <div className="product-container">
      <div className="product-header">
        <div className="product-heading">#Products</div>
        <button className="product-btn" onClick={OpenModal}>
          Add Products
        </button>
      </div>
      <table>
        <thead>
          <th>Product-Id</th>
          <th>Name</th>
          <th>Image</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Edit Details</th>
        </thead>
        {Products.map((item) => {
          return (
            <tbody>
              <tr key={item.id}>
                <td>#{item.id}</td>
                <td>{item.name}</td>
                <td className="img-container">
                  <img className="order-img" src={item.image} alt={item.name} />
                </td>
                <td>${item.price}</td>
                <td>{item.quantity}</td>
                <td>
                  <button
                    className="edit-btn"
                    onClick={() => Editdetails(item)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
      {openModal && (
        <Modal closeModal={CloseModal} productEditabe={productEditabe} />
      )}
    </div>
  );
}
