import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import EducationHeader from '../EducationHeader/EducationHeader';
import {useSelector,useDispatch} from 'react-redux';
import AddCard from '../AddCard/AddCard';
import EditCard from '../EditCard/EditCard';
import EditAllCard from '../EditAllCard/EditAllCard';
import Layouts from '../Layouts/Layouts';

const EducationEditor = () => {
    const currenttabe = useSelector(state=>state.currenttabe);
    
    const dispatch = useDispatch();
    // const [value, setValue] = React.useState(currenttabe);

   const handleChange = (event, newValue) => {
       dispatch({type:"currenttabe",payload:newValue});
   };

    return (
        <>
            <Paper square style={{width:"max-content",margin:"auto"}}>
                <Tabs
                    value={currenttabe}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                >
                    <Tab label="Header" />
                    <Tab label="Add Card"  />
                    <Tab label="Edit Card" />
                    <Tab label="Edit ALL CardS" />
                    <Tab label="Layout" />
                </Tabs>
            </Paper>
            {
                (currenttabe==0)?(
                    <EducationHeader/>
                ):(currenttabe==1)?(
                    <AddCard/>
                ):(currenttabe==2)?(
                    <EditCard/>
                ):(currenttabe==3)?(
                    <EditAllCard/>
                ):(currenttabe==4)?(
                    <Layouts/>
                ):""

            }
        </>
    )
}

export default EducationEditor
