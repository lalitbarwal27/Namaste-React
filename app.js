// const heading= React.createElement('h1',{},'this is heading from react code')

// const root = ReactDOM.createRoot(document.getElementById('root'))

// root.render(heading)

//nested Elements

import React from "react";
import ReactDOM from 'react-dom'
import restaurantData from './resturant.json'

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


console.log(parent)

const jsxHeading=<h1>This is JSx Heading</h1>

console.log(jsxHeading)

const Title =() => (
  <h1>THis is title bro</h1>
)

//fucntional component 


const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All" alt="logo"/>
      </div>
      <div className="navItems">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>News</li>
          <li>Cart</li> 
        </ul>
      </div>
    </div>
  )
}

const Search = () => {
  <div>Search</div>
}

const RestaurantCard = (props) => {
  

  const {info}=props.restData
  const {name,costForTwo,cuisines,avgRating,sla,cloudinaryImageId}=info

  return (
  <div key={info.id} className="cardContainer">
    <img className="restImage" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} alt='' />
    <h4>{name}</h4>
    <h4>{cuisines.join(' ,')}</h4>
    <h4>{costForTwo}</h4>
    <h4>{avgRating}</h4>
    <h4>{sla.deliveryTime}</h4>
  </div>
  )
}



const Body = () => {
  return (
    <div>
      <Search/>
      <div className="container">
      {restaurantData.restaurants.map((rest) => <RestaurantCard key={rest.info.id} restData={rest}/> )}
      
</div>
    </div>
  )
}

const App =() => {
  return (
  <div className="mainContainer">
    <Header/>
    <Body/>
  </div>)
}

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
root.render(<App/>)