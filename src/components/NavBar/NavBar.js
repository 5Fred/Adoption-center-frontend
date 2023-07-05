import React from 'react';

const NavBar = () => {
  const styles = {
    nav: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: '#333',
      color: '#fff',
      padding: '10px',
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
    },
    logoText: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginLeft: '10px',
    },
    menu: {
      listStyle: 'none',
      display: 'flex',
      gap: '20px',
    },
    link: {
      color: '#fff',
      textDecoration: 'none',
      fontSize: '16px',
    },
    logoImage: {
      width: '40px',
      height: '40px',
    },
    petsImage: {
      width: '24px',
      height: '24px',
    },
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <img
          src="https://www.shutterstock.com/image-vector/pets-animal-vet-clinic-logo-260nw-1797643744.jpg"
          alt="Adoption Centre Logo"
          style={styles.logoImage}
        />
        <h2 style={styles.logoText}>Adoption Centre</h2>
      </div>
      <div>
        <ul style={styles.menu}>
          <li>
            <a href="/" style={styles.link}>Home</a>
          </li>
          <li>
            <a href="/pets" style={styles.link}>
              Pets
            </a>
          </li>
          <li>
            <a href="/profile" style={styles.link}>Profile</a>
          </li>
          <li>
            <a href="/login" style={styles.link}>Login</a>
          </li>
          <li>
            <a href="/signup" style={styles.link}>Sign Up</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
