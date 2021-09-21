import React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import logo from "../../../assets/logo.jpeg";
import site from "../../../assets/site.jpeg";
import CallMadeIcon from "@material-ui/icons/CallMade";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import CallMade from "@material-ui/icons/CallMade";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
// import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Fade from "@material-ui/core/Fade";
import Popover from '@material-ui/core/Popover';
// import { Button } from '@material';
import "./MyWebsite.scss";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {Baseurl} from "../../../App";
import Alert from '@material-ui/lab/Alert';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import {useHistory} from "react-router-dom";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "rgba(255,255,255,0.15)",
    "&:hover": {
      backgroundColor: "rgba(255,255,255,0.25)",
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const YourWebsite = () => {
  // console.log(logo);
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [data,setdata] = React.useState([]);
  const [backupdata,setbackupdata] = React.useState([]);
  const [search,setsearch] = React.useState({
    status:false,
    value:""
  });
  const dispatch = useDispatch();
  const H = useHistory();

  const handleClick = (event) => {
    console.log(event.currentTarget);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [Spinner,setSpinner] = React.useState(false);

  React.useEffect(async ()=>{
    try{
      setSpinner(true);
      const result = await axios({
        url:`${Baseurl}/getmyportfolyos/${localStorage.getItem("username")}`,
        method:"get",
      });
      // console.log(window.location.origin);
      setdata([...result.data.reverse()]);
      setbackupdata([...result.data.reverse()]);
      // console.log(result.data);
      setSpinner(false);
    }catch(err){
      // console.log(err);
      setSpinner(false);
    }
  },[]);

  const deleteWebsite = async (_id) => {
    setSpinner(true);
    try{
      let result = await axios({
        method:"post",
        url:`${Baseurl}/deletewebsite`,
        data:{token:localStorage.getItem("token"),_id}
      }); 
      // console.log(result.data);
      setdata([...result.data.reverse()]);
      setbackupdata([...result.data.reverse()]);
      setSpinner(false);
    }catch{
      setSpinner(false);
    }
  }
  const onsearch = (e) => {
    let searchValue = e.target.value.toLowerCase();
    if(searchValue==""){
      setsearch({
        status:false,
        value:""
      });
      setdata(backupdata);
    }
    else if("latest".includes(searchValue)){
      setsearch({
        status:false,
        value:""
      });
      setdata([backupdata[0]]);
    }else{
       try{
         let index = parseInt(searchValue);
         if(backupdata.length-index>=0){
           setdata([backupdata[backupdata.length-index]]);
           setsearch({
             status:true,
             value:index
           });
         }else{
           setdata([]);
           setsearch({
            status:true,
            value:index
          });
         }
       }catch{

       }
    }
  }
  const logout = async () => {
    const token = localStorage.getItem("token");
    localStorage.removeItem("token");
    axios.get(`${Baseurl}/logout/${token}`).then((res)=>{
    }).catch(()=>{
    });
    H.push("/");  
  }
  return (
    <div className="mywebsite mt-0">
      <Backdrop  
            className={classes.backdrop}
            style={{zIndex:99999}}
              open={Spinner}
            >
              <CircularProgress color="primary" />
          </Backdrop>
      <div
        style={{
          background: "#faf1d4",
          position: "fixed",
          top: "0",
          height: "100vh",
          width: "100%",
          zIndex: -100,
        }}
      ></div>
      <div className="Header2 m-0">
        <nav
          id="scrollNavbar"
          class="navbar  navbar-fixed-top  navbar-expand-lg navbar-dark fixed-top"
          style={{ postion: "sticky", width: "100%", background: "#e0a500" }}
        >
          {/* eslint-disable-next-line */}
          <img src={logo} style={{ heigth: "2rem", width: "2rem" }} />
          <a
            class="navbar-brand text- mt-0 Brand"
            style={{
              fontSize: "1.4rem",
              cursor: "pointer",
              fontWeight: "555",
              fontFamily: "'Roboto', sans-serif",
              color: "#fff",
            }}
            onClick={() => {
              // props.func.ScrollHome();
            }}
          >
            {" "}
            &nbsp; My Websites
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto" style={{ fontSize: "1rem" }}>
              <li className="mt-0  mr-3">
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon className="text-white" />
                  </div>
                  <InputBase
                    placeholder="Search…"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    onChange={onsearch}
                    className="text-white"
                    inputProps={{ "aria-label": "search" }}
                  />
                </div>
              </li>
              <li style={{ cursor: "pointer" }} class="my-0 ml-0 mr-1 active">
                <Button
                  className="text-white px-2"
                  style={{ fontWeight: "600" }}
                  onClick={()=>{
                    H.push("/dashboard");
                  }}
                  // variant="contained"
                >
                  <ArrowBackIosIcon style={{ fontSize: "17" }}/> BACK 
                </Button>
              </li>
              <li style={{ cursor: "pointer" }} class="mt-0 ml-0 mr-1 active">
                <Button
                  className="text-white px-2"
                  style={{ fontWeight: "600" }}
                  variant=""
                  color="secondary"
                  onClick={logout}
                >
                  {/* eslint-disable-next-line */}
                  logout
                </Button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="container-md" style={{ marginTop: "6rem" }}>
        {
          (data.length===0&&!search.status)?(
            <div>
              <h1 className="text-center">No websites created</h1>
            </div>
          ):(
            data.length===0&&search.status
          )?(
            <div>
              <h1 className="text-center">No search found</h1>
          </div>
          ):(
            data.map((ele,index)=>
             (
                <div
                className="text-white row"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                }}
              >
                <div
                  className="px-sm-3 MainCard shadow-sm mb-4 border pt-3 px-0"
                  style={{
                    borderRadius: "0.25rem",
                    backgroundColor: "#fff",
                    backgroundImage: "linear-gradient(90deg, #fff 100%, #fff 10%)",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    className="mb-0 mx-2 pr-sm-3"
                    style={{ width: "max-content", borderRight: "0px solid #ccc" }}
                  >
                    <img
                      className="siteimage"
                      src={site}
                      style={{
                        height: "80px",
                        width: "170px",
                        borderRadius: "0.3rem",
                        display: "block",
                      }}
                    ></img>
                    <h6
                      className="text-cente mt-3 text-muted"
                      style={{ fontWeight: "600", color: "#e0a500" }}
                    >
                      Published
                    </h6>
                    <p
                      className="text-cente mt-0 text-mute"
                      style={{ fontWeight: "400", color: "#333", fontSize: "1rem" }}
                    >
                      Site Role: Owner
                    </p>
                  </div>
                  <div className="mt-0 mb-2 mx-2" style={{ width: "max-content" }}>
                    <p
                      className="text-center mt-0 mb-2"
                      style={{ fontWeight: "600", color: "#555", fontSize: "1.3rem" }}
                    >
                      My Site {
                          (index===0&&!search.status)?(
                            <Chip variant="outlined" className="text-success mb-1 ml-1" 
                            style={{
                              border:"1px solid green",
                            }}
                            size="small"
                            label={`Latest`}
                            icon={<DoneIcon style={{color:"green"}}/>}
                            /> 
                        ):(search.status)?`${search.value}`
                        :`${data.length-index}`
                      }
                    </p>
                    <p
                      className="text-muted SetParaDisp mt-0 mb-3"
                      style={{ fontSize: "0.9rem" }}
                    >
                      <a href={`${window.location.origin}/#/portfolyo/${localStorage.getItem("username")}/${ele._id}`} className="text-muted" target="_blank">
                        {
                          (`${window.location.origin}/#/portfolyo/${localStorage.getItem("username")}/${ele._id}`.length>38)?(
                            <span>
                              {`${window.location.origin}/#/portfolyo/${localStorage.getItem("username")}/${ele._id}`.substr(0,38)}...
                            </span>
                          ):(
                            <span>
                            {`${window.location.origin}/#/portfolyo/${localStorage.getItem("username")}/${ele._id}`}
                          </span>
                          )
                        }
                        <a href="http://localhost:3000/#/mywebsites"></a>
                        <CallMade style={{ fontSize: "0.9rem" }} />
                      </a>
                      {/* */}
                    </p>
                    <div className="BtnGrp">
                      {/* <div> */}
                      <Button
                        className="ml-0 CopyDisp"
                        variant="outlined"
                        style={{ border: "1px solid #e0a500", color: "#e0a500" }}
                        onClick={(event)=>{
                          navigator.clipboard.writeText(`${window.location.origin}/#/portfolyo/${localStorage.getItem("username")}/${ele._id}`);
                        }}
                      >
                        Copy url
                      </Button>
                      {/* </div> */}
      
                      <Button
                        className="ml-0 CopyDisp"
                        variant="outlined"
                        style={{ border: "1px solid #e0a500", color: "#e0a500" }}
                        onClick={(event)=>{
                          navigator.clipboard.writeText(`${localStorage.getItem("username")}@WebsiteId@${ele._id}`);
                        }}
                      >
                        Copy WebsiteId
                      </Button>
                      {/* <Button aria-controls="fade-menu" className="ml-1 mb-0 CopyDisp" variant="outlined" style={{border: "1px solid #777",color:"#777"}} aria-haspopup="true" onClick={handleClick}>
                              Site Actions 
                          </Button>
                          <Menu
                              id="fade-menu"
                              anchorEl={anchorEl}
                              keepMounted
                              open={open}
                              onClose={handleClose}
                              TransitionComponent={Fade}
                          >
                              <MenuItem onClick={handleClose}>Delete website</MenuItem>
                              <MenuItem onClick={handleClose}>Edit Website </MenuItem>
                              <MenuItem onClick={handleClose}>goto website</MenuItem>
                          </Menu> */}
                    </div>
                  </div>
                  <div className="mt-0 mb-2 mx-2 ButtonGrp">
                    <div
                      className="DeleteIconDisp"
                      style={{ display: "block", width: "max-content" }}
                    >
                      <Button
                        className="mx-1 mb-2"
                        variant="outlined"
                        style={{ border: "1px solid #DD4145", color: "#DD4145" }}
                        onClick={()=>{
                          deleteWebsite(ele._id);
                        }}
                      >
                        delete
                        <DeleteForeverIcon style={{ fontSize: "1.15rem" }} />
                      </Button>
                    </div>
                    <div
                      className="gotoIconDisp"
                      style={{ display: "block", width: "max-content" }}
                    >
                      <a href={`${window.location.origin}/#/portfolyo/${localStorage.getItem("username")}/${ele._id}`} className="text-muted" target="_blank">
                        <Button
                          className="mx-1 mb-2"
                          variant="outlined"
                          style={{ border: "1px solid #3B8754", color: "#3B8754" }}
                        >
                          goto website &nbsp;{" "}
                          <CallMade style={{ fontSize: "0.9rem" }} />
                        </Button>
                      </a>
                    </div>
                    <div>
                      <Button
                        aria-controls="fade-menu"
                        className="ml-1 mb-0"
                        variant="outlined"
                        style={{ border: "1px solid #777", color: "#777" }}
                        aria-haspopup="true"
                        onClick={handleClick}
                      >
                        Site Actions
                      </Button>
                      <Menu
                        id="fade-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={open}
                        onClose={handleClose}
                        TransitionComponent={Fade}
                      >
                        <a style={{color:"#000"}} 
                          target="_blank"
                          href={`${window.location.origin}/#/portfolyo/${localStorage.getItem("username")}/${data[data.length-index-1]._id}`}>
                          <MenuItem >goto website</MenuItem>
                        </a>
                        <a style={{color:"#000"}}
                          target="_blank"
                          href={`${window.location.origin}/#/editwebsite/${localStorage.getItem("username")}@WebsiteId@${ele._id}`}>
                          <MenuItem >Edit Website </MenuItem>
                        </a>
                        <MenuItem onClick={()=>{
                          deleteWebsite(ele._id);
                        }}>Delete website</MenuItem>
                        </Menu>
                    </div>
                  </div>
                  {/* <h6
                    className="text-white text-center text-uppercase"
                    style={{ fontWeight: "600" }}
                  >
                    my resume
                  </h6>
                  <h6 className="text-white text-uppercase">
                    Copy WebsiteId <ArrowDownwardIcon /> <ArrowDownwardIcon />
                  </h6> */}
                </div>
              </div>
              )
            )
          )
        }
      </div>
   
        <Button
          variant="contained"
          className="shadow"
          onClick={()=>{
            H.push("/makewebsite")
          }}
          style={{
            display: "block",
            width: "max-content",
            position: "fixed",
            top: "95%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            background: "#e0a500",
            color: "#fff",
            fontWeight: "600",
            padding: "0.4rem 0.95rem 0.4rem 0.45rem",
            borderRadius: "3rem",
          }}
        >
          <AddIcon /> create new website
        </Button>

    </div>
  );
};

export default YourWebsite;
