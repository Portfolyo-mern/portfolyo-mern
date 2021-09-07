import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import { Button, TextField } from "@material-ui/core";
import EditImage from './EditImage/EditImage';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import IconButton from '@material-ui/core/IconButton';

const AddProject = () => {
    const dispatch = useDispatch();
    const [Techs,setTechs] = React.useState("");
    const addproject = useSelector(state=>state.addproject);
    const projectcard = useSelector(state=>state.projectcard);
    const addTech = (e) => {
        dispatch({type:"PS_addproject",payload:{...addproject,techs:[...addproject.techs,Techs]}})
    }
    const addCard = async () => {
        dispatch({ type: "PS_addproject", payload: { ...addproject, title: document.querySelector("#projectTitle").value,
                about:document.querySelector("#aboutProject").value,
                buttonText:document.querySelector("#buttonText").value,
                techhead:document.querySelector("#techhead").value,
                to:document.querySelector("#sourcelinkproject").value
        }});
        dispatch({type:"PS_projectcard", payload:[...projectcard,{
            ...addproject,
            title: document.querySelector("#projectTitle").value,
            about:document.querySelector("#aboutProject").value,
            buttonText:document.querySelector("#buttonText").value,
            techhead:document.querySelector("#techhead").value,
            to:document.querySelector("#sourcelinkproject").value
        }]});
    }
    const resetcard = () => {
        document.querySelector("#projectTitle").value=""
        document.querySelector("#aboutProject").value=""
        document.querySelector("#buttonText").value=""
        document.querySelector("#techhead").value=""
        document.querySelector("#sourcelinkproject").value="" 
       dispatch({type:"PS_addproject",payload:
        {
            key:1,
            to:"",
            title:"",
            about:"",
            buttonText:"",
            techhead:"",
            techs:[
            ],
            animation:"",
            duration:"0.3",
            delay:"0",
            image:""
        }    
        });
    }
    return (
        <div className="AddProject mt-4">
            <div className="mx-auto" style={{ width: "max-content" }}>
                <EditImage />
            </div>
            <div className="row my-5" >
                <div className="col-md-6 mx-auto offset-1">
                    <TextField
                        className="disabledrag"
                        id="projectTitle"
                        label="Title"
                        variant="outlined"
                        fullWidth
                        required
                    />
                </div>
            </div>
            <div className="row my-5" >
                <div className="col-md-6 mx-auto offset-1">
                    <TextField
                        className="disabledrag"
                        id="aboutProject"
                        label="About"
                        variant="outlined"
                        fullWidth
                        multiline
                        required
                    />
                </div>
            </div>
            <div className="row my-5" >
                <div className="col-md-6 mx-auto offset-1">
                    <TextField
                        className="disabledrag"
                        id="buttonText"
                        label="buttontext"
                        variant="outlined"
                        fullWidth
                        required
                    />
                </div>
            </div>
            <div className="row my-5" >
                <div className="col-md-6 mx-auto offset-1">
                    <TextField
                        className="disabledrag"
                        id="techhead"
                        label="techhead"
                        variant="outlined"
                        fullWidth
                        required
                    />
                </div>
            </div>
            <div className="row my-5" >
                <div className="col-md-6 mx-auto offset-1">
                    <TextField
                        className="disabledrag"
                        id="sourcelinkproject"
                        label="sourcelink"
                        variant="outlined"
                        fullWidth
                        required
                    />
                </div>
            </div>
            <div className="row my-5 mx-auto"  >
            <div className="col-md-6 mx-auto offset-1">
                    <TextField
                        className="disabledrag"
                        id="firstnameInput"
                        label="techhead"
                        variant="outlined"
                        fullWidth
                        required
                        value={Techs}
                        onChange={(e) =>  setTechs(e.target.value)}
                    />
                </div>
            </div>
            <div className="mx-auto" style={{width:"max-content"}}>
                <Button className="mx-4" onClick={addTech} color="primary" variant="contained">ADDTECHS</Button> <br></br>
            </div>
            <div className="mx-auto my-5" style={{ width: "max-content" }}>
                <div className="mt-4">
                    {
                        // eslint-disable-next-line
                        (addproject.techs.length==0)?(
                            <h3>No Techs Selected</h3>
                        ):(
                            <ul className="ml-0" style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}}>
                                {
                                    addproject.techs.map((ele,index) => (
                                        <li className="disbledrag px-3 mx-3" style={{border:"2px solid #000",listStyleType:"none"}}>
                                            {ele}
                                            <IconButton onClick={()=>{
                                                // console.log(index);
                                                dispatch({type:"PS_addproject",payload:{...addproject,techs:addproject.techs.filter((ele,ind)=>{
                                                    // eslint-disable-next-line
                                                    return (ind!=index)
                                                })
                                                }})
                                                setTechs("");
                                            }
                                            }>
                                                <HighlightOffIcon /> 
                                            </IconButton>
                                        </li>
                                    ))
                                }
                            </ul>
                        )
                    }
                </div>

            </div>
            <div className="mx-auto" style={{ width: "max-content" }}>
                <Button className="mx-4" onClick={addCard} color="primary" variant="contained">ADDPROJECT</Button>
                <Button className="mx-4" onClick={resetcard} color="primary" variant="contained">reset</Button>
            </div>
            <div className="mx-auto" style={{ width: "max-content" }}>
            </div>
        </div>
    )
}

export default AddProject
