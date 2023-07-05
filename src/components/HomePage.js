import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <nav>
        <Link to="/">
          <h1>Addopters.co</h1>
        </Link>
        <ul>
          <li>
            <Link to="/login">Log In</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/animals">Animals</Link>
          </li>
        </ul>
      </nav>
      <div>
        <h2>Adopt a Pet Today</h2>
        <p>Find your perfect companion and give them a forever home.</p>
      </div>
    </div>
  );
}

export default HomePage;



