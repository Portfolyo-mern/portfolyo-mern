import React, { useState, useEffect, useRef } from "react";
import Header from "../../Components/Header/Header";
import Header2 from "../../Components/Header2/Header2";
import Header3 from "../../Components/Header3/Header3";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import FavoriteIcon from "@material-ui/icons/Favorite";
import NavigationIcon from "@material-ui/icons/Navigation";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import Editor from "../../Components/Editor/Editor";
import ProfileSection from "../../Components/ProfileSection/ProfileSectionSelector/ProfileSectionSelector";
import AboutSection from "../../Components/AboutSection/AboutSection";
import Education from "../../Components/Education/Education";
import ContactForm from "../../Components/Contact/ContactForm/ContactForm";
// import ProfileSection2 from '../../Components/ProfileSection/ProfileSectionSelector/ProfileSectionSelector';
import { useSelector, useDispatch } from "react-redux";
import "./Main.scss";
import Project from '../../Components/Project/Project'
import SkillsSectionComponent from '../../Components/SkillsSection/SkillsSectionComponent/SkillsSectionComponent';
// import CloseIcon from '@material-ui/icons/Close';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button'
const Main = () => {
    const education = useRef(null);
    const skills = useRef(null);
    const about = useRef(null);
    const project = useRef(null);
    const contactform = useRef(null);
    const home = useRef(null);
    
    // const skills = useRef(null);
    // console.log(education);
    const ScrollE = () => education.current.scrollIntoView();
    const ScrollA = () => about.current.scrollIntoView();
    const ScrollH = () => skills.current.scrollIntoView();
    const ScrollP = () => project.current.scrollIntoView();
    const ScrollC = () => contactform.current.scrollIntoView();
    const ScrollHome = () => home.current.scrollIntoView();
    const NavbarState = useSelector(state=>state.Navbar);
    const HomeIconText = useSelector(state=>state.HomeIconText);
    const ViewMode = useSelector(state=>state.ViewMode);
    const dispatch = useDispatch();
    const OpenEditor = useSelector(state=>state.OpenEditor);
    const [logo, setlogo] = useState("NAVBAR");
    // console.log(ViewMode)
    const [menu, setmenu] = useState([
        { name: "ABOUT", to: "about" },
        { name: "SKILLS", to: "skills" },
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
        const Navbars = [<Header menu={menu} func={{ScrollE:ScrollE,ScrollH,ScrollA,ScrollP,ScrollC,ScrollHome}} logo={logo}/>,<Header2 func={{ScrollE:ScrollE,ScrollH,ScrollA,ScrollP,ScrollC,ScrollHome}}  menu={menu} logo={logo}/>,<Header3 func={{ScrollE:ScrollE,ScrollH,ScrollA,ScrollP,ScrollC,ScrollHome}}  menu={menu} logo={logo}/>];
        const openeditor = useSelector(state=>state.OpenEditor);
        const [editvisible, seteditvisible] = useState(true);
        const [savevisible, setsavevisible] = useState(true);
        window.onbeforeunload = function() {
            return `if you not downloaded the portfolyo please download it by clicking download button
                or else all the data will be lost`;
          };
          const mainProfileSectionBeginRef = useRef(null);
          const mainProfileSectionEndRef = useRef(null);
      
          let sectionUnderView = 2;
      
          const onScrollEditOption = () => {
            //   if(OpenEditor){
              // console.log("Main: ", window.pageYOffset);
              // console.log("Main: ", mainProfileSectionBeginRef.current);
              // console.log(
              //     "Main: ",
              //     mainProfileSectionBeginRef.current!==null?mainProfileSectionBeginRef.current:null
              // );
              // const ProfileSectionTop =
              //     window.document.getElementById("mainProfileSectionBeginId") !==
              //         undefined ||
              //     window.document.getElementById("mainProfileSectionBeginId") !== null
              //         ? window.document.getElementById("mainProfileSectionBeginId")
              //               .offsetTop
              //         : null;
              const ProfileSectionBottom =
                  window.document.getElementById("mainProfileSectionEndId") !==
                      undefined ||
                  window.document.getElementById("mainProfileSectionEndId") !== null
                      ? window.document.getElementById("mainProfileSectionEndId")
                            .offsetTop
                      : null;
              const AboutSectionBottom =
                  window.document.getElementById("mainAboutSectionEndId") !==
                      undefined ||
                  window.document.getElementById("mainAboutSectionEndId") !== null
                      ? window.document.getElementById("mainAboutSectionEndId")
                            .offsetTop
                      : null;
              const SkillsSectionBottom =
                  window.document.getElementById("mainSkillsSectionEndId") !==
                      undefined ||
                  window.document.getElementById("mainSkillsSectionEndId") !== null
                      ? window.document.getElementById("mainSkillsSectionEndId")
                            .offsetTop
                      : null;
              const ProjectsSectionBottom =
                  window.document.getElementById("mainProjectsSectionEndId") !==
                      undefined ||
                  window.document.getElementById("mainProjectsSectionEndId") !== null
                      ? window.document.getElementById("mainProjectsSectionEndId")
                            .offsetTop
                      : null;
              const EducationSectionBottom =
                  window.document.getElementById("mainEducationSectionEndId") !==
                      undefined ||
                  window.document.getElementById("mainEducationSectionEndId") !== null
                      ? window.document.getElementById("mainEducationSectionEndId")
                            .offsetTop
                      : null;
              console.log(ProjectsSectionBottom, EducationSectionBottom);
              if (window.pageYOffset < (ProfileSectionBottom * 2) / 3) {
                //   console.log("Profile Section!");
                  if (sectionUnderView !== 2) {
                      dispatch({
                          type: "tabpointer",
                          payload: 2,
                      });
                      sectionUnderView=2;
                  }
              } else if (window.pageYOffset < (AboutSectionBottom * 2.5) / 3) {
                //   console.log("About Section!");
                  if (sectionUnderView !== 4) {
                      dispatch({
                          type: "tabpointer",
                          payload: 4,
                      });
                      sectionUnderView = 4;
                  }
              } else if (window.pageYOffset < (SkillsSectionBottom * 2.8) / 3) {
                //   console.log("Skills Section!");
                  if (sectionUnderView !== 5) {
                      dispatch({
                          type: "tabpointer",
                          payload: 5,
                      });
                      sectionUnderView = 5;
                  }
              } else if (window.pageYOffset < (ProjectsSectionBottom * 2.8) / 3) {
                //   console.log("Projects Section!");
                  if (sectionUnderView !== 6) {
                      dispatch({
                          type: "tabpointer",
                          payload: 6,
                      });
                      sectionUnderView = 6;
                  }
              } else if (window.pageYOffset < (EducationSectionBottom * 2.8) / 3) {
                //   console.log("Education Section!");
                  if (sectionUnderView !== 7) {
                      dispatch({
                          type: "tabpointer",
                          payload: 7,
                      });
                      sectionUnderView = 7;
                  }
              } else {
                //   console.log("Contact Section");
                  if (sectionUnderView !== 8) {
                      dispatch({
                          type: "tabpointer",
                          payload: 8,
                      });
                      sectionUnderView = 8;
                  }
            //   }
            }
              // if(SkillSectionHeight!==null){
              //     else {
              //         console.log("Skill Section!");
              //     }
              // }
              // if(window.pageYOffset<(window.document.getElementById("mainProfileSectionBeginId")
              //         .offsetHeight))
          };
      
          useEffect(() => {
            onScrollEditOption();
            //   window.addEventListener("scroll", onScrollEditOption);
          }, [OpenEditor]);
        //   useEffect(() => {
        //     AOS.init({
        //         // duration:600,
        //         offset: 300
        //     });
        //   },[ViewMode]);
          
        return (
            // <div>
            <div className="entireWebsite">
                <div className="Mainbackground" ref={home}></div>
                {Navbars[NavbarState]}
                {
                    (!ViewMode)?(
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
                            aria-label="save"
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
                            onClick={()=>{
                                dispatch({type:"viewmode", payload:true})
                            }}
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
                    ):(
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
                        }}>
                        <Button
                            className="mx-3 bg-info absolute-center"
                            // style={{
                            //     display: savevisible ? "inherit" : "none",
                            //     position: "fixed",
                            //     right: 0,
                            //     bottom: 20,
                            //     left: "6rem",
                            //     zIndex: 999999,
                            // }}
                            aria-label="view"
                            onClick={()=>{
                                dispatch({type:"viewmode", payload:false})
                            }}
                        >
                            Back &nbsp;
                            <VisibilityOffIcon />
                        </Button>
                       
                        </div>
                    )
                }
             {/*
                <div style={{ display: openeditor ? "inherit" : "none" }}>
                    <Editor />
                </div>
                {/* <Header menu={menu} logo={logo} /> */}
                {/* <div>
                    <ProfileSection />
                </div>
                <div  ref={about}>
                    <AboutSection/>
                </div>
                <div  ref={skills}  style={{paddingTop:"5rem"}}>
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
                     <WbIncandescentIcon
                        onClick={() => {
                            alert(
                                "working on auto suggestions mode coming soon 🤩🤩..."
                            );
                        }}
                    />
                </Fab> 
            </div> */}
            
            <div style={{ display: openeditor ? "inherit" : "none" }}>
                <Editor />
            </div>
            {/* <Header menu={menu} logo={logo} /> */}
            <div ref={mainProfileSectionBeginRef}>
                <div id="mainProfileSectionBeginId"></div>
                <ProfileSection />
                <div
                    id="mainProfileSectionEndId"
                    ref={mainProfileSectionEndRef}
                ></div>
            </div>
            <div ref={about}>
                <AboutSection />
                <div id="mainAboutSectionEndId"></div>
            </div>
            <div ref={skills} style={{ paddingTop: "5rem" }}>
                <SkillsSectionComponent />
                <div id="mainSkillsSectionEndId"></div>
            </div>
            <div
                ref={project}
                style={{
                    paddingTop: "6rem",
                    position: "relative",
                    overflow: "hidden",
                    // border: "1px solid black",
                }}
            >
                <Project />
            </div>
            <div id="mainProjectsSectionEndId"></div>
            <div style={{ paddingTop: "3rem" }} ref={education}>
                <Education />
            </div>
            <div id="mainEducationSectionEndId"></div>
            <div style={{ paddingTop: "3rem" }} ref={contactform}>
                <ContactForm />
                <div id="mainContactSectionEndId"></div>
            </div>
        </div>
    );
};

export default Main;
