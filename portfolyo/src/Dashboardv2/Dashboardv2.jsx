import React,{useState} from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import {Baseurl} from '../App';
import {useSelector,useDispatch} from "react-redux";


const Dashboardv2 = () => {
  const [username,setUsername] = useState("");
  const [load,setload] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector(state=>state);
  const H = useHistory();
  React.useEffect(async ()=>{
    try{
      dispatch({type:"SpinnerV2",payload:true});
      const result = await axios({
        method:"post",
        url:`${Baseurl}/verifytoken`,
        data:{token:localStorage.getItem("token")}
      });
      // console.log(result.data);
      if(localStorage.getItem(`${result.data.username}_data`)===null){
        localStorage.setItem(`${result.data.username}_data`,JSON.stringify(data));
      }
      localStorage.setItem("username",result.data.username);
      setUsername(result.data.username);
      dispatch({type:"SpinnerV2",payload:false});
      setload(true);
    }catch{
      dispatch({type:"SpinnerV2",payload:false});
      H.push("/error")
    }
  },[]);
  return (load)?(
    <div style={{height:"100%",background:"yellow"}}>
      <Navbar username={username}/>
      <Hero />
    </div>
  ):"";
};

export default Dashboardv2;
