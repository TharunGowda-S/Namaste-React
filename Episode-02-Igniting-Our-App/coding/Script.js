import React from "react";
import ReactDOM from "react-dom/client";

//<div id=parent>
//     <div id =child>
//            <h1>hello</h1>
//             <h2>hii </h2>
//  </div>
//<div id =child>
//            <h1>hello</h1>
//             <h2>hii </h2>
//  </div>
//</div>

const parentheading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "heading" }, " hello "),
    React.createElement("h2", { id: "heading" }, " hii  jhgjhgkjhjk"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading" }, " good morning "),
    React.createElement("h2", { id: "heading" }, " good evening"),
  ]),
]);
// const childdiv = React.createElement("div", { id: "child" });
// const childheading = react.createElement("h1", { id: "heading" }, " hello ");

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   " hello welcome to the world of React"
// );
// const heading1 = document.createElement("h2");
// heading1.innerHTML = "hello";
// console.log(heading1);
// console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parentheading);
