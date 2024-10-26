// src/services/auth.js
export const login = async (email, password) => {
  // Dummy login, replace with actual API call
  if (email === 'admin@gmail.com' && password === 'admin') {
    localStorage.setItem('token', 'jwt_token_here'); // Simulate a JWT token
    return true;
  }
  throw new Error('Invalid credentials');
};

export const isAuthenticated = () => {
  return !!localStorage.getItem('token'); // Check if token exists
};
