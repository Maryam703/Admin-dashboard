import React, { useState } from "react";
import "./Modal.css";
import { Form, Link } from "react-router-dom";
import Products from "../Api/ProductsApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Modal() {
  const [name, setName] = useState("");
  const [id, setId] = useState();
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();
  const [file, setFile] = useState(null)

  const Handlefile = (e) => {
    const file = e.target.files[0];
    setFile(file);
  }

  const HandleForm = (e) => {
    e.preventDefault();

    toast.success("Product Added Successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    const data = {
      id: id,
      name: name,
      image: file,
      price: price,
      quantity: quantity,
    };
    Products.push(data);
  };
  return (
    <Form className="modal-container" onSubmit={HandleForm}>
      <div className="modal-box">
        <Link to="/Orders" className="cross-box">
          <i class="fa-solid fa-xmark"></i>
        </Link>
        <div className="heading">#Add Items</div>

        <label>Product Name:</label>
        <input
          type="text"
          name="name"
          required
          value={name}
          placeholder="Enter Product Name"
          onChange={(e) => setName(e.target.value)}
        />

        <label>Product Id:</label>
        <input
          type="number"
          name="id"
          required
          placeholder="#id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />

        <label>Product Image:</label>
        <input 
        type="file" 
        required 
        name="file" 
        onChange={Handlefile}
        />

        <label>Product Price:</label>
        <input
          type="number"
          name="price"
          required
          placeholder="0.00"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <label>Product Quantity:</label>
        <input
          type="number"
          name="quantity"
          required
          placeholder="1.0"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <div className="modal-btn">
          <button type="submit">Add Product</button>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </div>
      </div>
    </Form>
  );
}
