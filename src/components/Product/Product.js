import React, { useState } from "react";
import Products from "../Api/ProductsApi";
import "./Product.css";
import Modal from "../Modal/Modal";
import Table from "../Table/Table";

export default function Product() {
  const [openModal, setOpenModal] = useState(false);
  const [productEditable, setProductEditable] = useState(null);
  const TableHeadings = ["Id", "ProductName", "Image", "price", "quantity"];
  const TableData = [...Products];

  const OpenModal = () => {
    setOpenModal(true);
    setProductEditable(null);
  };

  const CloseModal = () => {
    setOpenModal(false);
    setProductEditable(null);
  };

  const Editdetails = (item) => {
    console.log(item);
    setProductEditable(item);
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
      <Table
        TableHeadings={TableHeadings}
        TableData={TableData}
        showEditBtn={true}
        Editdetails={Editdetails}
      />
      {openModal && (
        <Modal closeModal={CloseModal} productEditable={productEditable} />
      )}
    </div>
  );
}
