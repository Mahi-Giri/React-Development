import React from "react";
import ReactDOM from "react-dom";

const root = ReactDOM.createRoot(document.querySelector("#root"));

// JSX
const jsxHeading = (
  <h1 id="heading" className="heading">
    Hello React! from JSX
  </h1>
);

// React Component
const title = <h1 id="title">Element Component in JSX</h1>;

const Title = () => {
  return <h1 id="heading">Functional Component in JSX</h1>;
};

const HeadingComponent = () => {
  return (
    <div id="container">
      {/* accessing using Element Component*/}
      {title}

      {/* accessing using functional Component */}
      {/* Both are doing same work you can call as function or excuting using functional component */}
      
      {<Title />}
      {Title()}
      <h2 className="heading">React Functional Component</h2>
    </div>
  );
};

// For rendering React Element
// root.render(jsxHeading);

// For rendering React Component
root.render(<HeadingComponent />);
