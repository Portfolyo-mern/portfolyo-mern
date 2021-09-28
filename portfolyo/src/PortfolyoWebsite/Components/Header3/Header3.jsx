import React, { useState } from "react";
import "./Header3.scss";
import { useSelector } from "react-redux";

let Header3 = (props) => {
    const [hover, sethover] = useState(false);
    const Navbarbg = useSelector((state) => state.NavbarBg);
    const NavbarIconColor = useSelector((state) => state.NavbarIconColor);
    const IconColor = useSelector((state) => state.IconColor);
    const onScrollBg = useSelector((state) => state.onScrollBg);
    const NavHoverColor = useSelector((state) => state.NavHoverColor);
    const HomeIconText = useSelector((state) => state.HomeIconText);
    const ArticleIconText = useSelector((state) => state.ArticleIconText);
    const AboutIconText = useSelector((state) => state.AboutIconText);
    const ContactIconText = useSelector((state) => state.ContactIconText);
    const NavbarIconText = useSelector((state) => state.NavbarIconText);
    const ProjectIconText = useSelector((state) => state.ProjectIconText);

    props.menu[1].name = HomeIconText;
    props.menu[0].name = AboutIconText;
    props.menu[2].name = ProjectIconText;
    props.menu[3].name = ArticleIconText;
    props.menu[4].name = ContactIconText;

    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        } else {
            setColorchange(false);
        }
    };
    window.addEventListener("scroll", changeNavbarColor);
    return (
        <div className="Header3">
            <div className="Header3">
                <nav
                    id="scrollNavbar"
                    class="navbar navbar-fixed-top  navbar-expand-lg navbar-dark fixed-top"
                    style={{
                        postion: "sticky",
                        background: colorChange ? onScrollBg : Navbarbg,
                        color: NavbarIconColor,
                        width: "85%",
                    }}
                >
                    {/* eslint-disable-next-line */}
                    <a
                        class="navbar-brand"
                        style={{ color: NavbarIconColor, cursor: "pointer" }}
                        onClick={() => {
                            props.func.ScrollHome();
                        }}
                    >
                        {NavbarIconText}
                    </a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav3"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav3">
                        <ul class="navbar-nav ml-auto">
                            <section class="bg-black text-white">
                                <nav class="cl-effect-11">
                                    {props.menu.map((ele) => (
                                        // eslint-disable-next-line
                                        <a
                                            onClick={() => {
                                                if (ele.to === "education") {
                                                    props.func.ScrollE();
                                                }
                                                if (ele.to === "skills") {
                                                    props.func.ScrollH();
                                                }
                                                if (ele.to === "about") {
                                                    props.func.ScrollA();
                                                }
                                                if (ele.to === "project") {
                                                    props.func.ScrollP();
                                                }
                                                if (ele.to === "contactform") {
                                                    props.func.ScrollC();
                                                }
                                            }}
                                            onMouseEnter={() => sethover(true)}
                                            onMouseLeave={() => sethover(false)}
                                            style={{
                                                color: hover
                                                    ? NavHoverColor
                                                    : IconColor,
                                                cursor: "pointer",
                                                ":hover": {
                                                    color: NavHoverColor,
                                                },
                                            }}
                                            data-hover={ele.name}
                                        >
                                            {ele.name}
                                        </a>
                                    ))}
                                </nav>
                            </section>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header3;
