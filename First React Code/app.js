import React from "react"; 
import ReactDOM from "react-dom";

const nestedDom = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child1" }, [
        React.createElement("h1", {}, "I am h1 heading"),
        React.createElement("h2", {}, "I am h2 heading"),
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "I am h1 heading"),
        React.createElement("h2", {}, "I am h2 heading"),
    ]),
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(nestedDom);
