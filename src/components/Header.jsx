import { useState } from "react";
import companyLogo from "../asserts/logo-img.png";
import { Link } from "react-router-dom";
const loggedInUser = () => {
  // API call to check authentication
  return false;
};

const Title = () => (
  <a href="/">
    <h3 className="img-logo">Food Delivery</h3>
  </a>
);

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header continer">
      <Title />
      <div className="nav-items">
        <ul className="nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
        </ul>
        {isLoggedIn ? (
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
        )}
      </div>
    </div>
  );
};
