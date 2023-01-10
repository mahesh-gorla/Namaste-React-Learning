import React from "react";
import ReactDOM from "react-dom/client";
import Logo from "./components/Logo";
import SearchBar from "./components/SearchBar";
import Profile from "./components/Profile";
import "./App.css";

// const data = api.getData(); // if anyone hacks this api and ir returns
// some malware  code then JSX code sanitizes the code
const Header = () => (
  <div className="continer">
    {/* {data} */}
    {/* sanitization in JSX */}
    <Logo />
    <SearchBar />
    <Profile />
  </div>
);

//React components
// - Funtional
// - Class based

const rootFromDom = ReactDOM.createRoot(document.getElementById("root"));
rootFromDom.render(<Header />);
