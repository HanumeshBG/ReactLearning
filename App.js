/**
 * <div id="parent">
 *  div id="child1">
 *    <h1> id="heading">Heding 1</h1>
 *     <h2> id="heading">Heading 2</h2>
 *  </div>
 * *  <div id="child2">
 * *    <h1> id="heading">Heading 1 of Child 2</h1>
 *      <h2> id="heading">Heading  of Child 2</h2>
 *  </div>
 * </div>
 * 
 */

const parent = React.createElement("div", {id: "parent"}, [
    React.createElement("div", {id: "child1"}, [
        React.createElement("h1", {id: "heading"}, "Heading 1"),
        React.createElement("h2", {id: "heading"}, "Heading 2")
    ]),
    React.createElement("div", {id: "child2"}, [
        React.createElement("h1", {id: "heading"}, "Heading 1 of Child 2"),
        React.createElement("h2", {id: "heading"}, "Heading of Child 2")
    ])
]);

console.log(parent); // object

const header = React.createElement(
        'h1',
        {id:"heading"},
        'Hello, World!'
    );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent)