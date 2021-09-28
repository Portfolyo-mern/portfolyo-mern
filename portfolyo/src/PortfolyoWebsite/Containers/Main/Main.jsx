import React, { useState, useEffect, useRef } from "react";
import Header from "../../Components/Header/Header";
import Header2 from "../../Components/Header2/Header2";
import Header3 from "../../Components/Header3/Header3";
import Fab from "@material-ui/core/Fab";
import Paper from "@material-ui/core/Paper";
import AddIcon from "@material-ui/icons/Add";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import EditIcon from "@material-ui/icons/Edit";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CloseIcon from "@material-ui/icons/Close";
import ViewListIcon from "@material-ui/icons/ViewList";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import ViewQuiltIcon from "@material-ui/icons/ViewQuilt";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
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
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import CircularProgress from "@material-ui/core/CircularProgress";
// import ProfileSection2 from '../../Components/ProfileSection/ProfileSectionSelector/ProfileSectionSelector';
import { useSelector, useDispatch } from "react-redux";
import Mobile from "../Mobile/Mobile.jsx";
import "./Main.scss";
import Project from "../../Components/Project/Project";
import SkillsSectionComponent from "../../Components/SkillsSection/SkillsSectionComponent/SkillsSectionComponent";
// import CloseIcon from '@material-ui/icons/Close';
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
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
import HorizontalSplitIcon from "@material-ui/icons/HorizontalSplit";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Menu from "@material-ui/core/Menu";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import PointingArrow from "../../../assets/pointingArrow.gif";
import LaptopChromebookIcon from "@material-ui/icons/LaptopChromebook";
import { makeStyles, withStyles } from "@material-ui/core/styles";
// import $ from "jquery";

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: 99999,
        color: "#fff",
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles2 = makeStyles((theme) => ({
    paper: {
        display: "flex",
        border: `1px solid ${theme.palette.divider}`,
        flexWrap: "wrap",
        margin: "auto",
        padding: "0 10px 0 10px",
    },
    divider: {
        margin: theme.spacing(1, 0.5),
    },
}));

const StyledToggleButtonGroup = withStyles((theme) => ({
    grouped: {
        margin: theme.spacing(0.5),
        border: "none",
        "&:not(:first-child)": {
            borderRadius: theme.shape.borderRadius,
        },
        "&:first-child": {
            borderRadius: theme.shape.borderRadius,
        },
    },
}))(ToggleButtonGroup);

const useStyles1 = makeStyles({
    list: {
        width: 265,
        margin: "0 0rem 0 0rem",
    },
    fullList: {
        width: "auto",
    },
});

const Main = () => {
    // (window.W)
    // (`${window.location.origin}/#/makewebsite`);
    const [windowSizeSmall, setwindowSizeSmall] = useState(
        localStorage.getItem("windowSizeSmall") || window.innerWidth > 690
    );
    const createWindow = () => {
        let portfolyowindow = window.open(
            `${window.location.origin}/#/makewebsite`,
            "portfolyo",
            "resizable"
        );
        portfolyowindow.resizeTo(500, 500);
    };

    const classes1 = useStyles1();
    const classes2 = useStyles2();
    const education = useRef(null);
    const skills = useRef(null);
    const about = useRef(null);
    const project = useRef(null);
    const contactform = useRef(null);
    const [editorDrawer, seteditorDrawer] = React.useState(false);
    const home = useRef(null);
    const H = useHistory();
    const toggleDrawer = (open) => (event) => {
        if (
            event &&
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        if (!editorDrawer && editorprops.draggable) {
            dispatch({ type: "OpenEditor", payload: false });
        }
        if (!editorDrawer) {
            seteditorprops((pre) => {
                return {
                    ...pre,
                    drawer: true,
                };
            });
        } else {
            seteditorprops((pre) => {
                return {
                    ...pre,
                    drawer: false,
                };
            });
        }
        seteditorDrawer(!editorDrawer);
    };
    const reset = () => {
        window.onbeforeunload = null;
        if (window.confirm("enter okay to reset the page with defaults")) {
            localStorage.removeItem(`${localStorage.getItem("username")}_data`);
            window.location.reload();
        } else {
        }
    };
    const list = (anchor) => (
        <div
            className={clsx(classes1.list)}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {["Reset"].map((text, index) => (
                    <ListItem
                        button
                        key={text}
                        onClick={() => {
                            reset();
                        }}
                    >
                        <ListItemIcon>
                            {" "}
                            <ReplayIcon />{" "}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />

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
                {["Top Split", "Bottom Split", "Cancel Split"].map(
                    (text, index) => (
                        <ListItem
                            button
                            key={text}
                            onClick={() => {
                                if (text === "Top Split") {
                                    dispatch({
                                        type: "OpenEditor",
                                        payload: true,
                                    });
                                    seteditorprops({
                                        draggable: false,
                                        split: "top",
                                    });
                                } else if (text === "Cancel Split") {
                                    seteditorprops({
                                        draggable: true,
                                        split: "none",
                                    });
                                    $("#entireWebsite").css({
                                        height: "inherit",
                                        overflowY: "inherit",
                                        borderBottom: "none",
                                    });
                                } else {
                                    dispatch({
                                        type: "OpenEditor",
                                        payload: true,
                                    });
                                    seteditorprops({
                                        draggable: false,
                                        split: "bottom",
                                    });
                                }
                            }}
                        >
                            <ListItemIcon>
                                {" "}
                                <HorizontalSplitIcon />{" "}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    )
                )}
            </List>
            <Divider />
            <List>
                {["Desktop View", "Mobile View"].map((text, index) => (
                    <ListItem
                        button
                        key={text}
                        onClick={() => {
                            if (text == "Mobile View") {
                                setcurr("Mobile");
                                dispatch({ type: "viewmode", payload: true });
                                dispatch({
                                    type: "openeditor",
                                    payload: false,
                                });
                                setbtnanimate(true);
                            } else {
                                setcurr("Desktop");
                                dispatch({ type: "viewmode", payload: true });
                                dispatch({
                                    type: "openeditor",
                                    payload: false,
                                });
                                setbtnanimate(true);
                            }
                        }}
                    >
                        <ListItemIcon>
                            {text == "Mobile View" ? (
                                <PhoneIphoneIcon />
                            ) : (
                                <DesktopWindowsIcon />
                            )}
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
    // const skills = useRef(null);
    // (education);
    const ScrollE = () => education.current.scrollIntoView();
    const ScrollA = () => about.current.scrollIntoView();
    const ScrollH = () => skills.current.scrollIntoView();
    const ScrollP = () => project.current.scrollIntoView();
    const ScrollC = () => contactform.current.scrollIntoView();
    const ScrollHome = () => home.current.scrollIntoView();
    const NavbarState = useSelector((state) => state.Navbar);
    const HomeIconText = useSelector((state) => state.HomeIconText);
    const ViewMode = useSelector((state) => state.ViewMode);
    const dispatch = useDispatch();
    const OpenEditor = useSelector((state) => state.OpenEditor);
    const openMiniTextEditor = useSelector((state) => state.openMiniTextEditor);
    const [logo, setlogo] = useState("NAVBAR");
    const portfolyodata = useSelector((state) => state);
    const Spinner = useSelector((state) => state.Spinner);
    // (ViewMode)
    // React.useEffect(()=>{
    //     var getReducers = localStorage.getItem("portfolyodata");
    //     // (getReducers);
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
    React.useEffect(() => {
        window.onbeforeunload = () => {
            return "save changes before leaving or download the website if it is ready";
        };
    });
    const mainProfileSectionBeginRef = useRef(null);
    const mainProfileSectionEndRef = useRef(null);

    let sectionUnderView = 2;

    const onScrollEditOption = () => {
        //   if(OpenEditor){
        // ("Main: ", window.pageYOffset);
        // ("Main: ", mainProfileSectionBeginRef.current);
        // (
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
        // (ProjectsSectionBottom, EducationSectionBottom);
        if (window.pageYOffset < (ProfileSectionBottom * 2) / 3) {
            //   ("Profile Section!");
            if (sectionUnderView !== 2) {
                dispatch({
                    type: "tabpointer",
                    payload: 2,
                });
                sectionUnderView = 2;
            }
        } else if (window.pageYOffset < (AboutSectionBottom * 2.5) / 3) {
            //   ("About Section!");
            if (sectionUnderView !== 4) {
                dispatch({
                    type: "tabpointer",
                    payload: 4,
                });
                sectionUnderView = 4;
            }
        } else if (window.pageYOffset < (SkillsSectionBottom * 2.8) / 3) {
            //   ("Skills Section!");
            if (sectionUnderView !== 5) {
                dispatch({
                    type: "tabpointer",
                    payload: 5,
                });
                sectionUnderView = 5;
            }
        } else if (window.pageYOffset < (ProjectsSectionBottom * 2.8) / 3) {
            //   ("Projects Section!");
            if (sectionUnderView !== 6) {
                dispatch({
                    type: "tabpointer",
                    payload: 6,
                });
                sectionUnderView = 6;
            }
        } else if (window.pageYOffset < (EducationSectionBottom * 2.8) / 3) {
            //   ("Education Section!");
            if (sectionUnderView !== 7) {
                dispatch({
                    type: "tabpointer",
                    payload: 7,
                });
                sectionUnderView = 7;
            }
        } else {
            //   ("Contact Section");
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
        //         ("Skill Section!");
        //     }
        // }
        // if(window.pageYOffset<(window.document.getElementById("mainProfileSectionBeginId")
        //         .offsetHeight))
    };

    useEffect(() => {
        onScrollEditOption();
        // console.log("Saved");
        if (localStorage.getItem("windowSizeSmall") === null) {
            localStorage.setItem("windowSizeSmall", true);
            // console.log("Saved");
        }
        //   window.addEventListener("scroll", onScrollEditOption);
    }, [OpenEditor]);
    useEffect(() => {
        AOS.init({
            // duration:600,
            // offset: 300,
        });
    }, [ViewMode]);
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const save = () => {
        // (portfolyodata);
        setOpen(false);
        localStorage.setItem(
            `${localStorage.getItem("username")}_data`,
            JSON.stringify(portfolyodata)
        );
        window.onbeforeunload = null;
        window.location.reload();
        // var getReducers = localStorage.getItem("portfolyodata");
        // // (getReducers);
        // if(getReducers!==null) {
        //     getReducers = JSON.parse(getReducers);
        //     dispatch(getReducers);
        //     // const reducers  = combineReducers(getReducers);
        //     // Store.replaceReducer(reducers);
        // }
    };
    const [dail, setdail] = React.useState(false);
    const [getdata, setdata] = React.useState({
        username: "",
        _id: "",
    });
    const download = async () => {
        localStorage.setItem(
            `${localStorage.getItem("username")}_data`,
            JSON.stringify(portfolyodata)
        );
        setOpen(false);
        dispatch({ type: "SpinnerV4", payload: true });
        try {
            const result = await axios({
                url: `${Baseurl}/addportfolyo`,
                method: "post",
                data: {
                    token: localStorage.getItem("token"),
                    data: localStorage.getItem(
                        `${localStorage.getItem("username")}_data`
                    ),
                },
            });
            dispatch({ type: "SpinnerV4", payload: false });
            // (result.data);
            setdata(result.data);
            setdail(true);
        } catch (error) {
            dispatch({ type: "SpinnerV4", payload: false });
            alert("your website not downloaded please try again");
        }
    };
    const [btnanimate, setbtnanimate] = React.useState(true);
    const [split, setsplit] = React.useState(true);
    const [editorprops, seteditorprops] = React.useState({
        draggable: true,
        split: "none",
        drawer: editorDrawer,
    });
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [curr, setcurr] = React.useState("Desktop");
    const closemenus = () => {
        setAnchorEl(null);
    };
    const selectmenus = (event) => {
        // (event.currentTarget);
        setAnchorEl(event.currentTarget);
    };
    return ViewMode && curr === "Mobile" ? (
        <div
            style={{
                display: "flex",
            }}
        >
            <Mobile />
            <div
                style={{
                    position: "fixed",
                    zIndex: "999999",
                    bottom: "0",
                    padding: "0.5rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "auto",
                    textAlign: "center",
                    width: "80%",
                    left: "50%",
                    transform: "translate(-50%, 0)",
                    borderRadius: "5px 5px 0 0",
                    background: "rgb(106,104,104)",
                    background:
                        "radial-gradient(circle, rgba(106,104,104,1) 51%, rgba(116,116,114,1) 100%)",
                }}
                className={`viewModeDiv`}
            >
                <p
                    style={{
                        color: "white",
                        marginBottom: "0",
                        fontSize: "1rem",
                        fontWeight: "900",
                    }}
                >
                    View Mode:
                </p>
                <Paper elevation={0} className={classes2.paper}>
                    <StyledToggleButtonGroup
                        size="small"
                        value={curr}
                        exclusive
                        onChange={(event, nextView) => {
                            setcurr(nextView);
                        }}
                        aria-label="text alignment"
                    >
                        <ToggleButton value="Desktop" aria-label="list">
                            <DesktopWindowsIcon />
                        </ToggleButton>
                        <ToggleButton value="Mobile" aria-label="module">
                            <PhoneAndroidIcon />
                        </ToggleButton>
                    </StyledToggleButtonGroup>
                </Paper>
                <Button
                    variant="outlined"
                    style={{
                        backgroundColor: "white",
                        width: "7rem",
                        fontSize: "1rem",
                        fontWeight: "bold",
                    }}
                    onClick={() => {
                        dispatch({
                            type: "viewmode",
                            payload: false,
                        });
                    }}
                >
                    Ok
                </Button>
            </div>
        </div>
    ) : (
        <div
            style={{
                display: "flex",
            }}
        >
            <div className="entireWebsite" id="entireWebsite">
                {!windowSizeSmall ? (
                    <div
                        style={{
                            width: "100%",
                            height: "100%",
                            backgroundColor: "rgba(45, 129, 192, 0.8)",
                            position: "fixed",
                            zIndex: "999999",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <div
                            style={{
                                border: "5px #8c8c8c dashed",
                                borderRadius: "30px",
                                width: "80%",
                                height: "80%",
                                padding: "1rem",
                                textAlign: "center",
                                alignItems: "center",
                                margin: "auto",
                                verticalAlign: "middle",
                            }}
                        >
                            <h1
                                style={{
                                    fontSize: "2rem",
                                    color: "white",
                                }}
                            >
                                We recommed you use bigger screen device to have
                                maximum user experience while editing!
                            </h1>
                            <div
                                className="conversionWarningDiv"
                                style={{
                                    display: "flex",
                                    justifyContent: "space-evenly",
                                    margin: "1rem auto 2rem auto",
                                }}
                            >
                                <PhoneAndroidIcon
                                    style={{
                                        fontSize: "6rem",
                                        color: "white",
                                    }}
                                />
                                <img
                                    src={PointingArrow}
                                    alt="pointingArrow"
                                    style={{
                                        width: "4rem",
                                        height: "auto",
                                        transform: "rotate(-90deg)",
                                    }}
                                ></img>
                                <LaptopChromebookIcon
                                    style={{
                                        fontSize: "6rem",
                                        color: "white",
                                    }}
                                />
                            </div>
                            <Button
                                style={{
                                    color: "white",
                                    fontSize: "1.3rem",
                                }}
                                onClick={() => {
                                    localStorage.setItem(
                                        "windowSizeSmall",
                                        true
                                    );
                                    setwindowSizeSmall(true);
                                }}
                            >
                                Proceed!
                            </Button>
                        </div>
                    </div>
                ) : null}
                <Dialog
                    open={dail}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={() => {
                        setdail(false);
                    }}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title">
                        {"Copy website link or goto website ??"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            Please choose option for copying the website link or
                            redirect to your website or click cancel to choose
                            nothing
                        </DialogContentText>
                    </DialogContent>
                    <div
                        className="mx-3"
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "space-between",
                        }}
                    >
                        <div style={{ width: "max-content" }}>
                            <Button
                                onClick={() => {
                                    setdail(false);
                                }}
                                color="secondary"
                            >
                                cancel
                            </Button>
                        </div>
                        <div style={{ width: "max-content" }}>
                            <Button
                                onClick={() => {
                                    navigator.clipboard.writeText(
                                        `${window.location.origin}/#/portfolyo/${getdata.username}/${getdata._id}`
                                    );
                                }}
                                color="primary"
                            >
                                copy
                            </Button>
                        </div>
                        <div style={{ width: "max-content" }}>
                            <a
                                href={`${window.location.origin}/#/portfolyo/${getdata.username}/${getdata._id}`}
                                target="_blank"
                            >
                                <Button
                                    onClick={() => {
                                        window.onbeforeunload = null;
                                    }}
                                    color="primary"
                                >
                                    redirect
                                </Button>
                            </a>
                        </div>
                    </div>
                    <DialogActions></DialogActions>
                </Dialog>
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title">
                        {"Save Changes or Create Portfolyo ??"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            Please choose option for saving the changes or
                            download the changes if your website is ready or
                            click cancel
                        </DialogContentText>
                    </DialogContent>
                    <div
                        className="mx-3"
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "space-between",
                        }}
                    >
                        <div style={{ width: "max-content" }}>
                            <Button onClick={handleClose} color="secondary">
                                cancel
                            </Button>
                        </div>
                        <div style={{ width: "max-content" }}>
                            <Button onClick={save} color="primary">
                                save
                            </Button>
                        </div>
                        <div style={{ width: "max-content" }}>
                            <Button onClick={download} color="primary">
                                Download
                            </Button>
                        </div>
                    </div>
                    <DialogActions></DialogActions>
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
                            // $("#btn6")
                            //     .finish()
                            //     .css({ display: "block", opacity: 0 })
                            //     .animate(
                            //         { opacity: 1, bottom: 22 * 20 + "px" },
                            //         550 + 100
                            //     );
                        } else {
                            // $("#cancelsplit").animate(
                            //     { bottom: 18.5 * 20 },
                            //     200,
                            //     function () {
                            //         $(this).css({ display: "none" });
                            //     }
                            // );
                            // $("#topsplit").animate(
                            //     { bottom: 18.5 * 20 },
                            //     150,
                            //     function () {
                            //         $(this).css({ display: "none" });
                            //     }
                            // );
                            // $("#bottomsplit").animate(
                            //     { left: 0 },
                            //     150,
                            //     function () {
                            //         $(this).css({ display: "none" });
                            //     }
                            // );
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
                                if (btnanimate) {
                                    setbtnanimate(false);
                                    $("#btnh1")
                                        .finish()
                                        .css({
                                            visibility: "visible",
                                            opacity: 0,
                                        })
                                        .animate(
                                            {
                                                opacity: 1,
                                                bottom: 4.5 * 20 + "px",
                                            },
                                            300 + 100
                                        );
                                    $("#btn2")
                                        .finish()
                                        .css({ display: "block", opacity: 0 })
                                        .animate(
                                            {
                                                opacity: 1,
                                                bottom: 8 * 20 + "px",
                                            },
                                            350 + 100
                                        );
                                    $("#btn3")
                                        .finish()
                                        .css({ display: "block", opacity: 0 })
                                        .animate(
                                            {
                                                opacity: 1,
                                                bottom: 11.5 * 20 + "px",
                                            },
                                            400 + 100
                                        );
                                    $("#btn4")
                                        .finish()
                                        .css({ display: "block", opacity: 0 })
                                        .animate(
                                            {
                                                opacity: 1,
                                                bottom: 15 * 20 + "px",
                                            },
                                            450 + 100
                                        );
                                    $("#btn5")
                                        .finish()
                                        .css({ display: "block", opacity: 0 })
                                        .animate(
                                            {
                                                opacity: 1,
                                                bottom: 18.5 * 20 + "px",
                                            },
                                            500 + 100
                                        );
                                    // $("#btn6")
                                    //     .finish()
                                    //     .css({ display: "block", opacity: 0 })
                                    //     .animate(
                                    //         { opacity: 1, bottom: 22 * 20 + "px" },
                                    //         550 + 100
                                    //     );
                                } else {
                                    // $("#cancelsplit").animate(
                                    //     { bottom: 18.5 * 20 },
                                    //     200,
                                    //     function () {
                                    //         $(this).css({ display: "none" });
                                    //     }
                                    // );
                                    // $("#topsplit").animate(
                                    //     { bottom: 18.5 * 20 },
                                    //     150,
                                    //     function () {
                                    //         $(this).css({ display: "none" });
                                    //     }
                                    // );
                                    // $("#bottomsplit").animate(
                                    //     { left: 0 },
                                    //     150,
                                    //     function () {
                                    //         $(this).css({ display: "none" });
                                    //     }
                                    // );
                                    $("#btnh1")
                                        .finish()
                                        .animate(
                                            { bottom: "20", opacity: 0.8 },
                                            300 + 100,
                                            function () {
                                                $(this).css({
                                                    visibility: "hidden",
                                                });
                                            }
                                        );
                                    $("#btn2")
                                        .finish()
                                        .animate(
                                            { bottom: "20", opacity: 0.8 },
                                            350 + 100,
                                            function () {
                                                $(this).css({
                                                    display: "none",
                                                });
                                            }
                                        );
                                    $("#btn3")
                                        .finish()
                                        .animate(
                                            { bottom: "20", opacity: 0.8 },
                                            400 + 100,
                                            function () {
                                                $(this).css({
                                                    display: "none",
                                                });
                                            }
                                        );
                                    $("#btn4")
                                        .finish()
                                        .animate(
                                            { bottom: "20", opacity: 0.8 },
                                            450 + 100,
                                            function () {
                                                $(this).css({
                                                    display: "none",
                                                });
                                            }
                                        );
                                    $("#btn5")
                                        .finish()
                                        .animate(
                                            { bottom: "20", opacity: 0.8 },
                                            500 + 100,
                                            function () {
                                                $(this).css({
                                                    display: "none",
                                                });
                                            }
                                        );
                                    $("#btn6")
                                        .finish()
                                        .animate(
                                            { bottom: "20", opacity: 0.8 },
                                            500 + 100,
                                            function () {
                                                $(this).css({
                                                    display: "none",
                                                });
                                            }
                                        );
                                    setbtnanimate(true);
                                }
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
                                // ("in save");
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
                            // ("in save");
                            onClick={() => {
                                dispatch({ type: "viewmode", payload: true });
                                dispatch({
                                    type: "openeditor",
                                    payload: false,
                                });
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
                            id="btn4"
                            // ("in save")
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
                        {/* <div
                            style={{
                                display: "none",
                                position: "fixed",
                                bottom: 20,
                                zIndex: 999999,
                                width: "max-content",
                                justifyContent: "space-between",
                            }}
                            id="btn5"
                        >
                            <Fab
                                onClick={() => {
                                    if (split) {
                                        $("#topsplit")
                                            .finish()
                                            .css({ display: "block" })
                                            .animate(
                                                { bottom: 22.5 * 20 },
                                                300
                                            );
                                        $("#bottomsplit")
                                            .finish()
                                            .css({ display: "block" })
                                            .animate({ left: 70 }, 300);
                                        $("#cancelsplit")
                                            .finish()
                                            .css({ display: "block" })
                                            .animate(
                                                { bottom: 25.5 * 20 },
                                                300
                                            );
                                        setsplit(false);
                                    } else {
                                        $("#topsplit").animate(
                                            { bottom: 22 * 20 },
                                            250,
                                            function () {
                                                $(this).css({
                                                    display: "none",
                                                });
                                            }
                                        );
                                        $("#bottomsplit").animate(
                                            { left: 0 },
                                            250,
                                            function () {
                                                $(this).css({
                                                    display: "none",
                                                });
                                            }
                                        );
                                        $("#cancelsplit").animate(
                                            { bottom: 22 * 20 },
                                            300,
                                            function () {
                                                $(this).css({
                                                    display: "none",
                                                });
                                            }
                                        );
                                        setsplit(true);
                                    }
                                }}
                                className="mx-3 bg-warning fixed-bottom"
                                aria-label="split"
                            >
                                <HorizontalSplitIcon />
                            </Fab>
                        </div> */}
                        <div
                            style={{
                                display: "none",
                                position: "fixed",
                                zIndex: 999999,
                                width: "max-content",
                                justifyContent: "space-between",
                                bottom: 19.5 * 20,
                            }}
                            id="topsplit"
                            onClick={() => {
                                dispatch({ type: "OpenEditor", payload: true });
                                seteditorprops({
                                    draggable: false,
                                    split: "top",
                                });
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
                                bottom: 21.5 * 20,
                            }}
                            id="cancelsplit"
                            onClick={() => {
                                ("cancel");
                                seteditorprops({
                                    draggable: true,
                                    split: "none",
                                });
                                $("#entireWebsite").css({
                                    height: "inherit",
                                    overflowY: "inherit",
                                    borderBottom: "none",
                                });
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
                                bottom: 19 * 20,
                            }}
                            id="bottomsplit"
                            onClick={() => {
                                dispatch({ type: "OpenEditor", payload: true });
                                seteditorprops({
                                    draggable: false,
                                    split: "bottom",
                                });
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
                ) : null}
                <div style={{ display: openeditor ? "inherit" : "none" }}>
                    <Editor
                        data={editorprops}
                        split={{
                            topsplit: () => {
                                dispatch({ type: "OpenEditor", payload: true });
                                seteditorprops({
                                    draggable: false,
                                    split: "top",
                                });
                            },
                            bottomsplit: () => {
                                dispatch({ type: "OpenEditor", payload: true });
                                seteditorprops({
                                    draggable: false,
                                    split: "bottom",
                                });
                            },
                            cancelsplit: () => {
                                seteditorprops({
                                    draggable: true,
                                    split: "none",
                                });
                                $("#entireWebsite").css({
                                    height: "inherit",
                                    overflowY: "inherit",
                                    borderBottom: "none",
                                });
                            },
                        }}
                    />
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
                                dispatch({
                                    type: "diffReducer",
                                    payload: "false",
                                });
                            }}
                        ></div>
                        <TextEditorNavbar />
                    </div>
                ) : null}
                <div ref={mainProfileSectionBeginRef}>
                    <div id="mainProfileSectionBeginId"></div>
                    <ProfileSection hireref={ScrollC} />
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
                {ViewMode ? (
                    <div
                        style={{
                            position: "fixed",
                            zIndex: "999999",
                            bottom: "0",
                            padding: "0.5rem",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: "auto",
                            textAlign: "center",
                            width: "80%",
                            left: "50%",
                            transform: "translate(-50%, 0)",
                            borderRadius: "5px 5px 0 0",
                            background: "rgb(106,104,104)",
                            background:
                                "radial-gradient(circle, rgba(106,104,104,1) 51%, rgba(116,116,114,1) 100%)",
                        }}
                        className={`viewModeDiv`}
                    >
                        <p
                            style={{
                                color: "white",
                                marginBottom: "0",
                                fontSize: "1rem",
                                fontWeight: "900",
                            }}
                        >
                            View Mode:
                        </p>
                        <Paper elevation={0} className={classes2.paper}>
                            <StyledToggleButtonGroup
                                size="small"
                                value={curr}
                                exclusive
                                onChange={(event, nextView) => {
                                    setcurr(nextView);
                                }}
                                aria-label="text alignment"
                            >
                                <ToggleButton value="Desktop" aria-label="list">
                                    <DesktopWindowsIcon />
                                </ToggleButton>
                                <ToggleButton
                                    value="Mobile"
                                    aria-label="module"
                                >
                                    <PhoneAndroidIcon />
                                </ToggleButton>
                            </StyledToggleButtonGroup>
                        </Paper>
                        {/* <ToggleButtonGroup
                        orientation="horizontal"
                        value={curr}
                        exclusive
                        onChange={(event, nextView) => {
                            setcurr(nextView);
                        }}
                    >
                        <ToggleButton value="Desktop" aria-label="list">
                            <DesktopWindowsIcon
                                style={{
                                    color: "white",
                                }}
                            />
                        </ToggleButton>
                        <ToggleButton value="Mobile" aria-label="module">
                            <PhoneAndroidIcon />
                        </ToggleButton>
                    </ToggleButtonGroup> */}
                        <Button
                            variant="outlined"
                            style={{
                                backgroundColor: "white",
                                width: "7rem",
                                fontSize: "1rem",
                                fontWeight: "bold",
                            }}
                            onClick={() => {
                                dispatch({
                                    type: "viewmode",
                                    payload: false,
                                });
                            }}
                        >
                            Ok
                        </Button>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default Main;
