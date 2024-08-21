// const heading= React.createElement('h1',{},'this is heading from react code')

// const root = ReactDOM.createRoot(document.getElementById('root'))

// root.render(heading)

//nested Elements

const parent = React.createElement(
  "div",
  { id: "parent" },
 [ React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "this is a h1 tag")
  ), React.createElement(
    "div",
    { id: "child2" },
    React.createElement("h1", {}, "this is a h2 tag")
  )]
);


const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)