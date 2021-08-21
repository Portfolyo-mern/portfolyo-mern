import React from 'react';
import { Button, TextField } from "@material-ui/core";
import { useSelector, useDispatch } from 'react-redux';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import EditImage from './EditImage/EditImage';
import Slider from 'rc-slider';
import 'rc-tooltip/assets/bootstrap.css';
import 'rc-slider/assets/index.css';

const EditProjectCard = () => {
    const editproject = useSelector(state => state.editproject);
    const dispatch = useDispatch();
    const projectcard = useSelector(state => state.projectcard);
    const handleChange = (e) => {
        let cc = [...projectcard];
        cc[editproject.index] = { ...editproject, animation: e.target.value };
        dispatch({ type: "PS_projectcard", payload: cc });
        dispatch({ type: "PS_editproject", payload: { ...editproject, animation: e.target.value } });
    };
    const imageType1 = (val) => {
        let cc = [...projectcard];
        cc[editproject.index] = { ...editproject, imagetype: val };
        dispatch({ type: "PS_projectcard", payload: cc });
        dispatch({ type: "PS_editproject", payload: { ...editproject, imagetype: val } });
    }
    return (
        <div className="EditCardE mt-4">
            <h3 className="text-center text-uppercase my-5">{(editproject.index !== null) ? `editing card ${editproject.index + 1}` : `select a card to edit`}</h3>
            <div style={{ display: (editproject.index === null) ? "none" : "inherit" }}>
                <div className="mx-auto" style={{ width: "max-content" }}>
                    <EditImage />
                    <Button variant="outlined" onClick={() => imageType1("round bord")} color="primary" >circle</Button>
                    <Button variant="outlined" className="ml-4" onClick={() => imageType1("bord")} color="primary" >square</Button>
                    <Button variant="outlined" className="ml-4" onClick={() => imageType1(`${editproject.imagetype} none`)} color="primary" >Border None</Button> <br/>
                    <div className="disabledrag my-5" style={{ width: "100%" }}>
                        <h3 className="text-center py-4">Border Radius</h3>
                        <Slider min={0} max={100} defaultValue={(editproject.imagetype==="round bord")?50:
                            (editproject.imagetype==="bord")?0:
                            (editproject.imagetype==="round bord none")?50:
                            (editproject.imagetype==="bord none")?0:parseFloat(editproject.imagetype)
                            } onChange={(e) => {
                                imageType1(""+e);
                        }} />
                    </div>
                </div>
                <div className="row my-5" >
                    <div className="col-md-6 mx-auto offset-1">
                        <TextField
                            className="disabledrag"
                            id="firstnameInput"
                            label="Title"
                            variant="outlined"
                            fullWidth
                            required
                            value={editproject.title}
                            onChange={(e) => {
                                let cc = [...projectcard];
                                cc[editproject.index] = { ...editproject, title: e.target.value };
                                dispatch({ type: "PS_projectcard", payload: cc });
                                dispatch({ type: "PS_editproject", payload: { ...editproject, title: e.target.value } });
                            }
                            }
                        />
                    </div>
                </div>
                <div className="row my-5" >
                    <div className="col-md-6 mx-auto offset-1">
                        <TextField
                            className="disabledrag"
                            id="firstnameInput"
                            label="about"
                            variant="outlined"
                            fullWidth
                            required
                            value={editproject.about}
                            onChange={(e) => {
                                let cc = [...projectcard];
                                cc[editproject.index] = { ...editproject, about: e.target.value };
                                dispatch({ type: "PS_projectcard", payload: cc });
                                dispatch({ type: "PS_editproject", payload: { ...editproject, about: e.target.value } });
                            }
                            }
                        />
                    </div>
                </div>
                <div className="row my-5" >
                    <div className="col-md-6 mx-auto offset-1">
                        <TextField
                            className="disabledrag"
                            id="firstnameInput"
                            label="buttontext"
                            variant="outlined"
                            fullWidth
                            required
                            value={editproject.buttonText}
                            onChange={(e) => {
                                let cc = [...projectcard];
                                cc[editproject.index] = { ...editproject, buttonText: e.target.value };
                                dispatch({ type: "PS_projectcard", payload: cc });
                                dispatch({ type: "PS_editproject", payload: { ...editproject, buttonText: e.target.value } });
                            }
                            }
                        />
                    </div>
                </div>
                <div className="row my-5" >
                    <div className="col-md-6 mx-auto offset-1">
                        <TextField
                            className="disabledrag"
                            id="firstnameInput"
                            label="buttonlink"
                            variant="outlined"
                            fullWidth
                            required
                            value={editproject.to}
                            onChange={(e) => {
                                let cc = [...projectcard];
                                cc[editproject.index] = { ...editproject, to: e.target.value };
                                dispatch({ type: "PS_projectcard", payload: cc });
                                dispatch({ type: "PS_editproject", payload: { ...editproject, to: e.target.value } });
                            }
                            }
                        />
                    </div>
                </div>
                <div className="row my-5" >
                    <div className="col-md-6 mx-auto offset-1">
                        <TextField
                            className="disabledrag"
                            id="firstnameInput"
                            label="techsheader"
                            variant="outlined"
                            fullWidth
                            required
                            value={editproject.techhead}
                            onChange={(e) => {
                                let cc = [...projectcard];
                                cc[editproject.index] = { ...editproject, techhead: e.target.value };
                                dispatch({ type: "PS_projectcard", payload: cc });
                                dispatch({ type: "PS_editproject", payload: { ...editproject, techhead: e.target.value } });
                            }
                            }
                        />
                    </div>
                </div>
                <div className="my-5">
                    <h4 className="text-center">Animation Type</h4>
                    <FormControl component="fieldset">
                        <FormLabel component="legend"></FormLabel>
                        <RadioGroup style={{ display: "flex", flexWrap: "wrap", flexDirection: "row", justifyContent: "space-between" }} aria-label="select-animation-type" name="gender1" value={editproject.animation} onChange={handleChange}>
                            <FormControlLabel value="fade-top" control={<Radio />} label="fade-top" />
                            <FormControlLabel value="fade-bottom" control={<Radio />} label="fade-bottom" />
                            <FormControlLabel value="fade-right" control={<Radio />} label="fade-right" />
                            <FormControlLabel value="fade-left" control={<Radio />} label="fade-left" />
                            <FormControlLabel value="fade-up" control={<Radio />} label="fade-up" />
                            <FormControlLabel value="fade-dowm" control={<Radio />} label="fade-down" />
                            <FormControlLabel value="fade-up-right" control={<Radio />} label="fade-up-right" />
                            <FormControlLabel value="fade-up-left" control={<Radio />} label="fade-up-left" />
                            <FormControlLabel value="fade-dowm-right" control={<Radio />} label="fade-dowm-right" />
                            <FormControlLabel value="fade-dowm-left" control={<Radio />} label="fade-dowm-left" />
                            <FormControlLabel value="flip-left" control={<Radio />} label="flip-left" />
                            <FormControlLabel value="flip-right" control={<Radio />} label="flip-right" />
                            <FormControlLabel value="flip-up" control={<Radio />} label="flip-up" />
                            <FormControlLabel value="flip-down" control={<Radio />} label="flip-down" />
                            <FormControlLabel value="zoom-in" control={<Radio />} label="zoom-in" />
                            <FormControlLabel value="zoom-in-up" control={<Radio />} label="zoom-in-up" />
                            <FormControlLabel value="zoom-in-down" control={<Radio />} label="zoom-in-down" />
                            <FormControlLabel value="zoom-in-right" control={<Radio />} label="zoom-in-right" />
                            <FormControlLabel value="zoom-in-left" control={<Radio />} label="zoom-in-left" />
                            <FormControlLabel value="zoom-out" control={<Radio />} label="zoom-out" />
                            <FormControlLabel value="zoom-out-up" control={<Radio />} label="zoom-out-up" />
                            <FormControlLabel value="zoom-out-down" control={<Radio />} label="zoom-out-down" />
                            <FormControlLabel value="zoom-out-right" control={<Radio />} label="zoom-out-right" />
                            <FormControlLabel value="zoom-out-left" control={<Radio />} label="zoom-out-left" />
                            <FormControlLabel value="" control={<Radio />} label="none" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className="my-4">
                    <h4 className="text-center">Animation Duration</h4>
                    <h4 className="text-center my-3 text-muted" style={{ fontSize: "1.5rem" }}>0s--0.3s--0.6s--0.9s--1.2s--1.5s--1.8s--2.1s--2.4s--2.7s--3s</h4>
                    <input type="range" data-toggle="tooltip" data-placement="top" class="custom-range disabledrag" onChange={(e) => {
                        let cc = [...projectcard];
                        cc[editproject.index] = { ...editproject, duration: e.target.value };
                        dispatch({ type: "PS_projectcard", payload: cc });
                        dispatch({ type: "PS_editproject", payload: { ...editproject, duration: e.target.value } });
                    }} min="0" max="3" step="0.3" value={editproject.duration}

                        id="customRange3"></input>
                </div>
                <div className="my-4">
                    <h4 className="text-center">Animation Delay</h4>
                    <h4 className="text-center my-3 text-muted" style={{ fontSize: "1.5rem" }}>0s--0.3s--0.6s--0.9s--1.2s--1.5s--1.8s--2.1s--2.4s--2.7s--3s</h4>
                    <input type="range" data-toggle="tooltip" data-placement="top" class="custom-range disabledrag" onChange={(e) => {
                        let cc = [...projectcard];
                        cc[editproject.index] = { ...editproject, delay: e.target.value };
                        dispatch({ type: "PS_projectcard", payload: cc });
                        dispatch({ type: "PS_editproject", payload: { ...editproject, delay: e.target.value } });
                    }} min="0" max="3" step="0.3" value={editproject.delay}

                        id="customRange3"></input>
                </div>
            </div>

        </div>
    )
}

export default EditProjectCard


