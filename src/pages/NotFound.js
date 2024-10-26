import React from 'react';

function NotFound() {
  return <h1 style={styles.notFound}>404 - Page Not Found</h1>;
}

const styles = {
  notFound: {
    textAlign: 'center',
    marginTop: '2rem',
  }
};

export default NotFound;
