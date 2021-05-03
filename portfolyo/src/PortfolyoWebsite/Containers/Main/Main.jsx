import React, { useState, useEffect ,useRef} from 'react';
import Header from '../../Components/Header/Header';
import Header2 from '../../Components/Header2/Header2';
import Header3 from '../../Components/Header3/Header3';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import Editor from '../../Components/Editor/Editor';
import ProfileSection from '../../Components/ProfileSection/ProfileSectionSelector/ProfileSectionSelector';
import AboutSection from '../../Components/AboutSection/AboutSection';
import Education from '../../Components/Education/Education';
// import ProfileSection2 from '../../Components/ProfileSection/ProfileSectionSelector/ProfileSectionSelector';
import {useSelector,useDispatch} from "react-redux";
import "./Main.scss";


const Main = () => {
    const education = useRef(null);
    const home = useRef(null);
    // console.log(education);
    const ScrollE = () => education.current.scrollIntoView();
    const ScrollH = () => home.current.scrollIntoView();
    const NavbarState = useSelector(state=>state.Navbar);
    const HomeIconText = useSelector(state=>state.HomeIconText);
    const dispatch = useDispatch();
    const [logo, setlogo] = useState("NAVBAR");
    console.log(HomeIconText)
    const [menu, setmenu] = useState([
        { name: HomeIconText, to: "" },
        { name: "ARTICLES", to: "education" },
        { name: "ABOUT", to: "/about" },
        { name: "CONTACT", to: "/contact" },
    ]);
    const [social, setsocial] = useState([
        {
            name: "Linkedin",
            url: "https://www.linkedin.com/",
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
        //   {
            //     name: "Twitter",
            //     url: "http://nazehtaha.herokuapp.com/",
            //     icon: ["fab", "twitter"],
            //   },
        ]);
        const Navbars = [<Header menu={menu} func={{ScrollE:ScrollE,ScrollH}} logo={logo}/>,<Header2 func={{ScrollE:ScrollE,ScrollH}}  menu={menu} logo={logo}/>,<Header3 func={{ScrollE:ScrollE,ScrollH}}  menu={menu} logo={logo}/>];
        const openeditor = useSelector(state=>state.OpenEditor);
        const [editvisible, seteditvisible] = useState(true);
        const [savevisible, setsavevisible] = useState(true);
        return (
        <>
            <div className="Mainbackground" ref={home}>
            </div>
            {Navbars[NavbarState]}
            <Fab className="mx-auto bg-warning fixed-bottom"
                onClick={()=>{dispatch({type:"openeditor",payload:!openeditor})}}
                style=
                {{
                    display: (editvisible) ? "inherit" : "none",
                    position: "fixed",
                    right: "6rem",
                    bottom: 20,
                    left: 0,
                    zIndex: 999999
                }} aria-label="edit">
                <EditIcon />
            </Fab>
            <Fab className="mx-auto bg-success absolute-center" style=
                {{
                    display: (savevisible) ? "inherit" : "none",
                    position: "fixed",
                    right: 0,
                    bottom: 20,
                    left: "6rem",
                    zIndex:999999
                }} aria-label="edit">
                <SaveAltIcon />
            </Fab>
            <div
                style={{ display: (openeditor) ? "inherit" : "none" }}>
                <Editor />
            </div> 
           {/* <Header menu={menu} logo={logo} /> */}
           <div>
            <ProfileSection/>
           </div>
           <AboutSection/>
           <div style={{paddingTop:"3rem"}} ref={education}>
                <Education />
           </div>
        </>
    )
}

export default Main
