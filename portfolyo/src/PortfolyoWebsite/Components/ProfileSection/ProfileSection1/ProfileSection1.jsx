import React, { useState, useRef } from 'react';
import "./ProfileSection1.scss";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Particles from "react-tsparticles";
import CreateIcon from "@material-ui/icons/Create";
import { useSelector, useDispatch } from 'react-redux';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { useDencrypt } from "use-dencrypt-effect";
// import Particles from "react-particles-js";

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
	// const [userName, setuserName] = useState("Username");
	// const [tagLine, settagLine] = useState("description");
	// const [address, setaddress] = useState("Hyderabad, Telangana, India");
	const ProfilePicture = useSelector(state => state.ProfilePicture);
	const ButtonStyleP = useSelector(state => state.ButtonStyleP);
	const OpenEditor = useSelector(state => state.OpenEditor);
	const dpStructureP = useSelector(state=>state.dpStructureP);
	// const classes = useStyles(props);


	// const [userName, setuserName] = useState("Deepesh Dragoneel");
	// const [tagLine, settagLine] = useState(
	// 	"oisadhfsdjfnxkjchaiufhdsifhasfhdkjafhlksfjhalkfhaksdjfhnkasjfhaklsfhaslkfhsadfaksjdfhasklfhdsflakfjlksdfhasklfjf"
	// );
	// const [address, setaddress] = useState("Hyderabad, Telangana, India");
	// const classes = useStyles(props);

	//redux
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
	// const dispatch = useDispatch();

	// const ProfilePicture = useSelector((state) => state.ProfilePicture);
	
    // const triggerImageInput = () => {
    //   inputRef.current.click();
    // }

	React.useEffect(() => {
		let i = 0;

		const action = setInterval(() => {
			dencrypt(encryptBackgroundWords[i]);

			i = i === encryptBackgroundWords.length - 1 ? 0 : i + 1;
		}, 2000);

		return () => clearInterval(action);
	}, []);
	return (
		<div className="profileSection1Component">
			<div
				className={`profileSection1Background backgroundSelected${selectedBackground}`}
			>
				{selectedBackground === 0 ? (
					<div className="background0div">
						<div className="purple"></div>
						<div className="medium-blue"></div>
						<div className="light-blue"></div>
						<div className="red"></div>
						<div className="orange"></div>
						<div className="yellow"></div>
						<div className="cyan"></div>
						<div className="light-green"></div>
						<div className="lime"></div>
						<div className="magenta"></div>
						<div className="lightish-red"></div>
						<div className="pink"></div>
						<div id="sqauresinBackground" className="purple"></div>
						<div
							id="sqauresinBackground"
							className="medium-blue"
						></div>
						<div
							id="sqauresinBackground"
							className="light-blue"
						></div>
						<div id="sqauresinBackground" className="red"></div>
						<div id="sqauresinBackground" className="orange"></div>
						<div id="sqauresinBackground" className="yellow"></div>
						<div id="sqauresinBackground" className="cyan"></div>
						<div
							id="sqauresinBackground"
							className="light-green"
						></div>
						<div id="sqauresinBackground" className="lime"></div>
						<div id="sqauresinBackground" className="magenta"></div>
						<div
							id="sqauresinBackground"
							className="lightish-red"
						></div>
						<div id="sqauresinBackground" className="pink"></div>
						<div
							id="sqauresinBackgroundInside"
							className="purple"
							style={{
								backgroundColor: "purple",
							}}
						></div>
						<div
							id="sqauresinBackgroundInside"
							className="medium-blue"
							style={{
								backgroundColor: "medium-blue",
							}}
						></div>
						<div
							id="sqauresinBackgroundInside"
							className="light-blue"
							style={{
								backgroundColor: "light-blue",
							}}
						></div>
						<div
							id="sqauresinBackgroundInside"
							className="red"
							style={{
								backgroundColor: "red",
							}}
						></div>
						<div
							id="sqauresinBackgroundInside"
							className="orange"
							style={{
								backgroundColor: "orange",
							}}
						></div>
						<div
							id="sqauresinBackgroundInside"
							className="yellow"
							style={{
								backgroundColor: "yellow",
							}}
						></div>
						<div
							id="sqauresinBackgroundInside"
							className="cyan"
							style={{
								backgroundColor: "cyan",
							}}
						></div>
						<div
							id="sqauresinBackgroundInside"
							className="light-green"
							style={{
								backgroundColor: "light-green",
							}}
						></div>
						<div
							id="sqauresinBackgroundInside"
							className="lime"
							style={{
								backgroundColor: "lime",
							}}
						></div>
						<div
							id="sqauresinBackgroundInside"
							className="magenta"
							style={{
								backgroundColor: "purple",
							}}
						></div>
						<div
							id="sqauresinBackgroundInside"
							className="lightish-red"
							style={{
								backgroundColor: "purple",
							}}
						></div>
						<div
							id="sqauresinBackgroundInside"
							className="pink"
							style={{
								backgroundColor: "purple",
							}}
						></div>
					</div>
				) : selectedBackground === 1 ? (
					<div class="animation-wrapper">
						<div class="particle particle-1"></div>
						<div class="particle particle-2"></div>
						<div class="particle particle-3"></div>
						<div class="particle particle-4"></div>
					</div>
				) : selectedBackground === 3 ? (
					<Particles
						id="tsparticles"
						options={{
							background: {
								color: {
									value: "#0d47a1",
								},
							},
							fpsLimit: 80,
							interactivity: {
								detectsOn: "canvas",
								events: {
									onClick: {
										enable: true,
										mode: "push",
									},
									onHover: {
										enable: true,
										mode: "repulse",
									},
									resize: true,
								},
								modes: {
									bubble: {
										distance: 200,
										duration: 2,
										opacity: 0.8,
										size: 40,
									},
									push: {
										quantity: 4,
									},
									repulse: {
										distance: 200,
										duration: 0.2,
									},
								},
							},
							particles: {
								color: {
									value: "#ffffff",
								},
								links: {
									color: "#ffffff",
									distance: 150,
									enable: true,
									opacity: 0.5,
									width: 1,
								},
								collisions: {
									enable: true,
								},
								move: {
									direction: "none",
									enable: true,
									outMode: "bounce",
									random: false,
									speed: 3,
									straight: false,
								},
								number: {
									density: {
										enable: true,
										value_area: 800,
									},
									value: 80,
								},
								opacity: {
									value: 0.5,
								},
								shape: {
									type: "circle",
								},
								size: {
									random: true,
									value: 2,
								},
							},
							detectRetina: true,
						}}
					/>
				) : selectedBackground === 2 ? (
					<div className="profileSectionBackground2">
						<span
							style={{
								alignSelf: "center",
								verticalAlign: "middle",
							}}
						>
							{result}
						</span>
					</div>
				) : selectedBackground === 4 ? (
					<div
						className="profileSectionBackground4"
						style={{
							backgroundColor: profileSectionBackgroundColor,
						}}
					></div>
				) : (
					<div
						className="profileSectionBackground5"
						style={{
							backgroundImage: { AvatarCrop },
						}}
					>
						<img
							className="profileSectionBackground5Image"
							src={AvatarCrop}
						></img>
					</div>
				)}

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
