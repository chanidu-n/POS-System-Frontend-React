import React, { useState } from 'react';

const StockPage = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', quantity: 0 });

  const handleAddItem = () => {
    if (newItem.name.trim() !== '' && newItem.quantity > 0) {
      setItems([...items, newItem]);
      setNewItem({ name: '', quantity: 0 });
    }
  };

  const handleDeleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div style={styles.stockPage}>
      <h1>Stock Management</h1>
      <input
        type="text"
        value={newItem.name}
        onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        placeholder="Enter item name"
      />
      <input
        type="number"
        value={newItem.quantity}
        onChange={(e) => setNewItem({ ...newItem, quantity: parseInt(e.target.value) })}
        placeholder="Enter quantity"
      />
      <button onClick={handleAddItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - {item.quantity} units
            <button onClick={() => handleDeleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  stockPage: {
    padding: '2rem',
    textAlign: 'center',
  },
};

export default StockPage;
