import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import "./Header2.scss";
import {useSelector} from 'react-redux';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

let Header2 = (props) => {
    const [hover,sethover] = useState(false);
    const Navbarbg = useSelector(state=>state.NavbarBg);
    const NavbarIconColor = useSelector(state=>state.NavbarIconColor);
    const IconColor = useSelector(state=>state.IconColor);
    const onScrollBg = useSelector(state=>state.onScrollBg);
    const NavHoverColor = useSelector(state=>state.NavHoverColor);
    const HomeIconText = useSelector(state=>state.HomeIconText);
    const ArticleIconText = useSelector(state=>state.ArticleIconText);
    const AboutIconText = useSelector(state=>state.AboutIconText);
    const ContactIconText = useSelector(state=>state.ContactIconText);
    const NavbarIconText = useSelector(state=>state.NavbarIconText);
    const ProjectIconText = useSelector(state=>state.ProjectIconText);
    
    props.menu[0].name=HomeIconText;
    props.menu[1].name=AboutIconText;
    props.menu[2].name=ProjectIconText;
    props.menu[3].name=ArticleIconText;
    props.menu[4].name=ContactIconText;


    console.log(NavbarIconColor);
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
        if(window.scrollY >= 80){
            setColorchange(true);
       }
       else{
         setColorchange(false);
       }
    };
    window.addEventListener('scroll', changeNavbarColor);
    const classes = useStyles();
    console.log(props.menu)
    return (
        <div className="Header2 m-0">
            <nav id="scrollNavbar" class="navbar  navbar-fixed-top  navbar-expand-lg navbar-dark fixed-top" style={{ postion: "sticky", background: (colorChange)?onScrollBg:Navbarbg,color:NavbarIconColor,width:'100%' }} >
                <a class="navbar-brand text-uppercase" style={{ fontSize: "2rem",color:NavbarIconColor }} href="">{NavbarIconText}</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto" style={{ fontSize: "1.2rem" }}>
                        {props.menu.map((ele) => (
                            <li style={{cursor:"pointer"}} class="nav-item  mr-4 active" onClick={ () => {
                                          if(ele.to=="education"){
                                              props.func.ScrollE();
                                          }
                                          if(ele.to==""){
                                              props.func.ScrollH();
                                          }
                                          if(ele.to=="about"){
                                            props.func.ScrollA();
                                          }
                                          if(ele.to=="project"){
                                            props.func.ScrollP();
                                          }
                                          if(ele.to=="contactform"){
                                              props.func.ScrollC();
                                          }
                                      }
                                      }>
                                <a class="nav-link stroke text-uppercase" onMouseEnter={()=>sethover(true)} onMouseLeave={()=>sethover(false)}  style={{color:(hover)?NavHoverColor:IconColor,
                                         }} >{ele.name} <span class="sr-only">(current)</span></a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header2
