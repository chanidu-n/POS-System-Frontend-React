import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleSearch = (event) => {
    // Implement search functionality here
    console.log(event.target.value);
  };

  return (
    <div style={styles.dashboard}>
      <header style={styles.header}>
        <h1>Dashboard</h1>
        <div style={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search..."
            onChange={handleSearch}
            style={styles.searchInput}
          />
        </div>
        <div style={styles.userInfo}>
          <span>Welcome, User!</span>
        </div>
      </header>

      <section style={styles.overview}>
        <div style={styles.card}>
          <h2>Total Sales</h2>
          <p>$10,000</p>
        </div>
        <div style={styles.card}>
          <h2>Items in Inventory</h2>
          <p>150</p>
        </div>
        <div style={styles.card}>
          <h2>Orders Today</h2>
          <p>45</p>
        </div>
      </section>

      <section style={styles.shortcuts}>
        <button style={styles.button} onClick={() => navigate('/items')}>
          Manage Items
        </button>
        <button style={styles.button} onClick={() => navigate('/sales')}>
          View Sales
        </button>
        <button style={styles.button} onClick={() => navigate('/reports')}>
          Reports
        </button>
      </section>
    </div>
  );
};

const styles = {
  dashboard: {
    padding: '2rem',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem',
  },
  searchContainer: {
    flexGrow: 1,
    marginLeft: '2rem',
  },
  searchInput: {
    padding: '0.5rem',
    width: '300px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  userInfo: {
    marginLeft: '2rem',
  },
  overview: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '2rem',
  },
  card: {
    backgroundColor: '#f0f0f0',
    padding: '1.5rem',
    borderRadius: '8px',
    width: '30%',
    textAlign: 'center',
  },
  shortcuts: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  button: {
    padding: '1rem 2rem',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Dashboard;
