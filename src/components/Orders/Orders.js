import React, { useEffect, useState } from "react";
import "./Orders.css";
import Table from "../Table/Table";
import { getDocs, collection} from "firebase/firestore";
import {db} from "../../Config/FirebaseConfig"

export default function Orders() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const fetchData = async() => {
      const docRef = collection(db, "orders");
      try {
        const querySnapshot = await getDocs(docRef);
        let Orders = [];
        querySnapshot.forEach((doc) => Orders.push({...doc.data(), id: doc.id}));
        setOrders(Orders)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  const TableHeadings = [
    "Id",
    "OrderName",
    "Price",
    "Adress",
    "Contact",
  ];
  const TableData = [...orders];
  return (
    <>
    <div className="order-container">
      <div className="order-header">
        <div className="order-heading">#Orders</div>
      </div>
     <Table
        TableHeadings={TableHeadings}
        TableData={TableData}
        showEditBtn={false}
        showDetailBtn={true}
      />
    </div>
    </>
  );
}
