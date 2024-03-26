import React, { Component } from "react";
import ReactDOM from "react-dom";

// React.createElement => Object => render => html element

// const heading = React.createElement("h1",{},"Dashvanth");

// JSX
const jsxHeading = <h1>heading using jsx</h1>;

// React Component
// 1. class based Component
// 2. functional component

// 2. functional Component
// const Heading = ()=>{
//     return <h1>Heading using react component</h1>
// }
// short syntax

const Title = () => <h1>React Functional Component</h1>;
const number = 6;
const span = <span>hey there, i am span</span>;
// Component composition
const Heading = () => (
  <div id="container">
    <Title />
    <h1 id="heading">heading without return.</h1>
    <h2>{number + 2}</h2>
    <h2>{span}</h2>
    <h4>{Title()}</h4>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
