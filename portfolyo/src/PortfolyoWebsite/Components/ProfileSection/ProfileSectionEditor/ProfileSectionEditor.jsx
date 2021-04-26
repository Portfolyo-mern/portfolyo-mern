import React, { useState } from 'react';
import "./ProfileSectionEditor.scss";
import CloseIcon from "@material-ui/icons/Close";
import layout1 from "../../../../assets/layout1.png";
import layout2 from "../../../../assets/layout2.png";
import profileLeft from "../../../../assets/profileLeft.png";
import profileMiddle from "../../../../assets/profileMiddle.png";
import { Button, makeStyles, TextField } from "@material-ui/core";
import FontPicker from "font-picker-react";
import { SketchPicker, ChromePicker } from "react-color";

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
        },
    },
    textfield: {
        
    }
}));

const ProfileSectionEditor = (props) => {
    
    const classes = useStyles();
    
    const [layoutDesignSelected, setlayoutDesignSelected] = useState(["porfileSectionLayoutSelected", ""]);
    const [alignmentSelected, setalignmentSelected] = useState(["porfileSectionAligmentSelected", ""]);
    const [dpStructureSelected, setdpStructureSelected] = useState(["dpStructureSelected", "", ""]);
    const [optionClicked, setoptionClicked] = useState(["", "", ""]);
    const [optionSelected, setoptionSelected] = useState([
		"",
		"btn-group__item--selected",
		"",
	]);
    const [displaySelected, setdisplaySelected] = useState(1);

    const dpStructureHandler = (index) => {
        let tempDpStructure = ["", "", ""];
        tempDpStructure[index] = "dpStructureSelected";
        setdpStructureSelected(tempDpStructure);
    }

    const layoutDesignHandler = (index) => {
        let tempLayout = ["", ""];
        tempLayout[index] = "porfileSectionLayoutSelected";
        setlayoutDesignSelected(tempLayout);
    }

    const alignmentHandler = (index) => {
        let tempAlignment = ["", ""];
        tempAlignment[index] = "porfileSectionAligmentSelected";
        setalignmentSelected(tempAlignment);
    }

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
    }

    const [fontStyle, setfontStyle] = useState("Open Sans");

    //buttons
    const [buttonStyle, setbuttonStyle] = useState(["buttonStyleSeclected", "", ""]);
    const [buttonColor, setbuttonColor] = useState("#fff");
    const [buttonTextColor, setbuttonTextColor] = useState("#fff");

    const buttonStyleHandler = (index) => {
      const temp = ["", "", ""];
      temp[index] = "buttonStyleSeclected";
      setbuttonStyle(temp);
    }

    return (
		<div
			style={{
				justifyContent: "center",
			}}
		>
			<div
				className="ProfileSectionEditorBackDrop"
				onClick={props.closeBackDrop}
			></div>
			<div className="ProfileSectionEditorMenu">
				<div className="ProfileSectionEditorHeader">
					<h3 className="ProfileSectionEditorHeading">
						Edit Profile Section
					</h3>
					<CloseIcon
						onClick={props.closeBackDrop}
						style={{
							cursor: "pointer",
						}}
					></CloseIcon>
				</div>
				<hr
					style={{
						border: "#d9d9d9 0.3px solid",
					}}
				/>
				<div className="btn-group">
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
							<div className="profileSectionEditorLayoutDesign">
								<p className="profileSectionEditorLayoutDesignHeader">
									Designs:
								</p>
								<div className="profileSectionEditorLayoutDesignStructure">
									<div
										className={`profileSectionEditorLayouts ${layoutDesignSelected[0]}`}
										onClick={() => {
											layoutDesignHandler(0);
										}}
									>
										<img src={layout1} alt="layout1"></img>
										<p>Layout-1</p>
									</div>
									<div
										className={`profileSectionEditorLayouts ${layoutDesignSelected[1]}`}
										onClick={() => {
											layoutDesignHandler(1);
										}}
									>
										<img src={layout2} alt="layout2"></img>
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
										}}
									>
										<img src={profileLeft} alt="layout1"></img>
										<p>Left Alignment</p>
									</div>
									<div
										className={`profileSectionEditorLayouts ${alignmentSelected[1]}`}
										onClick={() => {
											alignmentHandler(1);
										}}
									>
										<img src={profileMiddle} alt="layout2"></img>
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
            <div style={{
              padding: "1rem"
            }}>
              <p className="profileSectionEditorLayoutDesignHeader">
                Text's and Font's:
              </p>
              <form
                className={classes.root}
                noValidate
                autoComplete="off"
              >
                <div className="profileSectionEditorText">
                  <div className="profileSectionEditorTextDiv">
                    <TextField
                      style={{
                        fontFamily: { fontStyle },
                      }}
                      id="firstnameInput"
                      label="First Name"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  </div>
                  <div className="profileSectionEditorFontPickerDiv">
                    <FontPicker
                      className="profileSectionEditorFontpicker"
                      apiKey="AIzaSyA4zVMDlSV-eRzbGR5BFqvbHqz3zV-OLd0"
                      activeFontFamily={fontStyle}
                      onChange={(nextFont) =>
                        setfontStyle(nextFont.family)
                      }
                    />
                  </div>
                </div>
                <div className="profileSectionEditorText">
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
                  <div className="profileSectionEditorFontPickerDiv">
                    <FontPicker
                      className="profileSectionEditorFontpicker"
                      apiKey="AIzaSyA4zVMDlSV-eRzbGR5BFqvbHqz3zV-OLd0"
                      activeFontFamily={fontStyle}
                      onChange={(nextFont) =>
                        setfontStyle(nextFont.family)
                      }
                    />
                  </div>
                </div>
                <div className="profileSectionEditorText">
                  <div className="profileSectionEditorTextDiv">
                    <TextField
                      id="tagline"
                      label="Tagline"
                      variant="outlined"
                      placeholder="Your Tagline"
                      fullWidth
                      multiline
                    />
                  </div>
                  <div className="profileSectionEditorFontPickerDiv">
                    <FontPicker
                      className="profileSectionEditorFontpicker"
                      apiKey="AIzaSyA4zVMDlSV-eRzbGR5BFqvbHqz3zV-OLd0"
                      activeFontFamily={fontStyle}
                      onChange={(nextFont) =>
                        setfontStyle(nextFont.family)
                      }
                    />
                  </div>
                </div>
                <div className="profileSectionEditorText">
                  <div className="profileSectionEditorTextDiv">
                    <TextField
                      className={classes.textfield}
                      id="locationInput"
                      label="Location"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  </div>
                  <div className="profileSectionEditorFontPickerDiv">
                    <FontPicker
                      className="profileSectionEditorFontpicker"
                      apiKey="AIzaSyA4zVMDlSV-eRzbGR5BFqvbHqz3zV-OLd0"
                      activeFontFamily={fontStyle}
                      onChange={(nextFont) =>
                        setfontStyle(nextFont.family)
                      }
                    />
                  </div>
                </div>

                {/* <TextField
                    className={classes.textfield}
                    id="lastnameInput"
                    label="Last Name"
                    variant="outlined"
                    required
                  />
                  <TextField
                    id="tagline"
                    label="Tagline"
                    variant="outlined"
                    placeholder="Your Tagline"
                    multiline
                  />
                  <TextField
                    className={classes.textfield}
                    id="locationInput"
                    label="Location"
                    variant="outlined"
                    required
                  /> */}
              </form>
            </div>
					) : (
						<div className="profileSectionEditorButton">
							<p className="profileSectionEditorButtonHeader">
								Button Style:
							</p>
							<div className="profileSectionEditorButtonMenu">
								<div
									className={`profileSectionEditorButtonStyle ${buttonStyle[0]}`}
									onClick={() => buttonStyleHandler(0)}
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
									className={`profileSectionEditorButtonStyle ${buttonStyle[1]}`}
								>
									<Button
										className=""
										color="secondary"
										onClick={() => buttonStyleHandler(1)}
									>
										Text Button
									</Button>
								</div>
								<div
									className={`profileSectionEditorButtonStyle ${buttonStyle[2]}`}
									onClick={() => buttonStyleHandler(2)}
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
							<p className="profileSectionEditorButtonHeader">
								Button Color:
							</p>
							<div
								className="profileSectionEditorButtonColorPicker"
								style={{
									margin: "auto !important",
								}}
							>
								<ChromePicker
									color={buttonColor}
									onChange={(updatedColor) =>
										setbuttonColor(updatedColor)
									}
								/>
							</div>
							<p className="profileSectionEditorButtonHeader">
								Text Color:
							</p>
							<div
								className="profileSectionEditorButtonTextColorPicker"
								style={{
									margin: "auto !important",
								}}
							>
								<ChromePicker
									color={buttonTextColor}
									onChange={(updatedColor) =>
										setbuttonTextColor(updatedColor)
									}
								/>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default ProfileSectionEditor;