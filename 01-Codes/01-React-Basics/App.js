// Hello world in JavaScript

const heading2 = document.getElementById("heading2");
const h2 = document.createElement("h2");
h2.innerText = "Hello World using JavaScript!";
heading2.appendChild(h2);

// Hello World using React
const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("h3", { id: "heading3" }, "Hello World using React!"),
]);

root.render(parent);

// nesting elements
// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("p", {}, "paragraph 1"),
//   React.createElement("p", {}, "paragraph 2"),
//   React.createElement("p", {}, "paragraph 3"),
// ]);
