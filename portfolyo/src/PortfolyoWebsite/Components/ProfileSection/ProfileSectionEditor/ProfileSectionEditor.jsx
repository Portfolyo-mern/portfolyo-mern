import React, { useState, useEffect } from "react";
import "./ProfileSectionEditor.scss";
// import CloseIcon from "@material-ui/icons/Close";
import layout1 from "../../../../assets/layout1.png";
// import layout2 from "../../../../assets/layout2.png";
import profileLeft from "../../../../assets/profileLeft.png";
import profileMiddle from "../../../../assets/profileMiddle.png";
import { Button, makeStyles, TextField } from "@material-ui/core";
import FontPicker from "font-picker-react";
import { ChromePicker } from "react-color";
import { useSelector, useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
            width: "25ch",
        },
    },
    textfield: {},
}));

const ProfileSectionEditor = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const UsernameP = useSelector((state) => state.UsernameP);
    const DescribeP = useSelector((state) => state.DescribeP);
    const AddressP = useSelector((state) => state.AddressP);
    const UsernameFontP = useSelector((state) => state.UsernameFontP);
    const DescribeFontP = useSelector((state) => state.DescribeFontP);
    const AddressFontP = useSelector((state) => state.AddressFontP);
    const UsernameColorP = useSelector((state) => state.UsernameColorP);
    const DescribeColorP = useSelector((state) => state.DescribeColorP);
    const AddressColorP = useSelector((state) => state.AddressColorP);
    const DButtonColorP = useSelector((state) => state.DButtonColorP);
    const HButtonColorP = useSelector((state) => state.HButtonColorP);
    const DTextColorP = useSelector((state) => state.DTextColorP);
    const HTextColorP = useSelector((state) => state.HTextColorP);
    const [layoutDesignSelected, setlayoutDesignSelected] = useState([
        "porfileSectionLayoutSelected",
        "",
    ]);
    const [alignmentSelected, setalignmentSelected] = useState([
        "porfileSectionAligmentSelected",
        "",
    ]);
    const [dpStructureSelected, setdpStructureSelected] = useState([
        "dpStructureSelected",
        "",
        "",
    ]);
    const [optionClicked, setoptionClicked] = useState(["", "", ""]);
    const [optionSelected, setoptionSelected] = useState([
        "btn-group__item--selected",
        "",
        "",
    ]);
    const layoutp = useSelector((state) => state.layoutp);
    console.log(UsernameFontP);

    // const dpStructureP = useSelector(state=>state.dpStructureP);

    const [displaySelected, setdisplaySelected] = useState(0);

    const dpStructureHandler = (index) => {
        let tempDpStructure = ["", "", ""];
        tempDpStructure[index] = "dpStructureSelected";
        setdpStructureSelected(tempDpStructure);
    };

    const layoutDesignHandler = (index) => {
        let tempLayout = ["", ""];
        tempLayout[index] = "porfileSectionLayoutSelected";
        setlayoutDesignSelected(tempLayout);
    };

    const alignmentHandler = (index) => {
        let tempAlignment = ["", ""];
        tempAlignment[index] = "porfileSectionAligmentSelected";
        setalignmentSelected(tempAlignment);
    };

    const optionClickedHandlers = (index) => {
        let tempOption = ["", "", ""];
        tempOption[index] = "btn-group__item--active";
        let tempSelected = ["", "", ""];
        tempSelected[index] = "btn-group__item--selected";
        setoptionClicked(tempOption);
        setTimeout(() => {
            setoptionClicked(["", "", ""]);
        }, 600);
        setoptionSelected(tempSelected);
        setdisplaySelected(index);
    };

    // eslint-disable-next-line no-unused-vars
    const [fontStyle, setfontStyle] = useState("Open Sans");

    //buttons
    const [dbuttonStyle, setdbuttonStyle] = useState([
        "buttonStyleSeclected",
        "",
        "",
    ]);
    const [hbuttonStyle, sethbuttonStyle] = useState([
        "",
        "",
        "buttonStyleSeclected",
    ]);
    // const [buttonColor, setbuttonColor] = useState("#fff");
    // const [buttonTextColor, setbuttonTextColor] = useState("#fff");

    const dbuttonStyleHandler = (index) => {
        const temp = ["", "", ""];
        temp[index] = "buttonStyleSeclected";
        setdbuttonStyle(temp);
    };
    const hbuttonStyleHandler = (index) => {
        const temp = ["", "", ""];
        temp[index] = "buttonStyleSeclected";
        sethbuttonStyle(temp);
    };

    useEffect(() => {
        layoutDesignHandler(layoutp - 1);
    }, []);

    return (
        <div
            style={{
                justifyContent: "start",
            }}
        >
            <div className="ProfileSectionEditorBackDrop">
                <div
                    className="ProfileSectionEditorMenu mt-2 p-0"
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                    {/* <div className="ProfileSectionEditorHeader">
						<h3 className="ProfileSectionEditorHeading">
							Edit Profile Section
						</h3>
						<CloseIcon
							onClick={props.closeBackDrop}
							style={{
								cursor: "pointer",
							}}
						></CloseIcon>
					</div> */}
                    {/* <hr
						style={{
							border: "#d9d9d9 0.3px solid",
						}}
					/> */}
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
                            Layout
                        </button>
                        <button
                            className={`btn-group__item ${optionClicked[1]} ${optionSelected[1]}`}
                            onClick={() => optionClickedHandlers(1)}
                        >
                            Text
                        </button>
                        <button
                            className={`btn-group__item ${optionClicked[2]} ${optionSelected[2]}`}
                            onClick={() => optionClickedHandlers(2)}
                        >
                            Buttons
                        </button>
                    </div>
                    <div className="profileSectionEditorLayout">
                        {displaySelected === 0 ? (
                            <div>
                                <div className="profileSectionEditorLayoutDesign m-0">
                                    <p className="profileSectionEditorLayoutDesignHeader">
                                        Designs:
                                    </p>
                                    <div className="profileSectionEditorLayoutDesignStructure">
                                        <div
                                            className={`profileSectionEditorLayouts ${layoutDesignSelected[0]}`}
                                            onClick={() => {
                                                layoutDesignHandler(0);
                                                dispatch({
                                                    type: "layoutp",
                                                    payload: 1,
                                                });
                                            }}
                                        >
                                            <img
                                                src={layout1}
                                                alt="layout1"
                                            ></img>
                                            <p>Layout-1</p>
                                        </div>
                                        <div
                                            className={`profileSectionEditorLayouts ${layoutDesignSelected[1]}`}
                                            onClick={() => {
                                                layoutDesignHandler(1);
                                                dispatch({
                                                    type: "layoutp",
                                                    payload: 2,
                                                });
                                            }}
                                        >
                                            <img
                                                src={profileLeft}
                                                alt="layout2"
                                            ></img>
                                            <p>Layout-2</p>
                                        </div>
                                    </div>
                                    <p className="profileSectionEditorLayoutDesignHeader">
                                        Alignment:
                                    </p>
                                    <div className="profileSectionEditorLayoutDesignStructure">
                                        <div
                                            className={`profileSectionEditorLayouts ${alignmentSelected[0]}`}
                                            onClick={() => {
                                                alignmentHandler(0);
                                                dispatch({
                                                    type: "alignp",
                                                    payload: "left",
                                                });
                                            }}
                                        >
                                            <img
                                                src={profileLeft}
                                                alt="layout1"
                                            ></img>
                                            <p>Left Alignment</p>
                                        </div>
                                        <div
                                            className={`profileSectionEditorLayouts ${alignmentSelected[1]}`}
                                            onClick={() => {
                                                alignmentHandler(1);
                                                dispatch({
                                                    type: "alignp",
                                                    payload: "center",
                                                });
                                            }}
                                        >
                                            <img
                                                src={profileMiddle}
                                                alt="layout2"
                                            ></img>
                                            <p>Center Alignment</p>
                                        </div>
                                    </div>
                                    <p className="profileSectionEditorLayoutDesignHeader">
                                        Profile Pic:
                                    </p>
                                    <div className="profileSectionEditorLayoutDpStructure">
                                        <div
                                            className={`profileSectionEditorLayoutDpStructureItem ${dpStructureSelected[0]}`}
                                            style={{
                                                margin: "1rem",
                                            }}
                                            onClick={() => {
                                                dpStructureHandler(0);
                                                dispatch({
                                                    type: "dpstructurep",
                                                    payload: 0,
                                                });
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: "5rem",
                                                    height: "5rem",
                                                    border: "black 2px solid",
                                                }}
                                            ></div>
                                            <p>Sharp</p>
                                        </div>
                                        <div
                                            className={`profileSectionEditorLayoutDpStructureItem ${dpStructureSelected[1]}`}
                                            style={{
                                                margin: "1rem",
                                            }}
                                            onClick={() => {
                                                dpStructureHandler(1);
                                                dispatch({
                                                    type: "dpstructurep",
                                                    payload: 1,
                                                });
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: "5rem",
                                                    height: "5rem",
                                                    border: "black 2px solid",
                                                    borderRadius: "10px",
                                                }}
                                            ></div>
                                            <p>Smooth</p>
                                        </div>
                                        <div
                                            className={`profileSectionEditorLayoutDpStructureItem ${dpStructureSelected[2]}`}
                                            style={{
                                                margin: "1rem",
                                            }}
                                            onClick={() => {
                                                dpStructureHandler(2);
                                                dispatch({
                                                    type: "dpstructurep",
                                                    payload: 2,
                                                });
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: "5rem",
                                                    height: "5rem",
                                                    border: "black 2px solid",
                                                    borderRadius: "50%",
                                                }}
                                            ></div>
                                            <p>Circle</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : displaySelected === 1 ? (
                            <div
                                style={{
                                    padding: "1rem",
                                }}
                            >
                                <form
                                    className={classes.root}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <div className="profileSectionEditorText ">
                                        <div className="profileSectionEditorTextDiv">
                                            <TextField
                                                className="disabledrag"
                                                id="firstnameInput"
                                                label="User Name"
                                                variant="outlined"
                                                fullWidth
                                                required
                                                value={UsernameP}
                                                onChange={(e) =>
                                                    dispatch({
                                                        type: "usernamep",
                                                        payload: e.target.value,
                                                    })
                                                }
                                            />
                                        </div>
                                        <div className="profileSectionEditorFontPickerDiv ">
                                            <FontPicker
                                                className="profileSectionEditorFontpicker disabledrag"
                                                apiKey="AIzaSyA4zVMDlSV-eRzbGR5BFqvbHqz3zV-OLd0"
                                                activeFontFamily={UsernameFontP}
                                                onChange={(nextFont) => {
                                                    setfontStyle(
                                                        nextFont.family
                                                    );
                                                    dispatch({
                                                        type: "usernamefontp",
                                                        payload:
                                                            nextFont.family,
                                                    });
                                                }}
                                            />
                                        </div>
                                        <div className="profileSectionEditorColorDiv">
                                            <input
                                                type="color"
                                                value={UsernameColorP}
                                                onChange={(e) => {
                                                    dispatch({
                                                        type: "usernamecolorp",
                                                        payload: e.target.value,
                                                    });
                                                }}
                                            ></input>
                                        </div>
                                    </div>
                                    {/* <div className="profileSectionEditorText disabledrag">
										<div className="profileSectionEditorTextDiv">
											<TextField
												className={classes.textfield}
												id="lastnameInput"
												label="Last Name"
												variant="outlined"
												fullWidth
												required
											/>
										</div>
										<div className="profileSectionEditorFontPickerDiv disabledrag">
											<FontPicker
												className="profileSectionEditorFontpicker"
												apiKey="AIzaSyA4zVMDlSV-eRzbGR5BFqvbHqz3zV-OLd0"
												activeFontFamily={fontStyle}
												onChange={(nextFont) =>
													setfontStyle(
														nextFont.family
													)
												}
											/>
										</div>
									</div> */}
                                    <div className="profileSectionEditorText ">
                                        <div className="profileSectionEditorTextDiv">
                                            <TextField
                                                className="disabledrag apply-font"
                                                id="tagline"
                                                label="Tagline"
                                                variant="outlined"
                                                placeholder="Your Tagline"
                                                fullWidth
                                                multiline
                                                value={DescribeP}
                                                onChange={(e) =>
                                                    dispatch({
                                                        type: "describep",
                                                        payload: e.target.value,
                                                    })
                                                }
                                            />
                                        </div>
                                        <p className="apply-font"></p>
                                        <div className="profileSectionEditorFontPickerDiv disabledrag">
                                            <FontPicker
                                                className="profileSectionEditorFontpicker disabledrag"
                                                apiKey="AIzaSyA4zVMDlSV-eRzbGR5BFqvbHqz3zV-OLd0"
                                                activeFontFamily={DescribeFontP}
                                                onChange={(nextFont) => {
                                                    console.log(nextFont);
                                                    setfontStyle(
                                                        nextFont.family
                                                    );
                                                    dispatch({
                                                        type: "describefontp",
                                                        payload:
                                                            nextFont.family,
                                                    });
                                                }}
                                            />
                                        </div>
                                        <div className="profileSectionEditorColorDiv">
                                            <input
                                                type="color"
                                                value={DescribeColorP}
                                                onChange={(e) => {
                                                    dispatch({
                                                        type: "describecolorp",
                                                        payload: e.target.value,
                                                    });
                                                }}
                                            ></input>
                                        </div>
                                    </div>
                                    <div className="profileSectionEditorText ">
                                        <div className="profileSectionEditorTextDiv">
                                            <TextField
                                                className="disabledrag"
                                                id="locationInput"
                                                label="Location"
                                                variant="outlined"
                                                fullWidth
                                                required
                                                value={AddressP}
                                                onChange={(e) =>
                                                    dispatch({
                                                        type: "addressp",
                                                        payload: e.target.value,
                                                    })
                                                }
                                            />
                                        </div>
                                        <div className="profileSectionEditorFontPickerDiv">
                                            <FontPicker
                                                className="profileSectionEditorFontpicker disabledrag"
                                                apiKey="AIzaSyA4zVMDlSV-eRzbGR5BFqvbHqz3zV-OLd0"
                                                activeFontFamily={AddressFontP}
                                                onChange={(nextFont) => {
                                                    setfontStyle(
                                                        nextFont.family
                                                    );
                                                    dispatch({
                                                        type: "addressfontp",
                                                        payload:
                                                            nextFont.family,
                                                    });
                                                }}
                                            />
                                        </div>
                                        <div className="profileSectionEditorColorDiv">
                                            <input
                                                type="color"
                                                value={AddressColorP}
                                                onChange={(e) => {
                                                    dispatch({
                                                        type: "addresscolorp",
                                                        payload: e.target.value,
                                                    });
                                                }}
                                            ></input>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        ) : (
                            <div className="profileSectionEditorButton">
                                <p className="profileSectionEditorButtonHeader">
                                    Button Style:
                                </p>
                                <p className="profileSectionEditorSideHeading">
                                    Download Button:{" "}
                                </p>
                                <div className="profileSectionEditorButtonMenu">
                                    <div
                                        className={`profileSectionEditorButtonStyle ${dbuttonStyle[0]}`}
                                        // onClick={() => buttonStyleHandler(0)}
                                        onClick={() => {
                                            dispatch({
                                                type: "dbuttonstylep",
                                                payload: "contained",
                                            });
                                            dbuttonStyleHandler(0);
                                        }}
                                    >
                                        <Button
                                            className=""
                                            variant="contained"
                                            color="secondary"
                                        >
                                            Contained
                                        </Button>
                                    </div>
                                    <div
                                        className={`profileSectionEditorButtonStyle ${dbuttonStyle[1]}`}
                                        onClick={() => {
                                            dispatch({
                                                type: "dbuttonstylep",
                                                payload: "",
                                            });
                                            dbuttonStyleHandler(1);
                                        }}
                                    >
                                        <Button
                                            className=""
                                            color="secondary"
                                            variant=""
                                        >
                                            Text Button
                                        </Button>
                                    </div>
                                    <div
                                        className={`profileSectionEditorButtonStyle ${dbuttonStyle[2]}`}
                                        // onClick={() => buttonStyleHandler(2)}
                                        onClick={() => {
                                            dispatch({
                                                type: "dbuttonstylep",
                                                payload: "outlined",
                                            });
                                            dbuttonStyleHandler(2);
                                        }}
                                    >
                                        <Button
                                            className=""
                                            variant="outlined"
                                            color="secondary"
                                        >
                                            Outlined
                                        </Button>
                                    </div>
                                </div>
                                <p className="profileSectionEditorSideHeading">
                                    Hire Me Button:
                                </p>
                                <div className="profileSectionEditorButtonMenu">
                                    <div
                                        className={`profileSectionEditorButtonStyle ${hbuttonStyle[0]}`}
                                        // onClick={() => buttonStyleHandler(0)}
                                        onClick={() => {
                                            dispatch({
                                                type: "hbuttonstylep",
                                                payload: "contained",
                                            });
                                            hbuttonStyleHandler(0);
                                        }}
                                    >
                                        <Button
                                            className=""
                                            variant="contained"
                                            color="secondary"
                                        >
                                            Contained
                                        </Button>
                                    </div>
                                    <div
                                        className={`profileSectionEditorButtonStyle ${hbuttonStyle[1]}`}
                                        onClick={() => {
                                            dispatch({
                                                type: "hbuttonstylep",
                                                payload: "",
                                            });
                                            hbuttonStyleHandler(1);
                                        }}
                                    >
                                        <Button
                                            className=""
                                            color="secondary"
                                            variant=""
                                        >
                                            Text Button
                                        </Button>
                                    </div>
                                    <div
                                        className={`profileSectionEditorButtonStyle ${hbuttonStyle[2]}`}
                                        // onClick={() => buttonStyleHandler(2)}
                                        onClick={() => {
                                            dispatch({
                                                type: "hbuttonstylep",
                                                payload: "outlined",
                                            });
                                            hbuttonStyleHandler(2);
                                        }}
                                    >
                                        <Button
                                            className=""
                                            variant="outlined"
                                            color="secondary"
                                        >
                                            Outlined
                                        </Button>
                                    </div>
                                </div>
                                <p className="profileSectionEditorButtonHeader profileSectionEditorSideHeading">
                                    Button Background Color:
                                </p>
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-around",
                                        flexWrap: "wrap",
                                    }}
                                >
                                    <div
                                        className="disabledrag profileSectionEditorButtonColorPicker mx-2"
                                        style={
                                            {
                                                // margin: "auto !important",
                                            }
                                        }
                                    >
                                        <p className="text-center">
                                            HIRE ME BUTTON:
                                        </p>
                                        <ChromePicker
                                            color={HButtonColorP}
                                            onChange={(updatedColor) =>
                                                dispatch({
                                                    type: "hbuttoncolorp",
                                                    payload: updatedColor.hex,
                                                })
                                            }
                                        />
                                    </div>
                                    <div
                                        className="disabledrag profileSectionEditorButtonColorPicker mx-2"
                                        style={
                                            {
                                                // margin: "auto !important",
                                            }
                                        }
                                    >
                                        <p className="text-center">
                                            DOWNLOAD RESUME BUTTON:
                                        </p>
                                        <ChromePicker
                                            color={DButtonColorP}
                                            onChange={(updatedColor) =>
                                                // setbuttonColor(updatedColor)
                                                dispatch({
                                                    type: "dbuttoncolorp",
                                                    payload: updatedColor.hex,
                                                })
                                            }
                                        />
                                    </div>
                                </div>
                                <p className="profileSectionEditorSideHeading">Text Color:</p>

                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-around",
                                        flexWrap: "wrap",
                                    }}
                                >
                                    <div
                                        className="disabledrag profileSectionEditorButtonColorPicker mx-2"
                                        style={
                                            {
                                                // margin: "auto !important",
                                            }
                                        }
                                    >
                                        <p className="text-center">
                                            HIRE ME BUTTON:
                                        </p>
                                        <ChromePicker
                                            color={HTextColorP}
                                            onChange={(updatedColor) =>
                                                dispatch({
                                                    type: "htextcolorp",
                                                    payload: updatedColor.hex,
                                                })
                                            }
                                        />
                                    </div>
                                    {/* <div 
										className="disabledrag profileSectionEditorButtonColorPicker"
										>
										<p className=" text-centre profileSectionEditorButtonHeader">
											HIRE BUTTON COLOR:
										</p>
											<ChromePicker
												color={HTextColorP}
												onChange={(updatedColor) =>
													dispatch({type:"dtextcolorp",payload:updatedColor.hex})

													// setbuttonTextColor(updatedColor)
												}
											/>
									</div> */}
                                    {/* <div
										className="disabledrag profileSectionEditorButtonColorPicker"
									>
										<p className="text-center profileSectionEditorButtonHeader">
											DOWNLOAD BUTTON COLOR :
										</p>
										<div
											className="disabledrag"
									
										>
											<ChromePicker
												color={DTextColorP}
												onChange={(updatedColor) =>
													dispatch({type:"dtextcolorp",payload:updatedColor.hex})
													// setbuttonTextColor(updatedColor)
												}
											/>
										</div>
									</div> */}
                                    <div
                                        className="disabledrag profileSectionEditorButtonColorPicker mx-2"
                                        style={
                                            {
                                                // margin: "auto !important",
                                            }
                                        }
                                    >
                                        <p className="text-center">
                                            DOWNLOAD BUTTON COLOR:
                                        </p>
                                        <ChromePicker
                                            color={DTextColorP}
                                            onChange={(updatedColor) =>
                                                dispatch({
                                                    type: "dtextcolorp",
                                                    payload: updatedColor.hex,
                                                })
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileSectionEditor;
