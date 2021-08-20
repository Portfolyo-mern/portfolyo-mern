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
    // const [currenttabc,setcurrenttabc] = React.useState(0);
    const GetCurrentTabContact = useSelector(state=>state.GetCurrentTabContact);
    const dispatch = useDispatch();
    const handleChange = (e, newValue) => {
        dispatch({type:"getcurrenttabcontact",payload:newValue})
    }
    return (
        <div className="ContactTab">
            <>
            <Paper square style={{width:"max-content",margin:"auto"}}>
                <Tabs
                    value={GetCurrentTabContact}
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
                (GetCurrentTabContact==0)?(
                    <ContactText/>
                ):(GetCurrentTabContact==1)?(
                    <ContactColors/>
                ):(GetCurrentTabContact == 2)?(
                    <ContactBg/>
                ):(GetCurrentTabContact==3)?(
                    <ContactAnimations/>
                ):""
            }
        </>
        </div>
    )
}

export default ContactTab;