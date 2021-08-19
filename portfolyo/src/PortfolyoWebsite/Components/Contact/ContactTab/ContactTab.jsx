import React from 'react';
import "./ContactTab";
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {useSelector,useDispatch} from 'react-redux';
import ContactText from "../ContactText/ContactText";
import ContactColors from "../ContactColors/ContactColors";
import ContactBg from "../ContactBg/ContactBg";
import ContactAnimations from "../ContactAnimations/ContactAnimations";


const ContactTab = () => {
    const [currenttabc,setcurrenttabc] = React.useState(0);
    const handleChange = (e, newValue) => {
        setcurrenttabc(newValue);
    }
    return (
        <div className="ContactTab">
            <>
            <Paper square style={{width:"max-content",margin:"auto"}}>
                <Tabs
                    value={currenttabc}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                >
                    <Tab label="Text" />
                    <Tab label="Colors" />
                    <Tab label="BackgroundImage"  />
                    <Tab label="Animations" />
                </Tabs>
            </Paper>
            {
                (currenttabc==0)?(
                    <ContactText/>
                ):(currenttabc==1)?(
                    <ContactColors/>
                ):(currenttabc == 2)?(
                    <ContactBg/>
                ):(currenttabc==3)?(
                    <ContactAnimations/>
                ):""
            }
        </>
        </div>
    )
}

export default ContactTab;