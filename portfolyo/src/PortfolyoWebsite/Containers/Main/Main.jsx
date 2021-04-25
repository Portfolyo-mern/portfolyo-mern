import React from 'react'
import Header from '../../Components/Header/Header';
import Header2 from '../../Components/Header2/Header2';
import "./Main.scss";
import ProfileSection from '../../Components/ProfileSection/ProfileSectionSelector/ProfileSectionSelector';
const Main = () => {
    return (
        <>
            <div className="Mainbackground">
            </div>
            <Header2/>
            <ProfileSection/>
        </>
    )
}

export default Main
