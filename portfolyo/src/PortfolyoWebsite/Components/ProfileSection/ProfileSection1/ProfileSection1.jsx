import React, { useState, useRef } from 'react';
import "./ProfileSection1.scss";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Particles from "react-tsparticles";
import CreateIcon from "@material-ui/icons/Create";
import { useSelector, useDispatch } from 'react-redux';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'

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
	const UsernameP = useSelector(state => state.UsernameP);
	const DescribeP = useSelector(state => state.DescribeP);
	const AddressP = useSelector(state => state.AddressP);
	const UsernameFontP = useSelector(state => state.UsernameFontP);
	const DescribeFontP = useSelector(state => state.DescribeFontP);
	const AddressFontP = useSelector(state => state.AddressFontP);
	const DButtonColorP = useSelector(state => state.DButtonColorP);
	const HButtonColorP = useSelector(state => state.HButtonColorP);
	console.log(DescribeFontP);
	// const triggerImageInput = () => {
	//   inputRef.current.click();
	// }
	const theme = createMuiTheme({
		palette: {
			primary: {
				main: HButtonColorP,
			},
			secondary: {
				main: DButtonColorP,
			},
		},
	});
	const HTextColorP = useSelector(state => state.HTextColorP);
	const DTextColorP = useSelector(state => state.DTextColorP);
	const [userName, setuserName] = useState("Username");
	const [tagLine, settagLine] = useState("description");
	const [address, setaddress] = useState("Hyderabad, Telangana, India");
	const ProfilePicture = useSelector(state => state.ProfilePicture);
	const ButtonStyleP = useSelector(state => state.ButtonStyleP);
	const OpenEditor = useSelector(state => state.OpenEditor);
	const dpStructureP = useSelector(state=>state.dpStructureP);
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
			<div className="profileSection1ProfilePhoto" style={{
					borderRadius: (dpStructureP==0)?"0.1rem":(dpStructureP==1)?"4rem":"100%"
				}} onClick={() => {
				dispatch({ type: "tabpointer", payload: 1 });
				dispatch({ type: "openeditor", payload: !OpenEditor });
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
						color: "white",
						position: "absolute",
						top: "2rem",
						right: "2rem",
						cursor: "pointer",
					}}
					onClick={() => {
						console.log("helloo");
						dispatch({ type: "tabpointer", payload: 2 });
						dispatch({ type: "openeditor", payload: !OpenEditor });
					}}
				/>
				<div className="profileSection1Text">
					<h2 className="profileSection1Texth2" style={{ color: "white", fontFamily: UsernameFontP }} >{UsernameP}</h2>
					<p className="profileSection1Textp1" style={{ color: "white", fontFamily: DescribeFontP }}>{DescribeP}</p>
					<p className="profileSection1Textp2" style={{ color: "white", fontFamily: AddressFontP }}>{AddressP}</p>
				</div>
				<MuiThemeProvider theme={theme}>
					<div className="profileSection1Buttons">
						<Button
							variant={ButtonStyleP}
							color="primary"
							style={{
								margin: "10px",
								color: HTextColorP

							}}
						>
							Hire Me
					</Button>
						<Button
							color="secondary"
							variant={ButtonStyleP}
							style={{
								margin: "10px",
								color: DTextColorP
							}}
						>
							Download Resume
					</Button>
					</div>
				</MuiThemeProvider>
			</div>
		</div>
	);
}

export default ProfileSection1;
