import React, { useState } from "react";
import Products from "../Api/ProductsApi";
import "./Product.css";
import Modal from "../Modal/Modal";
import Table from "../Table/Table";

export default function Product() {
  const [openModal, setOpenModal] = useState(false);
  const [productEditabe, setProductEditabe] = useState({});
  const TableHeadings = [
    "Id",
    "ProductName",
    "Image",
    "price",
    "quantity",
    "Adress",
    "Status",
  ];
  TableHeadings.splice(5, 2);
  const TableData = [...Products];

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
      <Table
        TableHeadings={TableHeadings}
        TableData={TableData}
        showEditBtn={true}
        Editdetails={Editdetails}
      />
      {openModal && (
        <Modal closeModal={CloseModal} productEditabe={productEditabe} />
      )}
    </div>
  );
}
