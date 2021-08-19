import React from 'react'
import ContactEditor from "../ContactEditor/ContactEditor";
import Map from "../../../../assets/hyd-urban-main.webp";
import "./ContactForm";
const ContactForm = () => {
    return (
        <div background={Map} className="ContactForm container-fluid px-3" style={{backgroundImage:"url(/portfolyo-mern/static/media/hyd-urban-main.6946362e.webp)"}}>
            {/* <img src={Map}  id="bg-image" className="mt-5" style={{zIndex:0,postion:"absolute",width:"100%"}}/> */}
            <div className="container p-sm-5 py-4" style={{zIndex:999}}>
                {/* <div className="container-md p-5 border mx-auto"> */}
                    <ContactEditor/>
                {/* </div> */}
            </div>
        </div>
    )
}

export default ContactForm;