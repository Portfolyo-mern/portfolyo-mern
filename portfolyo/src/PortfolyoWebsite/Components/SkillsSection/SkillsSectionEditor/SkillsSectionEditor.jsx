import React, { useState, useEffect, useRef } from "react";
import "./SkillsSectionEditor.scss";
import {
    FormControl,
    InputLabel,
    makeStyles,
    Select,
    TextField,
} from "@material-ui/core";
import transitionFade from "../../../../assets/transitionFade.png";
import transitionFlip from "../../../../assets/transitionFlip.png";
import transitionZoom from "../../../../assets/transitionZoom.png";
import { ChromePicker } from "react-color";
import rgbHex from "rgb-hex";
import { withStyles } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Tooltip from "@material-ui/core/Tooltip";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import skillsComponentDesign1 from "../../../../assets/SkillsLayoutDesign/design1.png";
import skillsComponentDesign2 from "../../../../assets/SkillsLayoutDesign/design2.png";
import skillsComponentDesign3 from "../../../../assets/SkillsLayoutDesign/design3.png";
import skillsComponentDesign4 from "../../../../assets/SkillsLayoutDesign/design4.png";
import FontPicker from "font-picker-react";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "reactstrap";
import PropTypes from "prop-types";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";

const IOSSwitch = withStyles((theme) => ({
    root: {
        width: 42,
        height: 26,
        padding: 0,
        margin: theme.spacing(1),
    },
    fab: {
        margin: theme.spacing(2),
    },
    absolute: {
        position: "absolute",
        bottom: theme.spacing(2),
        right: theme.spacing(3),
    },
    switchBase: {
        padding: 1,
        "&$checked": {
            transform: "translateX(16px)",
            color: theme.palette.common.white,
            "& + $track": {
                backgroundColor: "#52d869",
                opacity: 1,
                border: "none",
            },
        },
        "&$focusVisible $thumb": {
            color: "#52d869",
            border: "6px solid #fff",
        },
    },
    thumb: {
        width: 24,
        height: 24,
    },
    track: {
        borderRadius: 26 / 2,
        border: `1px solid ${theme.palette.grey[400]}`,
        backgroundColor: theme.palette.grey[500],
        opacity: 1,
        transition: theme.transitions.create(["background-color", "border"]),
    },
    checked: {},
    focusVisible: {},
}))(({ classes, ...props }) => {
    return (
        <Switch
            focusVisibleClassName={classes.focusVisible}
            disableRipple
            classes={{
                root: classes.root,
                switchBase: classes.switchBase,
                thumb: classes.thumb,
                track: classes.track,
                checked: classes.checked,
            }}
            {...props}
        />
    );
});

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        zIndex: 2000,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    root: {
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
            width: "25ch",
        },
        "&:hover": {
            backgroundColor: "transparent",
        },
    },
    icon: {
        borderRadius: "50%",
        width: 16,
        height: 16,
        boxShadow:
            "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
        backgroundColor: "#f5f8fa",
        backgroundImage:
            "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
        "$root.Mui-focusVisible &": {
            outline: "2px auto rgba(19,124,189,.6)",
            outlineOffset: 2,
        },
        "input:hover ~ &": {
            backgroundColor: "#ebf1f5",
        },
        "input:disabled ~ &": {
            boxShadow: "none",
            background: "rgba(206,217,224,.5)",
        },
    },
    checkedIcon: {
        backgroundColor: "#137cbd",
        backgroundImage:
            "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
        "&:before": {
            display: "block",
            width: 16,
            height: 16,
            backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
            content: '""',
        },
        "input:hover ~ &": {
            backgroundColor: "#106ba3",
        },
    },
}));

function ValueLabelComponent(props) {
    const { children, open, value } = props;

    return (
        <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
            {children}
        </Tooltip>
    );
}

ValueLabelComponent.propTypes = {
    children: PropTypes.element.isRequired,
    open: PropTypes.bool.isRequired,
    value: PropTypes.number.isRequired,
};

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

const SkillsSectionEditor = () => {
    //redux
    const skillsSection = useSelector((state) => state.skillsSection);

    //dispatch
    const dispatch = useDispatch();

    //buttons
    const [optionClicked, setoptionClicked] = useState([
        "btn-group__item--active",
        "",
        "",
    ]);
    const [optionSelected, setoptionSelected] = useState([
        "btn-group__item--selected",
        "",
        "",
    ]);
    const [displaySelected, setdisplaySelected] = useState(
        skillsSection.editOpenSelected
    );
    const optionClickedHandlers = (index) => {
        let tempOption = ["", "", ""];
        let tempSelected = ["", "", ""];
        if (index <= 2) {
            tempOption[index] = "btn-group__item--active";
            tempSelected[index] = "btn-group__item--selected";
        }
        setoptionClicked(tempOption);
        setTimeout(() => {
            setoptionClicked(["", "", ""]);
        }, 600);
        setoptionSelected(tempSelected);
        setdisplaySelected(index);
    };

    //borderType
    //layout backgrounds
    const skillsSectionBackgroundTypeRedux = useSelector(
        (state) => state.skillsSection.background.borderType
    );
    const [skillsLayoutBackgroundSelected, setskillsLayoutBackgroundSelected] =
        useState(["skillsSectionLayoutSelected", "", ""]);
    const skillsLayoutBackgroundHandler = (index) => {
        const temp = ["", "", ""];
        temp[index] = "skillsSectionLayoutSelected";
        setskillsLayoutBackgroundSelected(temp);
        dispatch({
            type: "skillsSectionBackgroundChangeBorderType",
            payload: index,
        });
    };

    //backgoundColor
    const [skillsSectionBackgroundColor, setlayoutBackgroundColor] =
        useState("#000000");

    const skillsSectionBackgroundColorHandler = (color) => {
        setlayoutBackgroundColor(color);
        dispatch({
            type: "skillsSectionBackgroundChangeBorderColor",
            payload: color,
        });
    };

    //trasitions
    /* const transitiontypeRedux = useSelector(
		(state) => state.aboutSectionBackground.backgroundTransition
	); */
    const classes = useStyles();
    const [
        skillsBackgroundTransitionStyle,
        setskillsBackgroundTransitionStyle,
    ] = useState(skillsSection.background.trasition);

    const [
        skillsBackgroundTransitionSelected,
        setskillsBackgroundTransitionSelected,
    ] = useState(["skillsSectionTrasitionSelected", "", "", ""]);

    const skillsBackgroundTransitioneHandler = (event) => {
        setskillsBackgroundTransitionStyle(event.target.value);
    };

    const skillsBackgroundTransitionStyleHandler = (index, event) => {
        if (index === 0) {
            setskillsBackgroundTransitionStyle("none");
            dispatch({
                type: "skillsSectionBackgroundChangeBorderTransition",
                payload: "none",
            });
            return;
        }
        const temp = ["", "", "", ""];
        temp[index] = "skillsSectionTrasitionSelected";
        setskillsBackgroundTransitionSelected(temp);
        setskillsBackgroundTransitionStyle(event.target.value);
        dispatch({
            type: "skillsSectionBackgroundChangeBorderTransition",
            payload: event.target.value,
        });
    };

    //group skills
    const [groupSkills, setgroupSkills] = useState(false);

    //include professional skills
    const [includeProfessionalSkills, setincludeProfessionalSkills] =
        useState(false);

    //skillsSectionComponent design
    const skillsSectionCardDesignRedux = useSelector(
        (state) => state.currenttabe
    );
    const [skillsSectionComponentDesign, setskillsSectionComponentDesign] =
        useState(2);
    const [
        skillsSectionComponentDesignSelected,
        setskillsSectionComponentDesignSelected,
    ] = useState(["skillsSectionComponentDesignSelected", "", "", ""]);
    const skillsSectionComponentDesignHandler = (index) => {
        const temp = ["", "", "", ""];
        temp[index] = "skillsSectionComponentDesignSelected";
        setskillsSectionComponentDesign(index);
        setskillsSectionComponentDesignSelected(temp);
        dispatch({
            type: "skillsSectionCardChangeLayoutDesign",
            payload: index,
        });
    };

    //cardborderSelected
    const [skillsCardBorderTypeSelected, setskillsCardBorderTypeSelected] =
        useState(["skillsCardBorderTypeSelected", "", ""]);
    const [skillsCrdBorderType, setskillsCrdBorderType] = useState(0);

    const skillsCardDesginHandler = (index) => {
        const temp = ["", "", ""];
        temp[index] = "skillsCardBorderTypeSelected";
        setskillsCardBorderTypeSelected(temp);
        setskillsCrdBorderType(index);
        dispatch({
            type: "skillsSectionCardChangeBorderType",
            payload: index,
        });
    };

    //tabPointerSelected
    const skillsTabPointerRedux = useSelector(
        (state) => state.skillsSection.skillTabPointer
    );

    //card that is being edited
    const skillsEditingCardNumberRedux = useSelector(
        (state) => state.skillsSection.skillsEditingCardNumber
    );

    const [editingCardInfo, seteditingCardInfo] = useState(
        skillsSection.skillsCards[skillsEditingCardNumberRedux]
    );

    const currentEditCard = useSelector(
        (state) =>
            state.skillsSection.skillsCards[
                state.skillsSection.skillsEditingCardNumber
            ]
    );

    //Adding Card
    const [newCard, setnewCard] = useState({
        image: "",
        title: "New Skill",
        desc: "I'm really Good At this Skill!",
        percentage: 60,
        progressBarColor: "#123451",
        titleFontStyle: "open Sans",
        descFontStyle: "open Sans",
        titleColor: "#000000",
        descColor: "#000000",
    });

    useEffect(() => {
        skillsLayoutBackgroundHandler(skillsSectionBackgroundTypeRedux);
        optionClickedHandlers(skillsSection.editOpenSelected);
        //{skillsTabPointerRedux}
    }, []);

    useEffect(() => {
        console.log("Current Edit card", currentEditCard);
        optionClickedHandlers(skillsSection.editOpenSelected);
        console.log(`EDITING CARD ${skillsEditingCardNumberRedux}`);
        /* console.log(
            "Skills Section Card" ,skillsSection.skillsCards[skillsEditingCardNumberRedux]
        ); */
        seteditingCardInfo(
            skillsSection.skillsCards[skillsEditingCardNumberRedux]
        );
    }, [
        currentEditCard,
        skillsSection.editOpenSelected,
        skillsSection,
        skillsEditingCardNumberRedux,
    ]);

    return (
        <div className="skillsSectionEditor">
            <div
                className="btn-group "
                style={{
                    display: "block",
                    // verticalAlign: "middle",
                    maxWidth: "max-content",
                    margin: "auto auto 1rem auto",
                }}
            >
                <button
                    className={`btn-group__item btn-group__item ${optionClicked[0]} ${optionSelected[0]}`}
                    onClick={() => optionClickedHandlers(0)}
                >
                    Background
                </button>
                <button
                    className={`btn-group__item ${optionClicked[1]} ${optionSelected[1]}`}
                    onClick={() => optionClickedHandlers(1)}
                >
                    Design's & Effect's
                </button>
                <button
                    className={`btn-group__item ${optionClicked[2]} ${optionSelected[2]}`}
                    onClick={() => optionClickedHandlers(2)}
                >
                    Text
                </button>
            </div>
            <div className="skillsSectionEditorMain">
                {displaySelected === 0 ? (
                    <div className="skillsSectionEditorLayouts">
                        <p className="skillsSectionEditorHeader">
                            Border Type:
                        </p>
                        <div className={`skillsSectionEditorBorders`}>
                            <div
                                className={`skillsSectionEditorHover1 ${skillsLayoutBackgroundSelected[0]}`}
                            >
                                <div
                                    className={`skillsSectionEditorBorders1`}
                                    onClick={() => {
                                        skillsLayoutBackgroundHandler(0);
                                    }}
                                >
                                    <p>Card</p>
                                </div>
                            </div>
                            <div
                                className={`skillsSectionEditorHover2 ${skillsLayoutBackgroundSelected[1]}`}
                            >
                                <div
                                    className={`skillsSectionEditorBorders2`}
                                    onClick={() => {
                                        skillsLayoutBackgroundHandler(1);
                                    }}
                                >
                                    <p>Square</p>
                                </div>
                            </div>
                            <div
                                className={`skillsSectionEditorHover3 ${skillsLayoutBackgroundSelected[2]}`}
                            >
                                <div
                                    className={`skillsSectionEditorBorders3 ${skillsLayoutBackgroundSelected[2]}`}
                                    onClick={() => {
                                        skillsLayoutBackgroundHandler(2);
                                    }}
                                >
                                    <p>None</p>
                                </div>
                            </div>
                        </div>
                        <p className="skillsSectionEditorHeader">
                            Background Color:
                        </p>
                        <div className="skillsSectionBackgrounColor">
                            <div className="skillsSectionBackgroundColorPicker">
                                <ChromePicker
                                    className="disabledrag"
                                    color={skillsSectionBackgroundColor}
                                    onChange={(newColor) => {
                                        skillsSectionBackgroundColorHandler(
                                            "#" +
                                                rgbHex(
                                                    newColor.rgb.r,
                                                    newColor.rgb.g,
                                                    newColor.rgb.b,
                                                    newColor.rgb.a
                                                )
                                        );
                                    }}
                                ></ChromePicker>
                            </div>
                        </div>
                        <p className="skillsSectionEditorHeader">
                            Background Transition:
                        </p>
                        <div className="skillsSectionTransitionEditor">
                            <div
                                className={`skillsSectionTransitionNone ${skillsBackgroundTransitionSelected[0]}`}
                                onClick={() => {
                                    skillsBackgroundTransitionStyleHandler(
                                        0,
                                        null
                                    );
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
                                className={`skillsSectionTransitions ${skillsBackgroundTransitionSelected[1]}`}
                                onClick={(event) => {
                                    skillsBackgroundTransitionStyleHandler(
                                        1,
                                        event
                                    );
                                }}
                            >
                                <img
                                    src={transitionFade}
                                    alt="transitionFade"
                                ></img>
                                <FormControl
                                    variant="outlined"
                                    className={`disabledrag ${classes.formControl}`}
                                >
                                    <InputLabel htmlFor="outlined-age-native-simple">
                                        Fade
                                    </InputLabel>
                                    <Select
                                        native
                                        value={skillsBackgroundTransitionStyle}
                                        onChange={
                                            skillsBackgroundTransitioneHandler
                                        }
                                        label="Age"
                                        inputProps={{
                                            name: "age",
                                            id: "outlined-age-native-simple",
                                        }}
                                    >
                                        <option value={"fade-up"}>
                                            Fade Up
                                        </option>
                                        <option value={"fade-down"}>
                                            Fade down
                                        </option>
                                        <option value={"fade-right"}>
                                            Fade right
                                        </option>
                                        <option value={"fade-left"}>
                                            Fade left
                                        </option>
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
                                className={`skillsSectionTransitions ${skillsBackgroundTransitionSelected[2]}`}
                                onClick={(event) => {
                                    skillsBackgroundTransitionStyleHandler(
                                        2,
                                        event
                                    );
                                }}
                            >
                                <img
                                    src={transitionFlip}
                                    alt="transitionFlip"
                                ></img>
                                <FormControl
                                    variant="outlined"
                                    className={`disabledrag ${classes.formControl}`}
                                >
                                    <InputLabel htmlFor="outlined-age-native-simple">
                                        Flip
                                    </InputLabel>
                                    <Select
                                        native
                                        value={skillsBackgroundTransitionStyle}
                                        onChange={
                                            skillsBackgroundTransitioneHandler
                                        }
                                        label="Age"
                                        inputProps={{
                                            name: "age",
                                            id: "outlined-age-native-simple",
                                        }}
                                    >
                                        <option value={"flip-left"}>
                                            Flip Left
                                        </option>
                                        <option value={"flip-right"}>
                                            Flip Right
                                        </option>
                                        <option value={"flip-up"}>
                                            Flip Up
                                        </option>
                                        <option value={"flip-down"}>
                                            Flip Down
                                        </option>
                                    </Select>
                                </FormControl>
                            </div>
                            <div
                                className={`skillsSectionTransitions ${skillsBackgroundTransitionSelected[3]}`}
                                onClick={(event) => {
                                    skillsBackgroundTransitionStyleHandler(
                                        3,
                                        event
                                    );
                                }}
                            >
                                <img
                                    src={transitionZoom}
                                    alt="transitionZoom"
                                ></img>
                                <FormControl
                                    variant="outlined"
                                    className={`disabledrag ${classes.formControl}`}
                                >
                                    <InputLabel htmlFor="outlined-age-native-simple">
                                        Zoom
                                    </InputLabel>
                                    <Select
                                        native
                                        value={skillsBackgroundTransitionStyle}
                                        onChange={
                                            skillsBackgroundTransitioneHandler
                                        }
                                        label="Age"
                                        inputProps={{
                                            name: "age",
                                            id: "outlined-age-native-simple",
                                        }}
                                    >
                                        <option value={"zoom-in"}>
                                            Zoom In
                                        </option>
                                        <option value={"zoom-in-up"}>
                                            Zoom In Up
                                        </option>
                                        <option value={"zoom-in-down"}>
                                            Zoom In Down
                                        </option>
                                        <option value={"zoom-in-left"}>
                                            Zoom In Left
                                        </option>
                                        <option value={"zoom-in-right"}>
                                            In Right
                                        </option>
                                        <option value={"zoom-out"}>
                                            Zoom Out
                                        </option>
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
                ) : displaySelected === 1 ? (
                    <div className="skillsSectionDesginEditor">
                        <div className="groupSkillsDiv disabledrag">
                            <Tooltip
                                style={{
                                    zIndex: "1000",
                                }}
                                className="disabledrag"
                                title="Group Skills"
                                aria-label="Click to domain based Skills"
                            >
                                <FormControlLabel
                                    className="disabledrag"
                                    control={
                                        <IOSSwitch
                                            checked={groupSkills}
                                            onChange={() => {
                                                setgroupSkills(!groupSkills);
                                            }}
                                            name="groupSkills"
                                        />
                                    }
                                    label={
                                        groupSkills === true
                                            ? "Skills are Grouped"
                                            : "Skilles are not grouped"
                                    }
                                />
                            </Tooltip>
                        </div>
                        <p className="skillsSectionEditorHeader">
                            Skills Layout Design:
                        </p>
                        <div className="skillsSectionComponentsDesign">
                            <div
                                className={`skillsSectionComponentDesgin1 ${skillsSectionComponentDesignSelected[0]}`}
                                onClick={() => {
                                    skillsSectionComponentDesignHandler(0);
                                }}
                            >
                                <img
                                    src={skillsComponentDesign1}
                                    alt="skillsComponentDesign1"
                                ></img>
                                <p>Simple Text</p>
                            </div>
                            <div
                                className={`skillsSectionComponentDesgin2 ${skillsSectionComponentDesignSelected[1]}`}
                                onClick={() => {
                                    skillsSectionComponentDesignHandler(1);
                                }}
                            >
                                <img
                                    src={skillsComponentDesign2}
                                    alt="skillsComponentDesign2"
                                ></img>
                                <p>Image with text</p>
                            </div>
                            <div
                                className={`skillsSectionComponentDesgin3 ${skillsSectionComponentDesignSelected[2]}`}
                                onClick={() => {
                                    skillsSectionComponentDesignHandler(2);
                                }}
                            >
                                <img
                                    src={skillsComponentDesign3}
                                    alt="skillsComponentDesign3"
                                ></img>
                                <p>Text with Skill level</p>
                            </div>
                            <div
                                className={`skillsSectionComponentDesgin4 ${skillsSectionComponentDesignSelected[3]}`}
                                onClick={() => {
                                    skillsSectionComponentDesignHandler(3);
                                }}
                            >
                                <img
                                    src={skillsComponentDesign4}
                                    alt="skillsComponentDesign4"
                                ></img>
                                <p>Image with skills level</p>
                            </div>
                        </div>
                        <p className="skillsSectionEditorHeader">
                            Skills Component Border:
                        </p>
                        <div className={`skillsSectionCardBorders`}>
                            <div
                                className={`skillsSectionEditorHover1 ${skillsCardBorderTypeSelected[0]}`}
                            >
                                <div
                                    className={`skillsSectionCardBorders1`}
                                    onClick={() => {
                                        skillsCardDesginHandler(0);
                                    }}
                                >
                                    <p>Card</p>
                                </div>
                            </div>
                            <div
                                className={`skillsSectionEditorHover2 ${skillsCardBorderTypeSelected[1]}`}
                            >
                                <div
                                    className={`skillsSectionCardBorders2`}
                                    onClick={() => {
                                        skillsCardDesginHandler(1);
                                    }}
                                >
                                    <p>Square</p>
                                </div>
                            </div>
                            <div
                                className={`skillsSectionEditorHover3 ${skillsCardBorderTypeSelected[2]}`}
                            >
                                <div
                                    className={`skillsSectionCardBorders3`}
                                    onClick={() => {
                                        skillsCardDesginHandler(2);
                                    }}
                                >
                                    <p>None</p>
                                </div>
                            </div>
                        </div>
                        <div className="groupSkillsDiv disabledrag">
                            <Tooltip
                                style={{
                                    zIndex: "1000",
                                }}
                                className="disabledrag"
                                title="Group Skills"
                                aria-label="Click to domain based Skills"
                            >
                                <FormControlLabel
                                    className="disabledrag"
                                    control={
                                        <IOSSwitch
                                            checked={includeProfessionalSkills}
                                            onChange={() => {
                                                setincludeProfessionalSkills(
                                                    !includeProfessionalSkills
                                                );
                                            }}
                                            name="includeProfessionalSkills"
                                        />
                                    }
                                    label={
                                        includeProfessionalSkills === true
                                            ? "Profession Skills Included"
                                            : "Profession Skills Not Included"
                                    }
                                />
                            </Tooltip>
                        </div>
                        {includeProfessionalSkills ? (
                            <div className="skillsSectionEditorProffesionalSkills"></div>
                        ) : null}
                    </div>
                ) : displaySelected === 2 ? (
                    <div className="skillsSectionEditorTexts">
                        <p className="skillsSectionEditorHeader">
                            Text, Font and Color's
                        </p>
                        <hr />
                        <p>Skills Section Title:</p>
                        <div className="skillsSectionEditorTexts">
                            <div className="skillsSectionEditorTextsHeader">
                                <div className="skillsSectionEditorTextsHeaderTextDiv">
                                    <TextField
                                        required
                                        fullWidth
                                        id="outlined-required"
                                        label="Skill Section Title"
                                        value={
                                            skillsSection.skillsSectionHeader
                                                .text
                                        }
                                        variant="outlined"
                                        className="disabledrag"
                                        onChange={(event) => {
                                            if (
                                                event.target.value.length <= 20
                                            ) {
                                                dispatch({
                                                    type: "skillsSectionHeaderChangeText",
                                                    payload: event.target.value,
                                                });
                                            }
                                        }}
                                    />
                                </div>
                                <FontPicker
                                    className="skillsSectionEditorFontpicker disabledrag"
                                    pickerId="skillsSectionHeaderFontStyle"
                                    apiKey="AIzaSyA4zVMDlSV-eRzbGR5BFqvbHqz3zV-OLd0"
                                    activeFontFamily={
                                        skillsSection.skillsSectionHeader
                                            .fontStyle
                                    }
                                    limit={100}
                                    onChange={(nextFont) => {
                                        dispatch({
                                            type: "skillsSectionHeaderChangeFontStyle",
                                            payload: nextFont.family,
                                        });
                                    }}
                                />
                                <input
                                    type="color"
                                    className="skillsSectionEditorTextsColor"
                                    value={
                                        skillsSection.skillsSectionHeader.color
                                    }
                                    onChange={(event) => {
                                        dispatch({
                                            type: "skillsSectionHeaderChangeColor",
                                            payload: event.target.value,
                                        });
                                    }}
                                ></input>
                            </div>
                        </div>
                    </div>
                ) : displaySelected === 3 &&
                  skillsSection.skillsCards[skillsEditingCardNumberRedux] !==
                      undefined &&
                  skillsSection.skillsCards[skillsEditingCardNumberRedux] !==
                      null ? (
                    <div className="skillsSectionEditCard">
                        <p className="skillsSectionEditorHeader">
                            Editing Card: {skillsEditingCardNumberRedux + 1}
                        </p>
                        <hr />
                        {skillsSectionComponentDesign === 0 &&
                        skillsEditingCardNumberRedux <
                            skillsSection.skillsCards.length ? (
                            <div className="skillsCardDesign1Edit">
                                <div className="skillsCardDesign1EditTitle">
                                    <div className="skillsCardDesign1EditTitleTextDiv">
                                        <TextField
                                            required
                                            fullWidth
                                            id="outlined-required"
                                            label="Skills card Title"
                                            value={
                                                skillsSection.skillsCards[
                                                    skillsEditingCardNumberRedux
                                                ].title
                                            }
                                            variant="outlined"
                                            className="disabledrag"
                                            onChange={(event) => {
                                                dispatch({
                                                    type: "skillsEditingCardTitle",
                                                    payload: event.target.value,
                                                    editCardIndex:
                                                        skillsEditingCardNumberRedux,
                                                });
                                            }}
                                        />
                                    </div>
                                    <FontPicker
                                        className="skillsSectionTitleFontPicker disabledrag"
                                        pickerId="skillsSectionTitleFontPicker"
                                        apiKey="AIzaSyA4zVMDlSV-eRzbGR5BFqvbHqz3zV-OLd0"
                                        activeFontFamily={
                                            skillsSection.skillsCards[
                                                skillsEditingCardNumberRedux
                                            ].titleFontStyle
                                        }
                                        limit={100}
                                        onChange={(nextFont) => {
                                            dispatch({
                                                type: "skillsEditingCardTitleFont",
                                                payload: nextFont.family,
                                                editCardIndex:
                                                    skillsEditingCardNumberRedux,
                                            });
                                        }}
                                    ></FontPicker>
                                    <Input
                                        type="color"
                                        className="skillsCardDesign1EditTitleColor"
                                        value={
                                            skillsSection.skillsCards[
                                                skillsEditingCardNumberRedux
                                            ].titleColor
                                        }
                                        onChange={(event) => {
                                            dispatch({
                                                type: "skillsEditingCardTitleColor",
                                                payload: event.target.value,
                                                editCardIndex:
                                                    skillsEditingCardNumberRedux,
                                            });
                                        }}
                                    ></Input>
                                </div>
                                <div className="skillsCardDesign1EditDesc">
                                    <div className="skillsCardDesign1EditDescTextDiv">
                                        <TextField
                                            required
                                            fullWidth
                                            id="outlined-multiline-static"
                                            label="Skills card Desc"
                                            multiline
                                            value={
                                                skillsSection.skillsCards[
                                                    skillsEditingCardNumberRedux
                                                ].desc
                                            }
                                            variant="outlined"
                                            className="disabledrag"
                                            onChange={(event) => {
                                                dispatch({
                                                    type: "skillsEditingCardDesc",
                                                    payload: event.target.value,
                                                    editCardIndex:
                                                        skillsEditingCardNumberRedux,
                                                });
                                            }}
                                        />
                                    </div>
                                    <FontPicker
                                        className="skillsSectionDescFontPicker disabledrag"
                                        pickerId="skillsSectionDescFontPicker"
                                        apiKey="AIzaSyA4zVMDlSV-eRzbGR5BFqvbHqz3zV-OLd0"
                                        activeFontFamily={
                                            skillsSection.skillsCards[
                                                skillsEditingCardNumberRedux
                                            ].descFontStyle
                                        }
                                        limit={100}
                                        onChange={(nextFont) => {
                                            dispatch({
                                                type: "skillsEditingCardDescFont",
                                                payload: nextFont.family,
                                                editCardIndex:
                                                    skillsEditingCardNumberRedux,
                                            });
                                        }}
                                    ></FontPicker>
                                    <Input
                                        type="color"
                                        className="skillsCardDesign1EditTitleColor"
                                        value={
                                            skillsSection.skillsCards[
                                                skillsEditingCardNumberRedux
                                            ].descColor
                                        }
                                        onChange={(event) => {
                                            dispatch({
                                                type: "skillsEditingCardDescColor",
                                                payload: event.target.value,
                                                editCardIndex:
                                                    skillsEditingCardNumberRedux,
                                            });
                                        }}
                                    ></Input>
                                </div>
                            </div>
                        ) : skillsSectionComponentDesign === 1 &&
                          skillsEditingCardNumberRedux <
                              skillsSection.skillsCards.length ? (
                            <div className="skillsCardDesign2Edit">
                                <div className="skillsCardDesign1EditTitle">
                                    <div className="skillsCardDesign1EditTitleTextDiv">
                                        <TextField
                                            required
                                            fullWidth
                                            id="outlined-required"
                                            label="Skills card Title"
                                            value={
                                                skillsSection.skillsCards[
                                                    skillsEditingCardNumberRedux
                                                ].title
                                            }
                                            variant="outlined"
                                            className="disabledrag"
                                            onChange={(event) => {
                                                dispatch({
                                                    type: "skillsEditingCardTitle",
                                                    payload: event.target.value,
                                                    editCardIndex:
                                                        skillsEditingCardNumberRedux,
                                                });
                                            }}
                                        />
                                    </div>
                                    <FontPicker
                                        className="skillsSectionTitleFontPicker disabledrag"
                                        pickerId="skillsSectionTitleFontPicker"
                                        apiKey="AIzaSyA4zVMDlSV-eRzbGR5BFqvbHqz3zV-OLd0"
                                        activeFontFamily={
                                            skillsSection.skillsCards[
                                                skillsEditingCardNumberRedux
                                            ].titleFontStyle
                                        }
                                        limit={100}
                                        onChange={(nextFont) => {
                                            dispatch({
                                                type: "skillsEditingCardTitleFont",
                                                payload: nextFont.family,
                                                editCardIndex:
                                                    skillsEditingCardNumberRedux,
                                            });
                                        }}
                                    ></FontPicker>
                                    <Input
                                        type="color"
                                        className="skillsCardDesign1EditTitleColor"
                                        value={
                                            skillsSection.skillsCards[
                                                skillsEditingCardNumberRedux
                                            ].titleColor
                                        }
                                        onChange={(event) => {
                                            dispatch({
                                                type: "skillsEditingCardTitleColor",
                                                payload: event.target.value,
                                                editCardIndex:
                                                    skillsEditingCardNumberRedux,
                                            });
                                        }}
                                    ></Input>
                                </div>
                                <div className="skillsCardDesign1EditDesc">
                                    <div className="skillsCardDesign1EditDescTextDiv">
                                        <TextField
                                            required
                                            fullWidth
                                            id="outlined-multiline-static"
                                            label="Skills card Desc"
                                            multiline
                                            value={
                                                skillsSection.skillsCards[
                                                    skillsEditingCardNumberRedux
                                                ].desc
                                            }
                                            variant="outlined"
                                            className="disabledrag"
                                            onChange={(event) => {
                                                dispatch({
                                                    type: "skillsEditingCardDesc",
                                                    payload: event.target.value,
                                                    editCardIndex:
                                                        skillsEditingCardNumberRedux,
                                                });
                                            }}
                                        />
                                    </div>
                                    <FontPicker
                                        className="skillsSectionDescFontPicker disabledrag"
                                        pickerId="skillsSectionDescFontPicker"
                                        apiKey="AIzaSyA4zVMDlSV-eRzbGR5BFqvbHqz3zV-OLd0"
                                        activeFontFamily={
                                            skillsSection.skillsCards[
                                                skillsEditingCardNumberRedux
                                            ].descFontStyle
                                        }
                                        limit={100}
                                        onChange={(nextFont) => {
                                            dispatch({
                                                type: "skillsEditingCardDescFont",
                                                payload: nextFont.family,
                                                editCardIndex:
                                                    skillsEditingCardNumberRedux,
                                            });
                                        }}
                                    ></FontPicker>
                                    <Input
                                        type="color"
                                        className="skillsCardDesign1EditTitleColor"
                                        value={
                                            skillsSection.skillsCards[
                                                skillsEditingCardNumberRedux
                                            ].descColor
                                        }
                                        onChange={(event) => {
                                            dispatch({
                                                type: "skillsEditingCardDescColor",
                                                payload: event.target.value,
                                                editCardIndex:
                                                    skillsEditingCardNumberRedux,
                                            });
                                        }}
                                    ></Input>
                                </div>
                            </div>
                        ) : skillsSectionComponentDesign === 2 &&
                          skillsSection.skillsCards[
                              skillsEditingCardNumberRedux
                          ] !== undefined ? (
                            <div className="skillsCardDesign3Edit">
                                <div className="skillsCardDesign1EditTitle">
                                    <div className="skillsCardDesign1EditTitleTextDiv">
                                        <TextField
                                            required
                                            fullWidth
                                            id="outlined-required"
                                            label="Skills card Title"
                                            value={
                                                skillsSection.skillsCards[
                                                    skillsEditingCardNumberRedux
                                                ].title
                                            }
                                            variant="outlined"
                                            className="disabledrag"
                                            onChange={(event) => {
                                                dispatch({
                                                    type: "skillsEditingCardTitle",
                                                    payload: event.target.value,
                                                    editCardIndex:
                                                        skillsEditingCardNumberRedux,
                                                });
                                            }}
                                        />
                                    </div>
                                    <FontPicker
                                        className="skillsSectionTitleFontPicker disabledrag"
                                        pickerId="skillsSectionTitleFontPicker"
                                        apiKey="AIzaSyA4zVMDlSV-eRzbGR5BFqvbHqz3zV-OLd0"
                                        activeFontFamily={
                                            skillsSection.skillsCards[
                                                skillsEditingCardNumberRedux
                                            ].titleFontStyle
                                        }
                                        limit={100}
                                        onChange={(nextFont) => {
                                            dispatch({
                                                type: "skillsEditingCardTitleFont",
                                                payload: nextFont.family,
                                                editCardIndex:
                                                    skillsEditingCardNumberRedux,
                                            });
                                        }}
                                    ></FontPicker>
                                    <Input
                                        type="color"
                                        className="skillsCardDesign1EditTitleColor"
                                        value={
                                            skillsSection.skillsCards[
                                                skillsEditingCardNumberRedux
                                            ].titleColor
                                        }
                                        onChange={(event) => {
                                            dispatch({
                                                type: "skillsEditingCardTitleColor",
                                                payload: event.target.value,
                                                editCardIndex:
                                                    skillsEditingCardNumberRedux,
                                            });
                                        }}
                                    ></Input>
                                </div>
                                <div className="skillBarEditor">
                                    <div className="skillLevelBar">
                                        <div className={classes.margin} />
                                        <Typography gutterBottom>
                                            Skill Level Bar:
                                            {
                                                skillsSection.skillsCards[
                                                    skillsEditingCardNumberRedux
                                                ].percentage
                                            }
                                            %
                                        </Typography>
                                        <div className="skillLevelBarEditor">
                                            <p>0%</p>
                                            <PrettoSlider
                                                valueLabelDisplay="auto"
                                                aria-label="Skill Card"
                                                value={
                                                    skillsSection.skillsCards[
                                                        skillsEditingCardNumberRedux
                                                    ].percentage
                                                }
                                                className={`disabledrag`}
                                                onChange={(event, value) => {
                                                    dispatch({
                                                        type: "skillsEditingCardPercentage",
                                                        payload: value,
                                                        editCardIndex:
                                                            skillsEditingCardNumberRedux,
                                                    });
                                                }}
                                            />
                                            <p>100%</p>
                                        </div>
                                    </div>
                                    <div className="skillBarColorEditor">
                                        <p>Skill Bar Color:</p>
                                        <Input
                                            type="color"
                                            className="skillsCardDesign1EditTitleColor"
                                            value={
                                                skillsSection.skillsCards[
                                                    skillsEditingCardNumberRedux
                                                ].progressBarColor
                                            }
                                            onChange={(event) => {
                                                dispatch({
                                                    type: "skillsEditingCardBarColor",
                                                    payload: event.target.value,
                                                    editCardIndex:
                                                        skillsEditingCardNumberRedux,
                                                });
                                            }}
                                        ></Input>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="skillsCardDesign4Edit">
                                <div className="skillsCardDesign1EditTitle">
                                    <div className="skillsCardDesign1EditTitleTextDiv">
                                        <TextField
                                            required
                                            fullWidth
                                            id="outlined-required"
                                            label="Skills card Title"
                                            value={
                                                skillsSection.skillsCards[
                                                    skillsEditingCardNumberRedux
                                                ].title
                                            }
                                            variant="outlined"
                                            className="disabledrag"
                                            onChange={(event) => {
                                                dispatch({
                                                    type: "skillsEditingCardTitle",
                                                    payload: event.target.value,
                                                    editCardIndex:
                                                        skillsEditingCardNumberRedux,
                                                });
                                            }}
                                        />
                                    </div>
                                    <FontPicker
                                        className="skillsSectionTitleFontPicker disabledrag"
                                        pickerId="skillsSectionTitleFontPicker"
                                        apiKey="AIzaSyA4zVMDlSV-eRzbGR5BFqvbHqz3zV-OLd0"
                                        activeFontFamily={
                                            skillsSection.skillsCards[
                                                skillsEditingCardNumberRedux
                                            ].titleFontStyle
                                        }
                                        limit={100}
                                        onChange={(nextFont) => {
                                            dispatch({
                                                type: "skillsEditingCardTitleFont",
                                                payload: nextFont.family,
                                                editCardIndex:
                                                    skillsEditingCardNumberRedux,
                                            });
                                        }}
                                    ></FontPicker>
                                    <Input
                                        type="color"
                                        className="skillsCardDesign1EditTitleColor"
                                        value={
                                            skillsSection.skillsCards[
                                                skillsEditingCardNumberRedux
                                            ].titleColor
                                        }
                                        onChange={(event) => {
                                            dispatch({
                                                type: "skillsEditingCardTitleColor",
                                                payload: event.target.value,
                                                editCardIndex:
                                                    skillsEditingCardNumberRedux,
                                            });
                                        }}
                                    ></Input>
                                </div>
                                <div className="skillBarEditor">
                                    <div className="skillLevelBar">
                                        <div className={classes.margin} />
                                        <Typography gutterBottom>
                                            Skill Level Bar:
                                            {
                                                skillsSection.skillsCards[
                                                    skillsEditingCardNumberRedux
                                                ].percentage
                                            }
                                            %
                                        </Typography>
                                        <div className="skillLevelBarEditor">
                                            <p>0%</p>
                                            <PrettoSlider
                                                valueLabelDisplay="auto"
                                                aria-label="Skill Card"
                                                value={
                                                    skillsSection.skillsCards[
                                                        skillsEditingCardNumberRedux
                                                    ].percentage
                                                }
                                                className={`disabledrag`}
                                                onChange={(event, value) => {
                                                    dispatch({
                                                        type: "skillsEditingCardPercentage",
                                                        payload: value,
                                                        editCardIndex:
                                                            skillsEditingCardNumberRedux,
                                                    });
                                                }}
                                            />
                                            <p>100%</p>
                                        </div>
                                    </div>
                                    <div className="skillBarColorEditor">
                                        <p>Skill Bar Color:</p>
                                        <Input
                                            type="color"
                                            className="skillsCardDesign1EditTitleColor"
                                            value={
                                                skillsSection.skillsCards[
                                                    skillsEditingCardNumberRedux
                                                ].progressBarColor
                                            }
                                            onChange={(event) => {
                                                dispatch({
                                                    type: "skillsEditingCardBarColor",
                                                    payload: event.target.value,
                                                    editCardIndex:
                                                        skillsEditingCardNumberRedux,
                                                });
                                            }}
                                        ></Input>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div
                            className="skillDeleteButtonDiv"
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                justifyContent: "center",
                            }}
                        >
                            <Button
                                style={{
                                    color: "red",
                                    border: "red 1px solid",
                                    margin: "1rem auto",
                                }}
                                onClick={async () => {
                                    await dispatch({
                                        type: "openeditor",
                                        payload: false,
                                    });
                                    dispatch({
                                        type: "skilletingSkill",
                                        payload: skillsEditingCardNumberRedux,
                                    });
                                }}
                            >
                                Delete Skill!
                            </Button>
                        </div>
                    </div>
                ) : displaySelected === 4 ? (
                    <div>
                        <h2>Adding Skill!</h2>
                        <hr />
                        <div className="skillAddingForm">
                            <div className="skillsSectionEditorTextsHeaderTextDiv">
                                <TextField
                                    required
                                    fullWidth
                                    id="outlined-required"
                                    label="Skill Title"
                                    value={newCard.title}
                                    variant="outlined"
                                    className="disabledrag"
                                    onChange={(event) => {
                                        if (event.target.value.length > 20) {
                                            setnewCard((card) => ({
                                                ...card,
                                            }));
                                        } else {
                                            setnewCard((card) => ({
                                                ...card,
                                                title: event.target.value,
                                            }));
                                        }
                                    }}
                                />
                            </div>
                            <div className="skillsSectionEditorTextsHeaderTextDiv">
                                <TextField
                                    required
                                    fullWidth
                                    id="outlined-required"
                                    label="Skill Description"
                                    multiline
                                    minRows="3"
                                    defaultValue={newCard.desc}
                                    variant="outlined"
                                    className="disabledrag"
                                    onChange={(event) => {
                                        if (event.target.value.length > 100) {
                                            setnewCard((card) => ({
                                                ...card,
                                            }));
                                        } else {
                                            setnewCard((card) => ({
                                                ...card,
                                                desc: event.target.value,
                                            }));
                                        }
                                    }}
                                />
                            </div>
                            <div className="skillsSectionEditorTextsHeaderTextDiv">
                                <TextField
                                    required
                                    fullWidth
                                    id="outlined-required"
                                    label="Skill Confidence Percentage"
                                    type="number"
                                    value={newCard.percentage}
                                    variant="outlined"
                                    className="disabledrag"
                                    onChange={(event) => {
                                        let per = parseInt(event.target.value);
                                        console.log(per, " ", per > 100);
                                        if (
                                            event.target.value.length > 3 ||
                                            per > 100
                                        ) {
                                            setnewCard((card) => ({
                                                ...card,
                                            }));
                                        } else {
                                            setnewCard((card) => ({
                                                ...card,
                                                percentage: per,
                                            }));
                                        }
                                    }}
                                />
                            </div>
                        </div>
                        <div
                            className="skillsEditorAddNewSkillButton"
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                width: "100%",
                            }}
                        >
                            <Button
                                variant="outlined"
                                style={{
                                    color: "green",
                                    border: "green 1px solid",
                                    margin: "1rem auto",
                                }}
                                onClick={() => {
                                    console.log(
                                        newCard.percentage,
                                        " ",
                                        typeof newCard.percentage
                                    );
                                    setnewCard((card) => ({
                                        ...card,
                                        percentage:
                                            card.percentage > 100
                                                ? 100
                                                : card.percentage,
                                    }));
                                    dispatch({
                                        type: "openeditor",
                                        payload: false,
                                    });
                                    dispatch({
                                        type: "skillsAddNewSkill",
                                        payload: newCard,
                                    });
                                }}
                            >
                                Add a Skill!
                            </Button>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default SkillsSectionEditor;
