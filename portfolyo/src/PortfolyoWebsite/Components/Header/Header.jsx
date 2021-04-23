import React from 'react';
import { ReactNavbar } from "react-responsive-animate-navbar";

const Header = () => {
    return (
      <>
        <ReactNavbar
          color="rgb(150, 150, 100)"
          logo="https://svgshare.com/i/KHh.svg"
          menu={[
            { name: "HOME", to: "/" },
            { name: "ARTICLES", to: "/articles" },
            { name: "ABOUT ME", to: "/about" },
            { name: "CONTACT", to: "/contact" },
          ]}
          social={[
            {
              name: "Linkedin",
              url: "https://www.linkedin.com/in/nazeh-taha/",
              icon: ["fab", "linkedin-in"],
            },
            {
              name: "Facebook",
              url: "https://www.facebook.com/nazeh200/",
              icon: ["fab", "facebook-f"],
            },
            {
              name: "Instagram",
              url: "https://www.instagram.com/nazeh_taha/",
              icon: ["fab", "instagram"],
            },
            {
              name: "Twitter",
              url: "http://nazehtaha.herokuapp.com/",
              icon: ["fab", "twitter"],
            },
          ]}
        />
        <h1>in header</h1>
      </>
    );
}

