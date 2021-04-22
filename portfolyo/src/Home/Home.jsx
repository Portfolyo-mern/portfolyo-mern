import React from 'react';
import Fade from 'react-reveal/Fade';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './Home.scss';
import logo1 from '../assets/logo1.jpg';
import signin from '../assets/signin.jpg';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import ButtonBase from '@material-ui/core/ButtonBase'
import Jump from 'react-reveal/Jump';
import { useHistory } from 'react-router-dom'

const Home = () => {
    console.log(signin);
    const H = useHistory();
    const images = [
        {
            url: "https://images.unsplash.com/photo-1509822929063-6b6cfc9b42f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
            title: 'signin',
            width: '30%',
            height: "auto",
            goto: "/signin"
        },
        {
            url: 'https://images.pexels.com/photos/1036857/pexels-photo-1036857.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            title: 'signup',
            width: '30%',
            height: "auto",
            goto: "/signup"
        }
    ];
    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            minWidth: 200,
            width: '100%',
        },
        image: {
            position: 'relative',
            height: 200,
            [theme.breakpoints.down('xs')]: {
                width: '100% !important', // Overrides inline-style
                height: 200,
            },
            '&:hover, &$focusVisible': {
                zIndex: 1,
                '& $imageBackdrop': {
                    opacity: 0.15,
                },
                '& $imageMarked': {
                    opacity: 0,
                },
                '& $imageTitle': {
                    border: '4px solid currentColor',
                },
            },
        },
        focusVisible: {},
        imageButton: {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: theme.palette.common.white,
        },
        imageSrc: {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundSize: 'cover',
            backgroundPosition: 'center 40%',
        },
        imageBackdrop: {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: theme.palette.common.black,
            opacity: 0.4,
            transition: theme.transitions.create('opacity'),
        },
        imageTitle: {
            position: 'relative',
            padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
        },
        imageMarked: {
            height: 3,
            width: 18,
            backgroundColor: theme.palette.common.white,
            position: 'absolute',
            bottom: -2,
            left: 'calc(50% - 9px)',
            transition: theme.transitions.create('opacity'),
        },
    }));
    const classes = useStyles();
    return (
        <>
            <video autoPlay loop muted 
                >
                <source
                    src="https://player.vimeo.com/external/159035843.sd.mp4?s=0d309dd63ee62d4efc5e0e471824ed7fab0f7f85&profile_id=164&oauth2_token_id=57447761">
                </source>
            </video>
            <Jump>
                <AppBar position="static" style={{ backgroundColor: "#000000", backgroundImage: "linear-gradient(147deg, #1C1D1D 0%, #1C1D1D 74%)" }} >
                    <Toolbar>
                        <Typography variant="h6" className="text-uppercase text-white">
                    Portfolyo
                        </Typography>
                        <Button color="inherit" className="ml-auto text-white">samples</Button>
                    </Toolbar>
                </AppBar>
            </Jump>
            <div className="container-fluid p-0 m-0 Home" >
                <div className="row m-5 ">
                    <Fade left>
                        <div className="col p-3 mt-4 App ">
                            {/* <div className="logo">
                                <img src={logo1} alt="" />
                            </div> */}
                            <h3 className="text-uppercase text-center" style={{ lineHeight: "3rem" }}>portfolyo maker</h3>
                            <h3 className="text-justify text-capitalize text-center" style={{ lineHeight: "2.3rem" }}>make your own portfolyo website without coding</h3>
                        </div>
                    </Fade>
                </div>
                <div className="m-5">
                    <Fade top>
                        <div className={classes.root} style={{ marginTop: "3rem", display: "flex", justifyContent: "space-around" }}>
                            {images.map((image) => (
                                <ButtonBase
                                    focusRipple
                                    key={image.title}
                                    className={classes.image}
                                    focusVisibleClassName={classes.focusVisible}
                                    onClick={() => { console.log(image.goto); H.push(image.goto) }}
                                    style={{
                                        width: image.width,
                                        height: "200px",
                                        marginTop: "2rem"
                                    }}
                                >
                                    <span
                                        className={classes.imageSrc}
                                        style={{
                                            backgroundImage: `url(${image.url})`,
                                        }}
                                    />
                                    <span className={classes.imageBackdrop} />
                                    <span className={classes.imageButton}>
                                        <Typography
                                            component="span"
                                            variant="subtitle1"
                                            color="inherit"
                                            className={classes.imageTitle}
                                        >
                                            {image.title}
                                            <span className={classes.imageMarked} />
                                        </Typography>
                                    </span>
                                </ButtonBase>
                            ))}
                        </div>
                    </Fade>
                </div>
            </div>
        </>
    )
}

export default Home;
