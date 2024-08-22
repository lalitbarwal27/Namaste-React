// const heading= React.createElement('h1',{},'this is heading from react code')

// const root = ReactDOM.createRoot(document.getElementById('root'))

// root.render(heading)

//nested Elements

import React from "react";
import ReactDOM from 'react-dom'

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

console.log(parent)

const jsxHeading=<h1>This is JSx Heading</h1>

console.log(jsxHeading)

const Title =() => (
  <h1>THis is title bro</h1>
)

//fucntional component 

const HeadingComponent = () =>(
  <div id="container">
    <Title>
    </Title>
    <Title/>
    {Title()}
    <h1>This is functional component </h1>
  </div>
)
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<HeadingComponent/>)