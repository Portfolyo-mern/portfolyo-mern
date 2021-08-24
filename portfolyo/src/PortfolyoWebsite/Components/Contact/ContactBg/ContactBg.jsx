import React from 'react';
import { Button } from "@material-ui/core";
import {useSelector, useDispatch} from "react-redux";
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import axios from "axios";
import {Baseurl} from "../../../../App";

const ContactBg = () => {
    const ContactBackground = useSelector(state=>state.ContactBackground);
    const dispatch = useDispatch();
    let getBase64 = (file, cb) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            cb(reader.result)
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }    
    const upload = async (event) => {
        try{
            getBase64(event.target.files[0],async (base64)=>{
                // console.log(base64);
                dispatch({ type: "spinner", payload: true });
                let result = await axios({
                    url:`${Baseurl}/uploadbase64image`,
                    method:"post",
                    data:{token:localStorage.getItem("token"),image:base64}
                });
                const deleteimage = ContactBackground.image;
                dispatch({ type: "spinner", payload: false });
                dispatch({type:"contactbackground",payload:{
                    ...ContactBackground,
                    image:result.data
                }});
                result = await axios({
                  url:`${Baseurl}/deletepublicid`,
                  method:"post",
                  data:{token:localStorage.getItem("token"),image:deleteimage}
                });
                // console.log(result.data);
            });
        }
        catch(error){
            this.props.dispatch({ type: "spinner", payload: false });
        }
            // const result = await axios({
            //     url:`${Baseurl}/uploadImage`,  
            // })
    }
    const deleteprev = async () => {
        try{
            const deleteimage = ContactBackground.image;
            dispatch({type:"contactbackground",payload:{
                image:"",
                border:["","border",""]
            }})
            if(deleteimage.split(":")[0]==="https"){
                let result = await axios({
                        url:`${Baseurl}/deletepublicid`,
                        method:"post",
                        data:{token:localStorage.getItem("token"),image:deleteimage}
                });
            }
        }catch{

        }
    }
    const deleteprevdefault = async () => {
        try{
            const deleteimage = ContactBackground.image;
            dispatch({type:"contactbackground",payload:{
                image:"/portfolyo-mern/static/media/hyd-urban-main.6946362e.webp",
                border:["border","",""]
            }})
            if(deleteimage.split(":")[0]==="https"){
                let result = await axios({
                        url:`${Baseurl}/deletepublicid`,
                        method:"post",
                        data:{token:localStorage.getItem("token"),image:deleteimage}
                });
            }
        }catch{
            
        }
    }
    return (
        <div className="contactbg">
            <h3 className="text-center my-4">backgrounds</h3>
            <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"}}>
                <div className={`${ContactBackground.border[0]} p-4`} style={{width:"max-content"}}
                    onClick={deleteprevdefault}
                >
                    <Button 
                        variant="outlined"
                        color="secondary"
                    >
                        Default
                    </Button>
                </div>
                <div className={`${ContactBackground.border[1]} p-4`} style={{width:"max-content"}}
                    onClick={deleteprev}
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
                            <input type="file" hidden onChange={upload}>

                            </input>
                        </Button> 
                    </div>
                ):""
            }
        </div>
    )
}

export default ContactBg
