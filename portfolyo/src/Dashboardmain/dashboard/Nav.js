import React from "react";
// import { FaAlignJustify } from "react-icons/fa";
import Navlogo from "../../assets/dashboardimages/navalogo.PNG"
const Nav = () => {
  const [state, setState] = React.useState(true);
  return (
    <div className="dashboardmain">
      <nav className="navbar">
        <div className="container">
          <div className="navbar__container">
            <ul className="navbar__left">
              <div className="navbar__left-logo">
                <img src={Navlogo} alt="logo" />
              </div>
            </ul>
            {state ? (
              <ul className="navbar__right">
              <li>
              <a href="">history</a>
            </li>
                <li>
                  <a href="">LogOut</a>
                </li>
              </ul>
            ) : (
              ""
            )}
          </div>
        </div>
        {/* <div className="toggle" onClick={() => setState(!state)}>
            <FaAlignJustify />
              </div
        > */}

      </nav>
    </div>
  );
};

export default Nav;
