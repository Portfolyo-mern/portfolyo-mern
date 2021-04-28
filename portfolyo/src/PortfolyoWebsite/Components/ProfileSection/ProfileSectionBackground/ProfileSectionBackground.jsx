import React, { useRef, useState } from 'react';
import "./ProfileSectionBackground.scss";
import CloseIcon from "@material-ui/icons/Close";
import AvatarEditor from 'react-avatar-editor';
import AvatarCrop from "../AvatarCrop";
import profileBackground1 from "../../../../assets/profileBackground1.png";
import profileBackground2 from "../../../../assets/profileBackground2.png";
import profileBackground3 from "../../../../assets/profileBackground3.png";
import profileBackground4 from "../../../../assets/profileBackground4.png";
import { useSelector, useDispatch } from "react-redux";


const ProfileSectionBackground = (props) => {
	//toggle-buttons
	const [optionClicked, setoptionClicked] = useState(["", ""]);
	const [optionSelected, setoptionSelected] = useState([
		"",
		"btn-group__item--selected",
	]);
	const [displaySelected, setdisplaySelected] = useState(1);

	const optionClickedHandlers = (index) => {
		let tempOption = ["", ""];
		tempOption[index] = "btn-group__item--active";
		let tempSelected = ["", ""];
		tempSelected[index] = "btn-group__item--selected";
		setoptionClicked(tempOption);
		setTimeout(() => {
			setoptionClicked(["", ""]);
		}, 600);
		setoptionSelected(tempSelected);
		setdisplaySelected(index);
	};

	const encryptWordsHandlers = (e, index) => {};

	/* const [useBecruptWords, setuseBecruptWords] = useState(["Hardworking", "Compititive", "Smart", "Intellignet"]); */
	//scroll
	const myRef = useRef(null);

	const executeScroll = () => myRef.current.scrollIntoView();

	const titleRef = useRef();
	function handleBackClick() {
		titleRef.current.scrollIntoView({ behavior: "smooth" });
	}

	//redux
	const profileSectionBackground = useDispatch();

	const useEncryptWords = useSelector(
		(state) => state.encryptBackgroundWords
	);

	//redux
	const selectedBackground = useSelector(
		(state) => state.profileSectionBackground
	);
	const customColorBackground = useSelector(
		(state) => state.profileSectionBackgroundColor
	);

	//preloaded backgrounds
	const [backgroundSelected, setbackgroundSelected] = useState(
		selectedBackground
	);

	return (
		<div
			className="profileSectionBackgroundBackdrop"
			onClick={props.closeBackDrop}
		>
			<div
				className="profileSectionBackgroundEditor"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="profileSectionBackgroundEditorHeader">
					<h3 className="profileSectionBackgroundEditorHeading">
						Edit BackGround Image
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
						PreLoaded
					</button>
					{/* 
					<button
						className={`btn-group__item ${optionClicked[1]} ${optionSelected[1]}`}
						onClick={() => optionClickedHandlers(1)}
					>
						Text
					</button> */}
					<button
						className={`btn-group__item ${optionClicked[1]} ${optionSelected[1]}`}
						onClick={() => optionClickedHandlers(1)}
					>
						Upload
					</button>
				</div>
				<div className="backgroundLoaderLayout">
					{displaySelected === 0 ? (
						<div className="preLoadedBackGroundsSelector">
							<p className="preLoadedBackGroundsSelectorHeader">
								Select the Background:
							</p>
							<div
								className={`preLoadedBackGroundsSelectorOptionDiv ${
									backgroundSelected === 0
										? `preLoadedBackGroundsSelectorOptionDivSelected`
										: ``
								}`}
								onClick={() => {
									setbackgroundSelected(0);
									profileSectionBackground({
										type: "setBackground",
										payload: 0,
									});
								}}
							>
								<img
									src={profileBackground1}
									alt="back ground 1"
									className="preLoadedBackGroundsSelectorOption"
								></img>
							</div>
							<div
								className={`preLoadedBackGroundsSelectorOptionDiv ${
									backgroundSelected === 1
										? `preLoadedBackGroundsSelectorOptionDivSelected`
										: ``
								}`}
								onClick={() => {
									setbackgroundSelected(1);
									profileSectionBackground({
										type: "setBackground",
										payload: 1,
									});
								}}
							>
								<img
									src={profileBackground2}
									alt="back ground 2"
									className="preLoadedBackGroundsSelectorOption"
								></img>
							</div>
							<div
								className={`preLoadedBackGroundsSelectorOptionDiv ${
									backgroundSelected === 2
										? `preLoadedBackGroundsSelectorOptionDivSelected`
										: ``
								}`}
								onClick={() => {
									handleBackClick();
									setbackgroundSelected(2);
									profileSectionBackground({
										type: "setBackground",
										payload: 2,
									});
								}}
							>
								<img
									src={profileBackground3}
									alt="back ground 3"
									className="preLoadedBackGroundsSelectorOption"
								></img>
								{backgroundSelected === 2 ? (
									<React.Fragment>
										<p ref={titleRef}>
											Enter any 4 qualities of you:
										</p>
										<div
											className="background3Name"
											style={{
												display: "flex",
												flexWrap: "wrap",
											}}
											onClick={(e) => {
												e.stopPropagation();
											}}
										>
											<input
												type="text"
												style={{
													margin: "1rem",
												}}
												value={useEncryptWords[0]}
												onChange={(e) => {
													let payload = [
														...useEncryptWords,
													];
													payload[0] = e.target.value;
													profileSectionBackground({
														type:
															"setencryptBackgroundWords",
														payload: payload,
													});
												}}
											></input>
											<input
												type="text"
												style={{
													margin: "1rem",
												}}
												value={useEncryptWords[1]}
											></input>
											<input
												type="text"
												style={{
													margin: "1rem",
												}}
												value={useEncryptWords[2]}
											></input>
											<input
												type="text"
												ref={titleRef}
												style={{
													margin: "1rem",
												}}
												value={useEncryptWords[3]}
											></input>
										</div>
									</React.Fragment>
								) : (
									<input
										type="text"
										ref={titleRef}
										style={{
											display: "none",
										}}
									></input>
								)}
								<p>*works better for Laptop screens only</p>
							</div>
							<div
								className={`preLoadedBackGroundsSelectorOptionDiv ${
									backgroundSelected === 3
										? `preLoadedBackGroundsSelectorOptionDivSelected`
										: ``
								}`}
								onClick={() => {
									setbackgroundSelected(3);
									profileSectionBackground({
										type: "setBackground",
										payload: 3,
									});
								}}
							>
								<img
									src={profileBackground4}
									alt="back ground 4"
									className="preLoadedBackGroundsSelectorOption"
								></img>
							</div>
							<p
								className="preLoadedBackGroundsSelectorHeader"
								style={{
									marginTop: "1rem",
									display: "inline-block",
									marginRight: "1rem",
								}}
							>
								Custom Color:
							</p>
							<div
								className={`preLoadedBackGroundsSelectorOptionDiv ${
									backgroundSelected === 4
										? `preLoadedBackGroundsSelectorOptionDivSelected`
										: ``
								}`}
								onClick={() => {
									setbackgroundSelected(4);
									profileSectionBackground({
										type: "setBackground",
										payload: 4,
									});
								}}
							>
								<input
									type="color"
									value={customColorBackground}
									onChange = {
										(e) => {
											profileSectionBackground({
												type:
													"profileSectionBackgroundColor",
												payload: e.target.value
											});
										}
									}
								></input>
							</div>
						</div>
					) : (
						<div className="preLoadedBackGroundsSelectorCrop">
							<AvatarCrop />
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default ProfileSectionBackground
