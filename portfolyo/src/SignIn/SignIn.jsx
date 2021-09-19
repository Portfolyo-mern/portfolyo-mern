import React, { useState } from "react";
import "./SignIn.scss";
import profilePic from "../assets/profilePic.svg";
import signInpic1 from "../assets/signInpic1.svg";
import wave from "../assets/wave.png";
import { useHistory } from "react-router-dom";
import GoogleButton from "react-google-button";
import { useSelector, useDispatch } from "react-redux";
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
import { Baseurl } from "../App.js";
import axios from "axios";
import clsx from "clsx";
import CircularProgress from "@material-ui/core/CircularProgress";
import { green } from "@material-ui/core/colors";
import Fab from "@material-ui/core/Fab";

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

const SignIn = () => {
    const classes1 = useStyles();
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const buttonClassname = clsx({
        [classes1.buttonSuccess]: success,
    });
    const [values, setvalues] = useState({
        username: "",
        password: "",
    });
    let dispatch = useDispatch();
    const H = useHistory();
    const [isActive, setIsActive] = useState(false);
    const [value, setValue] = useState("");
    const [isActivePass, setIsActivePass] = useState(false);
    const [valuePass, setValuePass] = useState("");
    const [vis, setvis] = useState("none");
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
    const loginfail = () => {
        console.log("login failed");
    };
    const login = async (e) => {
        e.preventDefault();
        let result;
        setSuccess(false);
        dispatch({type:"SpinnerV2",payload:true});
        setvis("none");
        try {
            result = await axios({
                url: `${Baseurl}/login`,
                headers: {
                    accept: "application/json",
                    "content-type": "application/json",
                },
                method: "post",
                data: JSON.stringify(values),
            });
            setSuccess(true);
            dispatch({type:"SpinnerV2",payload:false});
            console.log(result.data);
            localStorage.setItem("token", result.data);
            H.push("/dashboard");
        } catch (error) {
            setSuccess(true);
            dispatch({type:"SpinnerV2",payload:false});
            setvis("inherit");
            console.log(error);
        }
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
            H.push("/dashboard");
        } catch {
            console.log("error");
            setvis("inherit");
        }
    };
    return (
        <div className="signInCompletePage">
            <div className="signInCompletePage" style={{ minWidth: "100vw" }}>
                <div
                    className="alert text-center alert-danger alert-dismissible fade show m-0 px-2"
                    style={{ display: vis }}
                    role="alert"
                >
                    invalid details provided
                </div>
                <div
                    className="loader-spinner"
                    style={{ visibility: loading ? "visible" : "hidden" }}
                >
                    <div
                        className="spinner-grow text-success mr-1"
                        role="status"
                    >
                        <span className="sr-only">Loading...</span>
                    </div>
                    <div
                        className="spinner-grow text-danger mr-1"
                        role="status"
                    >
                        <span className="sr-only">Loading...</span>
                    </div>
                    <div
                        className="spinner-grow text-warning mr-1"
                        role="status"
                    >
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
                <div
                    className="signUpPage whole"
                    style={{ visibility: loading ? "hidden" : "visible" }}
                >
                    <img className="wave" src={wave} alt="wallpaper"></img>
                    <div className="container">
                        <img
                            src={signInpic1}
                            alt="sigup"
                            className="img"
                            mb-5
                            style={{ top: "4rem" }}
                        ></img>
                        <div className="login-content">
                            <form className="form">
                                <h2 className="title">SignIn</h2>
                                <img src={profilePic} alt="Profile"></img>
                                <div class="input-div one mt-5">
                                    <div class="i">
                                        <i class="fas fa-user"></i>
                                    </div>
                                    <div class="div">
                                        <h5
                                            className={isActive ? "Active" : ""}
                                        >
                                            Username/Email
                                        </h5>
                                        <input
                                            type="text"
                                            class="input"
                                            value={values.username}
                                            onChange={(e) =>
                                                handleTextChange(e.target.value)
                                            }
                                            required
                                        ></input>
                                    </div>
                                </div>
                                <div class="input-div pass">
                                    <div class="i">
                                        <i class="fas fa-lock"></i>
                                    </div>
                                    <div class="div">
                                        <h5
                                            className={
                                                isActivePass ? "Active" : ""
                                            }
                                        >
                                            Password
                                        </h5>
                                        <input
                                            type="password"
                                            class="input"
                                            value={values.password}
                                            onChange={(e) =>
                                                handleTextChangePass(
                                                    e.target.value
                                                )
                                            }
                                            required
                                        ></input>
                                    </div>
                                </div>
                                <br />
                                <a href=".#/signup" className="have mr-3">
                                    New to Portfolyo?
                                </a>
                                <input
                                    type="submit"
                                    className="btn"
                                    // onClick={onsubmitlogin}
                                    value="Login"
                                    disabled={loading}
                                    onClick={login}
                                    style={{
                                        display: loading ? "none" : "inherit",
                                        marginTop: "1.5rem",
                                        marginBottom: "1.2rem",
                                    }}
                                ></input>
                                {/* {loading && (
                                    <CircularProgress
                                        size={24}
                                        className={classes1.buttonProgress}
                                        style={{
                                            margin: "auto",
                                            textAlign: "center",
                                        }}
                                    />
                                )} */}
                                <hr
                                    style={{
                                        height: "0.2px",
                                        // border: "1px solid #000000",
                                        background: "#41C393",
                                    }}
                                />
                                <GoogleLogin
                                    style={{
                                        background: "#41C393",
                                    }}
                                    render={(renderProps) => (
                                        <GoogleButton
                                            onClick={renderProps.onClick}
                                            fullWidth
                                            variant="contained"
                                            className="text-white"
                                            style={{
                                                background: "#41C393",
                                                width: "100%",
                                            }}
                                            disabled={renderProps.disabled}
                                        >
                                            Google login
                                        </GoogleButton>
                                    )}
                                    clientId={ClientId.clientId}
                                    buttonText="Login"
                                    redirectUri={
                                        "https://portfolyo-mern.github.io/portfolyo-mern/#/dashboard"
                                    }
                                    onSuccess={loginsuccess}
                                    onFailure={loginfail}
                                    cookiePolicy={"single_host_origin"}
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
