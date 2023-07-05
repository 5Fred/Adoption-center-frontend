import React from 'react';

const Home = () => {
  const styles = {
    container: {
      textAlign: 'center',
      position: 'relative',
    },
    content: {
      padding: '20px',
      background: '#f1f1f1',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      marginBottom: '20px',
    },
    heading: {
      fontSize: '24px',
      color: '#333',
      marginBottom: '10px',
    },
    description: {
      fontSize: '16px',
      color: '#555',
    },
    image: {
      width: '100%',
      height: 'auto',
      maxHeight: '80vh',
      objectFit: 'cover',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h2 style={styles.heading}>Welcome to the Adoption Center!</h2>
        <p style={styles.description}>Find your perfect pet companion.</p>
      </div>
      <img
        src="https://media.istockphoto.com/id/543600370/photo/little-puppies-in-the.jpg?s=612x612&w=0&k=20&c=03CI6-4dBFgd21RwGwdOxJqyhT73Wwd71NH7x7gF3bo="
        alt="Adoption Center"
        style={styles.image}
      />
    </div>
  );
};

export default Home;
