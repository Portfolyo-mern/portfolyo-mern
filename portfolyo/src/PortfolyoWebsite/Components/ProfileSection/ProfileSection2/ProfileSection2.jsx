import React, { useState, useRef } from "react";
import "./ProfileSection2.scss";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Particles from "react-tsparticles";
import CreateIcon from "@material-ui/icons/Create";
import { useSelector, useDispatch } from 'react-redux';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { useDencrypt } from "use-dencrypt-effect";


const useStyles = makeStyles({
	cam_icon: {
		color: "red",
		marginLeft: "auto",
		marginTop: "auto !important",
	},
});

const ProfileSection2 = (props) => {
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


    // const [userName, setuserName] = useState("Deepesh Dragoneel");
    // const [tagLine, settagLine] = useState("oisadhfsdjfnxkjchaiufhdsifhasfhdkjafhlksfjhalkfhaksdjfhnkasjfhaklsfhaslkfhsadfaksjdfhasklfhdsflakfjlksdfhasklfjf");
    // const [address, setaddress] = useState("Hyderabad, Telangana, India");
	const HTextColorP = useSelector(state => state.HTextColorP);
	const DTextColorP = useSelector(state => state.DTextColorP);
	const [userName, setuserName] = useState("Username");
	const [tagLine, settagLine] = useState("description");
	const [address, setaddress] = useState("Hyderabad, Telangana, India");
	const ProfilePicture = useSelector(state => state.ProfilePicture);
	const ButtonStyleP = useSelector(state => state.ButtonStyleP);
	const OpenEditor = useSelector(state => state.OpenEditor);
	const dpStructureP = useSelector(state=>state.dpStructureP);
	const alignp = useSelector(state=>state.alignp);
	const selectedBackground = useSelector(
		(state) => state.profileSectionBackground
	);
	const encryptBackgroundWords = useSelector(
		(state) => state.encryptBackgroundWords
	);
	const profileSectionBackgroundColor = useSelector(
		(state) => state.profileSectionBackgroundColor
	);
	const AvatarCrop = useSelector((state) => state.AvatarCrop);
	const { result, dencrypt } = useDencrypt();
	React.useEffect(() => {
		let i = 0;

		const action = setInterval(() => {
			dencrypt(encryptBackgroundWords[i]);

			i = i === encryptBackgroundWords.length - 1 ? 0 : i + 1;
		}, 2000);

		return () => clearInterval(action);
	}, []);
	console.log(alignp)
    const classes = useStyles(props);
    return (
		<div className="profileSection2Component">
			<div className="profileSection2Background">
				<CameraAltIcon
					className="profileSection2CameraAltIcon"
					style={{
						fontSize: "2rem",
						color: "black",
						border: "white 1px solid",
						borderRadius: "100%",
						padding: "4px",
						backgroundColor: "white",
						cursor: "pointer",
						position: "absolute",

						right: "2rem",
					}}
					onClick={props.backGroundChanger}
				/>
				<CreateIcon
					className="profileSection2CreateIcon"
					style={{
						fontSize: "2rem",
						color: "black",
						border: "white 1px solid",
						borderRadius: "100%",
						padding: "4px",
						backgroundColor: "white",
						cursor: "pointer",
						position: "absolute",
						bottom: "2rem",
						right: "5rem",
					}}
					onClick={() => {
						console.log("helloo");
						dispatch({ type: "tabpointer", payload: 2 });
						dispatch({ type: "openeditor", payload: !OpenEditor });
					}}
				/>
				<div className="profileSection1ProfilePhoto"
					style={{
							borderRadius: (dpStructureP==0)?"0.1rem":(dpStructureP==1)?"4rem":"100%",
							margin:(alignp==2)?"auto":""
							}} 
					onClick={() => { 
						dispatch({ type: "tabpointer", payload: 1 });
						dispatch({ type: "openeditor", payload: !OpenEditor })
					}}
					>
					<img src={ProfilePicture} ></img>
					<i class="fas fa-user-tie" ></i>
				</div>
				<div className="profileSection1Details ">
					{/* <div className="profileSection1Text"> */}
						<h2 className="profileSection1Texth2 mt-2" style={{ color: "white", fontFamily: UsernameFontP,textAlign:(alignp==2)?"center":"" }}>{UsernameP}</h2>
						<p className="profileSection1Textp1" style={{ color: "white", fontFamily: DescribeFontP,textAlign:(alignp==2)?"center":"",fontSize:"1.5rem" }}>{DescribeP}</p>
						<p className="profileSection1Textp2" style={{ color: "white", fontFamily: AddressFontP,textAlign:(alignp==2)?"center":"",fontSize:"1.5rem" }}>{AddressP}</p>
					{/* </div> */}
				<MuiThemeProvider theme={theme}>
					<div className="profileSection1Buttons"  >
						<div style={{maxWidth:"max-content",margin:(alignp==2)?"auto":""}}>
							<Button
								variant={ButtonStyleP}
								color="primary"
								style={{
									margin: "10px",
									marginLeft: "0",
									color: HTextColorP
								}}
							>
								Hire Me
							</Button>
							<Button
								variant="contained"
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
					</div>
				</MuiThemeProvider>
				</div>
			</div>
		</div>
	);
};

export default ProfileSection2;
