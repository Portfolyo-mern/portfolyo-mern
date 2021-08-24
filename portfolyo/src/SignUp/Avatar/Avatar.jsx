import React from "react";
import male from "../../assets/male_avatar.png";
import female from "../../assets/female_avatar.png";

const Avatar = (props) => {
    if (props.gender === 1) {
        return <img src={male} alt="male_avatar" className="male_avatar"></img>;
    } else {
        return (
            <img src={female} alt="male_avatar" className="male_avatar"></img>
        );
    }
};

export default Avatar;
