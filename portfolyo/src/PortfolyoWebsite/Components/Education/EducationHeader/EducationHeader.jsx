import React,{useState} from 'react';
import './EducationHeader.scss';
// import CloseIcon from "@material-ui/icons/Close";
import {  TextField } from "@material-ui/core";
import FontPicker from "font-picker-react";
import { SketchPicker } from "react-color";
import { useSelector, useDispatch } from 'react-redux';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import transitionFade from "../../../../assets/transitionFade.png";
import transitionFlip from "../../../../assets/transitionFlip.png";
import transitionZoom from "../../../../assets/transitionZoom.png";
import Typography from "@material-ui/core/Typography";
// import Tooltip from '@material-ui/core/Tooltip';
import {
    InputLabel,
    makeStyles,
    Select,
} from "@material-ui/core";

const EducationHeader = () => {
    const educationsectiontitle = useSelector(state => state.educationsectiontitle);
    const educationhfontname = useSelector(state => state.educationhfontname);
    const descriptione = useSelector(state => state.descriptione);
    const educationpfontname = useSelector(state => state.educationpfontname);
    const fontcolore = useSelector(state => state.fontcolore);
    const fontcolorep = useSelector(state => state.fontcolorep);
    const animationtypeeh = useSelector(state => state.animationtypeeh);
    // const [value, setValue] = React.useState(animationtypeeh);


    const handleChange = (event) => {
        // setValue(event.target.value);
        dispatch({ type: "animationtypeeh", payload: event.target.value });
    };
    const animationtimeeh= useSelector(state => state.animationtimeeh);
    const animationdelayeh= useSelector(state => state.animationdelayeh);
    const [
        projectBackgroundTransitionStyle,
        setprojectBackgroundTransitionStyle,
    ] = useState(animationtypeeh);
    const [projectTransitionSelected, setprojectTransitionSelected] = useState([
        "projectTrasitionSelected",
        "",
        "",
        "",
    ]);

    const projectBackgroundTransitioneHandler = (event) => {
        setprojectBackgroundTransitionStyle(event.target.value);
        dispatch({ type: "animationtypeeh", payload: event.target.value });
    };
    const projectBackgroundTransitionStyleHandler = (index, event) => {
        if (index === 0) {
            setprojectBackgroundTransitionStyle("none");
            dispatch({ type: "animationtypeeh", payload: "none" });
            return;
        }
        const temp = ["", "", "", ""];
        temp[index] = "projectTrasitionSelected";
        setprojectTransitionSelected(temp);
        setprojectBackgroundTransitionStyle(event.target.value);
        dispatch({ type: "animationtypeeh", payload: event.target.value });
    };

    const dispatch = useDispatch();
    return (
        <div className="EducationHeader mt-3">
            <h4 className="text-center my-4">Text and Font</h4>
            <div className="mx-auto my-5" style={{display:"block",width:"max-content",zIndex:"99999"}}>
                <Button variant="contained" color="primary" onClick={()=>{
                    dispatch({ type: "educationsectiontitle", payload: document.querySelector("#educationtitle").value });
                    dispatch({ type: "descriptione", payload: document.querySelector("#educationdescription").value })
                }}>
                    Apply text
                </Button>
            </div>
            <div className="row my-5">
                <div className="col-6 offset-1">
                    <TextField
                        className="disabledrag"
                        id="educationtitle"
                        label="Title"
                        variant="outlined"
                        fullWidth
                        required
                        defaultValue={educationsectiontitle}
                    />
                </div>
                <div className="col-4 offset-1 mt-2">
                    <FontPicker
                        className="profileSectionEditorFontpicker disabledrag"
                        apiKey="AIzaSyA4zVMDlSV-eRzbGR5BFqvbHqz3zV-OLd0"
                        activeFontFamily={educationhfontname}
                        onChange={(nextFont) => {
                            dispatch({ type: "educationhfontname", payload: nextFont.family })
                        }
                        }
                    />
                </div>
            </div>
            <div className="row my-5">
                <div className="col-md-6 offset-1">
                    <TextField
                        className="disabledrag"
                        id="educationdescription"
                        label="describe"
                        variant="outlined"
                        fullWidth
                        required
                        defaultValue={descriptione}
                        multiline
                    />
                </div>
                <div className="col-4 offset-1 mt-2 profileSectionEditorFontPickerDiv">
                    <div>
                        <FontPicker
                            className="disabledrag expanded"
                            apiKey="AIzaSyA4zVMDlSV-eRzbGR5BFqvbHqz3zV-OLd0"
                            activeFontFamily={educationpfontname}
                            onChange={(nextFont) => {
                                dispatch({ type: "educationpfontname", payload: nextFont.family })
                            }
                            }
                        />
                    </div>
                </div>
            </div>
            <h3 className="text-center">Font Color</h3>
            <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
                <div style={{ marginTop: "3rem", width: "max-content" }}>
                    <h4 className="text-center">Title Font</h4>
                    <span
                        id="SketchPicker"
                        className="disabledrag"
                        style={{ cursor: "pointer !important" }}
                    >
                        <SketchPicker
                            color={fontcolore}
                            onChange={(color) => dispatch({ type: "fontcolore", payload: color.hex })} style={{ cursor: "pointer" }} />
                    </span>
                </div>
                <div style={{ marginTop: "3rem", width: "max-content" }}>
                    <h4 className="text-center">Describe Font</h4>
                    <span
                        id="SketchPicker"
                        className="disabledrag"
                        style={{ cursor: "pointer !important" }}
                    >
                        <SketchPicker
                            color={fontcolorep}
                            onChange={(color) => dispatch({ type: "fontcolorep", payload: color.hex })} style={{ cursor: "pointer" }} />
                    </span>
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
                <h4 className="text-center my-3 text-muted" style={{fontSize:"1.5rem"}}>0s--0.3s--0.6s--0.9s--1.2s--1.5s--1.8s--2.1s--2.4s--2.7s--3s</h4>
                <input type="range" data-toggle="tooltip" data-placement="top"  class="custom-range disabledrag" onChange={(e) => {
                    dispatch({type:"animationtimeeh",payload:e.target.value})
                }} min="0" max="3" step="0.3" value={animationtimeeh}

                    id="customRange3"></input>
            </div>
            <div className="my-4">
                <h4 className="text-center">Animation Delay</h4>
                <h4 className="text-center my-3 text-muted" style={{fontSize:"1.5rem"}}>0s--0.3s--0.6s--0.9s--1.2s--1.5s--1.8s--2.1s--2.4s--2.7s--3s</h4>
                <input type="range" data-toggle="tooltip" data-placement="top"  class="custom-range disabledrag" onChange={(e) => {
                    dispatch({type:"animationdelayeh",payload:e.target.value})
                }} min="0" max="3" step="0.3" value={animationdelayeh}

                    id="customRange3"></input>
            </div>
        </div>
    )
}

export default EducationHeader
