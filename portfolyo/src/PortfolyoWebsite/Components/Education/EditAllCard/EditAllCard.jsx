import React,{useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import { SketchPicker } from "react-color";
import FontPicker from "font-picker-react";
// import FontPick from '../FontPick/FontPick';
import { ShadowPicker } from "react-shadow-picker";
import FormControl from '@material-ui/core/FormControl';
import transitionFade from "../../../../assets/transitionFade.png";
import transitionFlip from "../../../../assets/transitionFlip.png";
import transitionZoom from "../../../../assets/transitionZoom.png";
import {
    InputLabel,
    Select,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const EditAllCard = () => {
    const classes = useStyles();
    // const [shadow, setShadow] = React.useState("0 0 0 0");
    const [delay, setdelay] = React.useState(0);
    const [duration, setduration] = React.useState(0.6);
    const [vis, setvis] = React.useState(false);
    const card1edu = useSelector(state => state.card1edu);
    const fontsineb = useSelector(state => state.fontsineb);
    const fontfamilyedu = useSelector(state => state.fontfamilyedu);
    const shadowcardedu = useSelector(state => state.shadowcardedu);
    const editcardine = useSelector(state => state.editcardine);

    const dispatch = useDispatch();
    const ApplyToAll = () => {
        try {
            let newcards = [...card1edu];
            for (let i = 0; i < newcards.length; i++) {
                newcards[i]["animationduration"] = duration;
                newcards[i]["animationdelay"] = delay;
            }
            // console.log(newcards);
            dispatch({ type: "card1edu", payload: newcards });
            setvis(true);
        }
        catch {

        }
    }
    const [
        projectBackgroundTransitionStyle,
        setprojectBackgroundTransitionStyle,
    ] = useState(editcardine.animation);
    const [projectTransitionSelected, setprojectTransitionSelected] = useState([
        "projectTrasitionSelected",
        "",
        "",
        "",
    ]);

    const projectBackgroundTransitioneHandler = (event) => {
        setprojectBackgroundTransitionStyle(event.target.value);
        let cc = card1edu.map(ele=>{
            return {
                ...ele,
                animation:event.target.value
            }
        });
        cc[editcardine.index] = { ...editcardine, animation: event.target.value };
        dispatch({ type: "card1edu", payload: cc });
        dispatch({ type: "editcardine", payload: { ...editcardine, animation: event.target.value } });
    };
    const projectBackgroundTransitionStyleHandler = (index, event) => {
        if (index === 0) {
            setprojectBackgroundTransitionStyle("none");
            let cc = card1edu.map(ele=>{
                return {
                    ...ele,
                    animation:"none"
                }
            });
            cc[editcardine.index] = { ...editcardine, animation: "none" };
            dispatch({ type: "card1edu", payload: cc });
            dispatch({ type: "editcardine", payload: { ...editcardine, animation: "none" } });
            return;
        }
        const temp = ["", "", "", ""];
        temp[index] = "projectTrasitionSelected";
        setprojectTransitionSelected(temp);
        setprojectBackgroundTransitionStyle(event.target.value);
        let cc = card1edu.map(ele=>{
            return {
                ...ele,
                animation:event.target.value
            }
        });
        cc[editcardine.index] = { ...editcardine, animation: event.target.value };
        dispatch({ type: "card1edu", payload: cc });
        dispatch({ type: "editcardine", payload: { ...editcardine, animation: event.target.value } });
    };
    return (
        <div>
            <h4 className="text-center text-uppercase my-5" style={{ wordSpacing: "0.5rem" }}>Changes Will Apply to All Cards</h4>
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
                <input type="range" value={parseFloat(duration)*1000} data-toggle="tooltip" data-placement="top" class="custom-range disabledrag" onChange={(e) => {
                    setduration(e.target.value);
                }} min="0" max="3" step="0.3"

                    id="customRange3"></input>
            </div>
            <div className="my-4">
                <h4 className="text-center">Animation Delay</h4>
                <h4 className="text-center my-3 text-muted" style={{ fontSize: "1.5rem" }}>0s--0.3s--0.6s--0.9s--1.2s--1.5s--1.8s--2.1s--2.4s--2.7s--3s</h4>
                <input type="range" value={parseFloat(delay)*1000} data-toggle="tooltip" data-placement="top" class="custom-range disabledrag" onChange={(e) => {
                    setdelay(e.target.value);
                }} min="0" max="3" step="0.3"

                    id="customRange3"></input>
            </div>
            <div className="mx-auto" onClick={ApplyToAll} style={{ width: "max-content" }}>
                <Button variant="contained" color="primary">Apply</Button>
            </div>
            <Alert className="my-3" style={{ display: (vis) ? "flex" : "none" }} onClose={() => { setvis(false) }}>successfully applied</Alert>
            <h3 className="text-center mt-4">Font Colors</h3>
            <div clasName="my-0 py-0" style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
                <div style={{ marginTop: "1.5rem", width: "max-content" }}>
                    <h4 className="text-center">Title Font</h4>
                    <span
                        id="SketchPicker"
                        className="disabledrag"
                        style={{ cursor: "pointer !important" }}
                    >
                        <SketchPicker
                            color={fontsineb.title}
                            onChange={(color) => dispatch({ type: "fontsineb", payload: { ...fontsineb, title: color.hex } })} style={{ cursor: "pointer" }} />
                    </span>
                </div>
                <div style={{ marginTop: "1.5rem", width: "max-content" }}>
                    <h4 className="text-center">Tagline Font</h4>
                    <span
                        id="SketchPicker"
                        className="disabledrag"
                        style={{ cursor: "pointer !important" }}
                    >
                        <SketchPicker
                            color={fontsineb.year}
                            onChange={(color) => dispatch({ type: "fontsineb", payload: { ...fontsineb, year: color.hex } })} style={{ cursor: "pointer" }} />
                    </span>
                </div>
                <div style={{ marginTop: "1.5rem", width: "max-content" }}>
                    <h4 className="text-center">Description Font</h4>
                    <span
                        id="SketchPicker"
                        className="disabledrag"
                        style={{ cursor: "pointer !important" }}
                    >
                        <SketchPicker
                            color={fontsineb.description}
                            onChange={(color) => dispatch({ type: "fontsineb", payload: { ...fontsineb, description: color.hex } })} style={{ cursor: "pointer" }} />
                    </span>
                </div>
            </div>
            <h3 className="text-center mt-4">Card Background Color</h3>
            <div clasName="my-0 py-0" style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
                <div style={{ marginTop: "1.5rem", width: "max-content" }}>
                    <span
                        id="SketchPicker"
                        className="disabledrag"
                        style={{ cursor: "pointer !important" }}
                    >
                        <SketchPicker
                            color={fontsineb.bgcolor}
                            onChange={(color) => dispatch({ type: "fontsineb", payload: { ...fontsineb, bgcolor: color.hex } })} style={{ cursor: "pointer" }} />
                    </span>
                </div>
            </div>
            <h4 className="text-center my-5">Font Picker</h4>
            <form
                className={classes.root}
                noValidate
                autoComplete="off"
                style={{ display: "flex", justifyContent: "space-around" }}
            >
                <div className="profileSectionEditorText mt-2">
                    <p>title font</p>
                    <div className="profileSectionEditorFontPickerDiv ">
                        <FontPicker
                            className="profileSectionEditorFontpicker disabledrag"
                            apiKey="AIzaSyA4zVMDlSV-eRzbGR5BFqvbHqz3zV-OLd0"
                            pickerId="1"
                            activeFontFamily={fontfamilyedu.title}
                            onChange={(nextFont) => {
                                dispatch({ type: "fontfamilyedu", payload: { ...fontfamilyedu, title: nextFont.family } })
                            }
                            }
                        />
                    </div>
                </div>
                <div className="profileSectionEditorText ">
                    <p>year font</p>
                    <div className="profileSectionEditorFontPickerDiv disabledrag">
                        <FontPicker
                            className="profileSectionEditorFontpicker disabledrag"
                            apiKey="AIzaSyA4zVMDlSV-eRzbGR5BFqvbHqz3zV-OLd0"
                            pickerId="2"
                            activeFontFamily={fontfamilyedu.year}
                            onChange={(nextFont) => {
                                dispatch({ type: "fontfamilyedu", payload: { ...fontfamilyedu, year: nextFont.family } })

                            }
                            }
                        />
                    </div>
                </div>
                <div className="profileSectionEditorText ">
                    <p>description font</p>
                    <div className="profileSectionEditorFontPickerDiv">
                        <FontPicker
                            className="profileSectionEditorFontpicker disabledrag"
                            apiKey="AIzaSyA4zVMDlSV-eRzbGR5BFqvbHqz3zV-OLd0"
                            pickerId="3"
                            activeFontFamily={fontfamilyedu.description}
                            onChange={(nextFont) => {
                                dispatch({ type: "fontfamilyedu", payload: { ...fontfamilyedu, description: nextFont.family } });
                            }
                            }
                        />
                    </div>
                </div>
            </form>
            <div>
                <h1 className="text-center mt-4">Shadow Of Card</h1>
                <div style={{ boxShadow: shadowcardedu }} className="disabledrag">
                    <ShadowPicker
                        value={shadowcardedu}
                        onChange={(value) => {
                            dispatch({type:'shadowcardedu',payload:value});
                        }}
                    />
                </div>

            </div>
        </div>
    )
}

export default EditAllCard;
