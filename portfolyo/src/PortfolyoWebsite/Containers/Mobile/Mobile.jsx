import Main from "../Main/Main";
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
import Screen from "./Screen/Screen";

const GetView = () => {
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [curr,setcurr] = React.useState("Mobile");
    const closemenus = () => {
        setAnchorEl(null);
    }
    const selectmenus = (event) => {
        
        setAnchorEl(event.currentTarget);
    }
    return (curr==="Desktop")?(
        <>
            <Main/>
        </>
    ):(
        <>
        <div className="MobileView" style={{position:"absolute",top:"30px"}}>
                <div
                    style={{
                        display: "block",
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
                        display:  "block",
                        position: "fixed",
                        top: "20",
                        zIndex: 9,
                        width: "max-content",
                        left: "50vw",
                        transform: "translate(-50%,-50%)",
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
        </div>
            <Screen/>
        </>
    )
}

export default GetView;
