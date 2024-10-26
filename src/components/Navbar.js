import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <Link to="/dashboard" style={styles.link}>Dashboard</Link>
      <Link to="/items" style={styles.link}>Items</Link>
      <Link to="/categories" style={styles.link}>Categories</Link>
      <Link to="/stock" style={styles.link}>Stock Management</Link>
      <Link to="/pos" style={styles.link}>POS</Link>
    </nav>
  );
}

const styles = {
  navbar: {
    backgroundColor: '#333',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-around',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
  },
  linkHover: {
    textDecoration: 'underline',
  }
};

export default Navbar;
