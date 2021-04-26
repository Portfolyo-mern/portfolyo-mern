import React, { useState } from 'react';
import "./ProfileSectionBackground.scss";
import CloseIcon from "@material-ui/icons/Close";
import profileBackground1 from "../../../../assets/profileBackground1.png";
import profileBackground2 from "../../../../assets/profileBackground2.png";
import profileBackground3 from "../../../../assets/profileBackground3.png";
import profileBackground4 from "../../../../assets/profileBackground4.png";

const ProfileSectionBackground = (props) => {

    //toggle-buttons
    const [optionClicked, setoptionClicked] = useState([
		"",
		"",
	]);
	const [optionSelected, setoptionSelected] = useState([
		"btn-group__item--selected",
		"",
	]);
	const [displaySelected, setdisplaySelected] = useState(0);

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

    //preloaded backgrounds
    const [backgroundSelected, setbackgroundSelected] = useState(0)

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
                            <div className={`preLoadedBackGroundsSelectorOptionDiv`}>                     
                                <img
                                    src={profileBackground1}
                                    alt="back ground 1"
                                    className="preLoadedBackGroundsSelectorOption"
                                ></img>
                            </div>
                            <div className={`preLoadedBackGroundsSelectorOptionDiv`}>
                                <img
                                    src={profileBackground2}
                                    alt="back ground 2"
                                    className="preLoadedBackGroundsSelectorOption"
                                ></img>
                            </div>
                            <div className={`preLoadedBackGroundsSelectorOptionDiv`}>
                                <img
                                    src={profileBackground3}
                                    alt="back ground 3"
                                    className="preLoadedBackGroundsSelectorOption"
                                ></img>
                            </div>
                            <div className={`preLoadedBackGroundsSelectorOptionDiv`}>
                                <img
                                    src={profileBackground4}
                                    alt="back ground 4"
                                    className="preLoadedBackGroundsSelectorOption"
                                ></img>
                            </div>
						</div>
					) : null}
				</div>
			</div>
		</div>
	);
}

<<<<<<< HEAD
export default ProfileSectionBackground
=======
export default ProfileSectionBackground
>>>>>>> 3dbb14cc00d8929266541b89b9b0b8cc117abefc
