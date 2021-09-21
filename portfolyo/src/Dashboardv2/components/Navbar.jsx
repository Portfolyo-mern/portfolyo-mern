import React, { useState } from "react";
import styled from "styled-components";
import Buttonn from "@material-ui/core/Button";
import Bounce from "react-reveal/Bounce";
import {useHistory} from "react-router-dom";
import {Baseurl} from "../../App";
import axios from "axios";

const Navbar = (props) => {
  const H = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  // console.log(props.username);
  const logout = async () => {
    const token = localStorage.getItem("token");
    localStorage.removeItem("token");
    axios.get(`${Baseurl}/logout/${token}`).then((res)=>{
    }).catch(()=>{
    });
    H.push("/");  
  }
  return (
    <Nav
    style={{ height: "80px", background: "#fff", zIndex: "999999" }}
    >
      <Container 
        className="shadow-sm"
       style={{ height: "80px",paddingTop:"1rem",paddingBottom:"1rem" }}>
        <Bounce top>
          <h3 style={{ color: "#3f51b5",maxWidth:"200px"}}>
            {/* {props.username} */}
            Portfolyo
          </h3>
        </Bounce>
          <Hamburger onClick={() => setIsOpen(!isOpen)}>
            <span />
            <span />
            <span />
          </Hamburger>
          <Menu isOpen={isOpen}>
        <Bounce top>
            <Buttonn className="mb-3 mx-3" color="primary" onClick={()=>{
              H.push("/mywebsites")
            }}>
              My Websites
            </Buttonn>
        </Bounce>
        <Bounce top>
          <Buttonn className="mb-3 mx-3"
            onClick={logout}
            color="secondary">
            Logout
          </Buttonn>

        </Bounce>
          </Menu>
      </Container>
    </Nav>
  );
};

export default Navbar;

const Button = styled.button`
  font-size: 0.8rem;
  background: #f774c5;
  border: none;
  padding: 0.6rem 1.1rem;
  color: #6a0dad;
  border-radius: 1rem;
  box-shadow: 0px 13px 24px -7px #ecb6d7;
  transition: all 0.3s ease-in-out;
  margin-left: 0.5rem;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 17px 16px -11px #ecb6d7;
  }

  @media (max-width: 670px) {
    margin-bottom: 1rem;
    padding: 0.3;
  }
`;

const MenuLink = styled.a`
  text-decoration: none;
  color: #858586;
  font-size: 0.9rem;
  padding: 0.7rem 1.5rem;
  transition: all 0.2s ease-in;
  border-radius: 0.5rem;
  font-weight: 500;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: auto;
  width: 100%;
  padding: 2rem;
  padding-top: 0;
  position: relative;
  top: 0;
  z-index: 999999;
  svg {
    height: 1.4rem;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: #858586;
    font-size: 0.9rem;
    padding: 0.7rem 1.5rem;
    transition: all 0.2s ease-in;
    border-radius: 0.5rem;
    font-weight: 500;

    &:hover {
      color: #7781d4;
      background: #e7e9fc;
    }
  }
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: inherit;
  z-index: 999999;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    background-color: rgba(255, 255, 255, 0.9);
    @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
      -webkit-backdrop-filter: blur(3px);
      backdrop-filter: blur(1px);
      background-color: rgba(255, 255, 255, 0.4);
    }
    border-radius: 1rem;
    margin-top: 1rem;
    box-shadow: -4px 8px 15px 1px rgba(0, 0, 0, 0.07);
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  position: relative;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #f774c5;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;
