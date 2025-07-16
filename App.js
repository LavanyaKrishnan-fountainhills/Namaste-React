const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "This is from h1 tag"),
    React.createElement("h2", {}, "This is from the h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "This is from h1 tag"),
    React.createElement("h2", {}, "This is from the h2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

// this is how you can add sibilings with the help of [] brackets
//  render put it up the object in the dom as a node
