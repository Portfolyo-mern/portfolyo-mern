import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import "./signup.scss";
import GoogleLogin from 'react-google-login';
import { ClientId } from '../secret.jsx';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Baseurl } from '../App.js';
import clsx from 'clsx';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import SaveIcon from '@material-ui/icons/Save';
import Alert from '@material-ui/lab/Alert';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


const useStyles1 = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
    },
    wrapper: {
        margin: theme.spacing(1),
        position: 'relative',
    },
    buttonSuccess: {
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[700],
        },
    },
    fabProgress: {
        color: green[500],
        position: 'absolute',
        top: -6,
        left: -6,
        zIndex: 1,
    },
    buttonProgress: {
        color: green[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
}));


export default function SignUp() {
    const H = useHistory();
    const classes = useStyles();
    const classes1 = useStyles();
    const [alert,setalert] = useState(false);
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const buttonClassname = clsx({
        [classes1.buttonSuccess]: success,
      });
    
    const [values, setvalues] = useState({
        username: "",
        email: "",
        conformpass: "",
        password: ""
    });
    const register = async (e) => {
        e.preventDefault();
        let result;
        setSuccess(false);
        setLoading(true);
        try {
            result = await axios({
                url: `${Baseurl}/register`,
                headers: {
                    accept: "application/json",
                    "content-type": "application/json"
                },
                method: "post",
                data: JSON.stringify(values)
            });
            setSuccess(true);
            setLoading(false);
            console.log(result.data);
            localStorage.setItem("token", result.data);
            setvalues({
                username: "",
                email: "",
                conformpass: "",
                password: ""
            });
            setalert(true);
            // H.push("/dashboard");
        }
        catch (error) {
            setSuccess(true);
            setLoading(false);
            console.log("error");
        }
    }
    const loginfail = () => {
        console.log("login failed");
    }
    const loginsuccess = async (response) => {
        console.log(response)
        const {email} = response.profileObj;
        console.log("google login");
        let result;
        try{
            result = await axios({
                url:`${Baseurl}/googlelogin`,
                method:"post",
                data:({tokenId:response.tokenId,email})
            })
            console.log(result.data);
            localStorage.setItem("token",result.data);
            // H.push("/dashboard");
        }catch{
            console.log("error");
        }
    }    
    const handleChange = (props) => (event) => {
        setvalues((pre) => ({ ...pre, [props]: event.target.value }));
    }
    return (
        <div className="signuppage">
            <video autoPlay loop muted 
                    >
                    <source
                        src="https://player.vimeo.com/external/159035843.sd.mp4?s=0d309dd63ee62d4efc5e0e471824ed7fab0f7f85&profile_id=164&oauth2_token_id=57447761">
                    </source>
            </video>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" className="text-white mb-3">
                        Sign Up
                    </Typography>
                    <Alert style={{display:(alert)?"inherit":"none"}} clasName="mt-2" onClose={() => {setalert(false)}}>verification link as been sent to email</Alert>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="username"
                            label="username"
                            type="text"
                            id="username"
                            onChange={handleChange("username")}
                            autoComplete="username"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="email"
                            label="email"
                            type="email"
                            id="email"
                            onChange={handleChange("email")}
                            autoComplete="email"
                            // autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={handleChange("password")}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="conformpass"
                            label="conformpass"
                            type="password"
                            id="conformpass"
                            autoComplete="current-password"
                            onChange={handleChange("conformpass")}
                        />
                        <div className={classes1.wrapper} style={{textAlign:"center"}}>
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={buttonClassname}
                                disabled={loading}
                                onClick={register}
                                style={{display:(loading)?"none":"inherit"}}
                            >
                                Sign Up
                            </Button>
                            {loading && <CircularProgress size={24} className={classes1.buttonProgress} style={{margin:"auto",textAlign:"center"}} />}
                        </div>
                        {/* <GoogleLogin
                            render={renderProps => (
                            <Button onClick={renderProps.onClick} fullWidth
                             variant="contained"
                             className="text-white"
                             style={{background:"#3f51b5"}}
                             disabled={renderProps.disabled}>Google login</Button>)}
                            clientId={ClientId.clientId}
                            buttonText="Login"
                            onSuccess={loginsuccess}
                            onFailure={loginfail}
                            cookiePolicy={'single_host_origin'}
                        />  */}
                        <Grid container>
                            <Grid item>
                                <Link href="./signin" variant="body2" className="text-white">
                                    {"Already have an account? Sign In"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>

        </div>
    );
}