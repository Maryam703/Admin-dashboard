import React, { useEffect, useState } from "react";
import "./Modal.css";
import { Form } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db, storage } from "../../Config/FirebaseConfig";
import { addDoc, updateDoc, collection, doc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export default function Modal({ closeModal, productEditable }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();
  const [file, setFile] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  

  useEffect(() => {
    if (productEditable) {
      setName(productEditable.name);
      setName(productEditable.category);
      setFile(productEditable.image);
      setPrice(productEditable.price);
      setQuantity(productEditable.quantity);
    }
  }, [productEditable]);

  const HandleForm = async (e) => {
    e.preventDefault();

    const data = {
      name: name,
      category : selectedCategory,
      image: file,
      price: Number(price),
      quantity: Number(quantity),
    };

    if (productEditable) {
      toast.success("Product Updated Successfully!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      if (data) {
        try {
          const date = Date.now();
          const fileRef = ref(storage, date.toString());
          await uploadBytes(fileRef, file);

          const url = await getDownloadURL(fileRef);

          const docref = doc(db, "products", productEditable.id);
          await updateDoc(docref, { ...data, image: url });
        } catch (error) {
          console.error(error);
        }
        closeModal();
      }
    }

    if (!productEditable) {
      toast.success("Product Added Successfully!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      if (data) {
        try {
          const date = Date.now();
          const fileRef = ref(storage, date.toString());
          await uploadBytes(fileRef, file);

          const url = await getDownloadURL(fileRef);

          const docref = collection(db, "products");
          await addDoc(docref, { ...data, image: url });
        } catch (error) {
          console.error(error);
        }
        closeModal();
      }
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
            <label>Product Category:</label>
          </div>
          <select
            name="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option>Select Category</option>
            <option value="Women Clothing">Women's Clothing</option>
            <option value="Men Clothing">Men's Clothing</option>
            <option value="Women Accessories">Women Accessories </option>
            <option value="Electronics">Electronics </option>
            <option value="Shoes">Shoes</option>
          </select>
        </div>
        <div className="input-box">
          <div className="lable">
            <label>Product Image:</label>
          </div>
          <input
            type="file"
            name="image"
            required
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
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
