import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
// import AboutUs from "./components/AboutUs";
// import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/userContext";
import { Provider } from "react-redux";
import store from "./utils/appStore";
import Cart from "./components/Cart";

const AboutUs = lazy(() => import("./components/AboutUs"));

const ContactUs = lazy(() => import("./components/ContactUs"));

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

const jsxHeading = <h1>This is JSx Heading</h1>;

console.log(jsxHeading);

const Title = () => <h1>THis is title bro</h1>;

const App = () => {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    setUserName("Lalit Barwal");
  }, []);

  return (
    <Provider store={store}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="mainContainer">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    children: [
      {
        path: "/aboutUs",
        element: (
          <Suspense fallback={<h2>....loading</h2>}>
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/contactUs",
        element: (
          <Suspense fallback={<h2>....loading</h2>}>
            {" "}
            <ContactUs />
          </Suspense>
        ),
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
