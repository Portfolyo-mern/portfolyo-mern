import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { createMuiTheme,MuiThemeProvider} from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red';
import 'jquery-ui-dist/jquery-ui';
import $ from "jquery";
import './Editor.scss';
import NavbarTab from '../NavbarTab/NavbarTab';
import { SketchPicker } from 'react-color';
import {useSelector,useDispatch} from 'react-redux';
import TextField from '@material-ui/core/TextField';
import EditProfilePic from '../ProfileSection/EditProfilePic/EditProfilePic';
import ProfileSectionEditor from '../ProfileSection/ProfileSectionEditor/ProfileSectionEditor';
import ProfilesectionBackGround from "../ProfileSection/ProfileSectionBackground/ProfileSectionBackground";
import AboutSectionEditor from '../AboutSection/AboutSectorEditor/AboutSectorEditor';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

const Editor = () => {
    const navbg = useSelector(state=>state.NavbarBg);
    const NavbarIconColor = useSelector(state=>state.NavbarIconColor);
    const IconColor = useSelector(state=>state.IconColor);
    const onScrollBg = useSelector(state=>state.onScrollBg);
    const NavHoverColor = useSelector(state=>state.NavHoverColor);
    const IconText = useSelector(state=>state.IconText);
    const TabPointer = useSelector(state=>state.TabPointer);
    console.log(TabPointer)
    const dispatch = useDispatch();
    const theme = createMuiTheme({
        palette: {
          primary: {
            main: "#000",
          },
          secondary: {
            main: '#000',
          },
        },
      });
    const classes = useStyles();
    // const [value, setValue] = React.useState(TabPointer);

    const handleChange = (event, newValue) => {
        dispatch({type:"tabpointer",payload:newValue});
    };
    console.log(theme);
    function touchHandler(event) {
        var touch = event.changedTouches[0];
    
        var simulatedEvent = document.createEvent("MouseEvent");
            simulatedEvent.initMouseEvent({
            touchstart: "mousedown",
            touchmove: "mousemove",
            touchend: "mouseup"
        }[event.type], true, true, window, 1,
            touch.screenX, touch.screenY,
            touch.clientX, touch.clientY, false,
            false, false, false, 0, null);
    
        touch.target.dispatchEvent(simulatedEvent);
        // event.preventDefault();
    }
    
    function init() {
        document.addEventListener("touchstart", touchHandler, true);
        document.addEventListener("touchmove", touchHandler, true);
        document.addEventListener("touchend", touchHandler, true);
        document.addEventListener("touchcancel", touchHandler, true);
    }
    function init1() {
        document.addEventListener("touchstart", touchHandler, false);
        document.addEventListener("touchmove", touchHandler, false);
        document.addEventListener("touchend", touchHandler, false);
        document.addEventListener("touchcancel", touchHandler, false);
    }
    // init();
    $( "#Editor" ).draggable({containment:"EditorContainer", cancel: ".disabledrag"  ,scroll: true,cursor: "move",scrollSpeed: 20 });
    $( ".disabledrag" ).disableSelection();
    return (
        <div id="EditorContainer"  style={{height:"100%",width:"100%",position:"absolute"}}>
            
            <div className={`${classes.root} shadow rounded-lg`}    id="Editor">
                <MuiThemeProvider theme={theme} >
                    <AppBar position="static" style={{width:"100%"}} className="shadow" color="default"> 
                        <Tabs
                            value={TabPointer}
                            onChange={handleChange}
                            indicatorColor="secondary"
                            style={{color:"#000",width:"100%" }}
                            variant="scrollable"
                            scrollButtons="auto"
                            aria-label="scrollable auto tabs example"
                        >
                            <Tab label="Navbar" {...a11yProps(0)} />
                            <Tab label="ProfilePic" {...a11yProps(1)} />
                            <Tab label="ProfileSection" {...a11yProps(2)} />
                            <Tab label="ProfileBackGround" {...a11yProps(3)} />
                            <Tab label="About" {...a11yProps(4)} />
                            <Tab label="Item Six" {...a11yProps(5)} />
                            <Tab label="Item Seven" {...a11yProps(6)} />
                        </Tabs>
                    </AppBar>
                </MuiThemeProvider>
                <TabPanel value={TabPointer} index={0}>
                    <div className="NavbarTab " 
                     style={{display:"flex",flexWrap:"wrap",flexDirection:"row",justifyContent:"space-around"}}>
                        <div>
                            <NavbarTab/> <br></br>
                        </div>
                        <div style={{marginLeft:"3rem",marginBottom:"3rem"}}>
                            <h4 className="text-dark text-center">Navbar Background</h4>
                            <span 
                                id="SketchPicker"
                                className="disabledrag"
                                style={{cursor:"pointer !important"}}
                            >
                                <SketchPicker 
                                    color={ navbg }
                                    onChange={(color)=>dispatch({type:"choosebg",payload:color.hex})} style={{cursor:"pointer"}}/>
                            </span>
                        </div>
                        <div style={{marginLeft:"3rem",marginBottom:"3rem"}}>
                            <h4 className="text-dark text-center text-capitalize">Navbar Color</h4>
                            <span 
                                id="SketchPicker"
                                className="disabledrag"
                                style={{cursor:"pointer !important"}}
                            >
                                <SketchPicker 
                                    color={ NavbarIconColor }
                                    onChange={(color)=>dispatch({type:"chooseiconcolor",payload:color.hex})} style={{cursor:"pointer"}}/>
                            </span>
                        </div>
                        <div style={{marginLeft:"3rem",marginBottom:"3rem"}}>
                            <h4 className="text-dark text-center">Icons Color </h4>
                            <span 
                                id="SketchPicker"
                                className="disabledrag"
                                style={{cursor:"pointer !important"}}
                            >
                                <SketchPicker 
                                    color={ IconColor }
                                    onChange={(color)=>dispatch({type:"iconcolor",payload:color.hex})} style={{cursor:"pointer"}}/>
                            </span>
                        </div>
                        <div style={{marginLeft:"3rem",marginBottom:"3rem"}}>
                            <h4 className="text-dark text-center">OnScroll Navbg </h4>
                            <span 
                                id="SketchPicker"
                                className="disabledrag"
                                style={{cursor:"pointer !important"}}
                            >
                                <SketchPicker 
                                    color={ navbg }
                                    onChange={(color)=>dispatch({type:"onscrollbg",payload:color.hex})} style={{cursor:"pointer"}}/>
                            </span>
                        </div>
                        <div style={{marginLeft:"3rem",marginBottom:"3rem"}}>
                            <h4 className="text-dark text-center"> HoverEffect Color </h4>
                            <span 
                                id="SketchPicker"
                                className="disabledrag"
                                style={{cursor:"pointer !important"}}
                            >
                                <SketchPicker 
                                    color={ NavHoverColor}
                                    onChange={(color)=>dispatch({type:"navhovercolor",payload:color.hex})} style={{cursor:"pointer"}}/>
                            </span>
                        </div>
                        <div style={{marginLeft:"3rem",marginBottom:"3rem",display:"flex",flexWrap:"wrap",flexDirection:"column"}}>
                                 <TextField label="setnavbar" className="disabledrag mx-2" 
                                    onChange={(e)=>{
                                        dispatch({type:"setnavbar",payload:e.target.value})
                                    }
                                }
                                defaultValue="NAVBAR" /> <br/>
                            <TextField label="sethome" className="disabledrag mx-2" 
                                onChange={(e)=>{
                                    dispatch({type:"sethome",payload:e.target.value})
                                    }
                                }
                                defaultValue="HOME" /> <br/>
                                 <TextField label="setarticle" className="disabledrag mx-2" 
                                onChange={(e)=>{
                                    dispatch({type:"setarticle",payload:e.target.value})
                                    }
                                }
                                defaultValue="ARTICLES" /> <br/>
                                <TextField label="setabout" className="disabledrag mx-2" 
                                    onChange={(e)=>{
                                        dispatch({type:"setabout",payload:e.target.value})
                                        }
                                    }
                                defaultValue="ABOUT" /> <br/>
                                <TextField label="setcontact" className="disabledrag mx-2" 
                                    onChange={(e)=>{
                                        dispatch({type:"setcontact",payload:e.target.value})
                                        }
                                    }
                                defaultValue="CONTACT" />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value={TabPointer} index={1}>
                    <EditProfilePic/>
                </TabPanel>
                <TabPanel value={TabPointer} index={2}>
                    <ProfileSectionEditor/>
                </TabPanel>
                <TabPanel value={TabPointer} index={3}>
                    <ProfilesectionBackGround/>
                </TabPanel>
                <TabPanel value={TabPointer} index={4}>
                    <AboutSectionEditor/>
                </TabPanel>
                <TabPanel value={TabPointer} index={5}>
                    Item Six
                </TabPanel>
                <TabPanel value={TabPointer} index={6}>
                    Item Seven
                </TabPanel>
                </div>
        </div>
    )
}

export default Editor
