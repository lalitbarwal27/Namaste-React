import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [loggedState, setLoggedState] = useState("Login");
  return (
    <div className="header">
      <div className="logoContainer">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="navItems">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>News</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() =>
              loggedState === "Login"
                ? setLoggedState("Logout")
                : setLoggedState("Login")
            }
          >
            {loggedState}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
