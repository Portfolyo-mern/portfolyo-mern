import React, {useState, useRef} from 'react';
import "./ProfileSection1.scss";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Particles from "react-tsparticles";
import CreateIcon from "@material-ui/icons/Create";
import {useDispatch,useSelector} from 'react-redux';

const useStyles = makeStyles({
    cam_icon: {
        color: "red",
        marginLeft: "auto",
        marginTop: "auto !important"
    },
});

//profileSection1

const ProfileSection1 = (props) => {

    const inputRef = useRef();
	const dispatch = useDispatch();
	
    // const triggerImageInput = () => {
    //   inputRef.current.click();
    // }

    const [userName, setuserName] = useState("Deepesh Dragoneel");
    const [tagLine, settagLine] = useState("oisadhfsdjfnxkjchaiufhdsifhasfhdkjafhlksfjhalkfhaksdjfhnkasjfhaklsfhaslkfhsadfaksjdfhasklfhdsflakfjlksdfhasklfjf");
    const [address, setaddress] = useState("Hyderabad, Telangana, India");
	const ProfilePicture = useSelector(state=>state.ProfilePicture)
    const classes = useStyles(props);
    return (
		<div className="profileSection1Component">
			<div className="profileSection1Background">
				<CameraAltIcon
					style={{
						fontSize: "2rem",
						color: "white",
						borderRadius: "100%",
						padding: "4px",
						backgroundColor: "black",
						cursor: "pointer",
						position: "absolute",
						bottom: "2rem",
						right: "2rem",
					}}
					onClick={props.backGroundChanger}
				/>
			</div>
			<div className="profileSection1ProfilePhoto" onClick={()=>{
					dispatch({type:"tabpointer",payload:1});
					dispatch({type:"openeditor",payload:true});
				}
			}>
				<img src={ProfilePicture} ></img>
				{/* <div></div> */}
				{/* <input
					type="file"
					accept="image/*"
					style={{
						display: "none",
					}}
					ref={inputRef}
				></input> */}
				<i class="fas fa-user-tie " ></i>
			</div>
			<div className="profileSection1Details">
				<CreateIcon
					style={{
						color:"white",
						position: "absolute",
						top: "2rem",
						right: "2rem",
						cursor: "pointer",
					}}
					onClick={props.edit}
				/>
				<div className="profileSection1Text">
					<h2 className="profileSection1Texth2"style={{color:"white"}} >{userName}</h2>
					<p className="profileSection1Textp1" style={{color:"white"}}>{tagLine}</p>
					<p className="profileSection1Textp2" style={{color:"white"}}>{address}</p>
				</div>
				<div className="profileSection1Buttons">
					<Button
						variant="contained"
						color="primary"
						style={{
							margin: "10px",
						}}
					>
						Hire Me
					</Button>
					<Button
						variant="contained"
						color="secondary"
						style={{
							margin: "10px",
						}}
					>
						Download Resume
					</Button>
				</div>
			</div>
		</div>
	);
}

export default ProfileSection1;
