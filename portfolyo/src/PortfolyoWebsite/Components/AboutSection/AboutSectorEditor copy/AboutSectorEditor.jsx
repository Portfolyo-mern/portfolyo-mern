import React,{ useEffect, useState } from 'react';
import "./AboutSectorEditor.scss";
import aboutBackground1 from "../../../../assets/aboutLayout1.png";
import aboutBackground2 from "../../../../assets/aboutLayout2.png";
import aboutLayoutDesign1 from "../../../../assets/aboutDesign1.png";
import aboutLayoutDesign2 from "../../../../assets/aboutDesign2.png";
import aboutLayoutDesign3 from "../../../../assets/aboutDesign3.png";
import aboutLayoutDesign4 from "../../../../assets/aboutDesign4.png";
import transitionFade from "../../../../assets/transitionFade.png";
import transitionFlip from "../../../../assets/transitionFlip.png";
import transitionZoom from "../../../../assets/transitionZoom.png";
import { ChromePicker } from 'react-color';
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import TextField from "@material-ui/core/TextField";
import FontPicker from 'font-picker-react';
import { useDispatch, useSelector } from 'react-redux';
import rgbHex from 'rgb-hex';
import clsx from "clsx";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";

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
		'&:hover': {
			backgroundColor: 'transparent',
		},
	},
	icon: {
    borderRadius: '50%',
    width: 16,
    height: 16,
    boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
  },
  checkedIcon: {
    backgroundColor: '#137cbd',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#106ba3',
    },
  },
}));

function StyledRadio(props) {
	const classes = useStyles();

	return (
		<Radio
			className={classes.root}
			disableRipple
			color="default"
			checkedIcon={
				<span className={clsx(classes.icon, classes.checkedIcon)} />
			}
			icon={<span className={classes.icon} />}
			{...props}
		/>
	);
}

const AboutSectorEditor = () => {

	//redux
	const dispatch = useDispatch();

    //buttons
    const [optionClicked, setoptionClicked] = useState(["", "", ""]);
	const [optionSelected, setoptionSelected] = useState([
		"btn-group__item--selected",
		"",
		"",
	]);
    const [displaySelected, setdisplaySelected] = useState(0);
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

	//layout backgrounds 
	const aboutBackgroundLayoutRedux = useSelector(
		(state) => state.aboutSectionBackground.backgroundType
	);
	const [layoutBackgroundSelected, setlayoutBackgroundSelected] = useState(["aboutSectionBackgroundSelected", "", ""]);
	const aboutSectionBackgroundHandler = (index) => {
		const temp = ["", "", ""];
		temp[index] = "aboutSectionBackgroundSelected";
		setlayoutBackgroundSelected(temp);
		dispatch({
			type: "aboutSectionBackgroundChange",
			payload: index,
		});
	}

	//layout Background Colors
	const aboutBackgroundColorRedux = useSelector(
		(state) => state.aboutSectionBackground.backgroundColor
	);
	const [layoutBackgroundColor, setlayoutBackgroundColor] = useState(
		aboutBackgroundColorRedux
	);

	const layoutBackgroundColorHandler = (color) => {
		setlayoutBackgroundColor(color);
		dispatch({
			type: "aboutSectionBackgroundColorChange",
			payload: color,
		});
	}

	//layout Designs
	const layoutDesignSelectedRedux = useSelector(
		(state) => state.aboutSectionBackground.backgroundDesignType
	);
	const [layoutDesignSelected, setlayoutDesignSelected] = useState(["aboutSectionLayoutDesignSelected", "", "", ""]);
	const layoutDesignHandler = (index) => {
		const temp = ["", "", "", ""];
		temp[index] = "aboutSectionLayoutDesignSelected";
		setlayoutDesignSelected(temp);
		dispatch({
			type: "aboutSectionBackgroundDesignChange",
			payload: index
		});
	}

	const aboutImageBorderColorRedux = useSelector(
		(state) => state.aboutSectionBackground.imageBorderColor
	);

	const [aboutImageBorderColor, setaboutImageBorderColor] = useState(
		aboutImageBorderColorRedux
	);

	const aboutImageBorderColorHandler = (color) => {
		setaboutImageBorderColor(color);
		dispatch({
			type: "aboutSectionImageBorderColor",
			payload: color.hex
		});
	};

	//transitions

	const transitiontypeRedux = useSelector(
		(state) => state.aboutSectionBackground.backgroundTransition
	);
	const classes = useStyles();
	const [transitionStyle, settransitionStyle] = useState(transitiontypeRedux);

	const transitionStyleHandler = (event) => {
		settransitionStyle(event.target.value);
	};

	const [transitionSelected, settransitionSelected] = useState(["aboutSectionTrasitionSelected","", "", ""]);

	const transitionSectionHandler = (index, event) => {
		if(index === 0){
			settransitionStyle("none");
			dispatch({
				type: "aboutSectionTransitionChanger",
				payload: "none"
			});
			return;
		}
		const temp = ["", "", "", ""];
		temp[index] = "aboutSectionTrasitionSelected";
		settransitionSelected(temp);
		settransitionStyle(event.target.value);
		dispatch({
			type: "aboutSectionTransitionChanger",
			payload: event.target.value,
		});
	}


	//text fonts and styles
	const [fontStyle, setfontStyle] = useState("Open Sans");

	const aboutTitleRedux = useSelector(
		(state) => state.aboutSectionBackground.aboutSectionTitle
	);
	const aboutIntroRedux = useSelector(
		(state) => state.aboutSectionBackground.aboutSectionIntro
	);
	const aboutPassageRedux = useSelector(
		(state) => state.aboutSectionBackground.aboutSectionPassage
	);
	const aboutImageTitleRedux = useSelector(
		(state) => state.aboutSectionBackground.aboutSectionImageTitle
	);
	const aboutSocialMediaTitleRedux = useSelector(
		(state) => state.aboutSectionBackground.aboutSectionSocialMediaTitle
	);
	const aboutSectionBasicInfoRedux = useSelector(
		(state) => state.aboutSectionBackground.aboutSectionBasicInfo
	);
	const aboutSectionSocialMediaLinksRedux = useSelector(
		(state) => state.aboutSectionBackground.aboutSectionSocialMediaLinks
	);

	const aboutTitleTextReduxHandler = (event) => {
		dispatch({

		})
	}
	
	const aboutTitleAlignment = useSelector(
		(state) => state.aboutSectionBackground.aboutSectionTitleAlignment
	);

	const aboutTitleAlignmentHandler = (event) => {
		dispatch({
			type: "aboutSectionTitleAlignmentChanger",
			payload: event.target.value
		});
	}
	

	useEffect(() => {
		aboutSectionBackgroundHandler(aboutBackgroundLayoutRedux);
		layoutDesignHandler(layoutDesignSelectedRedux);
	}, [])

    return (
		<div className="aboutSectionEditorPage">
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
					Design's Effect's
				</button>
				<button
					className={`btn-group__item ${optionClicked[2]} ${optionSelected[2]}`}
					onClick={() => optionClickedHandlers(2)}
				>
					Text
				</button>
			</div>
			{displaySelected === 0 ? (
				<div className="aboutSectionEditorLayoutOptions">
					<p className="aboutSectionEditorHeader">Backgrounds:</p>
					<div className="aboutSectionEditorLayoutBackground">
						<div
							className={`aboutSectionEditorLayoutBackgrounds ${layoutBackgroundSelected[0]}`}
							onClick={() => {
								aboutSectionBackgroundHandler(0);
								// dispatch({ type: "layoutp", payload: 1 });
							}}
						>
							<img src={aboutBackground1} alt="background1"></img>
							<p>Background-1</p>
						</div>
						<div
							className={`aboutSectionEditorLayoutBackgrounds ${layoutBackgroundSelected[1]}`}
							onClick={() => {
								aboutSectionBackgroundHandler(1);
								// dispatch({ type: "layoutp", payload: 2 });
							}}
						>
							<img src={aboutBackground2} alt="background2"></img>
							<p>Background-2</p>
						</div>
						<div
							className={`aboutSectionEditorLayoutBackgrounds ${layoutBackgroundSelected[2]}`}
							onClick={() => {
								aboutSectionBackgroundHandler(2);
								// dispatch({ type: "layoutp", payload: 2 });
							}}
						>
							<div className="aboutSectionEditorLayoutBackground3">
								<p
									style={{
										margin: "auto",
										marginTop: "auto",
										verticalAlign: "middle",
										display: "block",
									}}
								>
									None
								</p>
							</div>
							<p>Background-3</p>
						</div>
					</div>
					<p className="aboutSectionEditorHeader">
						Background Color:
					</p>
					<div className="aboutSectionBackgrounColor">
						<div className="aboutSectionBackgroundColorPicker disabledrag">
							<ChromePicker
								color={layoutBackgroundColor}
								onChange={(newColor) => {
									layoutBackgroundColorHandler(
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
				</div>
			) : displaySelected === 1 ? (
				<div className="aboutSectionDesignEditor">
					<p className="aboutSectionEditorHeader">Design:</p>
					<div className="aboutSectionEditorLayoutDesign">
						<div
							className={`aboutSectionEditorLayoutDesigns ${layoutDesignSelected[0]}`}
							onClick={() => {
								layoutDesignHandler(0);
								// dispatch({ type: "layoutp", payload: 1 });
							}}
						>
							<img
								src={aboutLayoutDesign1}
								alt="aboutLayoutDesign1"
							></img>
							<p>Design-1</p>
						</div>
						<div
							className={`aboutSectionEditorLayoutDesigns ${layoutDesignSelected[1]}`}
							onClick={() => {
								layoutDesignHandler(1);
								// dispatch({ type: "layoutp", payload: 2 });
							}}
						>
							<img
								src={aboutLayoutDesign2}
								alt="aboutLayoutDesign2"
							></img>
							<p>Design-2</p>
						</div>
						<div
							className={`aboutSectionEditorLayoutDesigns ${layoutDesignSelected[2]}`}
							onClick={() => {
								layoutDesignHandler(2);
								// dispatch({ type: "layoutp", payload: 2 });
							}}
						>
							<img
								src={aboutLayoutDesign3}
								alt="aboutLayoutDesign3"
							></img>
							<p>Design-3</p>
						</div>
						<div
							className={`aboutSectionEditorLayoutDesigns ${layoutDesignSelected[3]}`}
							onClick={() => {
								layoutDesignHandler(3);
								// dispatch({ type: "layoutp", payload: 2 });
							}}
						>
							<img
								src={aboutLayoutDesign4}
								alt="aboutLayoutDesign4"
							></img>
							<p>Design-4</p>
						</div>
					</div>
					<p className="aboutSectionEditorHeader">
						Image Border Color:
					</p>
					<div className="aboutSectionImageBorderColor">
						<div className="aboutSectionImageBorderColorPicker disabledrag">
							<ChromePicker
								color={aboutImageBorderColor}
								onChange={(newColor) => {
									aboutImageBorderColorHandler(newColor);
								}}
							></ChromePicker>
						</div>
					</div>
					<p className="aboutSectionEditorHeader">Transitions:</p>
					<div className="aboutSectionTransitionEditor">
						<div
							className={`aboutSectionTransitionsNone ${transitionSelected[0]}`}
							onClick={() => {
								transitionSectionHandler(0, null);
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
							className={`aboutSectionTransitions ${transitionSelected[1]}`}
							onClick={(event) => {
								transitionSectionHandler(1, event);
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
									value={transitionStyle}
									onChange={transitionStyleHandler}
									label="Age"
									inputProps={{
										name: "age",
										id: "outlined-age-native-simple",
									}}
								>
									<option value={"fade-up"}>Fade Up</option>
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
							className={`aboutSectionTransitions ${transitionSelected[2]}`}
							onClick={(event) => {
								transitionSectionHandler(2, event);
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
									value={transitionStyle}
									onChange={transitionStyleHandler}
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
									<option value={"flip-up"}>Flip Up</option>
									<option value={"flip-down"}>
										Flip Down
									</option>
								</Select>
							</FormControl>
						</div>
						<div
							className={`aboutSectionTransitions ${transitionSelected[3]}`}
							onClick={(event) => {
								transitionSectionHandler(3, event);
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
									value={transitionStyle}
									onChange={(event) => {
										transitionSectionHandler(3, event);
									}}
									label="Age"
									inputProps={{
										name: "age",
										id: "outlined-age-native-simple",
									}}
								>
									<option value={"zoom-in"}>Zoom In</option>
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
			) : displaySelected === 2 ? (
				<div>
					<p className="aboutSectionEditorHeader">
						Text, Font and Color's
					</p>
					<hr />
					<div className="aboutSectionEditorTexts">
						<p>About title</p>
						<div className="aboutSectionEditorTextsAboutTitle">
							<div className="aboutSectionEditorTextsAboutTitleTextDiv">
								<TextField
									required
									fullWidth
									id="outlined-required"
									label="About Title"
									defaultValue={aboutTitleRedux.text}
									variant="outlined"
									className="disabledrag"
									onChange={(event) => {
										dispatch({
											type: "aboutSectionTitleTextChange",
											payload: event.target.value,
										});
									}}
								/>
							</div>
							<FontPicker
								className="aboutSectionEditorFontpicker disabledrag"
								apiKey="AIzaSyA4zVMDlSV-eRzbGR5BFqvbHqz3zV-OLd0"
								activeFontFamily={aboutTitleRedux.fontStyle}
								limit={100}
								onChange={(nextFont) => {
									setfontStyle(nextFont.family);
									dispatch({
										type:
											"aboutSectionTitleFontStyleChange",
										payload: nextFont.family,
									});
								}}
							/>
							<Input
								type="color"
								className="aboutSectionEditorTextsColor"
								value={aboutTitleRedux.color}
								onChange={(event) => {
									dispatch({
										type: "aboutSectionTitleColorChange",
										payload: event.target.value,
									});
								}}
							></Input>
						</div>
						<FormControl component="fieldset">
							<FormLabel component="legend">
								About title Alignment:
							</FormLabel>
							<RadioGroup
								defaultValue="left"
								aria-label="gender"
								name="aboutTitleAlignmentRadios"
								value={aboutTitleAlignment}
								onChange={aboutTitleAlignmentHandler}
							>
								<FormControlLabel
									value="left"
									control={<StyledRadio />}
									label="Left"
								/>
								<FormControlLabel
									value="middle"
									control={<StyledRadio />}
									label="Middle"
								/>
							</RadioGroup>
						</FormControl>
						<p>Image Title</p>
						<div className="aboutSectionEditorTextsImageTitle">
							<div className="aboutSectionEditorTextsImageTitleTextDiv">
								<TextField
									fullWidth
									required
									id="outlined-required"
									label="Image Title"
									defaultValue={aboutImageTitleRedux.text}
									variant="outlined"
									className="disabledrag"
									onChange={(event) => {
										dispatch({
											type:
												"aboutSectionImageTitleTextChange",
											payload: event.target.value,
										});
									}}
								/>
							</div>
							<FontPicker
								className="aboutSectionEditorFontpicker disabledrag"
								apiKey="AIzaSyA4zVMDlSV-eRzbGR5BFqvbHqz3zV-OLd0"
								pickerId="aboutSectionEditorImageTitleFontpicker"
								activeFontFamily={
									aboutImageTitleRedux.fontStyle
								}
								limit={100}
								onChange={(nextFont) => {
									dispatch({
										type:
											"aboutSectionImageTitleFontStyleChange",
										payload: nextFont.family,
									});
								}}
							/>
							<Input
								type="color"
								value={aboutImageTitleRedux.color}
								className="aboutSectionEditorTextsColor"
								onChange={(event) => {
									dispatch({
										type:
											"aboutSectionImageTitleColorChange",
										payload: event.target.value,
									});
								}}
							></Input>
						</div>
						<p>Self Intro:</p>
						<div className="aboutSectionEditorTextsIntro">
							<div className="aboutSectionEditorTextsIntroTextDiv">
								<TextField
									fullWidth
									required
									id="outlined-multiline-static"
									multiline
									label="Introduce Yourself"
									defaultValue={aboutIntroRedux.text}
									variant="outlined"
									className="disabledrag"
									onChange={(event) => {
										dispatch({
											type: "aboutSectionIntroTextChange",
											payload: event.target.value,
										});
									}}
								/>
							</div>
							<FontPicker
								className="aboutSectionEditorIntroFontpicker disabledrag"
								pickerId="aboutSectionEditorIntroFontpicker"
								apiKey="AIzaSyA4zVMDlSV-eRzbGR5BFqvbHqz3zV-OLd0"
								activeFontFamily={aboutIntroRedux.fontStyle}
								limit={100}
								onChange={(nextFont) => {
									/* setfontStyle(nextFont.family); */
									dispatch({
										type:
											"aboutSectionIntroFontStyleChange",
										payload: nextFont.family,
									});
								}}
							/>
							<Input
								type="color"
								className="aboutSectionEditorTextsColor"
								value={aboutIntroRedux.color}
								onChange={(event) => {
									dispatch({
										type: "aboutSectionIntroColorChange",
										payload: event.target.value,
									});
								}}
							></Input>
						</div>
						<p>About Yourself:</p>
						<div className="aboutSectionEditorTextsIntro">
							<div className="aboutSectionEditorTextsIntroTextDiv">
								<TextField
									fullWidth
									required
									id="outlined-multiline-static"
									multiline
									label="About Yourself"
									defaultValue={aboutPassageRedux.text}
									variant="outlined"
									className="disabledrag"
									onChange={(event) => {
										dispatch({
											type:
												"aboutSectionPassageTextChange",
											payload: event.target.value,
										});
									}}
								/>
							</div>
							<FontPicker
								className="aboutSectionEditorIntroFontpicker disabledrag"
								pickerId="aboutSectionEditorPassageFontpicker"
								apiKey="AIzaSyA4zVMDlSV-eRzbGR5BFqvbHqz3zV-OLd0"
								activeFontFamily={aboutIntroRedux.fontStyle}
								limit={100}
								onChange={(nextFont) => {
									/* setfontStyle(nextFont.family); */
									dispatch({
										type:
											"aboutSectionPassageFontStyleChange",
										payload: nextFont.family,
									});
								}}
							/>
							<Input
								type="color"
								className="aboutSectionEditorTextsColor"
								value={aboutIntroRedux.color}
								onChange={(event) => {
									dispatch({
										type: "aboutSectionPassageColorChange",
										payload: event.target.value,
									});
								}}
							></Input>
						</div>
						<p>Basic Information Section:</p>
						<div className="aboutSectionEditorBasicInfo">
							<p>Basic Info Title:</p>
							<div
								className="aboutSectionEditorBasicInfoTitle"
								style={{
									borderLeft: "#3af25f 2px solid",
								}}
							>
								<div className="aboutSectionEditorBasicInfoTitleTextDiv">
									<TextField
										fullWidth
										required
										id="outlined-required"
										label="Basic-Info Title"
										defaultValue={
											aboutSectionBasicInfoRedux.title
												.text
										}
										variant="outlined"
										className="disabledrag"
										onChange={(event) => {
											dispatch({
												type:
													"aboutSectionBasicInfoTitleTextChange",
												payload: event.target.value,
											});
										}}
									/>
								</div>
								<FontPicker
									className="aboutSectionEditorFontpicker disabledrag"
									apiKey="AIzaSyA4zVMDlSV-eRzbGR5BFqvbHqz3zV-OLd0"
									limit={100}
									pickerId="aboutSectionEditorBasicInfoTitleFontpicker"
									activeFontFamily={
										aboutSectionBasicInfoRedux.title
											.fontStyle
									}
									onChange={(nextFont) => {
										dispatch({
											type:
												"aboutSectionBasicInfoTitleFontStyleChange",
											payload: nextFont.family,
										});
									}}
								/>
								<Input
									type="color"
									value={
										aboutSectionBasicInfoRedux.title.color
									}
									className="aboutSectionEditorTextsColor"
									onChange={(event) => {
										dispatch({
											type:
												"aboutSectionBasicInfoTitleColorChange",
											payload: event.target.value,
										});
									}}
								></Input>
							</div>
							<p>Key Font's and Color's:</p>
							<div
								className="aboutSectionEditorBasicInfoKeys"
								style={{
									borderLeft: "#3af25f 2px solid",
								}}
							>
								<FontPicker
									className="aboutSectionEditorFontpicker disabledrag"
									apiKey="AIzaSyA4zVMDlSV-eRzbGR5BFqvbHqz3zV-OLd0"
									pickerId="aboutSectionBasicInfoKeysFontStyle"
									activeFontFamily={
										aboutSectionBasicInfoRedux.keys
											.fontStyle
									}
									limit={100}
									onChange={(nextFont) => {
										dispatch({
											type:
												"aboutSectionBasicInfoKeysFontStylesChange",
											payload: nextFont.family,
										});
									}}
								/>
								<Input
									value={
										aboutSectionBasicInfoRedux.keys.color
									}
									type="color"
									className="aboutSectionEditorTextsColor"
									onChange={(event) => {
										dispatch({
											type:
												"aboutSectionBasicInfoKeysColorChange",
											payload: event.target.value,
										});
									}}
								></Input>
							</div>
							<p>Values:</p>
							<div
								className="aboutSectionEditorBasicInfoValues"
								style={{
									borderLeft: "#3af25f 2px solid",
									padding: "1rem",
								}}
							>
								<div
									className="aboutSectionEditorBasicInfoValuesdiv"
									style={{
										borderLeft: "#f55142 2px solid",
									}}
								>
									<div className="aboutSectionEditorBasicInfoValuesdivText">
										<TextField
											required
											fullWidth
											id="outlined-required"
											label="Age"
											variant="outlined"
											className="disabledrag"
											defaultValue={
												aboutSectionBasicInfoRedux
													.values.text.age
											}
											onChange={(event) => {
												dispatch({
													type:
														"aboutSectionBasicInfoValuesTextAgeChange",
													payload: event.target.value,
												});
											}}
										/>
									</div>
								</div>
								<div
									className="aboutSectionEditorBasicInfoValuesdiv"
									style={{
										borderLeft: "#f55142 2px solid",
									}}
								>
									<div className="aboutSectionEditorBasicInfoValuesdivText">
										<TextField
											required
											fullWidth
											id="outlined-required"
											label="Email"
											defaultValue={
												aboutSectionBasicInfoRedux
													.values.text.email
											}
											onChange={(event) => {
												dispatch({
													type:
														"aboutSectionBasicInfoValuesTextEmailChange",
													payload: event.target.value,
												});
											}}
											variant="outlined"
											className="disabledrag"
										/>
									</div>
								</div>
								<div
									className="aboutSectionEditorBasicInfoValuesdiv"
									style={{
										borderLeft: "#f55142 2px solid",
									}}
								>
									<div className="aboutSectionEditorBasicInfoValuesdivText">
										<TextField
											required
											fullWidth
											id="outlined-required"
											label="Phone"
											defaultValue={
												aboutSectionBasicInfoRedux
													.values.text.phone
											}
											onChange={(event) => {
												dispatch({
													type:
														"aboutSectionBasicInfoValuesTextPhoneChange",
													payload: event.target.value,
												});
											}}
											variant="outlined"
											className="disabledrag"
										/>
									</div>
								</div>
								<div
									className="aboutSectionEditorBasicInfoValuesdiv"
									style={{
										borderLeft: "#f55142 2px solid",
									}}
								>
									<div
										className="aboutSectionEditorBasicInfoValuesdivText"
										style={{
											width: "70%",
										}}
									>
										<TextField
											fullWidth
											required
											id="outlined-required"
											label="Address"
											multiline
											defaultValue={
												aboutSectionBasicInfoRedux
													.values.text.address
											}
											onChange={(event) => {
												dispatch({
													type:
														"aboutSectionBasicInfoValuesTextAddressChange",
													payload: event.target.value,
												});
											}}
											variant="outlined"
											className="disabledrag"
										/>
									</div>
								</div>
								<div
									className="aboutSectionEditorBasicInfoValuesdiv"
									style={{
										borderLeft: "#f55142 2px solid",
									}}
								>
									<div className="aboutSectionEditorBasicInfoValuesdivText">
										<TextField
											fullWidth
											required
											id="outlined-required"
											label="Language"
											defaultValue={
												aboutSectionBasicInfoRedux
													.values.text.languages
											}
											onChange={(event) => {
												dispatch({
													type:
														"aboutSectionBasicInfoValuesTextLanguagesChange",
													payload: event.target.value,
												});
											}}
											variant="outlined"
											className="disabledrag"
										/>
									</div>
								</div>
								<p>Values Font's and Color's:</p>
								<div
									className="aboutSectionEditorBasicInfoValuesdiv"
									style={{
										borderLeft: "#f55142 2px solid",
									}}
								>
									<FontPicker
										className="aboutSectionEditorFontpicker disabledrag"
										apiKey="AIzaSyA4zVMDlSV-eRzbGR5BFqvbHqz3zV-OLd0"
										limit={100}
										pickerId="aboutSectionEditorBasicInfoValuesFontpicker"
										activeFontFamily={
											aboutSectionBasicInfoRedux.values
												.fontStyle
										}
										onChange={(nextFont) => {
											dispatch({
												type:
													"aboutSectionBasicInfoValuesFontStyleChange",
												payload: nextFont.family,
											});
										}}
									/>
									<Input
										type="color"
										className="aboutSectionEditorTextsColor"
										value={
											aboutSectionBasicInfoRedux.values
												.color
										}
										onChange={(event) => {
											dispatch({
												type:
													"aboutSectionBasicInfoValuesColorChange",
												payload: event.target.value,
											});
										}}
									></Input>
								</div>
							</div>
						</div>
						<p
							style={{
								marginTop: "2rem",
							}}
						>
							Social Media Links:
						</p>
						<div className="aboutSectionEditorSocialMediaLinks">
							<div className="aboutSectionEditorSocialMediaTitledivText">
								<div className="aboutSectionEditorTextsIntroTextDiv">
									<TextField
										fullWidth
										required
										id="outlined-multiline-static"
										multiline
										label="Introduce Yourself"
										defaultValue={
											aboutSocialMediaTitleRedux.text
										}
										variant="outlined"
										className="disabledrag"
										onChange={(event) => {
											dispatch({
												type:
													"aboutSectionSocialMediaTitleTextChange",
												payload: event.target.value,
											});
										}}
									/>
								</div>
								<FontPicker
									className="aboutSectionEditorIntroFontpicker disabledrag"
									pickerId="aboutSectionEditorSociamMediaTitleFontpicker"
									apiKey="AIzaSyA4zVMDlSV-eRzbGR5BFqvbHqz3zV-OLd0"
									activeFontFamily={
										aboutSocialMediaTitleRedux.fontStyle
									}
									limit={100}
									onChange={(nextFont) => {
										/* setfontStyle(nextFont.family); */
										dispatch({
											type:
												"aboutSectionSocialMediaTitleFontStyleChange",
											payload: nextFont.family,
										});
									}}
								/>
								<Input
									type="color"
									className="aboutSectionEditorTextsColor"
									value={aboutSocialMediaTitleRedux.color}
									onChange={(event) => {
										dispatch({
											type:
												"aboutSectionSocialMediaTitleColorChange",
											payload: event.target.value,
										});
									}}
								></Input>
							</div>
							<div className="aboutSectionEditorTextsAboutTitleTextDiv">
								<TextField
									required
									fullWidth
									id="outlined-required"
									label="Instagram"
									defaultValue={
										aboutSectionSocialMediaLinksRedux.instagram
									}
									onChange={(event) => {
										dispatch({
											type:
												"aboutSectionSocialMediaInstagramChange",
											payload: event.target.value,
										});
									}}
									variant="outlined"
									className="disabledrag"
								/>
							</div>
							<div className="aboutSectionEditorTextsAboutTitleTextDiv">
								<TextField
									required
									fullWidth
									id="outlined-required"
									label="Gmail"
									defaultValue={
										aboutSectionSocialMediaLinksRedux.gmail
									}
									onChange={(event) => {
										dispatch({
											type:
												"aboutSectionSocialMediaGmailChange",
											payload: event.target.value,
										});
									}}
									variant="outlined"
									className="disabledrag"
								/>
							</div>
							<div className="aboutSectionEditorTextsAboutTitleTextDiv">
								<TextField
									required
									fullWidth
									id="outlined-required"
									label="LinkedIn"
									defaultValue={
										aboutSectionSocialMediaLinksRedux.linkedIn
									}
									onChange={(event) => {
										dispatch({
											type:
												"aboutSectionSocialMediaLinkedInChange",
											payload: event.target.value,
										});
									}}
									variant="outlined"
									className="disabledrag"
								/>
							</div>
							<div className="aboutSectionEditorTextsAboutTitleTextDiv">
								<TextField
									required
									fullWidth
									id="outlined-required"
									label="GitHub"
									defaultValue={
										aboutSectionSocialMediaLinksRedux.github
									}
									onChange={(event) => {
										dispatch({
											type:
												"aboutSectionSocialMediaGitHubChange",
											payload: event.target.value,
										});
									}}
									variant="outlined"
									className="disabledrag"
								/>
							</div>
						</div>
					</div>
				</div>
			) : null}
		</div>
	);
}

export default AboutSectorEditor;
