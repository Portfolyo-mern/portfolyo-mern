import React, { useState } from 'react';
import "./ProfileSectionBackground.scss";
import CloseIcon from "@material-ui/icons/Close";

const ProfileSectionBackground = (props) => {

    //buttons
    const [optionClicked, setoptionClicked] = useState(["", "", ""]);
	const [optionSelected, setoptionSelected] = useState([
		"",
		"btn-group__item--selected",
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
					</button>{/* 
					<button
						className={`btn-group__item ${optionClicked[1]} ${optionSelected[1]}`}
						onClick={() => optionClickedHandlers(1)}
					>
						Text
					</button> */}
					<button
						className={`btn-group__item ${optionClicked[2]} ${optionSelected[2]}`}
						onClick={() => optionClickedHandlers(2)}
					>
						Upload
					</button>
                </div>
                {
                    displaySelected === 0 ?(
                        <h1>Hello</h1>
                    ):null
                }
			</div>
		</div>
	);
}

export default ProfileSectionBackground
