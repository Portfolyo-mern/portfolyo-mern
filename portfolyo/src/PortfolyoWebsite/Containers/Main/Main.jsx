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
import ContactForm from "../../Components/Contact/ContactForm/ContactForm";
// import ProfileSection2 from '../../Components/ProfileSection/ProfileSectionSelector/ProfileSectionSelector';
import {useSelector,useDispatch} from "react-redux";
import "./Main.scss";
import Project from '../../Components/Project/Project'
import SkillsSectionComponent from '../../Components/SkillsSection/SkillsSectionComponent/SkillsSectionComponent';
import CloseIcon from '@material-ui/icons/Close';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';

const Main = () => {
    const education = useRef(null);
    const home = useRef(null);
    const about = useRef(null);
    const project = useRef(null);
    const contactform = useRef(null);
    const skills = useRef(null);
    // console.log(education);
    const ScrollE = () => education.current.scrollIntoView();
    const ScrollA = () => about.current.scrollIntoView();
    const ScrollH = () => home.current.scrollIntoView();
    const ScrollP = () => project.current.scrollIntoView();
    const ScrollC = () => contactform.current.scrollIntoView();
    const NavbarState = useSelector(state=>state.Navbar);
    const HomeIconText = useSelector(state=>state.HomeIconText);
    const dispatch = useDispatch();
    const [logo, setlogo] = useState("NAVBAR");
    console.log(HomeIconText)
    const [menu, setmenu] = useState([
        { name: HomeIconText, to: "" },
        { name: "ABOUT", to: "about" },
        { name: "PROJECT", to: "project" },
        { name: "ARTICLES", to: "education" },
        { name: "CONTACT", to: "contactform" },
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
        const Navbars = [<Header menu={menu} func={{ScrollE:ScrollE,ScrollH,ScrollA,ScrollP,ScrollC}} logo={logo}/>,<Header2 func={{ScrollE:ScrollE,ScrollH,ScrollA,ScrollP,ScrollC}}  menu={menu} logo={logo}/>,<Header3 func={{ScrollE:ScrollE,ScrollH,ScrollA,ScrollP,ScrollC}}  menu={menu} logo={logo}/>];
        const openeditor = useSelector(state=>state.OpenEditor);
        const [editvisible, seteditvisible] = useState(true);
        const [savevisible, setsavevisible] = useState(true);
        return (
            <>
                <div className="Mainbackground" ref={home}></div>
                {Navbars[NavbarState]}
                <div
                    
                    style={{
                        display: editvisible ? "block" : "none",
                        position: "fixed",
                        bottom: 20,
                        zIndex: 999999,
                        width:"max-content",
                        left:"50%",
                        transform:'translate(-50%,10%)',
                        justifyContent:"space-between",
                        // margin:"auto"
                    }}
                >
                    <Fab
                        className="mx-3 bg-warning fixed-bottom"
                        onClick={() => {
                            dispatch({ type: "openeditor", payload: !openeditor });
                        }}
                        aria-label="edit"
                    >
                        <EditIcon />
                    </Fab>
                    <Fab
                        className="mx-3 bg-success absolute-center"
                        // style={{
                        //     display: savevisible ? "inherit" : "none",
                        //     position: "fixed",
                        //     bottom: 20,
                        //     right: "6rem",
                        //     // left:0,
                        //     zIndex: 999999,
                        // }}
                        aria-label="edit"
                    >
                        <SaveAltIcon />
                    </Fab>
                    <Fab
                        className="mx-3 bg-danger absolute-center"
                        // style={{
                        //     display: savevisible ? "inherit" : "none",
                        //     position: "fixed",
                        //     right: 0,
                        //     bottom: 20,
                        //     left: "6rem",
                        //     zIndex: 999999,
                        // }}
                        aria-label="close"
                    >
                        <HighlightOffIcon onClick={()=>{
                            dispatch({type:"openeditor",payload:false})
                        }}/>
                    </Fab>
                    <Fab
                        className="mx-3 bg-success absolute-center"
                        // style={{
                        //     display: savevisible ? "inherit" : "none",
                        //     position: "fixed",
                        //     right: 0,
                        //     bottom: 20,
                        //     left: "6rem",
                        //     zIndex: 999999,
                        // }}
                        aria-label="view"
                    >
                        <VisibilityIcon />
                    </Fab>
                    <Fab
                        className="mx-3 bg-warning absolute-center"
                        // style={{
                        //     display: savevisible ? "inherit" : "none",
                        //     position: "fixed",
                        //     right: 0,
                        //     bottom: 20,
                        //     left: "6rem",
                        //     zIndex: 999999,
                        // }}
                        aria-label="suggestions"
                    >
                        <WbIncandescentIcon onClick={()=>{
                            alert("working on auto suggestions mode coming soon 🤩🤩...")
                        }}/>
                    </Fab>
                </div>
                <div style={{ display: openeditor ? "inherit" : "none" }}>
                    <Editor />
                </div>
                {/* <Header menu={menu} logo={logo} /> */}
                <div>
                    <ProfileSection />
                </div>
                <div ref={about}>
                    <AboutSection />
                </div>
                <div ref={skills}>
                    <SkillsSectionComponent />
                </div>
                <div
                    ref={project}
                    style={{
                        paddingTop: "6rem",
                        position: "relative",
                        overflow: "hidden",
                    }}
                >
                    <Project />
                </div>
                <div style={{ paddingTop: "3rem" }} ref={education}>
                    <Education />
                </div>
                <div style={{ paddingTop: "3rem" }} ref={contactform}>
                    <ContactForm />
                </div>
            </>
        );
}

export default Main;
