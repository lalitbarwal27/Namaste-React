import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

const Header = () => {
  const [loggedState, setLoggedState] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="header">
      <div className="logoContainer">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="navItems">
        <ul>
          <li>{onlineStatus === false ? "Logout" : "Login"}</li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/aboutUs"}>About Us</Link>
          </li>
          <li>
            <Link to={"/contactUs"}>Contact Us</Link>
          </li>
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
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
