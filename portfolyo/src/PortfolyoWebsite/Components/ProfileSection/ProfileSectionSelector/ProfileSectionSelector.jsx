import React, { useState } from 'react';
import "./ProfileSectionSelector.scss";
import ProfileSection1 from "../ProfileSection1/ProfileSection1";
import ProfileSectionEditor from "../ProfileSectionEditor/ProfileSectionEditor";
import ProfileSection2 from "../ProfileSection2/ProfileSection2";
import ProfilesectionBackGround from "../ProfileSectionBackground/ProfileSectionBackground";
import {useSelector,useDispatch} from 'react-redux';

const ProfileSectionSelector = () => {
    // const [layout, setlayout] = useState(2);
	const dispatch = useDispatch();
	const layout = useSelector(state=>state.layoutp);
	const openbackgroundp = useSelector(state=>state.openbackgroundp);
    const [editMenuOpen, seteditMenuOpen] = useState(false);
    // const [backGroundChangerOpen, setbackGroundChanger] = useState(openbackgroundp);
    const toggleEditMenu = () => {
        seteditMenuOpen(true);
    }
    const backGroundChanger = () => {
		dispatch({type:"openbackgroundp",payload:!openbackgroundp})
	};
    return (
		<div style={{
			position: "relative",
			top: "4rem"
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
			{openbackgroundp ? (
				<ProfilesectionBackGround
					closeBackDrop={() => {
						dispatch({type:"openbackgroundp",payload:false})
					}}
				/>
			) : null}
		</div>
	);
}

export default ProfileSectionSelector;
