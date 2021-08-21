import React from "react";
import "./ContactEditor";
import TextField from "@material-ui/core/TextField";
import AccountCircle from "@material-ui/icons/AccountCircle";
import InputAdornment from "@material-ui/core/InputAdornment";
// import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
// import { makeStyles } from "@material-ui/core/styles";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import SubjectIcon from "@material-ui/icons/Subject";
import EmailIcon from "@material-ui/icons/Email";
import { useSelector, useDispatch } from "react-redux";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from '@material-ui/core/IconButton';
import {Baseurl} from "../../../../App";
import axios from "axios";
import LinearProgress from '@material-ui/core/LinearProgress';
import Alert from '@material-ui/lab/Alert';


// const useStyles = makeStyles((theme) => ({
//   button: {
//     margin: theme.spacing(1),
//   },
// }));

const ContactEditor = () => {
  // const classes = useStyles();
  const ContactText = useSelector((state) => state.ContactText);
  const ContactTextFont = useSelector((state) => state.ContactTextFont);
  const ContactBgColors = useSelector((state) => state.ContactBgColors);
  const ContactAnimation = useSelector((state) => state.ContactAnimations);
  // const TabPointer = useSelector((state) => state.TabPointer);
  const [vis,setvis] = React.useState("none");
  const [msg,setmsg] = React.useState({
    vis:"none",
    message:"",
  });
  const dispatch = useDispatch();
  const [data,setdata] = React.useState({
    name:"",
    subject:"",
    gmail:"",
    message:"",
  });
  const sendgmail = async () => {
    // console.log(`${Baseurl}/sendcontactnotification`);
    // console.log(data);
    try{
      setvis("inherit");
      const result = await axios({
        method:"post",
        url:`${Baseurl}/sendcontactnotification`,
        header:{
          "accept":"application/json",
          "Content-Type":"application/json"
        },
        data:{...data,sendergmail:ContactText.email}
      });
      // console.log(result.data);
      setmsg({
        vis:"inherit",
        message:result.data
      });
      setvis("none");
      setdata({
        name:"",
        subject:"",
        gmail:"",
        message:"",
      })
    }catch(error){
      // console.log(error);
      setmsg({
        vis:"inherit",
        message:"message has been not sent !!"
      });
      setvis("none");
      setdata({
        name:"",
        subject:"",
        gmail:"",
        message:"",
      })
    }
  }
  return (
    <div className="ContactEditor">
      <div
        class="card mb-0 pt-0"
        data-aos-delay={parseFloat(ContactAnimation.delay)*1000}
        data-aos-duration={parseFloat(ContactAnimation.duration)*1000}
        data-aos={ContactAnimation.animation}
        style={{
          background: ContactBgColors.bgcolor,
          boxShadow: ContactAnimation.shadow,
          borderRadius: `${ContactAnimation.radius}px`,
        }}
        >
        <LinearProgress className="mt-0" style={{display:vis}}/>
        <Alert 
        style={{
           display:msg.vis,
        }} 
        onClose={() => { 
          setmsg({
            vis:"none",
            message:""
          })
        }}>{msg.message}</Alert>
        <IconButton style={{margin:"-2px 3px auto auto"}}>
            <EditIcon 
              onClick={()=>{
                dispatch({type:"openeditor",payload:true});
                dispatch({type:"tabpointer",payload:8});
                dispatch({type:"getcurrenttabcontact",payload:0})
              }}
            />
        </IconButton>
        <div
          class="h4 text-center title"
          style={{
            fontFamily: ContactTextFont.Title,
            color: ContactBgColors.title,
          }}
        >
          {ContactText.Title}
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="card-body">
              <div>
                <div class="p pl-3 pb-3">
                  <strong
                    style={{
                      fontFamily: ContactTextFont.dialogue,
                      color: ContactBgColors.dialogue,
                    }}
                  >
                    {ContactText.dialogue}
                  </strong>
                </div>
                <div class="row mb-3 px-3">
                  <div class="col ">
                    <div class="input-group">
                      <TextField
                        style={{ width: "100%" }}
                        id="input-with-icon-textfield"
                        label="Name"
                        value={data.name}
                        onChange={(e)=>{
                          setdata({...data,name:e.target.value})
                        }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <AccountCircle />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div class="row mb-3 px-3">
                  <div class="col ">
                    <div class="input-group">
                      <TextField
                        style={{ width: "100%" }}
                        id="input-with-icon-textfield"
                        label="Subject"
                        value={data.subject}
                        onChange={(e)=>{
                          setdata({...data,subject:e.target.value})
                        }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <SubjectIcon />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div class="row mb-3 px-3">
                  <div class="col ">
                    <div class="input-group">
                      <TextField
                        style={{ width: "100%" }}
                        id="input-with-icon-textfield"
                        label="Gmail"
                        value={data.gmail}
                        onChange={(e)=>{
                          setdata({...data,gmail:e.target.value})
                        }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <EmailIcon />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div class="row mb-3 pt-3 px-3">
                  <div class="col ">
                    <div class="input-group">
                      <TextField
                        style={{ width: "100%" }}
                        id="outlined-multiline-static"
                        label="Message"
                        multiline
                        rows={4}
                        message={data.message}
                        onChange={(e)=>{
                          setdata({...data,message:e.target.value})
                        }}
                        defaultValue=""
                        variant="outlined"
                      />
                    </div>
                  </div>
                </div>
                <div class="row px-3">
                  <div class="col ">
                    {ContactBgColors.border[0] === "border" ? (
                      <Button
                        variant="contained"
                        style={{ backgroundColor: ContactBgColors.button }} onClick={sendgmail}
                      >
                        Send
                        <ChevronRightIcon />
                      </Button>
                    ) : ContactBgColors.border[1] === "border" ? (
                      <Button style={{ color: ContactBgColors.button }} onClick={sendgmail}>
                        Send
                        <ChevronRightIcon />
                      </Button>
                    ) : (
                      <Button
                        variant="outlined"
                        style={{
                          border: `1px solid ${ContactBgColors.button}`,
                          color: ContactBgColors.button,
                        }} onClick={sendgmail}
                      >
                        Send
                        <ChevronRightIcon />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card-body">
              <p class="mb-0">
                <strong
                  style={{
                    fontFamily: ContactTextFont.addressh,
                    color: ContactBgColors.headers,
                  }}
                >
                  {ContactText.addressh}
                </strong>
              </p>
              <p
                class="pb-2"
                style={{
                  fontFamily: ContactTextFont.address,
                  color: ContactBgColors.describe,
                }}
              >
                {ContactText.address}
              </p>
              <p class="mb-0">
                <strong
                  style={{
                    fontFamily: ContactTextFont.phoneh,
                    color: ContactBgColors.headers,
                  }}
                >
                  {ContactText.phoneh}
                </strong>
              </p>
              <p
                class="pb-2"
                style={{
                  fontFamily: ContactTextFont.phone,
                  color: ContactBgColors.describe,
                }}
              >
                {ContactText.phone}
              </p>
              <p class="mb-0">
                <strong
                  style={{
                    fontFamily: ContactTextFont.emailh,
                    color: ContactBgColors.headers,
                  }}
                >
                  {ContactText.emailh}
                </strong>
              </p>
              <p
                style={{
                  fontFamily: ContactTextFont.email,
                  color: ContactBgColors.describe,
                }}
              >
                {ContactText.email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactEditor;
