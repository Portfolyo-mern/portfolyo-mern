import React from 'react'
import ContactEditor from "../ContactEditor/ContactEditor";
import Map from "../../../../assets/hyd-urban-main.webp";
import "./ContactForm";
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import {useSelector,useDispatch} from "react-redux";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import Button from '@material-ui/core/Button';


const ContactForm = () => {
    const ContactBackground = useSelector(state=>state.ContactBackground);
    const ContactText = useSelector(state=>state.ContactText);
    const ContactTextFont = useSelector(state=>state.ContactTextFont);
    const ContactBgColors = useSelector(state=>state.ContactBgColors);
    const ViewMode = useSelector(state=>state.ViewMode);
    const dispatch = useDispatch();
    return (
        <div>
            <Button variant="outlined" style={{margin:"auto",display:(ViewMode)?"none":"block"}}
                onClick={()=>{
                    dispatch({type:"openeditor",payload:true});
                    dispatch({type:"tabpointer",payload:8});
                    dispatch({type:"getcurrenttabcontact",payload:2});
                }}
            >
                background <CameraAltIcon/>
            </Button>
            <div background={Map} className="ContactForm container-fluid px-sm-3  my-3" style={{backgroundImage:`url(${ContactBackground.image})`,backgroundPosition:"center center",backgroundRepeat:"norepeat",backgroundSize:"cover"}}>
                {/* <img src={Map}  id="bg-image" className="mt-5" style={{zIndex:0,postion:"absolute",width:"100%"}}/> */}
                <div className="container p-sm-5 py-4" style={{zIndex:999}}>
                    {/* <div className="container-md p-5 border mx-auto"> */}
                        <ContactEditor/>
                    {/* </div> */}
                </div>
            </div>
            <div className="container my-5">
                <p className=" text-center  mx-md-5 mb-4 mx-3" style={{color:ContactBgColors.quotation,fontSize:"1.3rem",fontFamily:ContactTextFont.quotation}}>{ContactText.quotation}</p>
                <p className=" text-center pb-4" style={{color:ContactBgColors.footer,fontSize:"1.3rem",fontFamily:ContactTextFont.footer}}>{ContactText.footer}</p>
            </div>
        </div>
    )
}

export default ContactForm;