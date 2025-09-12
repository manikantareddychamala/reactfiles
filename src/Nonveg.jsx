import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store";
import './Veg.css'; // reuse Veg.css for consistent theme
import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Nonveg() {
  const dispatch = useDispatch();
  const nonvegProducts = useSelector((state) => state.prod.nonVeg);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(nonvegProducts.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = nonvegProducts.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="veg-page">
      <h1 className="page-title">🍗 Non-Veg</h1>

      <ul className="product-list">
        {currentItems.map((item) => (
          <li key={item.id} className="product-card">
            <img src={item.Image} alt={item.name} />
            <h3>{item.name}</h3>
            <p className="price">₹{item.price}</p>
            <p className="description">{item.descrition}</p>
            <button
              className="add-cart-btn"
              onClick={() => {
                dispatch(addToCart(item));
                toast.success(`Item "${item.name}" added to cart!`);
              }}
            >
              Add To Cart
            </button>
          </li>
        ))}
      </ul>

      <ToastContainer position='top-right' autoClose={2000} />

      {/* Pagination centered */}
      <div className="pagination-container">
        <div className="pagination">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
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

export default Nonveg;
