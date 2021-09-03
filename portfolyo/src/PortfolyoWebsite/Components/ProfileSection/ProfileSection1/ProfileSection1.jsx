/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./ProfileSection1.scss";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Particles from "react-tsparticles";
import CreateIcon from "@material-ui/icons/Create";
import { useSelector, useDispatch } from "react-redux";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { useDencrypt } from "use-dencrypt-effect";
import defaultProfilePic from "../../../../assets/profilePic";
import TextareaAutosize from "react-textarea-autosize";
import { ChromePicker } from "react-color";
import ColorLensIcon from "@material-ui/icons/ColorLens";
import FontDownloadIcon from "@material-ui/icons/FontDownload";
import rgbHex from "rgb-hex";
import FontPicker from "font-picker-react";

// import Particles from "react-particles-js";

const useStyles = makeStyles({
    downloadButton: {
        // border: "3px"
    },
});

//profilesection background height
const WindowSize = () => {
    const [windowSize, setwindowSize] = useState([
        window.innerHeight,
        window.innerWidth,
    ]);

    useEffect(() => {
        const profileHandleWindowResize = () => {
            setwindowSize([window.innerHeight, window.innerWidth]);
        };
        window.addEventListener("resize", profileHandleWindowResize);
    }, []);

    return windowSize;
};

//profileSection1

const ProfileSection1 = (props) => {
    // const inputRef = useRef();
    const buttonUseStyles = useStyles();
    const dispatch = useDispatch();
    const UsernameP = useSelector((state) => state.UsernameP);
    const DescribeP = useSelector((state) => state.DescribeP);
    const AddressP = useSelector((state) => state.AddressP);
    const UsernameFontP = useSelector((state) => state.UsernameFontP);
    const UsernameColorP = useSelector((state) => state.UsernameColorP);
    const DescribeFontP = useSelector((state) => state.DescribeFontP);
    const AddressFontP = useSelector((state) => state.AddressFontP);
    const DescribeColorP = useSelector((state) => state.DescribeColorP);
    const AddressColorP = useSelector((state) => state.AddressColorP);
    const DButtonColorP = useSelector((state) => state.DButtonColorP);
    const HButtonColorP = useSelector((state) => state.HButtonColorP);
    const profilePicAlignment = useSelector((state) => state.alignp);
    const porfileSectionParticles = useSelector(
        (state) => state.porfileSectionParticles
    );
    const [windowHeight, windowWidth] = WindowSize();
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
    const HTextColorP = useSelector((state) => state.HTextColorP);
    const DTextColorP = useSelector((state) => state.DTextColorP);
    // const [userName, setuserName] = useState("Username");
    // const [tagLine, settagLine] = useState("description");
    // const [address, setaddress] = useState("Hyderabad, Telangana, India");
    const ProfilePicture = useSelector((state) => state.ProfilePicture);
    const DButtonStyleP = useSelector((state) => state.DButtonStyleP);
    const HButtonStyleP = useSelector((state) => state.HButtonStyleP);
    const OpenEditor = useSelector((state) => state.OpenEditor);
    const dpStructureP = useSelector((state) => state.dpStructureP);
    const ViewMode = useSelector((state) => state.ViewMode);
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
    // const encryptBackgroundWords = useSelector(
    //     (state) => state.encryptBackgroundWords
    // );
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

    // React.useEffect(() => {
    // 	let i = 0;

    // 	const action = setInterval(() => {
    // 		dencrypt(encryptBackgroundWords[i]);

    // 		i = i === encryptBackgroundWords.length - 1 ? 0 : i + 1;
    // 	}, 2000);

    // 	return () => clearInterval(action);
    // }, []);
    const uploadimage = () => {
        dispatch({ type: "tabpointer", payload: 1 });
        dispatch({ type: "openeditor", payload: !OpenEditor });
    };
    // const [textAreaUsernameFocused, settextAreaUsernameFocused] =
    // useState("none");

    const [openColorPicker, setopenColorPicker] = useState(false);

    const [textAreaUsername, settextAreaUsername] = useState(UsernameP);
    const [usernameTextColor, setusernameTextColor] = useState(UsernameColorP);
    const [usernameFontStyle, setusernameFontStyle] = useState(UsernameFontP);
    const usernameDispatch = (username) => {
        settextAreaUsername(username);
    };

    const [textAreaDesc, settextAreaDesc] = useState(DescribeP);
    const [descTextColor, setdescTextColor] = useState(DescribeColorP);
    const [descFontStyle, setdescFontStyle] = useState(DescribeFontP);

    const [textAreaAddress, settextAreaAdress] = useState(AddressP);
    const [addressTextColor, setaddressTextColor] = useState(AddressColorP);
    const [addressFontStyle, setaddressFontStyle] = useState(AddressFontP);

    useEffect(() => {
        settextAreaUsername(UsernameP);
        setusernameTextColor(UsernameColorP);
        setusernameFontStyle(UsernameFontP);
    }, [UsernameP, UsernameFontP, UsernameColorP]);

    useEffect(() => {
        settextAreaDesc(DescribeP);
        setdescTextColor(DescribeColorP);
        setdescFontStyle(DescribeFontP);
    }, [DescribeP, DescribeColorP, DescribeFontP]);
    useEffect(() => {
        settextAreaAdress(AddressP);
        setaddressTextColor(AddressColorP);
        setaddressFontStyle(AddressFontP);
    }, [AddressP, AddressColorP, AddressFontP]);

    return (
        <div className="profileSection1Component">
            <div
                className={`profileSection1Background backgroundSelected${selectedBackground}`}
                style={{
                    height: `${
                        windowWidth > 500
                            ? windowWidth * 0.012
                            : windowWidth * 0.017
                    }rem`,
                }}
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
                                    value: porfileSectionParticles.bgcolor,
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
                                    value: porfileSectionParticles.color,
                                },
                                links: {
                                    color: porfileSectionParticles.linksColors,
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
                                    value: 5,
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
                            backgroundImage: `url(${AvatarCrop})`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                        }}
                    >
                        {/* <img
							className="profileSectionBackground5Image"
							src={AvatarCrop}
							alt="background"
						></img> */}
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
                        display: ViewMode ? "none" : "inherit",
                    }}
                    onClick={() => {
                        dispatch({ type: "tabpointer", payload: 3 });
                        dispatch({ type: "openeditor", payload: !OpenEditor });
                    }}
                />
            </div>
            <div
                className="profileSection1ProfilePhoto"
                style={{
                    borderRadius:
                        dpStructureP === 0
                            ? "0.1rem"
                            : dpStructureP === 1
                            ? "4rem"
                            : "100%",
                    backgroundImage: `url(${
                        ProfilePicture === ""
                            ? `https://avatars.dicebear.com/api/human/${UsernameP}.svg`
                            : ProfilePicture
                    })`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    width: `${
                        windowWidth > 500
                            ? windowWidth * 0.15
                            : windowWidth * 0.28
                    }px`,
                    height: `${
                        windowWidth > 500
                            ? windowWidth * 0.15
                            : windowWidth * 0.28
                    }px`,
                    left: 0,
                    right: 0,
                    marginRight: `${
                        profilePicAlignment === "center" ? "auto" : "5%"
                    }`,
                    marginLeft: `${
                        profilePicAlignment === "center" ? "auto" : "5%"
                    }`,
                }}
                onClick={uploadimage}
            >
                {/* <img
                    src={
                        ProfilePicture === ""
                            ? defaultProfilePic
                            : ProfilePicture
                    }
                    alt="profile pic"
                ></img> */}
            </div>
            <div className="profileSection1Details">
                <CreateIcon
                    style={{
                        color: "black",
                        position: "absolute",
                        top: "2rem",
                        right: "2rem",
                        cursor: "pointer",
                        display: ViewMode ? "none" : "inherit",
                    }}
                    onClick={() => {
                        dispatch({ type: "tabpointer", payload: 2 });
                        dispatch({ type: "openeditor", payload: !OpenEditor });
                    }}
                />
                <div className="profileSection1Text">
                    {ViewMode ? (
                        <h2
                            className="profileSection1Texth2"
                            style={{
                                color: `${UsernameColorP}`,
                                fontFamily: `${UsernameFontP}`,
                            }}
                        >
                            {UsernameP}
                        </h2>
                    ) : (
                        <div className={`textAreaEditorDiv`}>
                            <TextareaAutosize
                                className={`textAreaUsername`}
                                value={textAreaUsername}
                                spellCheck="false"
                                // cols={textAreaUsername.length}
                                placeholder="Username"
                                style={{
                                    color: `${usernameTextColor}`,
                                    fontFamily: `${usernameFontStyle}`,
                                }}
                                onChange={(e) => {
                                    usernameDispatch(e.target.value);
                                }}
                                onFocus={(e) => {
                                    // settextAreaUsernameFocused(true);
                                    dispatch({ type: "openMiniTextEditor" });
                                    dispatch({
                                        type: "textBeingChangedColorDispatch",
                                        payload: "UsernameColorP",
                                    });
                                    dispatch({
                                        type: "textBeingChangedFontDispatch",
                                        payload: "UsernameFontP",
                                    });
                                    dispatch({
                                        type: "textBeingChangedColorValue",
                                        payload: UsernameColorP,
                                    });
                                    dispatch({
                                        type: "textBeingChangedFontValue",
                                        payload: UsernameFontP,
                                    });
                                }}
                                onBlur={(e) => {
                                    // settextAreaUsernameFocused(false);
                                    dispatch({
                                        type: "UsernameP",
                                        payload: e.target.value,
                                    });
                                }}
                            ></TextareaAutosize>
                        </div>
                    )}
                    {ViewMode ? (
                        <p
                            className="profileSection1Textp1"
                            style={{
                                color: `${DescribeColorP}`,
                                fontFamily: DescribeFontP,
                            }}
                        >
                            {DescribeP}
                        </p>
                    ) : (
                        <div className={`textAreaEditorDiv`}>
                            <TextareaAutosize
                                className={`textAreaDesc`}
                                value={textAreaDesc}
                                spellCheck="false"
                                // cols={textAreaUsername.length}
                                placeholder="Describe Yourself!"
                                style={{
                                    color: `${descTextColor}`,
                                    fontFamily: `${descFontStyle}`,
                                }}
                                onChange={(e) => {
                                    settextAreaDesc(e.target.value);
                                }}
                                onFocus={(e) => {
                                    dispatch({ type: "openMiniTextEditor" });
                                    dispatch({
                                        type: "textBeingChangedColorDispatch",
                                        payload: "DescribeColorP",
                                    });
                                    dispatch({
                                        type: "textBeingChangedFontDispatch",
                                        payload: "DescribeFontP",
                                    });
                                    dispatch({
                                        type: "textBeingChangedColorValue",
                                        payload: DescribeColorP,
                                    });
                                    dispatch({
                                        type: "textBeingChangedFontValue",
                                        payload: DescribeFontP,
                                    });
                                }}
                                onBlur={(e) => {
                                    // settextAreaUsernameFocused(false);
                                    dispatch({
                                        type: "DescribeP",
                                        payload: e.target.value,
                                    });
                                }}
                            ></TextareaAutosize>
                        </div>
                    )}
                    {ViewMode ? (
                        <p
                            className="profileSection1Textp2"
                            style={{
                                color: `${AddressColorP}`,
                                fontFamily: AddressFontP,
                            }}
                        >
                            {AddressP}
                        </p>
                    ) : (
                        <div className={`textAreaEditorDiv`}>
                            <TextareaAutosize
                                className={`textAreaAddress`}
                                value={textAreaAddress}
                                spellCheck="false"
                                // cols={textAreaUsername.length}
                                placeholder="Address!"
                                style={{
                                    color: `${addressTextColor}`,
                                    fontFamily: `${addressFontStyle}`,
                                }}
                                onChange={(e) => {
                                    settextAreaAdress(e.target.value);
                                }}
                                onFocus={(e) => {
                                    dispatch({ type: "openMiniTextEditor" });
                                    dispatch({
                                        type: "textBeingChangedColorDispatch",
                                        payload: "AddressColorP",
                                    });
                                    dispatch({
                                        type: "textBeingChangedFontDispatch",
                                        payload: "AddressFontP",
                                    });
                                    dispatch({
                                        type: "textBeingChangedColorValue",
                                        payload: AddressColorP,
                                    });
                                    dispatch({
                                        type: "textBeingChangedFontValue",
                                        payload: AddressFontP,
                                    });
                                }}
                                onBlur={(e) => {
                                    // settextAreaUsernameFocused(false);
                                    dispatch({
                                        type: "AddressP",
                                        payload: e.target.value,
                                    });
                                }}
                            ></TextareaAutosize>
                        </div>
                    )}
                </div>
                <MuiThemeProvider theme={theme}>
                    <div className="profileSection1Buttons">
                        <Button
                            variant={HButtonStyleP}
                            color="primary"
                            style={{
                                margin: "10px",
                                border: `${
                                    HButtonStyleP === "contained" ||
                                    HButtonStyleP === "outlined"
                                        ? `2px solid ${HButtonColorP}`
                                        : ""
                                }`,
                                color: HTextColorP,
                                borderRadius: 0,
                                padding: "1.5rem auto",
                                backgroundColor: `${
                                    HButtonStyleP === "contained"
                                        ? HButtonColorP
                                        : ""
                                }`,
                            }}
                        >
                            Hire Me
                        </Button>
                        <Button
                            variant={DButtonStyleP}
                            color="primary"
                            style={{
                                margin: "10px",
                                border: `${
                                    DButtonStyleP === "contained" ||
                                    DButtonStyleP === "outlined"
                                        ? `2px solid ${DButtonColorP}`
                                        : ""
                                }`,
                                boxSizing: "border-box",
                                color: DTextColorP,
                                borderRadius: 0,
                                padding: "1.5rem auto",
                                backgroundColor: `${
                                    DButtonStyleP === "contained"
                                        ? DButtonColorP
                                        : ""
                                }`,
                            }}
                        >
                            Download Resume
                        </Button>
                        {/* <ChakraButton
                            bg={
                                DButtonStyleP === "contained"
                                    ? DButtonColorP
                                    : ""
                            }
                            style={{
                                margin: "10px",
                                // border: `2px solid ${DTextColorP}`,
                                boxSizing: "border-box",
                                // color: DTextColorP,
                                borderRadius: 0,
                                padding: "1rem",
                            }}
                        >
                            Button {DButtonColorP}
                            {DButtonStyleP}
                        </ChakraButton> */}
                    </div>
                </MuiThemeProvider>
            </div>
        </div>
    );
};

export default ProfileSection1;
