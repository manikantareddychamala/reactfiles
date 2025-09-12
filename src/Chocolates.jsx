import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store";
import './Veg.css'; // Reuse Veg.css for consistent theme
import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Chocolates() {
  const dispatch = useDispatch();
  const chocolatesProducts = useSelector((state) => state.prod.Chocolates); // using desserts array from store.js

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(chocolatesProducts.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = chocolatesProducts.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="veg-page">
      <h1 className="page-title">🍫 Chocolates</h1>

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
                toast.success(`"${item.name}" added to cart successfully!`);
              }}
            >
              Add To Cart
            </button>
          </li>
        ))}
      </ul>

      <ToastContainer position="top-right" autoClose={2000} />

      {/* Pagination */}
      <div
        className="pagination-container"
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px', gap: '10px' }}
      >
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

      {/* Footer */}
      <footer className="bg-dark text-light py-4 mt-5 w-100">
        <div className="container text-center">
          <h5 className="mb-3">🍴 Fresh Mart</h5>
          <p className="mb-1">
            This Mart offers fresh veggies, meat, milkshakes & desserts.
          </p>
          <div className="d-flex justify-content-center gap-4 mb-3">
            <a href="#" className="text-light fs-3"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-light fs-3"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-light fs-3"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-light fs-3"><i className="fab fa-linkedin"></i></a>
          </div>
          <p className="mb-0">© {new Date().getFullYear()} Fresh Mart. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Chocolates;
