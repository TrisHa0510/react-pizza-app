import React, { useEffect, useState } from 'react';
import './OrderPage.css';

function OrderSummary() {
  const [order, setOrder] = useState(null);
  const [address, setAddress] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('orderData'));
    setOrder(data);
  }, []);

  const handleSubmit = () => {
    if (address.trim()) {
      setConfirmed(true);
    } else {
      alert('Please enter your address before confirming.');
    }
  };

  if (!order) return <p className="loading-text">Loading...</p>;

  return (
    <div className="order-summary-container">
      <h2>Order Summary</h2>
      <div className="order-card">
        <p><strong>Pizza ID:</strong> {order.pizzaId}</p>
        <p><strong>Size:</strong> {order.size}</p>
        <p><strong>Toppings:</strong> {order.toppings.length ? order.toppings.join(', ') : 'None'}</p>
        <p><strong>Drink:</strong> {order.drink}</p>
      </div>

      <input
        type="text"
        placeholder="Enter delivery address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="address-input"
      />

      <button onClick={handleSubmit} className="confirm-button">Confirm Order</button>

      {confirmed && (
        <div className="confirmation-message">
          🎉 Your pizza is on its way to <strong>{address}</strong>!
        </div>
      )}
    </div>
  );
}

export default OrderSummary;
