import React, { useState } from "react";
import "./SignUp.scss";
import signUp from "../assets/signUp.svg";
import wave from "../assets/wave.png";
import { useHistory } from "react-router-dom";
import profilePic from "../assets/profilePic.svg";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import GoogleLogin from "react-google-login";
import { ClientId } from "../secret.jsx";
import axios from "axios";
import { Baseurl } from "../App.js";
import clsx from "clsx";
import CircularProgress from "@material-ui/core/CircularProgress";
import { green } from "@material-ui/core/colors";
import Fab from "@material-ui/core/Fab";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const SignUp = () => {
    // let state = useSelector((state) => state.signup);
    // let dispatch = useDispatch();
    const classes1 = useStyles();
    const [gender, setgender] = useState(1);
    const [isActive, setIsActive] = useState(false);
    const [isActiveSection, setIsActiveSection] = useState(false);
    const [value, setValue] = useState("");
    const [isActivePass, setIsActivePass] = useState(false);
    const [valuePass, setValuePass] = useState("");
    const [isActiveEmail, setIsActiveEmail] = useState(false);
    const [valueEmail, setValueEmail] = useState("");
    const [section, setSection] = useState("");
    const H = useHistory();
    const [vis, setvis] = useState("hidden");
    const [msg, setmsg] = useState("username or email already exists");
    const [bg,setbg] = useState("danger");
    const [alert, setalert] = useState(false);
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const buttonClassname = clsx({
        [classes1.buttonSuccess]: success,
    });

    const [values, setvalues] = useState({
        username: "",
        email: "",
        conformpass: "",
        password: "",
    });
    const handleTextChange = (text) => {
        setvalues((prev) => ({
            ...prev,
            username: text,
        }));
        if (text !== "") {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    };
    const handleTextChangePass = (text) => {
        setvalues((prev) => ({
            ...prev,
            password: text,
        }));
        if (text !== "") {
            setIsActivePass(true);
        } else {
            setIsActivePass(false);
        }
    };
    const handleTextChangeConformPass = (text) => {
        setvalues((prev) => ({
            ...prev,
            conformpass: text,
        }));
        if (text !== "") {
            setIsActivePass(true);
        } else {
            setIsActivePass(false);
        }
    };
    const handleTextChangeEmail = (text) => {
        setvalues((prev) => ({
            ...prev,
            email: text,
        }));
        if (text !== "") {
            setIsActiveEmail(true);
        } else {
            setIsActiveEmail(false);
        }
    };
    const changeGender = () => {
        if (gender === 1) {
            setgender(0);
            console.log(gender);
        } else {
            setgender(1);
            console.log(gender);
        }
    };

    const register = async (e) => {
        e.preventDefault();
        if(values.password!==values.conformpass){
            setmsg("password and conformpass not matching");
            setbg("danger")
            setvis("visible");
        }else{
            let result;
            setSuccess(false);
            setLoading(true);
            setvis("hidden");
            try {
                result = await axios({
                    url: `${Baseurl}/register`,
                    headers: {
                        accept: "application/json",
                        "content-type": "application/json",
                    },
                    method: "post",
                    data: JSON.stringify(values),
                });
                setSuccess(true);
                setLoading(false);
                // console.log(result.data);
                localStorage.setItem("token", result.data);
                setvalues({
                    username: "",
                    email: "",
                    conformpass: "",
                    password: "",
                });
                setalert(true);
                setmsg("verification link as been sent gmail check it!!");
                setbg("success");
                setvis("visible");
                // H.push("/dashboard");
            } catch (error) {
                setSuccess(true);
                setLoading(false);
                setmsg("username or email already exists");
                setbg("danger");
                setvis("visible");
                console.log("error");
            }
        }
    };
    const loginfail = () => {
        console.log("login failed");
    };
    const loginsuccess = async (response) => {
        console.log(response);
        const { email } = response.profileObj;
        console.log("google login");
        let result;
        try {
            result = await axios({
                url: `${Baseurl}/googlelogin`,
                method: "post",
                data: { tokenId: response.tokenId, email },
            });
            console.log(result.data);
            localStorage.setItem("token", result.data);
            // H.push("/dashboard");
        } catch {
            console.log("error");
        }
    };
    const handleChange = (props) => (event) => {
        setvalues((pre) => ({ ...pre, [props]: event.target.value }));
    };
    return (
        <>
            <div
                className={`alert text-center alert-${bg} alert-dismissible fade show m-0 px-2`}
                style={{ visibility: vis }}
                role="alert"
            >
                {msg}
            </div>
            <div
                className="loader-spinner"
                style={{ visibility: loading ? "visible" : "hidden" }}
            >
                <div className="spinner-grow text-success mr-1" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow text-danger mr-1" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow text-warning mr-1" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
            <div
                className="signUpPage wholesignup"
                style={{ visibility: loading ? "hidden" : "visible" }}
            >
                <img className="wave" src={wave} alt="wallpaper"></img>
                <div className="container">
                    <img src={signUp} alt="sigup" className="img"></img>
                    <div className="login-content">
                        <form className="form">
                            <h2 className="title">SignUp</h2>
                            <img src={profilePic} alt="Profile"></img>
                            <div className="input-div one mt-3">
                                <div className="i">
                                    <i className="fas fa-user"></i>
                                </div>
                                <div className="div">
                                    <h5 className={isActive ? "Active" : ""}>
                                        Username
                                    </h5>
                                    <input
                                        type="text"
                                        className="input"
                                        value={values.username}
                                        onChange={(e) =>
                                            handleTextChange(e.target.value)
                                        }
                                        required
                                    ></input>
                                </div>
                            </div>
                            <div className="input-div one">
                                <div className="i">
                                    <i className="fas fa-user"></i>
                                </div>
                                <div className="div">
                                    <h5
                                        className={
                                            isActiveEmail ? "Active" : ""
                                        }
                                    >
                                        Email
                                    </h5>
                                    <input
                                        type="email"
                                        class="input"
                                        value={values.email}
                                        onChange={(e) =>
                                            handleTextChangeEmail(
                                                e.target.value
                                            )
                                        }
                                        required
                                    ></input>
                                </div>
                            </div>
                            <div className="input-div pass">
                                <div className="i">
                                    <i className="fas fa-lock"></i>
                                </div>
                                <div className="div">
                                    <h5
                                        className={isActivePass ? "Active" : ""}
                                    >
                                        Password
                                    </h5>
                                    <input
                                        type="password"
                                        class="input"
                                        value={values.password}
                                        onChange={(e) =>
                                            handleTextChangePass(e.target.value)
                                        }
                                        required
                                    ></input>
                                </div>
                            </div>
                            <div className="input-div pass">
                                <div className="i">
                                    <i className="fas fa-lock"></i>
                                </div>
                                <div className="div">
                                    <h5
                                        className={isActivePass ? "Active" : ""}
                                    >
                                        Conform password
                                    </h5>
                                    <input
                                        type="password"
                                        class="input"
                                        value={values.conformpass}
                                        onChange={(e) =>
                                            handleTextChangeConformPass(
                                                e.target.value
                                            )
                                        }
                                        required
                                    ></input>
                                </div>
                            </div>
                            <br />
                            <a href=".#/signin" className="have" m-auto>
                                Already a Member?
                            </a>
                            <input
                                type="submit"
                                className="btn"
                                // onClick={submitMember}
                                disabled={loading}
                                onClick={register}
                                value="SignUp"
                            ></input>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;
