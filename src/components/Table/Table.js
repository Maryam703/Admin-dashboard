import "./Table.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { db } from "../../Config/FirebaseConfig";
import { doc, updateDoc } from "firebase/firestore";

export default function Table({
  TableHeadings,
  TableData,
  showEditBtn,
  Editdetails,
  showDetailBtn,
}) {
  const [selected, setSelected] = useState({});
  const HandleStatus = async (Id, value) => {
    setSelected((item) => ({ ...item, [Id]: value }));

    await updateDoc(doc(db, "orders", Id), { status: value });
  };

  return (
    <div>
      <table>
        <thead>
          {TableHeadings.map((item) => (
            <th>{item}</th>
          ))}
        </thead>
        <tbody>
          {TableData.map((item) => {
            return (
              <tr>
                <td>#{item.id}</td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                {item.quantity && <td>{item.quantity}</td>}
                {item.image && (
                  <td className="img-container">
                    <img className="order-img" src={item.image} />
                  </td>
                )}
                {item.category && <td>{item.category}</td>}
                <td>{item.adress}</td>
                <td>{item.number}</td>
                {item.status && (
                  <td>
                    <select
                      className="status-btn"
                      value={selected[item.id]}
                      onChange={(e) => HandleStatus(item.id, e.target.value)}
                    >
                      <option value={item.status}>{item.status}</option>
                      <option value="dispatched">Dispatched</option>
                      <option value="recieved">Recieved</option>
                      <option value="returned">Returned</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </td>
                )}

                {showEditBtn && (
                  <td>
                    <button
                      className="edit-btn"
                      onClick={() => Editdetails(item)}
                    >
                      Edit
                    </button>
                  </td>
                )}
                {showDetailBtn && (
                  <td>
                    <div className="edit-btn">
                      <Link to={`/OrderDetails/${item.id}`} className="d-btn">
                        Detail
                      </Link>
                    </div>
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
