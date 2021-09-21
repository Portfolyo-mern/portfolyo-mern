import React,{ useState } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import {WebsiteName} from "../../App";
import Fade from 'react-reveal/Fade';
import {useSelector,useDispatch} from "react-redux";
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import {Baseurl} from '../../App';

const HeroText = (props) => {
  const [WebsiteId, setWebsiteId] = useState("");
  const H = useHistory();
  const data = useSelector(state=>state);
  const dispatch = useDispatch();
  const getWebsiteIdData = async () => {
    try{
      dispatch({type:"SpinnerV3",payload:true});
      const result = await axios({
        url:`${Baseurl}/getcopyid/${WebsiteId}`,
        method:"get",
      })
      const data = Object.keys(JSON.parse(result.data.data));
      const value = JSON.parse(result.data.data);
      // console.log(value["projectcard"]);
      for(var i of data){
          try{
              dispatch({type:i,payload:value[i]});
          }catch(err){
              console.log(err);
          }
      }
      dispatch({type:"SpinnerV3",payload:false});
      H.push("/makewebsite");
    }catch(error){
      dispatch({type:"SpinnerV3",payload:false});
      alert("incorrect websiteId entered");
      console.log(error);
    }
  }
  return (
    
    <Fade left>
      <Container className="shadow p-4 mx-3" style={{borderRadius:"1.3rem",filter:"brightness(110%)"}}>
        <div className="mb-4">
          <h2 className="mb-4" style={{color:"#000",fontWeight:"600"}}>{props.username}</h2>
          <p className="mb-3" style={{color:"#000",
            fontSize:"1.2rem",
            fontFamily:"'Mukta', sans-serif",
            wordSpacing:"3px",
            fontWeight:"500"
            }}>Enter Website Id to load the website with that defaults and edit in your way. </p>
          <div className="mb-4" style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",maxWidth:"max-content"}}>
            <TextField id="outlined-basic" value={WebsiteId} className="mb-4" label="ENTER WEBSITE ID" variant="filled" 
              onChange={(e)=>{
                setWebsiteId(e.target.value);
              }}
              style={{
                background:"azure",marginTop:"1rem",
                border:"none"
              }}
              className="shadow-sm"
            />
            
            <Button 
              className="shadow px-2 mx-md-2 mx-0 rounded-lg"
              variant="contained"
              onClick={getWebsiteIdData}
              style={{fontSize:"21px",marginLeft:10,background:"azure",color:"#555",marginTop:"1rem"}}
            >GO <ArrowRightIcon/></Button>
          </div>
        </div>
        {/* <h1>Anytime.</h1>
        <h1>Anywhere.</h1> */}

        {/* <Inputcontainer>
          <label class="custom-field one">
            <input type="text" placeholder="ENTER WEBSITE ID" 
              style={{padding:"1rem",
              boxShadow:"0px 0px 22px 0px #bcf1ff inset",
              borderRadius:"10px"
            }} />

          </label>
          
        </Inputcontainer> */}
        <div>
          <p className="mb-3" style={{color:"#000",
              fontSize:"1.2rem",
              fontFamily:"'Mukta', sans-serif",
              wordSpacing:"3px",
              fontWeight:"500"
              }}>Create Your Customised portfolyo Website Within Minutes.</p>
          <Button style={{width:"max-content",marginTop:25,padding:0,borderRadius:"2px"}}>
            <BtnContainer>
              <button 
              onClick={()=>{H.push("/makewebsite")}}
              className="readmore text-dark">OR CREATE NEW WEBSITE</button>
            </BtnContainer>
          </Button>
        </div>
      </Container>

    </Fade>
    
    
    
    
  );
};




const Inputcontainer = styled.div`
  margin-top: 2rem;
  .custom-field {
    position: relative;
    font-size: 25px;
    border-top: 20px solid transparent;
    
    --field-padding: 10px;
  }

  .custom-field input {
    border: none;
    -webkit-appearance: none;
    -ms-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: #f2f2f2;
    padding: var(--field-padding);
    border-radius: 3px;
    width: 250px;
    outline: none;
    font-size: 14px;
  }

  .custom-field .placeholder {
    position: absolute;
    left: var(--field-padding);
    width: calc(100% - (var(--field-padding) * 2));
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    top: 22px;
    line-height: 100%;
    transform: translateY(-50%);
    color: #aaa;
    transition: top 0.3s ease, color 0.3s ease, font-size 0.3s ease;
  }

  .custom-field.one input.dirty + .placeholder,
  .custom-field.one input:not(:placeholder-shown) + .placeholder,
  .custom-field.one input:focus + .placeholder {
    top: 0;
    font-size: 10px;
    color: #222;
    background: #fff;
    width: auto;
  }
`;

const BtnContainer = styled.div`
  margin-top: 0rem;
  button {
    background: #81d1ff;
    border: none;
    padding: 0.6rem 1.1rem;
    color: #fff;
    border-radius: 2px;
    box-shadow: 0px 1px 24px -7px #81d1ff;
    transition: all 0.3s ease-in-out;
    margin: 0rem;
    margin-left:0;
    font-size: 0.8rem;
    cursor: pointer;
    /* &:hover {
      /* box-shadow: 0px 0px 6px 0px #81d1ff; */
      /* transform: translateY(-5px); */
    /* } */
  }

  .readmore {
    color: #81d1ff;
    color: #ffffff;
    border: 3px solid #81d1ff;
    /* &:hover {
      box-shadow: 0px 10px 16px -11px #81d1ff;
      transform: translateY(-5px);
    } */
  }
`;

const Container = styled.div`
  padding: 1rem;
  z-index:99999;
  /* padding-top:0; */
`;


export default HeroText;
