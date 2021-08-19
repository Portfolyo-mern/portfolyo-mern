import React, {useState} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import portfolyo from "../../assets/portfolyo_logo.png";
import "./Navbar.scss";
import {useHistory} from 'react-router-dom';
import {Baseurl} from "../../App";
import axios from "axios";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const H = useHistory();
  const toggle = () => setIsOpen(!isOpen);
  const logout = () => {
    const token = localStorage.getItem("token");
    localStorage.removeItem("token");
    axios.get(`${Baseurl}/logout/${token}`).then((res)=>{
    }).catch(()=>{
    });
    H.push("/");  
  }
  return (
    <div>
      <Navbar
        light
        expand="md"
        style={{
          backgroundColor: "#161616",
        }}
      >
        <NavbarBrand href="/">
          <img src={portfolyo} className="navbarBrand"></img>
        </NavbarBrand>
        <NavbarToggler
          onClick={toggle}
          style={{
            backgroundColor: "#ffffff",
          }}
        />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto navbarNav" navbar>
            <NavItem className="mx-auto navitemNavBar">
              <NavLink className="navItemNavLink" href="/components/">
                Your Websites
              </NavLink>
            </NavItem>
            <NavItem className="mx-auto">
              <NavLink
                className="navItemNavLink"
                style={{
                  color: "#ffffff",
                  cursor:"pointer"
                }}
                onClick={logout}
              >
                Logout
              </NavLink>
            </NavItem>
            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle
                nav
                caret
                style={{
                  color: "#ffffff",
                }}
              >
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>
          {/* <NavbarText
            style={{
              color: "#ffffff",
            }}
          >
            Simple Text
          </NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;