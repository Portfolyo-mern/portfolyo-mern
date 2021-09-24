import React, {useState} from "react";
import "./EditHeader.scss";
import { TextField } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FontPicker from "font-picker-react";
import { SketchPicker } from "react-color";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {
    InputLabel,
    makeStyles,
    Select,
} from "@material-ui/core";
import { Input } from "reactstrap";
import transitionFade from "../../../../assets/transitionFade.png";
import transitionFlip from "../../../../assets/transitionFlip.png";
import transitionZoom from "../../../../assets/transitionZoom.png";
const useStyles = makeStyles((theme) => ({
    CardEditOption: {
        margin: 0,
        position: "absolute",
        bottom: "5px",
        right: "5px",
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

const PrettoSlider = withStyles({
    root: {
        color: "#52af77",
        height: 8,
        width: "20rem",
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: "#fff",
        border: "2px solid currentColor",
        marginTop: -8,
        marginLeft: -12,
        "&:focus, &:hover, &$active": {
            boxShadow: "inherit",
        },
    },
    active: {},
    valueLabel: {
        left: "calc(-50% + 4px)",
    },
    track: {
        height: 8,
        borderRadius: 4,
    },
    rail: {
        height: 8,
        borderRadius: 4,
    },
})(Slider);

const EditHeader = () => {
    const classes = useStyles();
    const projectheader = useSelector((state) => state.projectheader);
    const dispatch = useDispatch();
    const [
        projectBackgroundTransitionStyle,
        setprojectBackgroundTransitionStyle,
    ] = useState(projectheader.animation);
    const [projectTransitionSelected, setprojectTransitionSelected] = useState([
        "projectTrasitionSelected",
        "",
        "",
        "",
    ]);

    const projectBackgroundTransitioneHandler = (event) => {
        setprojectBackgroundTransitionStyle(event.target.value);
    };
    const projectBackgroundTransitionStyleHandler = (index, event) => {
        if (index === 0) {
            setprojectBackgroundTransitionStyle("none");
            dispatch({
                type: "PS_projectname",
                payload: {
                    ...projectheader,
                    animation: "none",
                },
            });
            return;
        }
        const temp = ["", "", "", ""];
        temp[index] = "projectTrasitionSelected";
        setprojectTransitionSelected(temp);
        setprojectBackgroundTransitionStyle(event.target.value);
        dispatch({
            type: "PS_projectname",
            payload: {
                ...projectheader,
                animation: event.target.value,
            },
        });
    };
    return (
        <div className="EditHeaderPro my-5">
            <h3 className="text-center mt-5">Text and Font's</h3>
            <div className="mx-auto my-5" style={{display:"block",width:"max-content",zIndex:"99999"}}>
                <Button variant="contained" color="primary" 
                    onClick={()=>{
                        // console.log(document.querySelector("#aboutSectionTitleTextChange").value);
                        dispatch({type:"PS_projectname",payload:{
                            ...projectheader,
                                name:document.querySelector("#PS_projectnamename").value,
                                description:document.querySelector("#PS_projectnamedescription").value,
                                moreprojects:document.querySelector("#PS_projectmore").value
                            }
                        });
                        // dispatch({type:"aboutSectionIntroTextChange",payload:document.querySelector("#aboutSectionIntroTextChange").value});
                        // dispatch({type:"aboutSectionPassageTextChange",payload:document.querySelector("#aboutSectionPassageTextChange").value});
                        // dispatch({type:"aboutSectionBasicInfoTitleTextChange",payload:document.querySelector("#aboutSectionBasicInfoTitleTextChange").value});
                        // dispatch({type:"aboutSectionBasicInfoValuesTextAgeChange",payload:document.querySelector("#aboutSectionBasicInfoValuesTextAgeChange").value});
                        // dispatch({type:"aboutSectionBasicInfoValuesTextEmailChange",payload:document.querySelector("#aboutSectionBasicInfoValuesTextEmailChange").value});
                        // dispatch({type:"aboutSectionBasicInfoValuesTextPhoneChange",payload:document.querySelector("#aboutSectionBasicInfoValuesTextPhoneChange").value});
                        // dispatch({type:"aboutSectionBasicInfoValuesTextAddressChange",payload:document.querySelector("#aboutSectionBasicInfoValuesTextAddressChange").value});
                        // dispatch({type:"aboutSectionBasicInfoValuesTextLanguagesChange",payload:document.querySelector("#aboutSectionBasicInfoValuesTextLanguagesChange").value});
                        // dispatch({type:"aboutSectionSocialMediaTitleTextChange",payload:document.querySelector("#aboutSectionSocialMediaTitleTextChange").value});
                        // dispatch({type:"aboutSectionSocialMediaInstagramChange",payload:document.querySelector("#aboutSectionSocialMediaInstagramChange").value});
                        // dispatch({type:"aboutSectionSocialMediaGmailChange",payload:document.querySelector("#aboutSectionSocialMediaGmailChange").value});
                        // dispatch({type:"aboutSectionSocialMediaLinkedInChange",payload:document.querySelector("#aboutSectionSocialMediaLinkedInChange").value});
                        // dispatch({type:"aboutSectionSocialMediaGitHubChange",payload:document.querySelector("#aboutSectionSocialMediaGitHubChange").value});
                        // dispatch({type:"aboutSectionSocialMediaInstagramChange",payload:document.querySelector("#aboutSectionSocialMediaInstagramChange").value});
                    
                    }}
                >Apply text</Button>
            </div>
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                }}
            >
                <div style={{ width: "max-content" }}>
                    <TextField
                        className="disabledrag"
                        id="PS_projectnamename"
                        label="ProjectTitle"
                        variant="outlined"
                        fullWidth
                        required
                        defaultValue={projectheader.name}
                        // onChange={(e) => {
                        //     // console.log(e.target.value, projectheader)
                        //     dispatch({
                        //         type: "PS_projectname",
                        //         payload: {
                        //             ...projectheader,
                        //             name: e.target.value,
                        //         },
                        //     });
                        // }}
                    />
                </div>
                <div className=" disabledrag">
                    <FontPicker
                        pickerId="1"
                        apiKey="AIzaSyA4zVMDlSV-eRzbGR5BFqvbHqz3zV-OLd0"
                        activeFontFamily={projectheader.fontStyle}
                        onChange={(nextFont) => {
                            // console.log(nextFont, projectheader)
                            dispatch({
                                type: "PS_projectname",
                                payload: {
                                    ...projectheader,
                                    fontStyle: nextFont.family,
                                },
                            });
                        }}
                    />
                </div>
            </div>
            <div
                className="my-5"
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                }}
            >
                <div style={{ width: "max-content" }}>
                    <TextField
                        className="disabledrag"
                        id="PS_projectnamedescription"
                        label="ProjectTitle"
                        variant="outlined"
                        fullWidth
                        required
                        defaultValue={projectheader.description}
                        // onChange={(e) => {
                        //     // console.log(e.target.value, projectheader)
                        //     dispatch({
                        //         type: "PS_projectname",
                        //         payload: {
                        //             ...projectheader,
                        //             description: e.target.value,
                        //         },
                        //     });
                        // }}
                    />
                </div>
                <div className=" disabledrag">
                    <FontPicker
                        pickerId="2"
                        apiKey="AIzaSyA4zVMDlSV-eRzbGR5BFqvbHqz3zV-OLd0"
                        activeFontFamily={projectheader.fontStyle}
                        onChange={(nextFont) => {
                            // console.log(nextFont, projectheader)
                            dispatch({
                                type: "PS_projectname",
                                payload: {
                                    ...projectheader,
                                    fontStylep: nextFont.family,
                                },
                            });
                        }}
                    />
                </div>
            </div>
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                }}
            >
                <div style={{ width: "max-content" }}>
                    <TextField
                        className="disabledrag"
                        id="PS_projectmore"
                        label="More Projects Link"
                        variant="outlined"
                        fullWidth
                        required
                        defaultValue={projectheader.moreprojects}
                        // onChange={(e) => {
                        //     // console.log(e.target.value, projectheader)
                        //     dispatch({
                        //         type: "PS_projectname",
                        //         payload: {
                        //             ...projectheader,
                        //             name: e.target.value,
                        //         },
                        //     });
                        // }}
                    />
                </div>
                
            </div>
            <h3 className="text-center my-5">Font Color's</h3>
            <div
                className="my-5"
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                }}
            >
                <div className="mt-4" style={{ width: "max-content" }}>
                    <span
                        id="SketchPicker"
                        className="disabledrag"
                        style={{ cursor: "pointer !important" }}
                    >
                        <p className="text-center text-uppercase">
                            title color
                        </p>
                        <SketchPicker
                            color={projectheader.color}
                            onChange={(color) => {
                                // console.log(color);
                                dispatch({
                                    type: "PS_projectname",
                                    payload: {
                                        ...projectheader,
                                        color: color.hex,
                                    },
                                });
                            }}
                            style={{ cursor: "pointer" }}
                        />
                    </span>
                </div>
                <div className="mt-4" style={{ width: "max-content" }}>
                    <span
                        id="SketchPicker"
                        className="disabledrag"
                        style={{ cursor: "pointer !important" }}
                    >
                        <p className="text-center text-uppercase">
                            description color
                        </p>
                        <SketchPicker
                            color={projectheader.colorp}
                            onChange={(color) => {
                                // console.log(color);
                                dispatch({
                                    type: "PS_projectname",
                                    payload: {
                                        ...projectheader,
                                        colorp: color.hex,
                                    },
                                });
                            }}
                            style={{ cursor: "pointer" }}
                        />
                    </span>
                </div>
                <div className="mt-4" style={{ width: "max-content" }}>
                    <span
                        id="SketchPicker"
                        className="disabledrag"
                        style={{ cursor: "pointer !important" }}
                    >
                        <p className="text-center text-uppercase">
                            buttontext color
                        </p>
                        <SketchPicker
                            color={projectheader.colorbt}
                            onChange={(color) => {
                                // console.log(color);
                                dispatch({
                                    type: "PS_projectname",
                                    payload: {
                                        ...projectheader,
                                        colorbt: color.hex,
                                    },
                                });
                            }}
                            style={{ cursor: "pointer" }}
                        />
                    </span>
                </div>
                <div className="mt-4" style={{ width: "max-content" }}>
                    <span
                        id="SketchPicker"
                        className="disabledrag"
                        style={{ cursor: "pointer !important" }}
                    >
                        <p className="text-center text-uppercase">
                            button bgcolor
                        </p>
                        <SketchPicker
                            color={projectheader.colorbbg}
                            onChange={(color) => {
                                // console.log(color);
                                dispatch({
                                    type: "PS_projectname",
                                    payload: {
                                        ...projectheader,
                                        colorbbg: color.hex,
                                    },
                                });
                            }}
                            style={{ cursor: "pointer" }}
                        />
                    </span>
                </div>
                <div className="mt-4" style={{ width: "max-content" }}>
                    <span
                        id="SketchPicker"
                        className="disabledrag"
                        style={{ cursor: "pointer !important" }}
                    >
                        <p className="text-center text-uppercase">
                            ArrowIcon color
                        </p>
                        <SketchPicker
                            color={projectheader.colora}
                            onChange={(color) => {
                                // console.log(color);
                                dispatch({
                                    type: "PS_projectname",
                                    payload: {
                                        ...projectheader,
                                        colora: color.hex,
                                    },
                                });
                            }}
                            style={{ cursor: "pointer" }}
                        />
                    </span>
                </div>
                <div className="mt-4" style={{ width: "max-content" }}>
                    <span
                        id="SketchPicker"
                        className="disabledrag"
                        style={{ cursor: "pointer !important" }}
                    >
                        <p className="text-center text-uppercase">
                            ArrowIcon bgcolor
                        </p>
                        <SketchPicker
                            color={projectheader.colorabg}
                            onChange={(color) => {
                                // console.log(color);
                                dispatch({
                                    type: "PS_projectname",
                                    payload: {
                                        ...projectheader,
                                        colorabg: color.hex,
                                    },
                                });
                            }}
                            style={{ cursor: "pointer" }}
                        />
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
                            className={`disabledrag ${classes.formControl}`}
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
                            className={`disabledrag ${classes.formControl}`}
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
                            className={`disabledrag ${classes.formControl}`}
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
                {/* <FormControl component="fieldset">
                    <FormLabel component="legend"></FormLabel>
                    <RadioGroup
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                        aria-label="select-animation-type"
                        name="gender1"
                        value={projectheader.animation}
                        onChange={(e) => {
                            dispatch({
                                type: "PS_projectname",
                                payload: {
                                    ...projectheader,
                                    animation: e.target.value,
                                },
                            });
                        }}
                    >
                        <FormControlLabel
                            value="fade-top"
                            control={<Radio />}
                            label="fade-top"
                        />
                        <FormControlLabel
                            value="fade-bottom"
                            control={<Radio />}
                            label="fade-bottom"
                        />
                        <FormControlLabel
                            value="fade-right"
                            control={<Radio />}
                            label="fade-right"
                        />
                        <FormControlLabel
                            value="fade-left"
                            control={<Radio />}
                            label="fade-left"
                        />
                        <FormControlLabel
                            value="fade-up"
                            control={<Radio />}
                            label="fade-up"
                        />
                        <FormControlLabel
                            value="fade-dowm"
                            control={<Radio />}
                            label="fade-down"
                        />
                        <FormControlLabel
                            value="fade-up-right"
                            control={<Radio />}
                            label="fade-up-right"
                        />
                        <FormControlLabel
                            value="fade-up-left"
                            control={<Radio />}
                            label="fade-up-left"
                        />
                        <FormControlLabel
                            value="fade-dowm-right"
                            control={<Radio />}
                            label="fade-dowm-right"
                        />
                        <FormControlLabel
                            value="fade-dowm-left"
                            control={<Radio />}
                            label="fade-dowm-left"
                        />
                        <FormControlLabel
                            value="flip-left"
                            control={<Radio />}
                            label="flip-left"
                        />
                        <FormControlLabel
                            value="flip-right"
                            control={<Radio />}
                            label="flip-right"
                        />
                        <FormControlLabel
                            value="flip-up"
                            control={<Radio />}
                            label="flip-up"
                        />
                        <FormControlLabel
                            value="flip-down"
                            control={<Radio />}
                            label="flip-down"
                        />
                        <FormControlLabel
                            value="zoom-in"
                            control={<Radio />}
                            label="zoom-in"
                        />
                        <FormControlLabel
                            value="zoom-in-up"
                            control={<Radio />}
                            label="zoom-in-up"
                        />
                        <FormControlLabel
                            value="zoom-in-down"
                            control={<Radio />}
                            label="zoom-in-down"
                        />
                        <FormControlLabel
                            value="zoom-in-right"
                            control={<Radio />}
                            label="zoom-in-right"
                        />
                        <FormControlLabel
                            value="zoom-in-left"
                            control={<Radio />}
                            label="zoom-in-left"
                        />
                        <FormControlLabel
                            value="zoom-out"
                            control={<Radio />}
                            label="zoom-out"
                        />
                        <FormControlLabel
                            value="zoom-out-up"
                            control={<Radio />}
                            label="zoom-out-up"
                        />
                        <FormControlLabel
                            value="zoom-out-down"
                            control={<Radio />}
                            label="zoom-out-down"
                        />
                        <FormControlLabel
                            value="zoom-out-right"
                            control={<Radio />}
                            label="zoom-out-right"
                        />
                        <FormControlLabel
                            value="zoom-out-left"
                            control={<Radio />}
                            label="zoom-out-left"
                        />
                        <FormControlLabel
                            value=""
                            control={<Radio />}
                            label="none"
                        />
                    </RadioGroup>
                </FormControl> */}
            </div>
            {/* <div className="my-4">
                <h4 className="text-center">Animation Duration</h4>
                <h4
                    className="text-center my-3 text-muted"
                    style={{ fontSize: "1.5rem" }}
                >
                    0s--0.3s--0.6s--0.9s--1.2s--1.5s--1.8s--2.1s--2.4s--2.7s--3s
                </h4>
                <input
                    type="range"
                    data-toggle="tooltip"
                    data-placement="top"
                    class="custom-range disabledrag"
                    onChange={(e) => {
                        dispatch({
                            type: "PS_projectname",
                            payload: {
                                ...projectheader,
                                duration: e.target.value,
                            },
                        });
                    }}
                    min="0"
                    max="3"
                    step="0.3"
                    value={projectheader.duration}
                    id="customRange3"
                ></input>
            </div> */}
            <div className="skillBarEditor">
                <div className="skillLevelBar">
                    <div className={classes.margin} />
                    <Typography gutterBottom>
                        Animation Duration :{projectheader.duration}s
                    </Typography>
                    <div className="skillLevelBarEditor">
                        <p>0s</p>
                        <PrettoSlider
                            valueLabelDisplay="auto"
                            aria-label="Background Transition Time"
                            min={0}
                            max={3}
                            step={0.3}
                            value={projectheader.duration}
                            className={`disabledrag`}
                            onChange={(event, value) => {
                                dispatch({
                                    type: "PS_projectname",
                                    payload: {
                                        ...projectheader,
                                        duration: value,
                                    },
                                });
                            }}
                        />
                        <p>3s</p>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            {/* <div className="my-4">
                <h4 className="text-center">Animation Delay</h4>
                <h4
                    className="text-center my-3 text-muted"
                    style={{ fontSize: "1.5rem" }}
                >
                    0s--0.3s--0.6s--0.9s--1.2s--1.5s--1.8s--2.1s--2.4s--2.7s--3s
                </h4>
                <input
                    type="range"
                    data-toggle="tooltip"
                    data-placement="top"
                    class="custom-range disabledrag"
                    onChange={(e) => {
                        dispatch({
                            type: "PS_projectname",
                            payload: {
                                ...projectheader,
                                delay: e.target.value,
                            },
                        });
                    }}
                    min="0"
                    max="3"
                    step="0.3"
                    value={projectheader.delay}
                    id="customRange3"
                ></input>
            </div> */}
            <div className="skillBarEditor">
                <div className="skillLevelBar">
                    <div className={classes.margin} />
                    <Typography gutterBottom>
                        Animation Delay :{projectheader.delay}s
                    </Typography>
                    <div className="skillLevelBarEditor">
                        <p>0s</p>
                        <PrettoSlider
                            valueLabelDisplay="auto"
                            aria-label="Background Transition Delay"
                            min={0}
                            max={3}
                            step={0.3}
                            value={projectheader.delay}
                            className={`disabledrag`}
                            onChange={(event, value) => {
                                dispatch({
                                    type: "PS_projectname",
                                    payload: {
                                        ...projectheader,
                                        delay: value,
                                    },
                                });
                            }}
                        />
                        <p>3s</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditHeader;
