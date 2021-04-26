import React, { useState } from 'react'
import "./Header3.scss";
import {useSelector} from 'react-redux';


let Header3 = (props) => {
    const [hover,sethover] = useState(false);
    const Navbarbg = useSelector(state=>state.NavbarBg);
    const NavbarIconColor = useSelector(state=>state.NavbarIconColor);
    const IconColor = useSelector(state=>state.IconColor);
    const onScrollBg = useSelector(state=>state.onScrollBg);
    const NavHoverColor = useSelector(state=>state.NavHoverColor);
    const HomeIconText = useSelector(state=>state.HomeIconText);
    const ArticleIconText = useSelector(state=>state.ArticleIconText);
    const AboutIconText = useSelector(state=>state.AboutIconText);
    const ContactIconText = useSelector(state=>state.ContactIconText);
    const NavbarIconText = useSelector(state=>state.NavbarIconText);
    
    props.menu[0].name=HomeIconText;
    props.menu[1].name=ArticleIconText;
    props.menu[2].name=AboutIconText;
    props.menu[3].name=ContactIconText;

    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);
    return (
        <div className="Header3">
            <div className="Header2">
                <nav id="scrollNavbar" class="navbar navbar-fixed-top  navbar-expand-lg navbar-dark fixed-top" style={{ postion: "sticky", background: (colorChange) ? onScrollBg : Navbarbg,color:NavbarIconColor }} >
                    <a class="navbar-brand" style={{ fontSize: "1.8rem",color:NavbarIconColor }} href="">{NavbarIconText}</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ml-auto" style={{ fontSize: "1rem" }}>
                            <section class="bg-black text-white">
                                <nav class="cl-effect-11">
                            {props.menu.map((ele) => (
                                    <a href={ele.to} onMouseEnter={()=>sethover(true)} onMouseLeave={()=>sethover(false)}  style={{color:(hover)?NavHoverColor:IconColor,
                                        ":hover":{
                                          color:NavHoverColor
                                        }}} data-hover={ele.name}>{ele.name}</a>
                            ))}
                                </nav>
			                </section>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}


export default Header3
