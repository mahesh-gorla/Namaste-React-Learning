import { useState } from "react";
import { Link } from "react-router-dom";
import { useOnline } from "../utils/useOnline";
const loggedInUser = () => {
  // API call to check authentication
  return false;
};

const Title = () => (
  <a href="/">
    <h3 className="h-32 p-2">Food Delivery</h3>
  </a>
);

export const Header = () => {
  const isOnline = useOnline();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="flex">
      <Title />
      <div className="flex justify-between bg-pink-100 shadow-red-800 shadow-md">
        <ul className="flex flex-wrap list-none text-orange-500">
          <li className="ml-2 text-orange-500	">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/instamart">Instamart</Link>
          </li>
          <li>Cart</li>
        </ul>
        <h1>{isOnline ? "✅ Online" : "🔴 Offline"}</h1>
        {isLoggedIn ? (
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
        )}
      </div>
    </div>
  );
};
