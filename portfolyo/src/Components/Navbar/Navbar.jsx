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

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

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
            <NavItem className="ml-auto navitemNavBar">
              <NavLink className="navItemNavLink" href="/components/">
                Your Websites
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="navItemNavLink"
                href="https://github.com/reactstrap/reactstrap"
                style={{
                  color: "#ffffff",
                }}
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