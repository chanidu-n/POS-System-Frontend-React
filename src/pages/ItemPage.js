import React, { useState } from 'react';

function ItemPage() {
  const [items, setItems] = useState([]); // State to hold item list
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleAddItem = (e) => {
    e.preventDefault();
    const newItem = { name, description, price };
    setItems([...items, newItem]); // Add new item to the list
    setName('');
    setDescription('');
    setPrice('');
  };

  const handleDeleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems); // Remove the item from the list
  };

  return (
    <div style={styles.itemPage}>
      <h1>Manage Items</h1>
      
      {/* Form to add new items */}
      <form onSubmit={handleAddItem} style={styles.form}>
        <input
          type="text"
          placeholder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Add Item</button>
      </form>

      {/* Table to display items */}
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>${item.price}</td>
              <td>
                <button onClick={() => handleDeleteItem(index)} style={styles.deleteButton}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  itemPage: {
    padding: '2rem',
    textAlign: 'center',
  },
  form: {
    marginBottom: '2rem',
  },
  input: {
    margin: '0.5rem',
    padding: '0.5rem',
    width: '200px',
  },
  button: {
    padding: '0.5rem 1rem',
    marginLeft: '0.5rem',
    cursor: 'pointer',
  },
  table: {
    margin: '0 auto',
    borderCollapse: 'collapse',
    width: '80%',
  },
  deleteButton: {
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    padding: '0.5rem',
    cursor: 'pointer',
  },
};

export default ItemPage;
