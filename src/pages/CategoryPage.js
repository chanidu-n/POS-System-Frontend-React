import React, { useState } from 'react';

const CategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');

  const handleAddCategory = () => {
    if (newCategory.trim() !== '') {
      setCategories([...categories, newCategory]);
      setNewCategory('');
    }
  };

  const handleDeleteCategory = (index) => {
    const updatedCategories = [...categories];
    updatedCategories.splice(index, 1);
    setCategories(updatedCategories);
  };

  return (
    <div style={styles.categoryPage}>
      <h1>Category Management</h1>
      <input
        type="text"
        value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)}
        placeholder="Enter category name"
      />
      <button onClick={handleAddCategory}>Add Category</button>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            {category}
            <button onClick={() => handleDeleteCategory(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  categoryPage: {
    padding: '2rem',
    textAlign: 'center',
  },
};

export default CategoryPage;
