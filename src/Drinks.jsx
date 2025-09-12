import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store";
import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Veg.css';

function Drinks() {
  const dispatch = useDispatch();

  // ✅ Make sure this matches your store key
  const drinksProducts = useSelector((state) => state.prod.Drinks);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil((drinksProducts?.length || 0) / itemsPerPage); // prevent crash
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = drinksProducts?.slice(indexOfFirstItem, indexOfLastItem) || [];

  return (
    <div className="veg-page">
      <h1 className="page-title">🥤 Drinks</h1>

      <ul className="product-list">
        {currentItems.map((item) => (
          <li key={item.id} className="product-card">
            <div className="image-container">
              <span className="discount-tag">-{item.discount}% OFF</span>
              <img src={item.Image} alt={item.name} />
            </div>
            <h3>{item.name}</h3>
            <p className="price">₹{item.price}</p>
            <p className="description">{item.descrption}</p>
            <button
              className="add-cart-btn"
              onClick={() => {
                dispatch(addToCart(item));
                toast.success(`Item "${item.name}" added to cart successfully!`);
              }}
            >
              Add To Cart
            </button>
          </li>
        ))}
      </ul>

      <ToastContainer position="top-right" autoClose={2000} />

      {/* Pagination */}
      <div className="pagination-container">
        <div className="pagination">
          <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => setCurrentPage(index + 1)}
              className={currentPage === index + 1 ? "active-page" : ""}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drinks;
