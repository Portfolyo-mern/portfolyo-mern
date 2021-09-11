import React from 'react'
import axios from "axios";
import {Baseurl} from "../../../App";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import {useDispatch} from "react-redux";
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: 'none',
    },
  }));
  

const UploadResume = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [status,setStatus] = React.useState("no resume uploaded");
    const [resume,setresume] = React.useState(null);
    const upload = async () => {
        const data = new FormData();
        data.append("file",resume);
        data.append("token",localStorage.getItem("token"));
        try{
            dispatch({type:"spinner",payload:true});
            const result = await axios({
                method:"post",
                url:`${Baseurl}/uploadresume`,
                headers:{
                    "Content-type": "multipart/form-data",
                },
                data
            });
            dispatch({type:"spinner",payload:false});
            setStatus(result.data);
        }catch(err){
            dispatch({type:"spinner",payload:false});
        }
    }
    React.useEffect(async ()=>{
        try{
            const result = await axios({
                method:"post",
                url:`${Baseurl}/getMyResumeStatus/${localStorage.getItem("username")}`
            });
            console.log(result.data);
            setStatus(result.data);
        }catch(error){
            // console.log(error);
        }
    },[]);
    return (
        <div>
            <p className="text-muted text-center">{status}</p>
            <p className="text-muted text-center">{(resume===null)?"no is file choosen":`file selected = ${resume.name}` }</p>
            <div className="mx-auto" style={{width:"max-content"}}>
            <input
                type="file"
                style={{ display: 'none' }}
                id="contained-button-file"
                onChange={(e)=>{
                    setresume(e.target.files[0]);
                }}
            />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Choose File
        </Button>
      </label>
      <Button className="ml-3" onClick={upload} variant="contained" color="primary" component="span">
          Upload
        </Button>
            </div>
        </div>
    )
}

export default UploadResume;