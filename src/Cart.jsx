import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addOrder,
  clearCart,
  decreaseQty,
  increaseQty,
  removeFromCart,
} from './store';
import './Cart.css';
import { calculationTotal, getCoupnDiscount } from './discount';
import party from 'party-js';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import QRCode from 'react-qr-code';

function Cart() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [discountPercent, setDiscountPercent] = useState(0);
  const [couponCode, setCouponCode] = useState('');
  const [couponMessage, setCouponMessage] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const total = calculationTotal(cartItems);
  const discount = total * (discountPercent / 100);
  const finalPrice = total - discount;

  const handleApplyCoupon = (e) => {
    const result = getCoupnDiscount(couponCode, total);
    if (result.isvalid) {
      setDiscountPercent(result.discountpercentage);
      setCouponMessage(`Coupon applied: ${result.discountpercentage}% OFF`);
      party.confetti(e.target, { count: 80, spread: 70, size: 1 });
      party.sparkles(document.body, { count: 40, spread: 360, size: 2 });
    } else {
      setDiscountPercent(0);
      setCouponMessage('Invalid coupon code');
    }
  };

  const handleCheckout = () => {
    if (!customerEmail.trim()) {
      alert('Please enter your email address.');
      return;
    }

    const ordersString = cartItems
      .map(
        (item) =>
          `${item.name} - ₹${(
            item.price *
            item.quantity *
            (1 - discountPercent / 100)
          ).toFixed(2)} (${item.quantity} pcs)`
      )
      .join('\n');

    const templateParams = {
      order_id: `ORD-${Math.floor(Math.random() * 1000000)}`,
      orders: ordersString,
      shipping: 50,
      tax: (total * 0.18).toFixed(2),
      total: finalPrice.toFixed(2),
      email: customerEmail.trim(),
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(
        'service_vbwdi3c',
        'template_87n1l2w',
        templateParams,
        '4aTlrkuy64TBUZwb4'
      )
      .then(() => alert('✅ Order confirmation email sent!'))
      .catch((error) => alert('❌ Failed to send email: ' + error.text));
  };

  const handleCompletePurchase = () => {
    const purchaseDetails = {
      date: new Date().toLocaleString(),
      items: cartItems.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        Image: item.Image,
        total: (
          item.price *
          item.quantity *
          (1 - discountPercent / 100)
        ).toFixed(2),
      })),
      totalPrice: finalPrice.toFixed(2),
      discountPercent,
    };

    dispatch(clearCart());
    dispatch(addOrder(purchaseDetails));

    Swal.fire({
      title: 'Purchase Complete!',
      text: `Your order total is ₹${finalPrice.toFixed(
        2
      )}. Thank you for shopping with us!`,
      icon: 'success',
      confirmButtonText: 'OK',
      confirmButtonColor: '#28a745',
    });
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">🛒 Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <div className="cart-content">
          {/* Left: Cart Items */}
          <ul className="cart-list">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item card">
                <img src={item.Image} alt={item.name} className="cart-img" />
                <div className="item-details">
                  <strong>{item.name}</strong>
                  <p>
                    ₹{item.price} x {item.quantity} = ₹
                    {(item.price * item.quantity).toFixed(2)}
                  </p>
                  {discountPercent > 0 && (
                    <p className="discounted-price">
                      → ₹
                      {(
                        item.price *
                        item.quantity *
                        (1 - discountPercent / 100)
                      ).toFixed(2)}{' '}
                      after {discountPercent}% off
                    </p>
                  )}
                </div>
                <div className="cart-buttons">
                  <button onClick={() => dispatch(increaseQty(item))}>+</button>
                  <button onClick={() => dispatch(decreaseQty(item))}>-</button>
                  <button onClick={() => dispatch(removeFromCart(item))}>
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/* Right: Order Summary */}
          <div className="order-summary card green-theme">
            <h2>📦 Order Summary</h2>
            <p>
              Subtotal: <strong>₹{total.toFixed(2)}</strong>
            </p>
            {discount > 0 && (
              <p className="discount-text">
                Discount ({discountPercent}%): -₹{discount.toFixed(2)}
              </p>
            )}
            <h3>Total: ₹{finalPrice.toFixed(2)}</h3>

            {/* Discount Buttons */}
            <div className="discount-buttons">
              {[20, 30, 40].map((percent) => (
                <button
                  key={percent}
                  className="button-discount"
                  onClick={() => setDiscountPercent(percent)}
                >
                  {percent}% OFF
                </button>
              ))}
            </div>

            {/* Coupon */}
            <div className="coupon-container">
              <input
                type="text"
                placeholder="Enter Coupon"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              />
              <button className="apply-coupon" onClick={handleApplyCoupon}>
                Apply
              </button>
            </div>

            {couponMessage && (
              <p
                className={`coupon-message ${
                  discountPercent > 0 ? 'success' : 'error'
                }`}
              >
                {couponMessage}
              </p>
            )}

            {/* Customer Email */}
            <div className="email-container">
              <input
                type="email"
                placeholder="Enter your email"
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
              />
            </div>

            {/* Checkout Actions */}
            <div className="checkout-actions">
              <button
                onClick={() => setShowPaymentModal(true)}
                className="checkout-btn"
              >
                ✅ Complete Purchase
              </button>
              <button
                onClick={handleCheckout}
                className="checkout-btn email"
              >
                📧 Send Email Confirmation
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Payment Modal Popup */}
      {showPaymentModal && (
        <div className="payment-modal">
          <div className="payment-content cart-card" style={{ padding: '20px' }}>
            <h3>Select Payment Method</h3>

            <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
              <button
                className={`payment-option-btn ${paymentMethod === 'upi' ? 'active' : ''}`}
                onClick={() => setPaymentMethod('upi')}
                style={{ flex: 1 }}
              >
                UPI
              </button>
              <button
                className={`payment-option-btn ${paymentMethod === 'debitCredit' ? 'active' : ''}`}
                onClick={() => setPaymentMethod('debitCredit')}
                style={{ flex: 1 }}
              >
                Debit / Credit Card
              </button>
            </div>

            {paymentMethod === 'upi' && (
              <div>
                <h4>Scan QR to Pay ₹{finalPrice.toFixed(2)}</h4>
                <QRCode
                  value={`upi://pay?pa=6300154969@ybl&pn=Manikantastore&am=${finalPrice.toFixed(2)}&cu=INR`}
                  size={150}
                />
                <p><strong>UPI ID:</strong> 6300154969@ybl</p>
              </div>
            )}

            {paymentMethod === 'debitCredit' && (
              <div>
                <input
                  type="text"
                  placeholder="Cardholder Name"
                  className="input-group"
                  style={{ marginBottom: '10px', width: '100%', padding: '8px' }}
                />
                <input
                  type="text"
                  placeholder="Card Number"
                  maxLength="16"
                  className="input-group"
                  style={{ marginBottom: '10px', width: '100%', padding: '8px' }}
                />
                <input
                  type="text"
                  placeholder="MM/YY"
                  maxLength="5"
                  className="input-group"
                  style={{
                    marginBottom: '10px',
                    width: '48%',
                    padding: '8px',
                    marginRight: '4%',
                  }}
                />
                <input
                  type="password"
                  placeholder="CVV"
                  maxLength="3"
                  className="input-group"
                  style={{ width: '48%', padding: '8px' }}
                />
              </div>
            )}

            <div
              style={{
                marginTop: '15px',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <button
                className="checkout-btn"
                disabled={!paymentMethod}
                onClick={() => {
                  if (!paymentMethod) return alert('Please select payment method');
                  handleCompletePurchase();
                  setShowPaymentModal(false);
                }}
                style={{ flex: 1, marginRight: '10px' }}
              >
                Confirm Payment
              </button>

              <button
                className="checkout-btn"
                onClick={() => setShowPaymentModal(false)}
                style={{ flex: 1, backgroundColor: '#d9534f', borderColor: '#d43f3a' }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
