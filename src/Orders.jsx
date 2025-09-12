import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './Veg.css'; // reuse Veg theme

function Orders() {
  const orders = useSelector((state) => state.orders);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // show 3 orders per page
  const totalPages = Math.ceil(orders.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrders = orders.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="veg-page">
      <h1 className="page-title">🛒 Orders</h1>

      {orders.length === 0 ? (
        <p style={{ textAlign: 'center', marginTop: '20px' }}>No orders yet.</p>
      ) : (
        <ul className="product-list">
          {currentOrders.map((order, idx) => (
            <li
              key={idx}
              className="product-card"
              style={{
                width: '400px',      // slightly wider
                padding: '25px',
                backgroundColor: '#F1F8E9', // Veg theme light green
                boxShadow: '0 8px 20px rgba(0,0,0,0.2)', // stronger shadow
                borderRadius: '15px',
              }}
            >
              <h3 style={{ fontSize: '20px', marginBottom: '15px', color: '#28a745' }}>
                Order #{indexOfFirstItem + idx + 1}
              </h3>
              <p className="description"><strong>Date:</strong> {order.date}</p>
              <p className="price">
                <strong>Total Paid:</strong> ₹{order.totalPrice}{" "}
                {order.discountPercent > 0 && `(Discount: ${order.discountPercent}%)`}
              </p>

              <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
                {order.items.map((item) => (
                  <li
                    key={item.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '15px',
                      gap: '15px'
                    }}
                  >
                    <img
                      src={item.Image}
                      alt={item.name}
                      style={{
                        width: '80px',          // bigger image
                        height: '80px',
                        objectFit: 'cover',
                        borderRadius: '12px',
                        border: '2px solid #28a745'
                      }}
                    />
                    <span style={{ fontSize: '16px', fontWeight: '500', color: '#333' }}>
                      {item.name} - ₹{item.price} x {item.quantity} = ₹{item.total}
                    </span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
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
      )}
    </div>
  );
}

export default Orders;
