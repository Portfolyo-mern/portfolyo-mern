import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
// import red from "@material-ui/core/colors/red";
import "jquery-ui-dist/jquery-ui";
import $ from "jquery";
import "./Editor.scss";
import NavbarTab from "../NavbarTab/NavbarTab";
import { SketchPicker } from "react-color";
import { useSelector, useDispatch } from "react-redux";
import TextField from "@material-ui/core/TextField";
import EditProfilePic from "../ProfileSection/EditProfilePic/EditProfilePic";
import ProfileSectionEditor from "../ProfileSection/ProfileSectionEditor/ProfileSectionEditor";
import ProfilesectionBackGround from "../ProfileSection/ProfileSectionBackground/ProfileSectionBackground";
import ContactTab from "../Contact/ContactTab/ContactTab";
import AboutSectionEditor from "../AboutSection/AboutSectorEditor/AboutSectorEditor";
import EducationEditor from "../Education/EducationEditor/EducationEditor";
import ProjectEditor from "../Project/ProjectEditor/ProjectEditor";
import SkillsSectionEditor from "../SkillsSection/SkillsSectionEditor/SkillsSectionEditor";
import AOS from "aos";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Button from "@material-ui/core/Button";
import UploadResume from "../UploadResume/UploadResume";

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
        "aria-controls": `scrollable-auto-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: "100%",
        backgroundColor: theme.palette.background.paper,
    },
}));

const Editor = (props) => {
	// console.log(props);
    const navbg = useSelector((state) => state.NavbarBg);
    const NavbarIconColor = useSelector((state) => state.NavbarIconColor);
    const IconColor = useSelector((state) => state.IconColor);
    // const onScrollBg = useSelector((state) => state.onScrollBg);
    const NavHoverColor = useSelector((state) => state.NavHoverColor);
    // const IconText = useSelector((state) => state.IconText);
    const TabPointer = useSelector((state) => state.TabPointer);
    // console.log(TabPointer);
    const dispatch = useDispatch();
    const theme = createMuiTheme({
        palette: {
            primary: {
                main: "#000",
            },
            secondary: {
                main: "#000",
            },
        },
    });
    const classes = useStyles();
    // const [value, setValue] = React.useState(TabPointer);

    const handleChange = (event, newValue) => {
        dispatch({ type: "tabpointer", payload: newValue });
    };
    // console.log(theme);
    function touchHandler(event) {
        var touch = event.changedTouches[0];

        var simulatedEvent = document.createEvent("MouseEvent");
        simulatedEvent.initMouseEvent(
            {
                touchstart: "mousedown",
                touchmove: "mousemove",
                touchend: "mouseup",
            }[event.type],
            true,
            true,
            window,
            1,
            touch.screenX,
            touch.screenY,
            touch.clientX,
            touch.clientY,
            false,
            false,
            false,
            false,
            0,
            null
        );

        touch.target.dispatchEvent(simulatedEvent);
        // event.preventDefault();
    }

	// for mobile draging editor feature
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
	// $( "#Editor" ).draggable({containment:"#root", cancel: ".disabledrag"  ,scroll: false,cursor: "move",scrollSpeed: 20 });
	if(props.data.draggable){
		$( "#Editor" ).draggable({containment:"#root", cancel: ".disabledrag"  ,scroll: false,cursor: "move",scrollSpeed: 20,disabled:false });
		// $("#Editor").resizable({
		// 	disabled: true
		// });
		// $("#Editor").resizable({
		// 	containment: "#root",
		// 	disabled: false,
		// 	handles: "n, e, s, w, ne, se, sw, nw",
		// 	// animate: true,
		// 	// aspectRatio: true
		// 	// classes: {
		// 	// 	"ui-resizable": "highlight"
		// 	// }
		// });
		$( ".disabledrag" ).disableSelection();
		$("#Editor").css({
			maxWidth:"70%",
			width:"inherit",
			maxHeight:"400px",
			zIndex:99998,
			borderTop:"none",
			borderBottom:"none",
			resize:"none",
		});
	}else{
		$( "#Editor" ).draggable({disabled:true});
		if(props.data.split==="bottom"){
			window.addEventListener('load', AOS.refresh)
			$("#Editor").css({
				maxWidth:"none",
				maxHeight:"none",
				width:"100vw",
				// borderTop:"4px solid #777",
				height:"50vh",
				zIndex:(props.data.drawer)?0:99998,
				borderBottom:"none",
				// position:"absolute",
				resize:"none",
				top:"50vh",
				left:"0"
				// transform:"translateY(-50%)"
			});
			$("#Editor").resizable({
				disabled: true
			});
			$("#Editor").resizable({
				containment: "#root",
				handles: "n",
				disabled: false
				// animate: true,
				// aspectRatio: true
				// classes: {
					// 	"ui-resizable": "highlight"
					// }
			})
		}else{
			$("#Editor").css({
				maxWidth:"none",
				width:"99.3vw",
				height:"50vh",
				zIndex:(props.data.drawer)?0:99998,
				// position:"absolute",
				top:"0",
				// borderBottom:"4px solid #777",
				borderTop:"none",
				left:"0",
				resize:"vertical",
			});
			$("#Editor").resizable({
				disabled: true
			});
			// $("#Editor").resizable({
			// 	containment: "#root",
			// 	handles: "s",
			// 	disabled: false,
			// 	handles: "se",
			// 	alsoResize : "#Editor",
			// 	// animate: true,
			// 	// aspectRatio: true
			// 	// classes: {
			// 		// 	"ui-resizable": "highlight"
			// 		// }
			// 	})
				
			}
		}
		
		// init();
		const HomeIconText = useSelector(state=>state.HomeIconText);
		const ArticleIconText = useSelector(state=>state.ArticleIconText);
		const AboutIconText = useSelector(state=>state.AboutIconText);
		const ContactIconText = useSelector(state=>state.ContactIconText);
		const NavbarIconText = useSelector(state=>state.NavbarIconText);
		const ProjectIconText = useSelector(state=>state.ProjectIconText);
		// const [home,sethome] = React.useState("");
		// const [article,setarticle] = React.useState("");
		// const [about,setabout] = React.useState("");
		// const [contact,setcontact] = React.useState("");
		// const [navbar,setnavbar] = React.useState("");
		// const [project,setproject] = React.useState("");
		// React.useEffect(()=>{
		// 	sethome(HomeIconText);
		// 	setarticle(ArticleIconText);
		// 	setabout(AboutIconText);
		// 	setcontact(ContactIconText);
		// 	setnavbar(NavbarIconText);
		// 	setproject(ProjectIconText);
		// },[]);

		return (
			<div
			id="EditorContainer"
			style={{ height: "100%", width: "100%",position:"absolute" }}
			>
			<div className={`${classes.root} shadow rounded-lg`} id="Editor" style={{borderBottom:"4px solid #777"}} >
				{
					(props.data.split==="bottom")?(
						<div className="shadow" style={{height:"33px",borderTop:"3px solid #777",borderBottom:"3px solid #777",background:"#fff",zIndex:999998}}>
							<div  className="mx-auto" style={{background:"#777",border:"2px solid #777",width:"6%",marginTop:"7px"}}>

							</div>
							<div  className="mt-1 mb-1 mx-auto" style={{background:"#777",border:"2px solid #777",width:"6%"}}>

							</div>
						</div>
					):""
				}
				<div className="mx-auto" style={{width:"max-content",position:"absolute",left:"50%",top:"0",transform: "translateX(-50%)",zIndex:999998 }}>
					{/* <Button color="primary" variant="contained">
						<ArrowForwardIosIcon style={{transform: "rotate(90deg)"}}/>
					</Button> */}
				</div>
				<div id="resize_element_x" class="resize_element ui-resizable-handle ui-resizable-n"><img src="images/site/handle_resize.png" title="Resize this element" /></div>

				<MuiThemeProvider theme={theme}>
					<AppBar
						position="static"
						style={{ width: "100%" }}
						className="shadow"
						color="default"
					>
						<Tabs
							value={TabPointer}
							onChange={handleChange}
							indicatorColor="secondary"
							style={{ color: "#000", width: "100%" }}
							variant="scrollable"
							scrollButtons="auto"
							aria-label="scrollable auto tabs example"
						>
							<Tab label="Navbar" {...a11yProps(0)} />
							<Tab label="Profile Pic" {...a11yProps(1)} />
							<Tab label="Profile Section" {...a11yProps(2)} />
							<Tab label="Profile BackGround" {...a11yProps(3)} />
							<Tab label="About" {...a11yProps(4)} />
							<Tab label="Skills" {...a11yProps(5)} />
							<Tab label="ProjectSection" {...a11yProps(6)} />
							<Tab label="Education" {...a11yProps(7)} />
							<Tab label="Contact" {...a11yProps(8)} />
							<Tab label="Upload Resume" {...a11yProps(9)} />
						</Tabs>
					</AppBar>
				</MuiThemeProvider>
				<TabPanel value={TabPointer} index={0}>
					<div
						className="NavbarTab "
						style={{
							display: "flex",
							flexWrap: "wrap",
							flexDirection: "row",
							justifyContent: "space-around",
						}}
					>
						<div>
							<NavbarTab /> <br></br>
						</div>
						<div
							style={{ marginLeft: "3rem", marginBottom: "3rem" }}
						>
							<h4 className="text-dark text-center">
								Navbar Background
							</h4>
							<span
								id="SketchPicker"
								className="disabledrag"
								style={{ cursor: "pointer !important" }}
							>
								<SketchPicker
									color={navbg}
									onChange={(color) =>
										dispatch({
											type: "choosebg",
											payload: color.hex,
										})
									}
									style={{ cursor: "pointer" }}
								/>
							</span>
						</div>
						<div
							style={{ marginLeft: "3rem", marginBottom: "3rem" }}
						>
							<h4 className="text-dark text-center text-capitalize">
								Navbar Color
							</h4>
							<span
								id="SketchPicker"
								className="disabledrag"
								style={{ cursor: "pointer !important" }}
							>
								<SketchPicker
									color={NavbarIconColor}
									onChange={(color) =>
										dispatch({
											type: "chooseiconcolor",
											payload: color.hex,
										})
									}
									style={{ cursor: "pointer" }}
								/>
							</span>
						</div>
						<div
							style={{ marginLeft: "3rem", marginBottom: "3rem" }}
						>
							<h4 className="text-dark text-center">
								Icons Color{" "}
							</h4>
							<span
								id="SketchPicker"
								className="disabledrag"
								style={{ cursor: "pointer !important" }}
							>
								<SketchPicker
									color={IconColor}
									onChange={(color) =>
										dispatch({
											type: "iconcolor",
											payload: color.hex,
										})
									}
									style={{ cursor: "pointer" }}
								/>
							</span>
						</div>
						<div
							style={{ marginLeft: "3rem", marginBottom: "3rem" }}
						>
							<h4 className="text-dark text-center">
								OnScroll Navbg{" "}
							</h4>
							<span
								id="SketchPicker"
								className="disabledrag"
								style={{ cursor: "pointer !important" }}
							>
								<SketchPicker
									color={navbg}
									onChange={(color) =>
										dispatch({
											type: "onscrollbg",
											payload: color.hex,
										})
									}
									style={{ cursor: "pointer" }}
								/>
							</span>
						</div>
						<div
							style={{ marginLeft: "3rem", marginBottom: "3rem" }}
						>
							<h4 className="text-dark text-center">
								{" "}
								HoverEffect Color{" "}
							</h4>
							<span
								id="SketchPicker"
								className="disabledrag"
								style={{ cursor: "pointer !important" }}
							>
								<SketchPicker
									color={NavHoverColor}
									onChange={(color) =>
										dispatch({
											type: "navhovercolor",
											payload: color.hex,
										})
									}
									style={{ cursor: "pointer" }}
								/>
							</span>
						</div>
						<div
							style={{
								marginLeft: "3rem",
								marginBottom: "3rem",
								display: "flex",
								flexWrap: "wrap",
								flexDirection: "column",
							}}
						>
							<TextField
								label="setnavbar"
								id="Editorsetnavbar"
								className="disabledrag mx-2"
								// defaultValue={NavbarIconText}
								// onChange={(e)=>{
								// 	setnavbar(e.target.value);
								// }}
								defaultValue={NavbarIconText}
							/>{" "}
							<br />
							<TextField
								label="setabout"
								id="Editorsetabout"
								className="disabledrag mx-2"
								// value={AboutIconText}
								// onChange={(e)=>{
								// 	setabout(e.target.value);
								// }}
								defaultValue={AboutIconText}
							/>{" "}
							<br />
							<TextField
								label="setskills"
								id="Editorsetskills"
								className="disabledrag mx-2"
								// value={HomeIconText}
								// onChange={(e)=>{
								// 	sethome(e.target.value);
								// }}
								defaultValue={HomeIconText}
							/>{" "}
							<br />
							<TextField
								label="setproject"
								id="Editorsetproject"
								className="disabledrag mx-2"
								// value={ProjectIconText}
								// onChange={(e)=>{
								// 	setproject(e.target.value);
								// }}
								defaultValue={ProjectIconText}
							/>{" "}
							<br />
							<TextField
								label="seteducation"
								id="Editorseteducation"
								className="disabledrag mx-2"
								// onChange={(e)=>{
								// 	setarticle(e.target.value);
								// }}
								defaultValue={ArticleIconText}
							/>{" "}
							<br />
							<TextField
								label="setcontact"
								id="Editorsetcontact"
								className="disabledrag mx-2"
								// onChange={(e)=>{
								// 	setcontact(e.target.value);
								// }}
								defaultValue={ContactIconText}
							/>
							<div className="mt-3 mx-auto" style={{display:"block",width:"max-content"}}>
								<Button variant="outlined" color="primary" 
									onClick={()=>{
										dispatch({type:"setnavbar",payload:document.querySelector("#Editorsetnavbar").value});
										dispatch({type:"setabout",payload:document.querySelector("#Editorsetabout").value});
										dispatch({type:"sethome",payload:document.querySelector("#Editorsetskills").value});
										dispatch({type:"setarticle",payload:document.querySelector("#Editorseteducation").value});
										dispatch({type:"setproject",payload:document.querySelector("#Editorsetproject").value});
										dispatch({type:"setcontact",payload:document.querySelector("#Editorsetcontact").value});

									}}
								>Apply text</Button>
							</div>
						</div>
					</div>
				</TabPanel>
				<TabPanel value={TabPointer} index={1}>
					<EditProfilePic />
				</TabPanel>
				<TabPanel value={TabPointer} index={2}>
					<ProfileSectionEditor />
				</TabPanel>
				<TabPanel value={TabPointer} index={3}>
					<ProfilesectionBackGround />
				</TabPanel>
				<TabPanel value={TabPointer} index={4}>
					<AboutSectionEditor />
				</TabPanel>
				<TabPanel value={TabPointer} index={5}>
                    <SkillsSectionEditor />
				</TabPanel>
				<TabPanel value={TabPointer} index={6}>
					<ProjectEditor/>
				</TabPanel>
				<TabPanel value={TabPointer} index={7}>
					<EducationEditor />
				</TabPanel>
				<TabPanel value={TabPointer} index={8}>
					<ContactTab/>
				</TabPanel>
				<TabPanel value={TabPointer} index={9}>
					<UploadResume />
				</TabPanel>
			</div>
		</div>
	);
}

export default Editor;
