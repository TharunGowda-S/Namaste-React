// const heading = document.createElement("h1");

// heading.textContent = "Hello Welcome To Namaste React ";

// const root = document.getElementById("root");
// root.append(heading);

//Do the same thing using React

//creating the nested React elements

//like this:
{
  /* <div id="mainroot">
      <div id="div1">
        <h1></h1>
        <h2></h2>
      </div>
      <div id="div2">
        <h3></h3>
        <h4></h4>
      </div>
    </div>; */
}

const MainDiv = React.createElement(
  "div",
  { id: "maindiv" },
  React.createElement("div", { id: "sub-div1" }, [
    React.createElement(
      "h1",
      { id: "heading1-subdiv1" },
      " this is  first div Heading1"
    ),
    React.createElement(
      "h2",
      { id: "heading2-sub-div2" },
      "this is  first div Heading2"
    ),
  ]),
  React.createElement("div", { id: "sub-div2" }, [
    React.createElement(
      "h1",
      { id: "heading1-subdiv2" },
      " this is  second div Heading1"
    ),
    React.createElement(
      "h2",
      { id: "heading2-subdiv2" },
      " this is  second div Heading2"
    ),
  ])
);

console.log(MainDiv);
const heading = React.createElement("h1", {}, "This is Heading");

const root = ReactDOM.createRoot(document.getElementById("second"));
const reactdiv = ReactDOM.createRoot(document.getElementById("third"));

root.render(heading);
reactdiv.render(MainDiv);
