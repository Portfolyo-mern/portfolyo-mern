import React from 'react';
import { Button, makeStyles, TextField } from "@material-ui/core";
import {useSelector, useDispatch} from "react-redux";
import CameraAltIcon from '@material-ui/icons/CameraAlt';

const ContactBg = () => {
    const ContactBackground = useSelector(state=>state.ContactBackground);
    const dispatch = useDispatch();
    return (
        <div className="contactbg">
            <h3 className="text-center my-4">backgrounds</h3>
            <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"}}>
                <div className={`${ContactBackground.border[0]} p-4`} style={{width:"max-content"}}
                    onClick={()=>{
                        dispatch({type:"contactbackground",payload:{
                            image:"/portfolyo-mern/static/media/hyd-urban-main.6946362e.webp",
                            border:["border","",""]
                        }})
                    }}
                >
                    <Button 
                        variant="outlined"
                        color="secondary"
                    >
                        Default
                    </Button>
                </div>
                <div className={`${ContactBackground.border[1]} p-4`} style={{width:"max-content"}}
                    onClick={()=>{
                    dispatch({type:"contactbackground",payload:{
                        image:"",
                        border:["","border",""]
                    }})
                }}
                >
                    <Button 
                        variant="outlined"
                    >
                        None
                    </Button>
                </div>
                <div className={`${ContactBackground.border[2]} p-4`} style={{width:"max-content"}}
                        onClick={()=>{
                        dispatch({type:"contactbackground",payload:{
                            ...ContactBackground,
                            border:["","","border"]
                        }})
                    }}
                >
                    <Button 
                        variant="outlined"
                        color="primary"
                    >
                        custom
                    </Button>
                </div>
            </div>
            {
                (ContactBackground.border[2]==="border")?(
                    <div className="mx-auto my-3" style={{width:"max-content"}}>
                        <Button
                            variant="contained"
                            color="primary"
                            component="label"
                        >
                            Upload Image &nbsp; <CameraAltIcon/>
                            <input type="file" hidden onChange={(event)=>{
                                   dispatch({type:"contactbackground",payload:{
                                    ...ContactBackground,
                                    image:URL.createObjectURL(event.target.files[0])
                                }})
                            }}>

                            </input>
                        </Button> 
                    </div>
                ):""
            }
        </div>
    )
}

export default ContactBg
