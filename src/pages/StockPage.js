// src/pages/StockPage.js
import React from 'react';

function StockPage() {
  return (
    <div style={styles.container}>
      <h1>Stock Management</h1>
      {/* Add forms and table for managing stock */}
      <form style={styles.form}>
        <div>
          <label>Item Name: </label>
          <input type="text" placeholder="Enter item name" />
        </div>
        <div>
          <label>Quantity: </label>
          <input type="number" placeholder="Enter quantity" />
        </div>
        <button type="submit">Add Stock</button>
      </form>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {/* Sample row */}
          <tr>
            <td>Example Item</td>
            <td>100</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    textAlign: 'center',
  },
  form: {
    marginBottom: '2rem',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    border: '1px solid #ddd',
    padding: '8px',
  },
  td: {
    border: '1px solid #ddd',
    padding: '8px',
  }
};

export default StockPage;
