import React, { useState } from 'react';
import "./ProfileSectionSelector.scss";
import ProfileSection1 from "../ProfileSection1/ProfileSection1";
import ProfileSectionEditor from "../ProfileSectionEditor/ProfileSectionEditor";
import ProfileSection2 from "../ProfileSection2/ProfileSection2";
import ProfilesectionBackGround from "../ProfileSectionBackground/ProfileSectionBackground";

const ProfileSectionSelector = () => {
    const [layout, setlayout] = useState(1);
    const [editMenuOpen, seteditMenuOpen] = useState(false);
    const [backGroundChangerOpen, setbackGroundChanger] = useState(false);
    const toggleEditMenu = () => {
        seteditMenuOpen(true);
    }
    const backGroundChanger = () => {
		setbackGroundChanger(true);
	};
    return (
		<div>
			{layout === 1 ? (
				<ProfileSection1
					edit={toggleEditMenu}
					backGroundChanger={backGroundChanger}
				/>
			) : (
				<ProfileSection2
					edit={toggleEditMenu}
					backGroundChanger={backGroundChanger}
				/>
			)}
			{editMenuOpen ? (
				<ProfileSectionEditor
					closeBackDrop={() => {
						seteditMenuOpen(false);
					}}
				/>
			) : null}
			{backGroundChangerOpen ? (
				<ProfilesectionBackGround
					closeBackDrop={() => {
						setbackGroundChanger(false);
					}}
				/>
			) : null}
		</div>
	);
}

export default ProfileSectionSelector;
