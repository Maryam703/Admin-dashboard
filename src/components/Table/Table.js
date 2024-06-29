import React from "react";
import "./Table.css";

export default function Table({
  TableHeadings,
  TableData,
  showEditBtn,
  Editdetails,
}) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>{TableHeadings[0]}</th>
            <th>{TableHeadings[1]}</th>
            <th>{TableHeadings[2]}</th>
            <th>{TableHeadings[3]}</th>
            <th>{TableHeadings[4]}</th>
            <th>{TableHeadings[5]}</th>
            <th>{TableHeadings[6]}</th>
            <th>{TableHeadings[7]}</th>
          </tr>
        </thead>
        <tbody>
          {TableData.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.productName}</td>
                <td className="img-container">
                  <img className="order-img" src={item.image} alt={item.name} />
                </td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.Adress}</td>
                <td>{item.status}</td>
                <td>{item.edit}</td>
                {showEditBtn && (
                  <td>
                    <button className="edit-btn" onClick={Editdetails}>
                      Edit
                    </button>{" "}
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
