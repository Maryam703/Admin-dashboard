import React, { useEffect, useState } from "react";
import "./Modal.css";
import { Form } from "react-router-dom";
import Products from "../Api/ProductsApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Modal({ closeModal, productEditabe }) {
  const [name, setName] = useState("");
  const [id, setId] = useState();
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (productEditabe) {
      setId(productEditabe.id);
      setName(productEditabe.name);
      setPrice(productEditabe.price);
      setQuantity(productEditabe.quantity);
    }
  }, [productEditabe]);

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
      image: image,
      price: price,
      quantity: quantity,
    };

    if (productEditabe) {
      Products.map((item) => (item.id === productEditabe.id ? data : item));
      Products.splice(0, 1, data);
      closeModal();
    }

    if (!productEditabe) {
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
        <div className="heading">#Add Items</div>
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
            placeholder="0.00"
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
            placeholder="1.0"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div className="modal-btn">
          <button className="button" type="submit">
            {productEditabe ? "UpdateProduct" : "Add Product"}
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
