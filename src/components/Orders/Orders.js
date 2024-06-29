import React from "react";
import "./Orders.css";
import Order from "../Api/OrdersApi";
import Table from "../Table/Table";

export default function Orders() {
  const TableHeadings = [
    "Id",
    "Product",
    "Image",
    "Price",
    "Quantity",
    "Adress",
    "Status",
  ];
  const TableData = [...Order];
  return (
    <div className="order-container">
      <div className="order-header">
        <div className="order-heading">#Orders</div>
      </div>
      <Table
        TableHeadings={TableHeadings}
        TableData={TableData}
        showEditBtn={false}
      />
    </div>
  );
}
