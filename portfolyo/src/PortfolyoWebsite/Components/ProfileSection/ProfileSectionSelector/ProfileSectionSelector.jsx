import React, { useState, useRef, useEffect } from "react";
import "./ProfileSectionSelector.scss";
import ProfileSection1 from "../ProfileSection1/ProfileSection1";
import ProfileSectionEditor from "../ProfileSectionEditor/ProfileSectionEditor";
import ProfileSection2 from "../ProfileSection2/ProfileSection2";
import ProfilesectionBackGround from "../ProfileSectionBackground/ProfileSectionBackground";
import { useSelector, useDispatch } from "react-redux";
import { useInView } from "react-hook-inview";

const ProfileSectionSelector = (props) => {
    // const [layout, setlayout] = useState(2);
    const dispatch = useDispatch();
    const layout = useSelector((state) => state.layoutp);
    const openbackgroundp = useSelector((state) => state.openbackgroundp);
    const [editMenuOpen, seteditMenuOpen] = useState(false);
    // const [backGroundChangerOpen, setbackGroundChanger] = useState(openbackgroundp);
    const toggleEditMenu = () => {
        seteditMenuOpen(true);
    };
    const backGroundChanger = () => {
        dispatch({ type: "openbackgroundp", payload: !openbackgroundp });
    };
    // const profileSectionRef = useRef();

    const [profileSectionRef, isProfileSectionVisible] = useInView({
        threshold: 1,
    });

    // const temp =
    //     window.document.getElementById("profileSectionId") !== null
    //         ? window.document.getElementById("profileSectionId").offsetTop
    //         : null;
    // useEffect(() => {
    //     console.log("Visible: ", isProfileSectionVisible);
    //     console.log(
    //         "height and width : ",
    //         window.innerHeight,
    //         window.innerWidth
    //     );
    //     console.log(temp);
    // }, [temp]);

    return (
        <div
            style={{
                position: "relative",
                top: "50px",
            }}
            id="profileSectionId"
        >
            {layout === 1 ? (
                <ProfileSection1
                    hireref={props.hireref}
                    edit={toggleEditMenu}
                    backGroundChanger={backGroundChanger}
                />
            ) : (
                <ProfileSection2
                    hireref={props.hireref}
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
                        dispatch({ type: "openbackgroundp", payload: false });
                    }}
                />
            ) : null}
        </div>
    );
};

export default ProfileSectionSelector;
