import React, { useEffect, useState } from "react";
import "./Modal.css";
import { Form } from "react-router-dom";
import Products from "../Api/ProductsApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Modal({ closeModal, productEditable }) {
  const [name, setName] = useState("");
  const [id, setId] = useState();
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (productEditable) {
      setId(productEditable.id);
      setName(productEditable.productName);
      setImage(productEditable.image);
      setPrice(productEditable.price);
      setQuantity(productEditable.quantity);
    }
  }, [productEditable]);

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
      productName: name,
      image: image,
      price: price,
      quantity: quantity,
    };

    if (productEditable) {
      Products.map((item) => (item.id === productEditable.id ? data : item));
      Products.splice(0, 1, data);
      closeModal();
    }

    if (!productEditable) {
      Products.push(data);
      closeModal();
    }
  };
  return (
    <Form className="modal-container" onSubmit={HandleForm}>
      <div className="modal-box">
        <button onClick={closeModal} className="cross-box">
          <i class="cross-btn fa-solid fa-xmark"></i>
        </button>
        <div className="heading">
          {productEditable ? "Edit Item" : "Add Item"}
        </div>
        <div className="input-box">
          <div className="lable">
            <label>Product Name:</label>
          </div>
          <input
            type="text"
            name="name"
            required
            value={name}
            placeholder="Enter Product Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-box">
          <div className="lable">
            <label>Product Id:</label>
          </div>
          <input
            type="number"
            name="id"
            required
            placeholder="#id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="input-box">
          <div className="lable">
            <label>Product Image:</label>
          </div>
          <input
            type="url"
            name="image"
            required
            placeholder="Enter URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="input-box">
          <div className="lable">
            <label>Product Price:</label>
          </div>
          <input
            type="number"
            name="price"
            required
            placeholder="$0.00"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="input-box">
          <div className="lable">
            <label>Available Quantity:</label>
          </div>
          <input
            type="number"
            name="quantity"
            required
            placeholder="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div className="modal-btn">
          <button className="button" type="submit">
            {productEditable ? "UpdateProduct" : "Add Product"}
          </button>
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
