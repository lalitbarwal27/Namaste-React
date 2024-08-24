import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//  [ React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "this is a h1 tag")
//   ), React.createElement(
//     "div",
//     { id: "child2" },
//     React.createElement("h1", {}, "this is a h2 tag")
//   )]
// );

console.log(parent);

const jsxHeading = <h1>This is JSx Heading</h1>;

console.log(jsxHeading);

const Title = () => <h1>THis is title bro</h1>;

const App = () => {
  return (
    <div className="mainContainer">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    children: [
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contactUs",
        element: <ContactUs />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    element: <App />,
  },
]);

// const HeadingComponent = () => (
//   <div id="container">
//     <Title></Title>
//     <Title />
//     {Title()}
//     <h1>This is functional component </h1>
//   </div>
// );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
