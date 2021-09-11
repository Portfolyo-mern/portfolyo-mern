import React, { useState, useEffect, useRef } from "react";
import Header from "../../Components/Header/Header";
import Header2 from "../../Components/Header2/Header2";
import Header3 from "../../Components/Header3/Header3";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import EditIcon from "@material-ui/icons/Edit";
import FavoriteIcon from "@material-ui/icons/Favorite";
import NavigationIcon from "@material-ui/icons/Navigation";
import BuildIcon from "@material-ui/icons/Build";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import Editor from "../../Components/Editor/Editor";
import ProfileSection from "../../Components/ProfileSection/ProfileSectionSelector/ProfileSectionSelector";
import AboutSection from "../../Components/AboutSection/AboutSection";
import ViewHeadlineIcon from "@material-ui/icons/ViewHeadline";
import Education from "../../Components/Education/Education";
import ContactForm from "../../Components/Contact/ContactForm/ContactForm";
import Backdrop from "@material-ui/core/Backdrop";
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import CircularProgress from "@material-ui/core/CircularProgress";
// import ProfileSection2 from '../../Components/ProfileSection/ProfileSectionSelector/ProfileSectionSelector';
import { useSelector, useDispatch } from "react-redux";
import Mobile from "../Mobile/Mobile.jsx";
import Project from "../../Components/Project/Project";
import SkillsSectionComponent from "../../Components/SkillsSection/SkillsSectionComponent/SkillsSectionComponent";
// import CloseIcon from '@material-ui/icons/Close';
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import VisibilityIcon from "@material-ui/icons/Visibility";
import WbIncandescentIcon from "@material-ui/icons/WbIncandescent";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import ReplayIcon from "@material-ui/icons/Replay";
import AOS from "aos";
import { combineReducers } from "redux";
import Store from "../../../redux/store";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { Baseurl } from "../../../App";
import { useHistory } from "react-router-dom";
import $ from "jquery";
import clsx from "clsx";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import ListIcon from "@material-ui/icons/List";
import PersonIcon from "@material-ui/icons/Person";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import InfoIcon from "@material-ui/icons/Info";
import QueueIcon from "@material-ui/icons/Queue";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import CastForEducationIcon from "@material-ui/icons/CastForEducation";
import ClearIcon from "@material-ui/icons/Clear";
import CancelIcon from "@material-ui/icons/Cancel";
import TextEditorNavbar from "../../Components/TextEditorNavbar/TextEditorNavbar";
import HorizontalSplitIcon from '@material-ui/icons/HorizontalSplit';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Menu from '@material-ui/core/Menu';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: 99999,
    color: '#fff',
  },
}));



const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });


const EditWebsite = (props) => {
    const [load,setload] = React.useState(false);
    const _id = props.match.params.id;
    React.useEffect(async ()=>{
        const id=_id.split("@WebsiteId@")[1];
        try{
            const result = await axios({
                url:`${Baseurl}/getportfolyo/${localStorage.getItem("username")}/${id}`,
                method:"get",
            });
            console.log(result.data);
            const data = Object.keys(JSON.parse(result.data.data));
            const value = JSON.parse(result.data.data);
            for(var i of data){
                try{
                    dispatch({type:i,payload:value[i]});
                }catch(err){
                    console.log(err);
                }
            }
            setload(true);
        }catch{
            console.log("error");
        }

    },[]);
    const education = useRef(null);
    const skills = useRef(null);
    const about = useRef(null);
    const project = useRef(null);
    const contactform = useRef(null);
    const [editorDrawer, seteditorDrawer] = React.useState(false);
    const home = useRef(null);
    const H = useHistory();
    // const skills = useRef(null);
    // console.log(education);
    const toggleDrawer = (open) => (event) => {
        if (
            event &&
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        if (!editorDrawer&&editorprops.draggable) {
            dispatch({ type: "OpenEditor", payload: false });
        }
        if(!editorDrawer){
            seteditorprops((pre)=>{
                return {
                    ...pre,
                    drawer:true
                }
            })
        }else{
            seteditorprops((pre)=>{
                return {
                    ...pre,
                    drawer:false
                }
            })
        }
        seteditorDrawer(!editorDrawer);
    };
    const list = (anchor) => (
        <div
            className={clsx(classes1.list)}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {[
                    "Navbar",
                    "ProfilePic",
                    "ProfileSection",
                    "ProfileBackground",
                ].map((text, index) => (
                    <ListItem
                        button
                        key={text}
                        onClick={() => {
                            seteditorDrawer(false);
                            dispatch({ type: "OpenEditor", payload: true });
                            if (text === "Navbar") {
                                dispatch({
                                    type: "tabpointer",
                                    payload: 0,
                                });
                            } else if (text === "ProfilePic") {
                                dispatch({
                                    type: "tabpointer",
                                    payload: 1,
                                });
                            } else if (text === "ProfileSection") {
                                dispatch({
                                    type: "tabpointer",
                                    payload: 2,
                                });
                            } else {
                                dispatch({
                                    type: "tabpointer",
                                    payload: 3,
                                });
                            }
                        }}
                    >
                        <ListItemIcon>
                            {text === "Navbar" ? (
                                <ViewHeadlineIcon />
                            ) : text === "ProfilePic" ? (
                                <PersonIcon />
                            ) : text === "ProfileSection" ? (
                                <PermIdentityIcon />
                            ) : (
                                <PhotoCameraIcon />
                            )}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {["AboutSection", "SkillsSection", "ProjectSection"].map(
                    (text, index) => (
                        <ListItem
                            button
                            key={text}
                            onClick={() => {
                                seteditorDrawer(false);
                                dispatch({ type: "OpenEditor", payload: true });
                                if (text === "AboutSection") {
                                    dispatch({
                                        type: "tabpointer",
                                        payload: 4,
                                    });
                                } else if (text === "SkillsSection") {
                                    dispatch({
                                        type: "tabpointer",
                                        payload: 5,
                                    });
                                } else {
                                    dispatch({
                                        type: "tabpointer",
                                        payload: 6,
                                    });
                                }
                            }}
                        >
                            <ListItemIcon>
                                {text === "AboutSection" ? (
                                    <InfoIcon />
                                ) : text === "SkillsSection" ? (
                                    <WbIncandescentIcon />
                                ) : (
                                    <QueueIcon />
                                )}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    )
                )}
            </List>
            <Divider />
            <List>
                {["EducationSection", "ContactSection"].map((text, index) => (
                    <ListItem
                        button
                        key={text}
                        onClick={() => {
                            seteditorDrawer(false);
                            dispatch({ type: "OpenEditor", payload: true });
                            if (text === "EducationSection") {
                                dispatch({
                                    type: "tabpointer",
                                    payload: 7,
                                });
                            } else {
                                dispatch({
                                    type: "tabpointer",
                                    payload: 8,
                                });
                            }
                        }}
                    >
                        <ListItemIcon>
                            {text === "EducationSection" ? (
                                <CastForEducationIcon />
                            ) : (
                                <MailIcon />
                            )}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {["Top Split","Bottom Split","Cancel Split"].map((text, index) => (
                    <ListItem
                        button
                        key={text}
                        onClick={() => {
                            if(text==="Top Split"){
                                dispatch({type:"OpenEditor", payload: true})
                                seteditorprops({draggable:false,split:"top"})
                            }
                            else if(text==="Cancel Split"){
                                seteditorprops({draggable:true,split:"none"})
                                $("#entireWebsite").css({height:"inherit",overflowY:"inherit",borderBottom:"none"})    
                            }
                            else{
                                dispatch({type:"OpenEditor", payload: true})
                                seteditorprops({draggable:false,split:"bottom"})
                            }
                        }}
                    >
                        <ListItemIcon>
                            {" "}
                            <HorizontalSplitIcon />{" "}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {["Cancel"].map((text, index) => (
                    <ListItem
                        button
                        key={text}
                        onClick={() => {
                            seteditorDrawer(false);
                        }}
                    >
                        <ListItemIcon>
                            {" "}
                            <CancelIcon />{" "}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
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
    const openMiniTextEditor = useSelector((state) => state.openMiniTextEditor);

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
              if(load){
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
              }
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
        const [dail,setdail] = React.useState(false);
        const [getdata,setdata] = React.useState({
            username:"",
            _id:""
        });
        // console.log(props.match);
        const edit = async () => {
            setOpen(false);
            dispatch({type:"spinner",payload:true});
            try{
                const result = await axios({
                    url:`${Baseurl}/editwebsiteId`,
                    method:"post",
                    data:{token:localStorage.getItem("token"),_id,data:JSON.stringify(portfolyodata)}
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
        const classes1 = useStyles();
        const [btnanimate, setbtnanimate] = React.useState(true);
        const [split, setsplit] = React.useState(true);
        const [editorprops,seteditorprops] = React.useState({
            draggable:true,
            split:"none",
            drawer:editorDrawer
        }); 
        const classes = useStyles();
        const [anchorEl, setAnchorEl] = React.useState(null);
        const [curr,setcurr] = React.useState("Desktop");
        const closemenus = () => {
            setAnchorEl(null);
        }
        const selectmenus = (event) => {
            // console.log(event.currentTarget);
            setAnchorEl(event.currentTarget);
        }
        return (load)?
        (ViewMode&&curr==="Mobile")?(
            <Mobile/>
        ):(

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
                    <DialogTitle id="alert-dialog-slide-title">{"Update Portfolyo ??"}</DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Please choose option for editing the changes to
                        your website or click cancel  
                    </DialogContentText>
                    </DialogContent>
                    <div className="mx-3" style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between"}}>
                        <div style={{width:"max-content"}}>
                            <Button onClick={handleClose} color="secondary">
                                cancel
                            </Button>
                        </div>
                        <div style={{width:"max-content"}}>
                            <Button onClick={edit} color="primary">
                                update
                            </Button>
                        </div>
                    </div>
                    <DialogActions>
                    </DialogActions>
                </Dialog>
                <div className="Mainbackground" ref={home}></div>
                {Navbars[NavbarState]}
                <div
                style={{
                    display:
                        !ViewMode && btnanimate && !editorDrawer
                            ? "block"
                            : "none",
                    position: "fixed",
                    bottom: 95,
                    zIndex: 999999,
                    width: "max-content",
                    justifyContent: "space-between",
                }}
            >
                {["Sections"].map((anchor) => (
                    <React.Fragment key={anchor}>
                        <Fab
                            className="mx-3 fixed-bottom"
                            style={{
                                boxShadow:
                                    "0 5px 15px 5px rgba(2, 92, 92, 0.4)",
                                color: "rgba(255, 255, 255, 1)",
                                background: "rgba(2, 122, 122)",
                            }}
                            onClick={toggleDrawer(true)}
                        >
                            <ListIcon />
                        </Fab>
                        <SwipeableDrawer
                            anchor="left"
                            open={editorDrawer}
                            onClose={toggleDrawer(false)}
                            onOpen={toggleDrawer(true)}
                        >
                            {list(anchor)}
                        </SwipeableDrawer>
                    </React.Fragment>
                ))}
            </div>
            <div
                style={{
                    display: !ViewMode && !editorDrawer ? "block" : "none",
                    position: "fixed",
                    bottom: 20,
                    zIndex: 999999,
                    width: "max-content",
                    justifyContent: "space-between",
                }}
                onClick={() => {
                    if (btnanimate) {
                        setbtnanimate(false);
                        $("#btnh1")
                            .finish()
                            .css({ visibility: "visible", opacity: 0 })
                            .animate(
                                { opacity: 1, bottom: 4.5 * 20 + "px" },
                                300 + 100
                            );
                        $("#btn2")
                            .finish()
                            .css({ display: "block", opacity: 0 })
                            .animate(
                                { opacity: 1, bottom: 8 * 20 + "px" },
                                350 + 100
                            );
                        $("#btn3")
                            .finish()
                            .css({ display: "block", opacity: 0 })
                            .animate(
                                { opacity: 1, bottom: 11.5 * 20 + "px" },
                                400 + 100
                            );
                        $("#btn4")
                            .finish()
                            .css({ display: "block", opacity: 0 })
                            .animate(
                                { opacity: 1, bottom: 15 * 20 + "px" },
                                450 + 100
                            );
                        $("#btn5")
                            .finish()
                            .css({ display: "block", opacity: 0 })
                            .animate(
                                { opacity: 1, bottom: 18.5 * 20 + "px" },
                                500 + 100
                            );
                        $("#btn6")
                            .finish()
                            .css({ display: "block", opacity: 0 })
                            .animate(
                                { opacity: 1, bottom: 22 * 20 + "px" },
                                550 + 100
                            );
                    } else {
                        $("#cancelsplit").animate({bottom:22*20},200,function(){
                            $(this).css({display:"none"});
                        })
                        $("#topsplit").animate({bottom:22*20},150,function(){
                            $(this).css({display:"none"});
                        })
                        $("#bottomsplit").animate({left:0},150,function(){
                            $(this).css({display:"none"});
                        })
                        $("#btnh1")
                            .finish()
                            .animate(
                                { bottom: "20", opacity: 0.8 },
                                300 + 100,
                                function () {
                                    $(this).css({ visibility: "hidden" });
                                }
                            );
                        $("#btn2")
                            .finish()
                            .animate(
                                { bottom: "20", opacity: 0.8 },
                                350 + 100,
                                function () {
                                    $(this).css({ display: "none" });
                                }
                            );
                        $("#btn3")
                            .finish()
                            .animate(
                                { bottom: "20", opacity: 0.8 },
                                400 + 100,
                                function () {
                                    $(this).css({ display: "none" });
                                }
                            );
                        $("#btn4")
                            .finish()
                            .animate(
                                { bottom: "20", opacity: 0.8 },
                                450 + 100,
                                function () {
                                    $(this).css({ display: "none" });
                                }
                            );
                        $("#btn5")
                            .finish()
                            .animate(
                                { bottom: "20", opacity: 0.8 },
                                500 + 100,
                                function () {
                                    $(this).css({ display: "none" });
                                }
                            );
                        $("#btn6")
                        .finish()
                        .animate(
                            { bottom: "20", opacity: 0.8 },
                            500 + 100,
                            function () {
                                $(this).css({ display: "none" });
                            }
                          
                        );
                        setbtnanimate(true);
                    }
                    // dispatch({ type: "openeditor", payload: !openeditor });
                }}
            >
                <Fab
                    className="mx-3 fixed-bottom"
                    style={{
                        boxShadow: "0 5px 15px 5px rgba(2, 92, 92, 0.4)",
                        color: "rgba(255, 255, 255, 1)",
                        background: "rgba(2, 122, 122)",
                    }}
                    aria-label="edit"
                >
                    <BuildIcon />
                </Fab>
            </div>
            {!ViewMode ? (
                <>
                    <div
                        style={{
                            visibility: "hidden",
                            position: "fixed",
                            bottom: 20,
                            zIndex: 999999,
                            width: "max-content",
                            justifyContent: "space-between",
                        }}
                        id="btnh1"
                        onClick={() => {
                            dispatch({
                                type: "openeditor",
                                payload: !openeditor,
                            });
                        }}
                    >
                        <Fab
                            className="mx-3 bg-warning fixed-bottom"
                            aria-label="edit"
                        >
                            <EditIcon />
                        </Fab>
                    </div>
                    <div
                        style={{
                            display: "none",
                            position: "fixed",
                            bottom: 20,
                            zIndex: 999999,
                            width: "max-content",
                            justifyContent: "space-between",
                        }}
                        id="btn2"
                        onClick={() => {
                            setOpen((pre) => !pre);
                            // console.log("in save");
                        }}
                    >
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
                    </div>
                    <div
                        style={{
                            display: "none",
                            position: "fixed",
                            bottom: 20,
                            zIndex: 999999,
                            width: "max-content",
                            justifyContent: "space-between",
                        }}
                        id="btn3"
                        // console.log("in save");
                        onClick={() => {
                            dispatch({ type: "openeditor", payload: false });
                        }}
                    >
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
                            <HighlightOffIcon />
                        </Fab>
                    </div>
                    <div
                        style={{
                            display: "none",
                            position: "fixed",
                            bottom: 20,
                            zIndex: 999999,
                            width: "max-content",
                            justifyContent: "space-between",
                        }}
                        id="btn4"
                        // console.log("in save");
                        onClick={() => {
                            dispatch({ type: "viewmode", payload: true });
                            setbtnanimate(true);
                        }}
                    >
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
                    </div>
                    <div
                        style={{
                            display: "none",
                            position: "fixed",
                            bottom: 20,
                            zIndex: 999999,
                            width: "max-content",
                            justifyContent: "space-between",
                        }}
                        id="btn5"
                        // console.log("in save")
                        onClick={reset}
                    >
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
                            {/* <WbIncandescentIcon onClick={()=>{
                                alert("working on auto suggestions mode coming soon 🤩🤩...")
                            }}/> */}
                            <ReplayIcon />
                        </Fab>
                    </div>
                    <div
                        style={{
                            display: "none",
                            position: "fixed",
                            bottom: 20,
                            zIndex: 999999,
                            width: "max-content",
                            justifyContent: "space-between",
                        }}
                        id="btn6"
                        >
                        <Fab
                            onClick={() => {
                                if(split){
                                    $("#topsplit").finish().css({display:"block"}).animate({bottom:25.5*20},300);
                                    $("#bottomsplit").finish().css({display:"block"}).animate({left:70},300);
                                    $("#cancelsplit").finish().css({display:"block"}).animate({bottom:28.5*20},300);
                                    setsplit(false);
                                }else{
                                    $("#topsplit").animate({bottom:22*20},250,function(){
                                        $(this).css({display:"none"});
                                    })
                                    $("#bottomsplit").animate({left:0},250,function(){
                                        $(this).css({display:"none"});
                                    });
                                    $("#cancelsplit").animate({bottom:22*20},300,function(){
                                        $(this).css({display:"none"});
                                    })
                                    setsplit(true);
                                }
                            }}
                            className="mx-3 bg-warning fixed-bottom"
                            aria-label="split"
                        >
                            <HorizontalSplitIcon />
                        </Fab>
                    </div>
                    <div
                        style={{
                            display: "none",
                            position: "fixed",
                            zIndex: 999999,
                            width: "max-content",
                            justifyContent: "space-between",
                            bottom: 22 * 20
                        }}
                        id="topsplit"
                        onClick={() => {
                            dispatch({type:"OpenEditor", payload: true})
                            seteditorprops({draggable:false,split:"top"})
                            // $("#entireWebsite").css({height:"50vh",overflowY:"scroll",borderBottom:"4px solid #ccc"});
                        }}
                    >
                        <Button
                            variant="contained"
                            color="primary"
                            className="mx-3"
                        >
                        Top split
                        </Button>
                    </div>
                    <div
                        style={{
                            display: "none",
                            position: "fixed",
                            zIndex: 999999,
                            width: "max-content",
                            justifyContent: "space-between",
                            bottom: 22 * 20
                        }}
                        id="cancelsplit"
                        onClick={() => {
                            console.log("cancel");
                            seteditorprops({draggable:true,split:"none"})
                            $("#entireWebsite").css({height:"inherit",overflowY:"inherit",borderBottom:"none"})
                        }}
                    >
                        <Button
                            variant="contained"
                            color="primary"
                            className="mx-3"
                        >
                        cancel split
                        </Button>
                    </div>
                    <div
                        style={{
                            display: "none",
                            position: "fixed",
                            zIndex: 999999,
                            width: "max-content",
                            justifyContent: "space-between",
                            bottom: 22 * 20
                        }}
                        id="bottomsplit"
                        onClick={() => {
                            dispatch({type:"OpenEditor", payload: true})
                            seteditorprops({draggable:false,split:"bottom"})
                        }}
                    >
                    <Button
                        id=""
                        variant="contained"
                        color="primary"
                        className="mx-3"
                    >
                        Bottom split
                    </Button>
                    </div>
                    
                </>
            ) : (
                <>
                <div
                    style={{
                        display: editvisible ? "block" : "none",
                        position: "fixed",
                        bottom: 20,
                        zIndex: 999999,
                        width: "max-content",
                        left: "50%",
                        transform: "translate(-50%,10%)",
                        justifyContent: "space-between",
                        // margin:"auto"
                    }}
                >
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
                        onClick={() => {
                            dispatch({ type: "viewmode", payload: false });
                        }}
                    >
                        Back &nbsp;
                        <VisibilityOffIcon />
                    </Button>
                </div>
                <div
                    style={{
                        display: editvisible ? "block" : "none",
                        position: "fixed",
                        top: "50vh",
                        zIndex: 9,
                        width: "max-content",
                        left: "100vw",
                        transform: "translate(-100%,-50%)",
                        justifyContent: "space-between",
                        // background:"#ccc"
                        // margin:"auto"
                    }}
                    >
                        <Button aria-controls="simple-menu" color="primary" variant="contained" aria-haspopup="true" onClick={selectmenus}>
                            {(curr==="Mobile")?(
                                <>
                                   <PhoneIphoneIcon style={{fontSize:"1rem"}}/> &nbsp; {curr} 
                                </>
                            ):(
                                <>
                                   <DesktopWindowsIcon style={{fontSize:"1rem"}}/> &nbsp; {curr} 
                                </>
                            )} <KeyboardArrowDownIcon/>
                        </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={closemenus}
                        >
                            <MenuItem onClick={()=>{
                                setcurr("Desktop");
                                setAnchorEl(null);
                            }}>Desktop</MenuItem>
                            <MenuItem onClick={()=>{
                                setcurr("Mobile");
                                setAnchorEl(null);
                            }}>Mobile</MenuItem>
                        </Menu>
                    </div>
                </>
        

            )}
            <div style={{ display: openeditor ? "inherit" : "none" }}>
                <Editor data={editorprops} />
            </div>
            {/* <Header menu={menu} logo={logo} /> */}
            {openMiniTextEditor ? (
                <div>
                    <div
                        style={{
                            background: "rgba(0, 0, 0, 0.1)",
                            background: "rgba(0, 0, 0, 0)",
                            height: "100vh",
                            width: "100vw",
                            position: "fixed",
                            top: "0px",
                            left: "0px",
                            zIndex: "50",
                        }}
                        onClick={() => {
                            dispatch({ type: "openMiniTextEditor" });
                            dispatch({
                                type: "textBeingChangedAlignmentDispatch",
                                payload: "",
                            });
                        }}
                    ></div>
                    <TextEditorNavbar />
                </div>
            ) : null}
            <div ref={mainProfileSectionBeginRef}>
                <div id="mainProfileSectionBeginId"></div>
                <ProfileSection hireref={ScrollC}/>
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
    ):"";
};

export default EditWebsite;
