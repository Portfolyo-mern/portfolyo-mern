import React, { useState } from 'react';
import "./ProfileSectionSelector.scss";
import ProfileSection1 from "../ProfileSection1/ProfileSection1";
import ProfileSectionEditor from "../ProfileSectionEditor/ProfileSectionEditor";
import ProfileSection2 from "../ProfileSection2/ProfileSection2";
import ProfilesectionBackGround from "../ProfileSectionBackground/ProfileSectionBackground";
import {useSelector,useDispatch} from 'react-redux';

const ProfileSectionSelector = () => {
    // const [layout, setlayout] = useState(2);
	const layout = useSelector(state=>state.layoutp);
    const [editMenuOpen, seteditMenuOpen] = useState(false);
    const [backGroundChangerOpen, setbackGroundChanger] = useState(true);
    const toggleEditMenu = () => {
        seteditMenuOpen(true);
    }
    const backGroundChanger = () => {
		setbackGroundChanger(true);
	};
    return (
		<div style={{
			position: "relative",
			top: "5rem"
		}}>
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
