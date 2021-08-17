import React,{useState} from 'react';
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
import GoogleLogin from 'react-google-login';
import "./signin.scss";
import {ClientId} from '../secret.jsx';
import {Baseurl} from '../App.js';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import clsx from 'clsx';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import Fab from '@material-ui/core/Fab';

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


export default function SignIn() {
    const classes = useStyles();
    const classes1 = useStyles();
    const H = useHistory();
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const buttonClassname = clsx({
        [classes1.buttonSuccess]: success,
      });
    const [values,setvalues] = useState({
        username:"",
        email:"",
        conformpass:"",
        password:""
    });
    const handleChange = (props) => (event) => {
        setvalues((pre)=>({...pre,[props]:event.target.value}));
    } 
    const loginfail = () => {
        console.log("login failed");
    }
    const login = async (e) => {
        e.preventDefault();
        let result;
        setSuccess(false);
        setLoading(true);
        try {
            result = await axios({
                url: `${Baseurl}/login`,
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
            localStorage.setItem("token",result.data);
            H.push("/dashboard");
        }
        catch (error) {
            setSuccess(true);
            setLoading(false);
            console.log(error);
        }
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
            H.push("/dashboard");
        }catch{
            console.log("error");
        }
    }    
    return (
        <>
        <div className="HomeBackgroundImage"></div>
        <div className="signinpage my-3">
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" className="text-white">
                        Sign in
                    </Typography>
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
                        {/* <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={login}
                            className={classes.submit}
                        >
                            Sign In
                        </Button> */}
                        <div className={classes1.wrapper} style={{textAlign:"center"}}>
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={buttonClassname}
                                disabled={loading}
                                onClick={login}
                                style={{display:(loading)?"none":"inherit",marginTop:"1.5rem",marginBottom:"1.2rem"}}
                            >
                                Sign In
                            </Button>
                            {loading && <CircularProgress size={24} className={classes1.buttonProgress} style={{margin:"auto",textAlign:"center"}} />}
                        </div>
                        <p className="text-white text-center">OR</p>
                        <GoogleLogin
                            render={renderProps => (
                            <Button onClick={renderProps.onClick} fullWidth
                             variant="contained"
                             className="text-white"
                             style={{background:"#3f51b5"}}
                             disabled={renderProps.disabled}>Google login</Button>)}
                            clientId={ClientId.clientId}
                            buttonText="Login"
                            redirectUri={'https://portfolyo-mern.github.io/portfolyo-mern/#/dashboard'}
                            onSuccess={loginsuccess}
                            onFailure={loginfail}
                            cookiePolicy={'single_host_origin'}
                        /> 
                        <Grid container className="mt-3">
                            <Grid item>
                                <Link href="#/signup" variant="body2" className="text-white">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>

        </div>
        </>
    );
}