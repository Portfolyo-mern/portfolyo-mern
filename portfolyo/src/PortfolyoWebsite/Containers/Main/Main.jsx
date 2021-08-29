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
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
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
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import ReplayIcon from '@material-ui/icons/Replay';
import AOS from 'aos';
import {  combineReducers } from "redux";
import Store from "../../../redux/store";
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";
import {Baseurl} from "../../../App";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: 99999,
    color: '#fff',
  },
}));



const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });


const Main = () => {
    const education = useRef(null);
    const skills = useRef(null);
    const about = useRef(null);
    const project = useRef(null);
    const contactform = useRef(null);
    const home = useRef(null);
    const H = useHistory();
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
    const portfolyodata = useSelector(state=>state);
    const Spinner = useSelector(state=>state.Spinner);
    // console.log(ViewMode)
    // React.useEffect(()=>{
    //     var getReducers = localStorage.getItem("portfolyodata");
    //     // console.log(getReducers);
    //     if(getReducers!==null) {
    //         getReducers = JSON.parse(getReducers);
    //         const reducers  = combineReducers(getReducers);
    //         Store.replaceReducer(reducers);
    //     }
    // },[]);
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
          useEffect(() => {
            AOS.init({
                // duration:600,
                offset: 300
            });
          },[ViewMode]);
          const [open, setOpen] = React.useState(false);
            const handleClickOpen = () => {
                setOpen(true);
            };

            const handleClose = () => {
                setOpen(false);
            };
        const reset = () => {
            window.onbeforeunload = null;
            if(window.confirm('enter okay to reset the page with defaults')){
                localStorage.removeItem(`${localStorage.getItem("username")}_data`);
                window.location.reload(); 
            }
            else{
            }
        }
        const save = () => {
            // console.log(portfolyodata);
            setOpen(false);
            localStorage.setItem(`${localStorage.getItem("username")}_data`,JSON.stringify(portfolyodata));
            window.onbeforeunload = null;
            window.location.reload();
            // var getReducers = localStorage.getItem("portfolyodata");
            // // console.log(getReducers);
            // if(getReducers!==null) {
            //     getReducers = JSON.parse(getReducers);
            //     dispatch(getReducers);
            //     // const reducers  = combineReducers(getReducers);
            //     // Store.replaceReducer(reducers);
            // }
        }
        const [dail,setdail] = React.useState(false);
        const [getdata,setdata] = React.useState({
            username:"",
            _id:""
        });
        const download = async () => {
            localStorage.setItem(`${localStorage.getItem("username")}_data`,JSON.stringify(portfolyodata));
            setOpen(false);
            dispatch({type:"spinner",payload:true});
            try{
                const result = await axios({
                    url:`${Baseurl}/addportfolyo`,
                    method:"post",
                    data:{token:localStorage.getItem("token"),data:localStorage.getItem(`${localStorage.getItem("username")}_data`)}
                });
                dispatch({type:"spinner",payload:false});
                // console.log(result.data);
                setdata(result.data);
                setdail(true);
            }catch(error){
                console.log(error);
                dispatch({type:"spinner",payload:false});
                alert("your website not downloaded please try again");
            }
        }
        const classes = useStyles();
        return (
            // <div>
            <div className="entireWebsite">
                 <Backdrop  
                 className={classes.backdrop}
                    open={Spinner}
                 >
                    <CircularProgress color="primary" />
                </Backdrop>
                <Dialog
                    open={dail}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={()=>{
                        setdail(false);
                    }}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                    >
                    <DialogTitle id="alert-dialog-slide-title">{"Copy website link or goto website ??"}</DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Please choose option for copying the website link or redirect to
                        your website or click cancel to choose nothing 
                    </DialogContentText>
                    </DialogContent>
                    <div className="mx-3" style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between"}}>
                        <div style={{width:"max-content"}}>
                            <Button onClick={()=>{
                                setdail(false);
                            }} color="secondary">
                                cancel
                            </Button>
                        </div>
                        <div style={{width:"max-content"}}>
                            <Button onClick={()=>{
                                navigator.clipboard.writeText(`${window.location.origin}/#/portfolyo/${getdata.username}/${getdata._id}`);
                            }} color="primary">
                                copy
                            </Button>
                        </div>
                        <div style={{width:"max-content"}}>
                            <a href={`${window.location.origin}/#/portfolyo/${getdata.username}/${getdata._id}`} target="_blank">
                                <Button onClick={()=>{
                                    window.onbeforeunload = null;
                                }} color="primary">
                                    redirect
                                </Button>
                            </a>
                        </div>
                    </div>
                    <DialogActions>
                    </DialogActions>
                </Dialog>
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                    >
                    <DialogTitle id="alert-dialog-slide-title">{"Save Changes or Create Portfolyo ??"}</DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Please choose option for saving the changes or download the changes if
                        your website is ready or click cancel  
                    </DialogContentText>
                    </DialogContent>
                    <div className="mx-3" style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between"}}>
                        <div style={{width:"max-content"}}>
                            <Button onClick={handleClose} color="secondary">
                                cancel
                            </Button>
                        </div>
                        <div style={{width:"max-content"}}>
                            <Button onClick={save} color="primary">
                                save
                            </Button>
                        </div>
                        <div style={{width:"max-content"}}>
                            <Button onClick={download} color="primary">
                                Download
                            </Button>
                        </div>
                    </div>
                    <DialogActions>
                    </DialogActions>
                </Dialog>
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
                            onClick={()=>{
                                setOpen((pre)=>!pre);
                                // console.log("in save");
                            }}
                        >
                            <SaveAltIcon />
                        </Fab>
                        <Fab
                            onClick={()=>{
                                dispatch({type:"openeditor",payload:false})
                            }}
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
                            <HighlightOffIcon />
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
                            onClick={reset}
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
                            {/* <WbIncandescentIcon onClick={()=>{
                                alert("working on auto suggestions mode coming soon 🤩🤩...")
                            }}/> */}
                            <ReplayIcon />
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
