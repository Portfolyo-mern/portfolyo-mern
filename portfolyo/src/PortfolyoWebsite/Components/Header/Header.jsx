import React,{useState,useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import "./Header.scss";
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

let Header = (props) => {
    const HomeIconText = useSelector(state=>state.HomeIconText);
    const ArticleIconText = useSelector(state=>state.ArticleIconText);
    const AboutIconText = useSelector(state=>state.AboutIconText);
    const ContactIconText = useSelector(state=>state.ContactIconText);
    const NavbarIconText = useSelector(state=>state.NavbarIconText);
    
    props.menu[0].name=HomeIconText;
    props.menu[1].name=ArticleIconText;
    props.menu[2].name=AboutIconText;
    props.menu[3].name=ContactIconText;

    const [hover,sethover] = useState(false);
    const Navbarbg = useSelector(state=>state.NavbarBg);
    const NavbarIconColor = useSelector(state=>state.NavbarIconColor);
    const IconColor = useSelector(state=>state.IconColor);
    const onScrollBg = useSelector(state=>state.onScrollBg);
    const NavHoverColor = useSelector(state=>state.NavHoverColor);
    console.log(NavbarIconColor);
    const [colorChange, setColorchange] = useState(false);
    console.log(props.menu)
    useEffect(()=>{
        const changeNavbarColor = () =>{
            if(window.scrollY >= 80){
                setColorchange(true);
           }
           else{
             setColorchange(false);
           }
        };
        window.addEventListener('scroll', changeNavbarColor);
    })
    const classes = useStyles();
    return (
        <div className="Header m-0 p-0">
            <nav id="scrollNavbar" class="navbar navbar-fixed-top m-0 p-0  navbar-expand-lg navbar-dark fixed-top" style={{ postion: "sticky", background: (colorChange)?onScrollBg:Navbarbg,color:NavbarIconColor,width:'100%' }} >
                <a class="navbar-brand" style={{ fontSize: "2rem",color:NavbarIconColor }} href="">{NavbarIconText}</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse m-0 p-0" id="navbarNav">
                        <ul class="navbar-nav ml-auto p-0 m-0" style={{ fontSize: "0.7rem" }}>
                      <section class="m-0 p-0" >
                          <nav class="cl-effect-7 m-0 p-0 ">
                              {props.menu.map((ele) => (
                                      <a onClick={ () => {
                                          if(ele.to=="education"){
                                              props.func.ScrollE();
                                          }
                                          if(ele.to==""){
                                              props.func.ScrollH();
                                          }
                                      }
                                      } onMouseEnter={()=>sethover(true)} onMouseLeave={()=>sethover(false)} 
                                      style={{color:(hover)?(NavHoverColor):(IconColor),padding:"0.5rem",
                                      }} ><span>{ele.name}</span></a>
                              ))}
                          </nav>
                                </section>

                        </ul>
                    </div>
            </nav>
        </div>
    )
}


export default Header
