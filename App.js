import React from "react";
import ReactDOM from "react-dom/client";

const data = api.getData(); // if anyone hacks this api and ir returns
// some malware  code then JSX code sanitizes the code
const Heading2 = () => (
  <div>
    {data}
    {/* sanitization in JSX */}
    <h1>Hello World2</h1>
  </div>
);
//React components
// - Funtional
// - Class based

const rootFromDom = ReactDOM.createRoot(document.getElementById("root"));
rootFromDom.render(<Heading2 />);
