import React, { useEffect, useState } from "react";
import "./Product.css";
import Modal from "../Modal/Modal";
import Table from "../Table/Table";
import {
  collection,
  getDocs,
} from "firebase/firestore";
import { db } from "../../Config/FirebaseConfig";

export default function Product() {
  const [openModal, setOpenModal] = useState(false);
  const [productEditable, setProductEditable] = useState(null);
  const [product, setProduct] = useState([]);
  const TableHeadings = [
    "Product-Id",
    "ProductName",
    "price",
    "quantity",
    "Image",
    "Category",
  ];

  useEffect(() => {
    let fetchData = async () => {
      let docRef = collection(db, "products");

      try {
        const querySnapshot = await getDocs(docRef);
        let Product = [];
        querySnapshot.forEach((items) =>
          Product.push({ ...items.data(), id: items.id })
        );

        setProduct(Product);
      } catch (error) {}
    };
    fetchData();
  }, []);

  const TableData = [...product];

  const OpenModal = () => {
    setOpenModal(true);
    setProductEditable(null);
  };

  const CloseModal = () => {
    setOpenModal(false);
    setProductEditable(null);
  };

  const Editdetails = (item) => {
    setProductEditable(item);
    setOpenModal(true);
  };

  return (
    <>
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
          showDetailBtn={false}
        />
        {openModal && (
          <Modal closeModal={CloseModal} productEditable={productEditable} />
        )}
      </div>
    </>
  );
}
