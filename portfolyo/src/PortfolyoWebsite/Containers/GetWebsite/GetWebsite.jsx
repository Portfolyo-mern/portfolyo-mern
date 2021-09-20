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
// import "./Main.scss";
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

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: 99999,
    color: '#fff',
  },
}));



const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });


const GetWebsite = (props) => {
    // console.log(props);
    const education = useRef(null);
    const skills = useRef(null);
    const about = useRef(null);
    const dispatch = useDispatch();
    const project = useRef(null);
    const contactform = useRef(null);
    const home = useRef(null);
    const [load,setload] = React.useState(false);
    React.useEffect(async ()=>{
        try{
            dispatch({type:"Spinner",payload:true});
            const {username,id} = props.match.params;
            localStorage.setItem("siteowner",username);
            if(id=="null"){
                setload(true);
            }else{
                const result = await axios({
                    url:`${Baseurl}/getportfolyo/${username}/${id}`,
                    method:"get",
                });
                console.log(result.data);
                const data = Object.keys(JSON.parse(result.data.data));
                const value = JSON.parse(result.data.data);
                console.log(value["projectcard"]);
                for(var i of data){
                    try{
                        dispatch({type:i,payload:value[i]});
                    }catch(err){
                        console.log(err);
                    }
                }
                setload(true);
                dispatch({type:"Spinner",payload:false});
            }
        }catch{
            console.log("error");
            dispatch({type:"Spinner",payload:false});
            setload(true);
        }

        dispatch({type:"viewmode",payload:true});
    },[]);

    const ScrollE = () => education.current.scrollIntoView();
    const ScrollA = () => about.current.scrollIntoView();
    const ScrollH = () => skills.current.scrollIntoView();
    const ScrollP = () => project.current.scrollIntoView();
    const ScrollC = () => contactform.current.scrollIntoView();
    const ScrollHome = () => home.current.scrollIntoView();
    const NavbarState = useSelector(state=>state.Navbar);
    const HomeIconText = useSelector(state=>state.HomeIconText);
    const ViewMode = useSelector(state=>state.ViewMode);
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
          const mainProfileSectionBeginRef = useRef(null);
          const mainProfileSectionEndRef = useRef(null);
      
          let sectionUnderView = 2;
        const [dail,setdail] = React.useState(true);
        const classes = useStyles();
        return (load)?(
            // <div>
            <div className="entireWebsite">
                 <Backdrop  
                 className={classes.backdrop}
                    open={Spinner}
                 >
                    <CircularProgress color="primary" />
                </Backdrop>
                <div className="Mainbackground" ref={home}></div>
                {Navbars[NavbarState]}
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
    ):""
};

export default GetWebsite;
