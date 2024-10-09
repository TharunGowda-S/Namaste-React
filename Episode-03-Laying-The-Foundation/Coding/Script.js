import React from "react";
import ReactDOM from "react-dom/client";

//old Way or React code (by the end-of-the-day javascript ) for create an html Element

//As the Above syntax uses it widely when the nested elements need to be create by thsat time this code looks like a more complex
// and it is tricky to understand , So to come out from this problem  Facebook developers find the Solution called  JSX
// JSX( JavaScript XML) it is a syntax extension of html and it is not a part of react too it makes developer to easily understand the code.

const Heading = React.createElement("h1", {}, " laying the foundation");

const JsxHeading = () => {
  return <h2> hello </h2>;
};
const JSXHeading = () => {
  return (
    <div>
      <h1> hello React</h1>
      <JsxHeading />
    </div>
  );
};

const MainRoot = ReactDOM.createRoot(document.getElementById("root"));
MainRoot.render(<JSXHeading />);
