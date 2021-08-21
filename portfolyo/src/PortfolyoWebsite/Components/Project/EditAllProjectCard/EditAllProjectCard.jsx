import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import { SketchPicker } from "react-color";
import FontPicker from "font-picker-react";
import { ShadowPicker } from "react-shadow-picker";
import Slider from 'rc-slider';
import 'rc-tooltip/assets/bootstrap.css';
import 'rc-slider/assets/index.css';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


// const useStyles = makeStyles((theme) => ({
//     root: {
//         width: '100%',
//         '& > * + *': {
//             marginTop: theme.spacing(2),
//         },
//     },
// }));

const EditAllProjectCard = () => {
    // const classes = useStyles();
    const projectcard = useSelector(state => state.projectcard);
    const projectcustom = useSelector(state => state.projectcustom);
    const editallproject = useSelector(state => state.editallproject);
    const [vis,setvis] = React.useState(false);
    const dispatch = useDispatch();
    const handleChange = (e) => {
        dispatch({"type":"PS_editallproject",payload:{...editallproject,animation:e.target.value}});
    }
    const ApplyToAll = () => {
        let arr = [...projectcard];
        for(var i=0;i<arr.length;i++){
            arr[i].animation=editallproject["animation"];
            arr[i].delay=editallproject["delay"];
            arr[i].duration=editallproject["duration"];
        }
        dispatch({"type":"PS_projectcard",payload:[...arr]});
        setvis(true)
    }
    return (
        <div>
            <h3 className="text-center my-5">Text Styles</h3>
            <div className="mb-5" style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
                <div className="" style={{ width: "max-content" }}>
                    <p className="text-center">Title FontStyle</p>
                    <div className="disabledrag">
                        <FontPicker
                            pickerId="1"
                            className="disabledrag"
                            apiKey="AIzaSyA4zVMDlSV-eRzbGR5BFqvbHqz3zV-OLd0"
                            activeFontFamily={projectcustom.fontFamilyN}
                            onChange={(nextFont) => {
                                dispatch({ type: "PS_projectcustom", payload: { ...projectcustom, fontFamilyN: nextFont.family } })
                            }
                            }
                        />
                    </div>
                </div>
                <div className="" style={{ width: "max-content" }}>
                    <p className="text-center">About FontStyle</p>
                    <div className="disabledrag">
                        <FontPicker
                            pickerId="2"
                            className="disabledrag"
                            apiKey="AIzaSyA4zVMDlSV-eRzbGR5BFqvbHqz3zV-OLd0"
                            activeFontFamily={projectcustom.fontFamilyA}
                            onChange={(nextFont) => {
                                dispatch({ type: "PS_projectcustom", payload: { ...projectcustom, fontFamilyA: nextFont.family } })
                            }
                            }
                        />
                    </div>
                </div>
                <div className="" style={{ width: "max-content" }}>
                    <p className="text-center">TechHead Font</p>
                    <div className="disabledrag">
                        <FontPicker
                            pickerId="3"
                            className="disabledrag"
                            apiKey="AIzaSyA4zVMDlSV-eRzbGR5BFqvbHqz3zV-OLd0"
                            activeFontFamily={projectcustom.fontFamilyN}
                            onChange={(nextFont) => {
                                dispatch({ type: "PS_projectcustom", payload: { ...projectcustom, fontFamilyT: nextFont.family } })
                            }
                            }
                        />
                    </div>
                </div>
            </div>
            <h3 className="text-center my-5">Colors and Backgrounds</h3>
            <div className="" style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
                <div style={{ marginTop: "1.5rem", width: "max-content" }}>
                    <h4 className="text-center">Title Color</h4>
                    <span
                        id="SketchPicker"
                        className="disabledrag"
                        style={{ cursor: "pointer !important" }}
                    >
                        <SketchPicker
                            color={projectcustom.colorN}
                            onChange={(color) => dispatch({ type: "PS_projectcustom", payload: { ...projectcustom, colorN: color.hex } })} style={{ cursor: "pointer" }} />
                    </span>
                </div>
                <div style={{ marginTop: "1.5rem", width: "max-content" }}>
                    <h4 className="text-center">About Color</h4>
                    <span
                        id="SketchPicker"
                        className="disabledrag"
                        style={{ cursor: "pointer !important" }}
                    >
                        <SketchPicker
                            color={projectcustom.colorA}
                            onChange={(color) => dispatch({ type: "PS_projectcustom", payload: { ...projectcustom, colorA: color.hex } })} style={{ cursor: "pointer" }} />
                    </span>
                </div>
                <div style={{ marginTop: "1.5rem", width: "max-content" }}>
                    <h4 className="text-center">Button Color</h4>
                    <span
                        id="SketchPicker"
                        className="disabledrag"
                        style={{ cursor: "pointer !important" }}
                    >
                        <SketchPicker
                            color={projectcustom.colorBt}
                            onChange={(color) => dispatch({ type: "PS_projectcustom", payload: { ...projectcustom, colorBt: color.hex } })} style={{ cursor: "pointer" }} />
                    </span>
                </div>
                <div style={{ marginTop: "1.5rem", width: "max-content" }}>
                    <h4 className="text-center">TechHead Color</h4>
                    <span
                        id="SketchPicker"
                        className="disabledrag"
                        style={{ cursor: "pointer !important" }}
                    >
                        <SketchPicker
                            color={projectcustom.colorTh}
                            onChange={(color) => dispatch({ type: "PS_projectcustom", payload: { ...projectcustom, colorTh: color.hex } })} style={{ cursor: "pointer" }} />
                    </span>
                </div>
                <div style={{ marginTop: "1.5rem", width: "max-content" }}>
                    <h4 className="text-center">Tech's Used Color</h4>
                    <span
                        id="SketchPicker"
                        className="disabledrag"
                        style={{ cursor: "pointer !important" }}
                    >
                        <SketchPicker
                            color={projectcustom.colorTc}
                            onChange={(color) => dispatch({ type: "PS_projectcustom", payload: { ...projectcustom, colorTc: color.hex } })} style={{ cursor: "pointer" }} />
                    </span>
                </div>
                <div style={{ marginTop: "1.5rem", width: "max-content" }}>
                    <h4 className="text-center">Project BgColor</h4>
                    <span
                        id="SketchPicker"
                        className="disabledrag"
                        style={{ cursor: "pointer !important" }}
                    >
                        <SketchPicker
                            color={projectcustom.bgcolor}
                            onChange={(color) => dispatch({ type: "PS_projectcustom", payload: { ...projectcustom, bgcolor: color.hex } })} style={{ cursor: "pointer" }} />
                    </span>
                </div>
                <div style={{ marginTop: "1.5rem", width: "max-content" }}>
                    <h4 className="text-center">Tags BgColor</h4>
                    <span
                        id="SketchPicker"
                        className="disabledrag"
                        style={{ cursor: "pointer !important" }}
                    >
                        <SketchPicker
                            color={projectcustom.bgtag}
                            onChange={(color) => dispatch({ type: "PS_projectcustom", payload: { ...projectcustom, bgtag: color.hex } })} style={{ cursor: "pointer" }} />
                    </span>
                </div>
            </div>
            {/* <div>
                <h3 className="text-center my-4">Background Color</h3>
                <div className="mx-auto" style={{ width: "max-content" }}>
                    <span
                        id="SketchPicker"
                        className="disabledrag"
                        style={{ cursor: "pointer !important" }}
                    >
                        <SketchPicker
                            color={projectbody.backgroundColor}
                            onChange={(color) => {
                                console.log(color); dispatch({ type: "PS_projectbody", payload: { ...projectbody, backgroundColor: color.hex } })
                            }
                            }
                            style={{ cursor: "pointer" }} />
                    </span>
                </div>
            </div> */}
            <div>
                <h3 className="text-center my-5">Background Shadow</h3>
                <div style={{ boxShadow: projectcustom.shadow }} >
                    <ShadowPicker
                        className="disabledrag"
                        value={projectcustom.shadow}
                        onChange={(value) => {
                            // console.log(value);
                            dispatch({ type: 'PS_projectcustom', payload: { ...projectcustom, shadow: value } });
                        }}
                    ></ShadowPicker>
                </div>
            </div>
            <div className="disabledrag my-5" style={{ width: "100%" }}>
                <h3 className="text-center py-4">Border Radius</h3>
                <Slider min={0} max={100} defaultValue={projectcustom.borderRadius} onChange={(e) => {
                    dispatch({ type: "PS_projectcustom", payload: { ...projectcustom, borderRadius: e } })
                }} />
            </div>
            <h4 className="text-center text-uppercase my-5" style={{ wordSpacing: "0.5rem" }}>Changes Will Apply to All Cards</h4>
            <div className="my-5">
                    <h4 className="text-center">Animation Type</h4>
                    <FormControl component="fieldset">
                        <FormLabel component="legend"></FormLabel>
                        <RadioGroup style={{ display: "flex", flexWrap: "wrap", flexDirection: "row", justifyContent: "space-between" }} aria-label="select-animation-type" name="gender1" value={editallproject.animation} onChange={handleChange}>
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
                            <FormControlLabel value="" control={<Radio />} label="none" />
                        </RadioGroup>
                    </FormControl>
                </div>
            <div className="my-4">
                <h4 className="text-center">Animation Duration</h4>
                <h4 className="text-center my-3 text-muted" style={{ fontSize: "1.5rem" }}>0s--0.3s--0.6s--0.9s--1.2s--1.5s--1.8s--2.1s--2.4s--2.7s--3s</h4>
                <input type="range" value={editallproject.duration} data-toggle="tooltip" data-placement="top" class="custom-range disabledrag" onChange={(e) => {
                    dispatch({type:"PS_editallproject",payload:{...editallproject,duration:parseFloat(e.target.value)}})
                }} min="0" max="3" step="0.3"

                    id="customRange3"></input>
            </div>
            <div className="my-4">
                <h4 className="text-center">Animation Delay</h4>
                <h4 className="text-center my-3 text-muted" style={{ fontSize: "1.5rem" }}>0s--0.3s--0.6s--0.9s--1.2s--1.5s--1.8s--2.1s--2.4s--2.7s--3s</h4>
                <input type="range" value={editallproject.delay} data-toggle="tooltip" data-placement="top" class="custom-range disabledrag" onChange={(e) => {
                    dispatch({type:"PS_editallproject",payload:{...editallproject,delay:parseFloat(e.target.value)}})
                }} min="0" max="3" step="0.3"

                    id="customRange3"></input>
            </div>
            <div className="mx-auto" onClick={ApplyToAll} style={{ width: "max-content" }}>
                <Button variant="contained" color="primary">Apply</Button>
            </div>
            <Alert className="my-3" style={{ display: (vis) ? "flex" : "none" }} onClose={() => { setvis(false) }}>successfully applied</Alert>
        </div>
    )
}

export default EditAllProjectCard;
