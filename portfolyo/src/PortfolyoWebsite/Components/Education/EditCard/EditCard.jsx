import React,{useState} from 'react';
import { Button, TextField } from "@material-ui/core";
import { useSelector, useDispatch } from 'react-redux';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import EditImage from '../EditImage/EditImage';
import transitionFade from "../../../../assets/transitionFade.png";
import transitionFlip from "../../../../assets/transitionFlip.png";
import transitionZoom from "../../../../assets/transitionZoom.png";
import {
    InputLabel,
    makeStyles,
    Select,
} from "@material-ui/core";
const EditCard = () => {
    const card1edu = useSelector(state => state.card1edu);
    const dispatch = useDispatch();
    const editcardine = useSelector(state => state.editcardine);
    const handleChange = (e) => {
        let cc = [...card1edu];
        cc[editcardine.index] = { ...editcardine, animation: e.target.value };
        dispatch({ type: "card1edu", payload: cc });
        dispatch({ type: "editcardine", payload: { ...editcardine, animation: e.target.value } });
    };
    const imageType1 = (val) => {
        dispatch({ type: "imagetypeedu", payload: val });
    }
    const [
        projectBackgroundTransitionStyle,
        setprojectBackgroundTransitionStyle,
    ] = useState(card1edu[editcardine.index].animation);
    const [projectTransitionSelected, setprojectTransitionSelected] = useState([
        "projectTrasitionSelected",
        "",
        "",
        "",
    ]);

    const projectBackgroundTransitioneHandler = (event) => {
        setprojectBackgroundTransitionStyle(event.target.value);
        let cc = [...card1edu];
        cc[editcardine.index] = { ...editcardine, animation: event.target.value };
        dispatch({ type: "card1edu", payload: cc });
        dispatch({ type: "editcardine", payload: { ...editcardine, animation: event.target.value } });
    };
    const projectBackgroundTransitionStyleHandler = (index, event) => {
        if (index === 0) {
            setprojectBackgroundTransitionStyle("none");
            let cc = [...card1edu];
            cc[editcardine.index] = { ...editcardine, animation: event.target.value };
            dispatch({ type: "card1edu", payload: cc });
            dispatch({ type: "editcardine", payload: { ...editcardine, animation: "none" } });
            return;
        }
        const temp = ["", "", "", ""];
        temp[index] = "projectTrasitionSelected";
        setprojectTransitionSelected(temp);
        setprojectBackgroundTransitionStyle(event.target.value);
        let cc = [...card1edu];
        cc[editcardine.index] = { ...editcardine, animation: event.target.value };
        dispatch({ type: "card1edu", payload: cc });
        dispatch({ type: "editcardine", payload: { ...editcardine, animation: event.target.value } });
    };

    return (
        <div className="AddCardE mt-4">
            <h3 className="text-center text-uppercase my-5">{(editcardine.index !== null) ? `editing card ${editcardine.index + 1}` : `select a card to edit`}</h3>
            <div style={{ display: (editcardine.index === null) ? "none" : "inherit" }}>
                <div className="mx-auto" style={{ width: "max-content" }}>
                    <EditImage />
                    <Button variant="outlined" onClick={()=>imageType1("rounded-circle")} color="primary" >circle</Button> 
                    <Button variant="outlined" className="mx-4" onClick={()=>imageType1("")} color="primary" >square</Button> 
                </div>
                <div className="mx-auto my-5" style={{display:"block",width:"max-content",zIndex:"99999"}}>
                <Button variant="contained" color="primary" onClick={()=>{
                    let cc = [...card1edu];
                    cc[editcardine.index] = { ...editcardine, title: document.querySelector("#editeducationcardtitle").value,
                        year:document.querySelector("#editeducationcardyear").value,
                        description:document.querySelector("#editeducationcarddescription").value
                };
                    dispatch({ type: "card1edu", payload: cc });
                    dispatch({ type: "editcardine", payload: { ...editcardine, title: document.querySelector("#editeducationcardtitle").value,
                        year:document.querySelector("#editeducationcardyear").value,
                        description:document.querySelector("#editeducationcarddescription").value
                } });
                }}>
                    update changes
                </Button>
            </div>
                <div className="row my-5" >
                    <div className="col-md-6 mx-auto offset-1">
                        <TextField
                            className="disabledrag"
                            id="editeducationcardtitle"
                            label="Title"
                            variant="outlined"
                            fullWidth
                            required
                            defaultValue={editcardine.title}
                        />
                    </div>
                </div>
                <div className="row my-5" >
                    <div className="col-md-6 mx-auto offset-1">
                        <TextField
                            className="disabledrag"
                            id="editeducationcardyear"
                            label="Year"
                            variant="outlined"
                            fullWidth
                            required
                            defaultValue={editcardine.year}
                        />
                    </div>
                </div>
                <div className="row my-5" >
                    <div className="col-md-6 mx-auto offset-1">
                        <TextField
                            className="disabledrag"
                            id="editeducationcarddescription"
                            label="describe"
                            variant="outlined"
                            fullWidth
                            required
                            defaultValue={editcardine.description}
                        />
                    </div>
                </div>
                <div className="my-5">
                    <h4 className="text-center">Animation Type</h4>
                    <div className="skillsSectionTransitionEditor">
                    <div
                        className={`skillsSectionTransitionNone ${projectTransitionSelected[0]}`}
                        onClick={() => {
                            projectBackgroundTransitionStyleHandler(0, null);
                        }}
                    >
                        <p
                            style={{
                                display: "block",
                                margin: "auto",
                            }}
                        >
                            None
                        </p>
                    </div>
                    <div
                        className={`skillsSectionTransitions ${projectTransitionSelected[1]}`}
                        onClick={(event) => {
                            projectBackgroundTransitionStyleHandler(1, event);
                        }}
                    >
                        <img src={transitionFade} alt="transitionFade"></img>
                        <FormControl
                            variant="outlined"
                            className={`disabledrag `}
                        >
                            <InputLabel htmlFor="outlined-age-native-simple">
                                Fade
                            </InputLabel>
                            <Select
                                native
                                value={projectBackgroundTransitionStyle}
                                onChange={projectBackgroundTransitioneHandler}
                                label="Age"
                                inputProps={{
                                    name: "age",
                                    id: "outlined-age-native-simple",
                                }}
                            >
                                <option value={"fade-up"}>Fade Up</option>
                                <option value={"fade-down"}>Fade down</option>
                                <option value={"fade-right"}>Fade right</option>
                                <option value={"fade-left"}>Fade left</option>
                                <option value={"fade-up-right"}>
                                    Fade Up Right
                                </option>
                                <option value={"fade-up-left"}>
                                    Fade Up left
                                </option>
                                <option value={"fade-down-right"}>
                                    Fade Down Right
                                </option>
                                <option value={"fade-down-left"}>
                                    Fade Down Left
                                </option>
                            </Select>
                        </FormControl>
                    </div>
                    <div
                        className={`skillsSectionTransitions ${projectTransitionSelected[2]}`}
                        onClick={(event) => {
                            projectBackgroundTransitionStyleHandler(2, event);
                        }}
                    >
                        <img src={transitionFlip} alt="transitionFlip"></img>
                        <FormControl
                            variant="outlined"
                            className={`disabledrag`}
                        >
                            <InputLabel htmlFor="outlined-age-native-simple">
                                Flip
                            </InputLabel>
                            <Select
                                native
                                value={projectBackgroundTransitionStyle}
                                onChange={projectBackgroundTransitioneHandler}
                                label="Age"
                                inputProps={{
                                    name: "age",
                                    id: "outlined-age-native-simple",
                                }}
                            >
                                <option value={"flip-left"}>Flip Left</option>
                                <option value={"flip-right"}>Flip Right</option>
                                <option value={"flip-up"}>Flip Up</option>
                                <option value={"flip-down"}>Flip Down</option>
                            </Select>
                        </FormControl>
                    </div>
                    <div
                        className={`skillsSectionTransitions ${projectTransitionSelected[3]}`}
                        onClick={(event) => {
                            projectBackgroundTransitionStyleHandler(3, event);
                        }}
                    >
                        <img src={transitionZoom} alt="transitionZoom"></img>
                        <FormControl
                            variant="outlined"
                            className={`disabledrag`}
                        >
                            <InputLabel htmlFor="outlined-age-native-simple">
                                Zoom
                            </InputLabel>
                            <Select
                                native
                                value={projectBackgroundTransitionStyle}
                                onChange={projectBackgroundTransitioneHandler}
                                label="Age"
                                inputProps={{
                                    name: "age",
                                    id: "outlined-age-native-simple",
                                }}
                            >
                                <option value={"zoom-in"}>Zoom In</option>
                                <option value={"zoom-in-up"}>Zoom In Up</option>
                                <option value={"zoom-in-down"}>
                                    Zoom In Down
                                </option>
                                <option value={"zoom-in-left"}>
                                    Zoom In Left
                                </option>
                                <option value={"zoom-in-right"}>
                                    In Right
                                </option>
                                <option value={"zoom-out"}>Zoom Out</option>
                                <option value={"zoom-out-up"}>
                                    Zoom Out Up
                                </option>
                                <option value={"zoom-out-down"}>
                                    Zoom Out Down
                                </option>
                                <option value={"zoom-out-right"}>
                                    Zoom Out Right
                                </option>
                                <option value={"zoom-out-left"}>
                                    Zoom Out Left
                                </option>
                            </Select>
                        </FormControl>
                    </div>
                </div>
                   
                </div>
                <div className="my-4">
                    <h4 className="text-center">Animation Duration</h4>
                    <h4 className="text-center my-3 text-muted" style={{ fontSize: "1.5rem" }}>0s--0.3s--0.6s--0.9s--1.2s--1.5s--1.8s--2.1s--2.4s--2.7s--3s</h4>
                    <input type="range" data-toggle="tooltip" data-placement="top" class="custom-range disabledrag" onChange={(e) => {
                        let cc = [...card1edu];
                        cc[editcardine.index] = { ...editcardine, animationduration: e.target.value };
                        dispatch({ type: "card1edu", payload: cc });
                        dispatch({ type: "editcardine", payload: { ...editcardine, animationduration: e.target.value } });
                    }} min="0" max="3" step="0.3" value={parseFloat(editcardine.animationduration)}
                        id="customRange3"></input>
                </div>
                <div className="my-4">
                    <h4 className="text-center">Animation Delay</h4>
                    <h4 className="text-center my-3 text-muted" style={{ fontSize: "1.5rem" }}>0s--0.3s--0.6s--0.9s--1.2s--1.5s--1.8s--2.1s--2.4s--2.7s--3s</h4>
                    <input type="range" data-toggle="tooltip" data-placement="top" class="custom-range disabledrag" onChange={(e) => {
                        let cc = [...card1edu];
                        cc[editcardine.index] = { ...editcardine, animationdelay: e.target.value };
                        dispatch({ type: "card1edu", payload: cc });
                        dispatch({ type: "editcardine", payload: { ...editcardine, animationdelay: e.target.value } });
                    }} min="0" max="3" step="0.3" value={parseFloat(editcardine.animationdelay)}
                        id="customRange3"></input>
                </div>
            </div>

        </div>
    )
}

export default EditCard


