import React from 'react';
import { Button, TextField } from "@material-ui/core";
import { useSelector, useDispatch } from 'react-redux';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import EditImage from '../EditImage/EditImage';

const EditCard = () => {
    const card1edu = useSelector(state => state.card1edu);
    const dispatch = useDispatch();
    const editcardine = useSelector(state => state.editcardine);
    const handleChange = (e) => {
        let cc = [...card1edu];
        cc[editcardine.index] = { ...editcardine, animation: e.target.value };
        dispatch({ type: "card1edu", payload: cc });
        dispatch({ type: "editcardine", payload: { ...editcardine, animation: e.target.value } });
    };
    const imageType1 = (val) => {
        dispatch({ type: "imagetypeedu", payload: val });
    }
    return (
        <div className="AddCardE mt-4">
            <h3 className="text-center text-uppercase my-5">{(editcardine.index !== null) ? `editing card ${editcardine.index + 1}` : `select a card to edit`}</h3>
            <div style={{ display: (editcardine.index === null) ? "none" : "inherit" }}>
                <div className="mx-auto" style={{ width: "max-content" }}>
                    <EditImage />
                    <Button variant="outlined" onClick={()=>imageType1("rounded-circle")} color="primary" >circle</Button> 
                    <Button variant="outlined" className="mx-4" onClick={()=>imageType1("")} color="primary" >square</Button> 
                </div>
                <div className="mx-auto my-5" style={{display:"block",width:"max-content",position:"sticky",top:"0",zIndex:"99999"}}>
                <Button variant="contained" color="primary" onClick={()=>{
                    let cc = [...card1edu];
                    cc[editcardine.index] = { ...editcardine, title: document.querySelector("#editeducationcardtitle").value,
                        year:document.querySelector("#editeducationcardyear").value,
                        description:document.querySelector("#editeducationcarddescription").value
                };
                    dispatch({ type: "card1edu", payload: cc });
                    dispatch({ type: "editcardine", payload: { ...editcardine, title: document.querySelector("#editeducationcardtitle").value,
                        year:document.querySelector("#editeducationcardyear").value,
                        description:document.querySelector("#editeducationcarddescription").value
                } });
                }}>
                    update changes
                </Button>
            </div>
                <div className="row my-5" >
                    <div className="col-md-6 mx-auto offset-1">
                        <TextField
                            className="disabledrag"
                            id="editeducationcardtitle"
                            label="Title"
                            variant="outlined"
                            fullWidth
                            required
                            defaultValue={editcardine.title}
                        />
                    </div>
                </div>
                <div className="row my-5" >
                    <div className="col-md-6 mx-auto offset-1">
                        <TextField
                            className="disabledrag"
                            id="editeducationcardyear"
                            label="Year"
                            variant="outlined"
                            fullWidth
                            required
                            defaultValue={editcardine.year}
                        />
                    </div>
                </div>
                <div className="row my-5" >
                    <div className="col-md-6 mx-auto offset-1">
                        <TextField
                            className="disabledrag"
                            id="editeducationcarddescription"
                            label="describe"
                            variant="outlined"
                            fullWidth
                            required
                            defaultValue={editcardine.description}
                        />
                    </div>
                </div>
                <div className="my-5">
                    <h4 className="text-center">Animation Type</h4>
                    <FormControl component="fieldset">
                        <FormLabel component="legend"></FormLabel>
                        <RadioGroup style={{ display: "flex", flexWrap: "wrap", flexDirection: "row", justifyContent: "space-between" }} aria-label="select-animation-type" name="gender1" value={editcardine.animation} onChange={handleChange}>
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
                        let cc = [...card1edu];
                        cc[editcardine.index] = { ...editcardine, animationduration: e.target.value };
                        dispatch({ type: "card1edu", payload: cc });
                        dispatch({ type: "editcardine", payload: { ...editcardine, animationduration: e.target.value } });
                    }} min="0" max="3" step="0.3" value={parseFloat(editcardine.animationduration)}
                        id="customRange3"></input>
                </div>
                <div className="my-4">
                    <h4 className="text-center">Animation Delay</h4>
                    <h4 className="text-center my-3 text-muted" style={{ fontSize: "1.5rem" }}>0s--0.3s--0.6s--0.9s--1.2s--1.5s--1.8s--2.1s--2.4s--2.7s--3s</h4>
                    <input type="range" data-toggle="tooltip" data-placement="top" class="custom-range disabledrag" onChange={(e) => {
                        let cc = [...card1edu];
                        cc[editcardine.index] = { ...editcardine, animationdelay: e.target.value };
                        dispatch({ type: "card1edu", payload: cc });
                        dispatch({ type: "editcardine", payload: { ...editcardine, animationdelay: e.target.value } });
                    }} min="0" max="3" step="0.3" value={parseFloat(editcardine.animationdelay)}
                        id="customRange3"></input>
                </div>
            </div>

        </div>
    )
}

export default EditCard


