const heading = React.createElement(
    "h1",
    { id: "heading", className: "heading" },
    "Hello React!"
);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(heading);

/*

    <div id="parent">
        <div id="child1">
            <h1>I am h1 heading </h1>
            <h1>I am h2 heading </h1>
        </div>
        <div id="child2">
            <h1>I am h1 heading </h1>
            <h1>I am h2 heading </h1>
        </div>
    </div>

*/

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

root.render(nestedDom);
