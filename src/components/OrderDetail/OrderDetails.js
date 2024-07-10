import React, { useEffect, useState } from "react";
import { db } from "../../Config/FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";
import "./OrderDetails.css";

export default function OrderDetails() {
  const [product, setProduct] = useState({ items: []});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "orders", id);
        const querySnapshot = await getDoc(docRef);
        setProduct(querySnapshot.data());
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const closeModal = () => {
    navigate("/Orders");
  };

  return (
    <div className="detail-container">
      <div className="detail-box">
        <div className="detail-header">
          <div className="detail-heading"> Order Details</div>
          <button className="detail-cross-box" onClick={closeModal}>
            <i class="cross-btn fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="detail">CustomerName: {product.name}</div>
        <div className="detail">Adress: {product.adress}</div>
        <div className="detail">Total Price: ${product.price}</div>
        <div className="detail">Mob No: {product.number}</div>
        <div>
            <div className="product-detail">Product Details:</div>
          {product.items.map((item) => (
            <div>
              <div className="detail">Product Category: {item.category}</div>
              <div className="img-box">
                <img className="p-img" src={item.image} alt="image" />
              </div>
              <div className="detail">Product Price: ${item.price}</div>
              <div className="detail">Product Quantity: {item.quantity}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
