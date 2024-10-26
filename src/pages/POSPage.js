import React, { useState } from 'react';

function POSPage() {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [productCode, setProductCode] = useState('');

  const handleAddToCart = () => {
    // Simulate adding item to cart by product code
    const newItem = {
      code: productCode,
      name: `Product ${productCode}`,
      price: 100, // Replace with actual product price
      quantity: 1,
    };
    setCartItems([...cartItems, newItem]);
    setTotalAmount(totalAmount + newItem.price);
    setProductCode('');
  };

  const handleCheckout = () => {
    alert('Checkout successful!');
    setCartItems([]);
    setTotalAmount(0);
  };

  return (
    <div style={styles.container}>
      <h1>Point of Sale</h1>
      <div style={styles.inputSection}>
        <input
          type="text"
          placeholder="Enter Product Code"
          value={productCode}
          onChange={(e) => setProductCode(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleAddToCart} style={styles.button}>Add to Cart</button>
      </div>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <tr key={index}>
              <td>{item.code}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={styles.totalAmount}>
        <h3>Total Amount: ${totalAmount}</h3>
        <button onClick={handleCheckout} style={styles.checkoutButton}>Checkout</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    textAlign: 'center',
  },
  inputSection: {
    marginBottom: '1rem',
  },
  input: {
    padding: '0.5rem',
    marginRight: '1rem',
    width: '200px',
  },
  button: {
    padding: '0.5rem 1rem',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '1rem',
  },
  totalAmount: {
    marginTop: '1rem',
  },
  checkoutButton: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
};

export default POSPage;
