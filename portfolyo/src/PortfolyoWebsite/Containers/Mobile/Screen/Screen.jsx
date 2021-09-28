import Main from "../../Main/Main";
import React, { useState, useEffect, useRef } from "react";
import Header from "../../../Components/Header/Header";
import Header2 from "../../../Components/Header2/Header2";
import Header3 from "../../../Components/Header3/Header3";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import EditIcon from "@material-ui/icons/Edit";
import FavoriteIcon from "@material-ui/icons/Favorite";
import NavigationIcon from "@material-ui/icons/Navigation";
import BuildIcon from "@material-ui/icons/Build";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import Editor from "../../../Components/Editor/Editor";
import ProfileSection from "../../../Components/ProfileSection/ProfileSectionSelector/ProfileSectionSelector";
import AboutSection from "../../../Components/AboutSection/AboutSection";
import ViewHeadlineIcon from "@material-ui/icons/ViewHeadline";
import Education from "../../../Components/Education/Education";
import ContactForm from "../../../Components/Contact/ContactForm/ContactForm";
import Backdrop from "@material-ui/core/Backdrop";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import CircularProgress from "@material-ui/core/CircularProgress";
// import ProfileSection2 from '../../Components/ProfileSection/ProfileSectionSelector/ProfileSectionSelector';
import { useSelector, useDispatch } from "react-redux";
import Project from "../../../Components/Project/Project";
import SkillsSectionComponent from "../../../Components/SkillsSection/SkillsSectionComponent/SkillsSectionComponent";
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
import Store from "../../../../redux/store";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { Baseurl } from "../../../../App";
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
import TextEditorNavbar from "../../../Components/TextEditorNavbar/TextEditorNavbar";
import HorizontalSplitIcon from "@material-ui/icons/HorizontalSplit";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Menu from "@material-ui/core/Menu";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import GetWebsite from "../../GetWebsite/GetWebsite";
import { domain } from "../../../../App";

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: 99999,
        color: "#fff",
    },
}));

const Screen = () => {
    const education = useRef(null);
    const skills = useRef(null);
    const about = useRef(null);
    const dispatch = useDispatch();
    const project = useRef(null);
    const contactform = useRef(null);
    const home = useRef(null);
    const ScrollE = () => education.current.scrollIntoView();
    const ScrollA = () => about.current.scrollIntoView();
    const ScrollH = () => skills.current.scrollIntoView();
    const ScrollP = () => project.current.scrollIntoView();
    const ScrollC = () => contactform.current.scrollIntoView();
    const ScrollHome = () => home.current.scrollIntoView();
    const NavbarState = useSelector((state) => state.Navbar);
    const HomeIconText = useSelector((state) => state.HomeIconText);
    const ViewMode = useSelector((state) => state.ViewMode);
    const OpenEditor = useSelector((state) => state.OpenEditor);
    const [logo, setlogo] = useState("NAVBAR");
    const portfolyodata = useSelector((state) => state);
    const Spinner = useSelector((state) => state.Spinner);
    const [menu, setmenu] = useState([
        { name: "ABOUT", to: "about" },
        { name: "SKILLS", to: "skills" },
        { name: "PROJECT", to: "project" },
        { name: "ARTICLES", to: "education" },
        { name: "CONTACT", to: "contactform" },
    ]);
    const Navbars = [
        <Header
            menu={menu}
            func={{
                ScrollE: ScrollE,
                ScrollH,
                ScrollA,
                ScrollP,
                ScrollC,
                ScrollHome,
            }}
            logo={logo}
        />,
        <Header2
            func={{
                ScrollE: ScrollE,
                ScrollH,
                ScrollA,
                ScrollP,
                ScrollC,
                ScrollHome,
            }}
            menu={menu}
            logo={logo}
        />,
        <Header3
            func={{
                ScrollE: ScrollE,
                ScrollH,
                ScrollA,
                ScrollP,
                ScrollC,
                ScrollHome,
            }}
            menu={menu}
            logo={logo}
        />,
    ];
    const openeditor = useSelector((state) => state.OpenEditor);
    const [editvisible, seteditvisible] = useState(true);
    const [savevisible, setsavevisible] = useState(true);
    const mainProfileSectionBeginRef = useRef(null);
    const mainProfileSectionEndRef = useRef(null);

    let sectionUnderView = 2;
    const [dail, setdail] = React.useState(true);
    const classes = useStyles();
    return (
        <>
            <div
                className="Screen"
                style={{
                    position: "absolute",
                    left: "50vw",
                    top: "45vh",
                    transform: "translate(-50%,-55%)",
                    height: "90%",
                }}
            >
                <div
                    className="shadow-lg mx-auto mt-5"
                    style={{
                        width: "410px",
                        height: "78vh",
                        borderRadius: "2.5rem",
                    }}
                >
                    <div
                        className="header"
                        style={{
                            height: "10%",
                            borderBottom: "3px solid #ccc",
                        }}
                    >
                        <div
                            className="mx-auto"
                            style={{
                                display: "flex",
                                position: "relative",
                                width: "max-content",
                                top: "50%",
                                transform: "translateY(-50%)",
                            }}
                        >
                            <div
                                style={{
                                    height: "0.6rem",
                                    width: "0.6rem",
                                    borderRadius: "1rem",
                                    border: "3px solid #ccc",
                                }}
                            ></div>
                            <div
                                className="rounded-lg mx-2"
                                style={{
                                    width: "60px",
                                    height: "3px",
                                    border: "3px solid #ccc",
                                    marginTop: "3px",
                                }}
                            ></div>
                        </div>
                    </div>
                    <div style={{}}>
                        {/* <div className="Content" style={{overflowY:"scroll",overflowX:"hidden",height:"72.5%",position:"absolute",width:"100%"}}> */}
                        {/* <div className="Content" style={{overflowY:"scroll",overflowX:"hidden",height:"72.5%",position:"absolute",width:"100%"}}> */}
                        <iframe
                            src={`${domain}portfolyo/null/null`}
                            style={{
                                overflowX: "hidden",
                                height: "76.5%",
                                position: "absolute",
                                width: "100%",
                            }}
                        />
                        {/* </div> */}
                    </div>
                    <div
                        className="footer shadow-lg"
                        style={{
                            position: "absolute",
                            bottom: "-3%",
                            borderRadius: "0 0 3rem 3rem",
                            borderTop: "3px solid #ccc",
                            height: "10%",
                            width: "100%",
                            backgroundColor: "#fff",
                        }}
                    >
                        <div
                            className="mx-auto"
                            style={{
                                display: "flex",
                                position: "relative",
                                width: "max-content",
                                top: "50%",
                                transform: "translateY(-50%)",
                            }}
                        >
                            <div
                                className="shadow-lg"
                                style={{
                                    height: "2rem",
                                    width: "2rem",
                                    borderRadius: "1rem",
                                    border: "3px solid #ccc",
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Screen;
