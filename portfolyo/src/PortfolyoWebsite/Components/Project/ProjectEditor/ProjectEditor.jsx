import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';
import AddProject from '../AddProject/AddProject';
import EditProjectCard from '../EditProjectCard/EditProjectCard';
import EditAllProjectCard from '../EditAllProjectCard/EditAllProjectCard';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { ShadowPicker } from "react-shadow-picker";
import Slider, { SliderTooltip } from 'rc-slider';
import 'rc-tooltip/assets/bootstrap.css';
import 'rc-slider/assets/index.css';
import EditHeader from '../EditHeader/EditHeader';
import { SketchPicker, ChromePicker } from "react-color";

const images = [
    {
        url: '/static/images/grid-list/breakfast.jpg',
        title: 'Layout1',
        width: '40%',
        value: 0
    },
    {
        url: '/static/images/grid-list/burgers.jpg',
        title: 'Layout2',
        width: '40%',
        value: 1
    },
    {
        url: '/static/images/grid-list/breakfast.jpg',
        title: 'Layout3',
        width: '40%',
        value: 2
    },
    {
        url: '/static/images/grid-list/burgers.jpg',
        title: 'Layout4',
        width: '40%',
        value: 3
    },
    {
        url: '/static/images/grid-list/burgers.jpg',
        title: 'Layout5',
        width: '40%',
        value: 4
    },
    {
        url: '/static/images/grid-list/burgers.jpg',
        title: 'Layout6',
        width: '40%',
        value: 5
    },
    {
        url: '/static/images/grid-list/burgers.jpg',
        title: 'Layout7',
        width: '40%',
        value: 6
    },
    {
        url: '/static/images/grid-list/burgers.jpg',
        title: 'Layout8',
        width: '40%',
        value: 7
    }
];

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: 300,
        width: '100%',
    },
    image: {
        position: 'relative',
        height: 200,
        [theme.breakpoints.down('xs')]: {
            width: '100% !important', // Overrides inline-style
            height: 100,
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
        justifyContent: 'space-around',
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


const ProjectEditor = () => {
    const projectcustom = useSelector(state => state.projectcustom);
    const classes = useStyles();
    const dispatch = useDispatch();
    const projectbody = useSelector(state => state.projectbody);
    const currenttabpro = useSelector(state => state.currenttabpro);
    const projectlayout = useSelector(state => state.projectlayout);
    const handleChange = (e, newValue) => {
        dispatch({ type: "PS_currenttabpro", payload: newValue });
    }
    const { createSliderWithTooltip } = Slider;
    const Range = createSliderWithTooltip(Slider.Range);
    const { Handle } = Slider;
    const handle = e => {
        // console.log(e.target.value);
        console.log(e)
        console.log(projectbody);
        // return (
        //     <SliderTooltip
        //         prefixCls="rc-slider-tooltip"
        //         overlay={`${value} %`}
        //         visible={dragging}
        //         placement="top"
        //         key={index}
        //     >
        //         <Handle value={value} {...restProps} />
        //     </SliderTooltip>
        // );
    };
    console.log(projectbody);
    return (
        <>
            <Paper square style={{ width: "max-content", margin: "auto" }}>
                <Tabs
                    value={currenttabpro}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                >
                    <Tab label="Backgrounds" />
                    <Tab label="Layouts" />
                    <Tab label="AddProject" />
                    <Tab label="EditHeader" />
                    <Tab label="EditProjects" />
                    <Tab label="Edit ALL Projects" />
                </Tabs>
            </Paper>
            {
                (currenttabpro == 0) ? (
                    <>
                        <h3 className="text-center mt-4">Animated Backgrounds</h3>
                        <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
                            <div className="mt-4" style={{ width: "max-content" }}>
                                <Button variant="outlined" color="primary"
                                    onClick={() => { dispatch({ type: "PS_projectbody", payload: { ...projectbody, background: 0 } }) }}
                                >Background1</Button>
                            </div>
                            <div className="mt-4" style={{ width: "max-content" }}>
                                <Button variant="outlined" color="primary"
                                    onClick={() => { dispatch({ type: "PS_projectbody", payload: { ...projectbody, background: 1 } }) }}
                                >Background2</Button>
                            </div>
                            <div className="mt-4" style={{ width: "max-content" }}
                                onClick={() => { dispatch({ type: "PS_projectbody", payload: { ...projectbody, background: 2 } }) }}
                            >
                                <Button variant="outlined" color="primary" >Background3</Button>
                            </div>
                            <div className="mt-4" style={{ width: "max-content" }}
                                onClick={() => { dispatch({ type: "PS_projectbody", payload: { ...projectbody, background: 3 } }) }}
                            >
                                <Button variant="outlined" color="primary" >Background4</Button>
                            </div>
                            <div className="mt-4" style={{ width: "max-content" }}
                                onClick={() => { dispatch({ type: "PS_projectbody", payload: { ...projectbody, background: 4 } }) }}
                            >
                                <Button variant="outlined" color="primary" >None</Button>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-center my-5">Background Shadow</h3>
                            <div style={{ boxShadow: projectbody.shadow }} >
                                <ShadowPicker
                                    className="disabledrag"
                                    value={projectbody.shadow}
                                    onChange={(value) => {
                                        console.log(value);
                                        dispatch({ type: 'PS_projectbody', payload: { ...projectbody, shadow: value } });
                                    }}
                                ></ShadowPicker>
                            </div>
                        </div>
                        <div className="disabledrag my-5" style={{ width: "100%" }}>
                            <h3 className="text-center py-4">Border Radius</h3>
                            <Slider min={0} max={100} defaultValue={projectbody.borderRadius} onChange={(e) => {
                                dispatch({ type: "PS_projectbody", payload: { ...projectbody, borderRadius: e } })
                            }} />
                        </div>
                        <div>
                            <h3 className="text-center my-4">Background Color</h3>
                            <div className="mx-auto" style={{ width: "max-content" }}>
                                <span
                                    id="SketchPicker"
                                    className="disabledrag"
                                    style={{ cursor: "pointer !important" }}
                                >
                                    <SketchPicker
                                        color={projectbody.backgroundColor}
                                        onChange={(color) => {
                                            console.log(color); dispatch({ type: "PS_projectbody", payload: { ...projectbody, backgroundColor: color.hex } })
                                        }
                                        }
                                        style={{ cursor: "pointer" }} />
                                </span>
                            </div>
                        </div>
                    </>
                ) : (currenttabpro == 2) ? (
                    <AddProject />
                ) : (currenttabpro == 3) ? (
                    <EditHeader />
                ) : (currenttabpro == 4) ? (
                    <EditProjectCard />
                ) : (currenttabpro == 5) ? (
                    <EditAllProjectCard />
                ) : (currenttabpro == 1) ? (
                    <>
                        <h3 className="text-center mt-5">{`Current Layout ${projectlayout + 1}`}</h3>
                        <div className={classes.root} style={{ marginTop: "4rem", marginBottom: "4rem" }}>
                            {images.map((image) => (
                                <ButtonBase
                                    focusRipple
                                    key={image.title}
                                    className={classes.image}
                                    focusVisibleClassName={classes.focusVisible}
                                    style={{
                                        width: image.width,
                                        margin: "auto",
                                        marginBottom: "4rem"
                                    }}
                                    onClick={
                                        () => {
                                            dispatch({ type: "PS_projectlayout", payload: image.value });
                                            if (image.value == 4 || image.value == 5 || image.value == 6) {
                                                dispatch({ type: "PS_projectcustom", payload: { ...projectcustom, bgtag: "#eee", colorTc: "#311F1F" } });
                                            }
                                            else {
                                                dispatch({ type: "PS_projectcustom", payload: { ...projectcustom, bgtag: "#fff", colorTc: "#03bfcb" } });
                                            }
                                        }
                                    }
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
                    </>
                ) : ""

            }
        </>
    )
}

export default ProjectEditor



