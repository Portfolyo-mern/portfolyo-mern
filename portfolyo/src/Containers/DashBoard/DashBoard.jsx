import React, { useState,useEffect } from "react";
import "./DashBoard.scss";
import dashboardBackgroundVideo from "../../assets/dashboardBackground.mp4";
import { NavLink } from "reactstrap";
import NavBar from "../../Components/Navbar/Navbar";
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import {Baseurl} from '../../App';
import {useSelector,useDispatch} from "react-redux";
import TextField from '@material-ui/core/TextField';
const DashBoard = () => {
  const H = useHistory();
  const dispatch = useDispatch();
  const data = useSelector(state=>state);
  const [userName, setuserName] = useState("");
  const [WebsiteId, setWebsiteId] = useState("");
  useEffect(async ()=>{
    try{
      const result = await axios({
        method:"post",
        url:`${Baseurl}/verifytoken`,
        data:{token:localStorage.getItem("token")}
      });
      console.log(result.data);
      if(localStorage.getItem(`${result.data.username}_data`)===null){
        localStorage.setItem(`${result.data.username}_data`,JSON.stringify(data));
      }
      localStorage.setItem("username",result.data.username);
      setuserName(result.data.username);
    }catch{
      H.push("/error")
    }
  },[]);
  const getWebsiteIdData = async () => {
    try{
      const result = await axios({
        url:`${Baseurl}/getcopyid/${WebsiteId}`,
        method:"get",
      })
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
      H.push("/makewebsite");
    }catch(error){
      alert("incorrect websiteId entered")
      console.log(error);
    }
  }
  return (
    <>
      <NavBar/>
      <div className="dashboardPage">
        <div className="dashboarddiv1">
          <h1 className="dashboardwelcomeh1" >
            Welcome <br />
            <span style={{overflowX:"scroll"}}>{userName}</span>
          </h1>
          <p className="dashboardwelcomeP">
            You are one step away from creating your beautiful portfolio Click
            below to get started!
          </p>
          <div className="ml-md-4" style={{width:"max-content"}}>
            <div className="" style={{width:"max-content"}}>
              <div 
                  className="mt-5"
                  style={{width:"max-content",}}
                > 
                  <button onClick={()=>{H.push("/makewebsite")}} type="button" class="btn p-md-3 p-2 btn-light text-capitalize" style={{borderRadius:"3.5rem"}}>create new website</button>
              </div> 
              <div
                  style={{width:"max-content",}}

              >
                <input style={{display:"inline-block"}} type="text" className="mt-0 p-md-3 p-2"  
                  placeholder="enter websiteId"
                  value={WebsiteId}
                  onChange={(e)=>{
                    setWebsiteId(e.target.value)
                  }}
                  style={{borderRadius:"30px",outline:"none",fontSize:"1rem"}}>
                </input>
                  <NavLink
                    to="/makewebsite"
                    className="dashBoardNavLink"
                    style={{
                      textDecoration: "none",
                      width:"max-content",
                      display:"inline-block"
                    }}
                  >
                  <i onClick={getWebsiteIdData} className="fas text-left fa-arrow-circle-right dashBoardClickHere"></i>
                  </NavLink>
              </div>
            </div>

          </div>
        </div>
        <div className="dashboarddiv2">
          <video autoPlay loop muted className="dashboardVideo">
            <source src="https://player.vimeo.com/external/159035843.sd.mp4?s=0d309dd63ee62d4efc5e0e471824ed7fab0f7f85&profile_id=164&oauth2_token_id=57447761"></source>
          </video>
          <div className="videoBlender"></div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
