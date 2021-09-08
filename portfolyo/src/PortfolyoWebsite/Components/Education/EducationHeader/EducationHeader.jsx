import React from 'react';
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
// import Tooltip from '@material-ui/core/Tooltip';

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


    const dispatch = useDispatch();
    return (
        <div className="EducationHeader mt-3">
            <h4 className="text-center my-4">Text and Font</h4>
            <div className="mx-auto my-5" style={{display:"block",width:"max-content",position:"sticky",top:"0",zIndex:"99999"}}>
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
                <FormControl component="fieldset">
                    <FormLabel component="legend"></FormLabel>
                    <RadioGroup style={{ display: "flex", flexWrap: "wrap", flexDirection: "row", justifyContent: "space-between" }} aria-label="select-animation-type" name="gender1" value={animationtypeeh} onChange={handleChange}>
                        <FormControlLabel value="fade-top" control={<Radio />} label="fade-top" />
                        <FormControlLabel value="fade-bottom" control={<Radio />} label="fade-bottom" />
                        <FormControlLabel value="fade-right" control={<Radio />} label="fade-right" />
                        <FormControlLabel value="fade-left" control={<Radio />} label="fade-left" />
                        <FormControlLabel value="fade-up" control={<Radio />} label="fade-up" />
                        <FormControlLabel value="fade-dowm" control={<Radio />} label="fade-down" />
                        <FormControlLabel value="fade-up-right" control={<Radio />} label="fade-up-right" />
                        <FormControlLabel value="fade-up-left" control={<Radio />} label="fade-up-left" />
                        <FormControlLabel value="fade-dowm-right" control={<Radio />} label="fade-dowm-right" />
                        <FormControlLabel value="fade-dowm-left" control={<Radio />} label="fade-dowm-left" />
                        <FormControlLabel value="flip-left" control={<Radio />} label="flip-left" />
                        <FormControlLabel value="flip-right" control={<Radio />} label="flip-right" />
                        <FormControlLabel value="flip-up" control={<Radio />} label="flip-up" />
                        <FormControlLabel value="flip-down" control={<Radio />} label="flip-down" />
                        <FormControlLabel value="zoom-in" control={<Radio />} label="zoom-in" />
                        <FormControlLabel value="zoom-in-up" control={<Radio />} label="zoom-in-up" />
                        <FormControlLabel value="zoom-in-down" control={<Radio />} label="zoom-in-down" />
                        <FormControlLabel value="zoom-in-right" control={<Radio />} label="zoom-in-right" />
                        <FormControlLabel value="zoom-in-left" control={<Radio />} label="zoom-in-left" />
                        <FormControlLabel value="zoom-out" control={<Radio />} label="zoom-out" />
                        <FormControlLabel value="zoom-out-up" control={<Radio />} label="zoom-out-up" />
                        <FormControlLabel value="zoom-out-down" control={<Radio />} label="zoom-out-down" />
                        <FormControlLabel value="zoom-out-right" control={<Radio />} label="zoom-out-right" />
                        <FormControlLabel value="zoom-out-left" control={<Radio />} label="zoom-out-left" />
                    </RadioGroup>
                </FormControl>
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
