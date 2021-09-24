import React,{useState} from "react";
import { ShadowPicker } from "react-shadow-picker";
import Slider from 'rc-slider';
import 'rc-tooltip/assets/bootstrap.css';
import 'rc-slider/assets/index.css';
import {useSelector,useDispatch} from 'react-redux';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import transitionFade from "../../../../assets/transitionFade.png";
import transitionFlip from "../../../../assets/transitionFlip.png";
import transitionZoom from "../../../../assets/transitionZoom.png";
import Typography from "@material-ui/core/Typography";
// import Tooltip from '@material-ui/core/Tooltip';
import {
    InputLabel,
    makeStyles,
    Select,
} from "@material-ui/core";

const ContactAnimations = () => {
  const ContactAnimation = useSelector(state=>state.ContactAnimations);
  const dispatch = useDispatch();
  const handleChange = (event) => {
        // setValue(event.target.value);
        dispatch({ type: "contactanimations", payload: {...ContactAnimation,animation:event.target.value} });
    };
    const [
      projectBackgroundTransitionStyle,
      setprojectBackgroundTransitionStyle,
  ] = useState(ContactAnimation);
  const [projectTransitionSelected, setprojectTransitionSelected] = useState([
      "projectTrasitionSelected",
      "",
      "",
      "",
  ]);

  const projectBackgroundTransitioneHandler = (event) => {
      setprojectBackgroundTransitionStyle(event.target.value);
      dispatch({ type: "contactanimations", payload: {...ContactAnimation,animation:event.target.value} });
      
  };
  const projectBackgroundTransitionStyleHandler = (index, event) => {
      if (index === 0) {
          setprojectBackgroundTransitionStyle("none");
          dispatch({ type: "contactanimations", payload: {...ContactAnimation,animation:"none"} });
          return;
      }
      const temp = ["", "", "", ""];
      temp[index] = "projectTrasitionSelected";
      setprojectTransitionSelected(temp);
      setprojectBackgroundTransitionStyle(event.target.value);
      dispatch({ type: "contactanimations", payload: {...ContactAnimation,animation:event.target.value} });
      
  };

  return (
    <div className="ContactAnimations">
      <div>
        <h3 className="text-center my-5">Background Shadow</h3>
        <div 
        style={{ boxShadow: ContactAnimation.shadow }}
        >
          <ShadowPicker
            className="disabledrag"
            value={ContactAnimation.shadow}
            onChange={(value) => {
            
              dispatch({
                type: "contactanimations",
                payload: { ...ContactAnimation, shadow: value },
              });
            }}
          ></ShadowPicker>
        </div>
      </div>
      <div className="disabledrag my-5" style={{ width: "100%" }}>
        <h3 className="text-center py-4">Border Radius</h3>
        <Slider
          min={0}
          max={100}
          defaultValue={ContactAnimation.radius}
          onChange={(e) => {
            dispatch({
              type: "contactanimations",
              payload: { ...ContactAnimation, radius: e },
            });
          }}
        />
      </div>
      <div className="my-5">
                <h4 className="text-center">Animation Type</h4>
                <div className="skillsSectionTransitionEditor">
                    <div
                        className={`skillsSectionTransitionNone ${projectTransitionSelected[0]}`}
                        onClick={() => {
                            projectBackgroundTransitionStyleHandler(0, null);
                        }}
                    >
                        <p
                            style={{
                                display: "block",
                                margin: "auto",
                            }}
                        >
                            None
                        </p>
                    </div>
                    <div
                        className={`skillsSectionTransitions ${projectTransitionSelected[1]}`}
                        onClick={(event) => {
                            projectBackgroundTransitionStyleHandler(1, event);
                        }}
                    >
                        <img src={transitionFade} alt="transitionFade"></img>
                        <FormControl
                            variant="outlined"
                            className={`disabledrag `}
                        >
                            <InputLabel htmlFor="outlined-age-native-simple">
                                Fade
                            </InputLabel>
                            <Select
                                native
                                value={projectBackgroundTransitionStyle}
                                onChange={projectBackgroundTransitioneHandler}
                                label="Age"
                                inputProps={{
                                    name: "age",
                                    id: "outlined-age-native-simple",
                                }}
                            >
                                <option value={"fade-up"}>Fade Up</option>
                                <option value={"fade-down"}>Fade down</option>
                                <option value={"fade-right"}>Fade right</option>
                                <option value={"fade-left"}>Fade left</option>
                                <option value={"fade-up-right"}>
                                    Fade Up Right
                                </option>
                                <option value={"fade-up-left"}>
                                    Fade Up left
                                </option>
                                <option value={"fade-down-right"}>
                                    Fade Down Right
                                </option>
                                <option value={"fade-down-left"}>
                                    Fade Down Left
                                </option>
                            </Select>
                        </FormControl>
                    </div>
                    <div
                        className={`skillsSectionTransitions ${projectTransitionSelected[2]}`}
                        onClick={(event) => {
                            projectBackgroundTransitionStyleHandler(2, event);
                        }}
                    >
                        <img src={transitionFlip} alt="transitionFlip"></img>
                        <FormControl
                            variant="outlined"
                            className={`disabledrag`}
                        >
                            <InputLabel htmlFor="outlined-age-native-simple">
                                Flip
                            </InputLabel>
                            <Select
                                native
                                value={projectBackgroundTransitionStyle}
                                onChange={projectBackgroundTransitioneHandler}
                                label="Age"
                                inputProps={{
                                    name: "age",
                                    id: "outlined-age-native-simple",
                                }}
                            >
                                <option value={"flip-left"}>Flip Left</option>
                                <option value={"flip-right"}>Flip Right</option>
                                <option value={"flip-up"}>Flip Up</option>
                                <option value={"flip-down"}>Flip Down</option>
                            </Select>
                        </FormControl>
                    </div>
                    <div
                        className={`skillsSectionTransitions ${projectTransitionSelected[3]}`}
                        onClick={(event) => {
                            projectBackgroundTransitionStyleHandler(3, event);
                        }}
                    >
                        <img src={transitionZoom} alt="transitionZoom"></img>
                        <FormControl
                            variant="outlined"
                            className={`disabledrag`}
                        >
                            <InputLabel htmlFor="outlined-age-native-simple">
                                Zoom
                            </InputLabel>
                            <Select
                                native
                                value={projectBackgroundTransitionStyle}
                                onChange={projectBackgroundTransitioneHandler}
                                label="Age"
                                inputProps={{
                                    name: "age",
                                    id: "outlined-age-native-simple",
                                }}
                            >
                                <option value={"zoom-in"}>Zoom In</option>
                                <option value={"zoom-in-up"}>Zoom In Up</option>
                                <option value={"zoom-in-down"}>
                                    Zoom In Down
                                </option>
                                <option value={"zoom-in-left"}>
                                    Zoom In Left
                                </option>
                                <option value={"zoom-in-right"}>
                                    In Right
                                </option>
                                <option value={"zoom-out"}>Zoom Out</option>
                                <option value={"zoom-out-up"}>
                                    Zoom Out Up
                                </option>
                                <option value={"zoom-out-down"}>
                                    Zoom Out Down
                                </option>
                                <option value={"zoom-out-right"}>
                                    Zoom Out Right
                                </option>
                                <option value={"zoom-out-left"}>
                                    Zoom Out Left
                                </option>
                            </Select>
                        </FormControl>
                    </div>
                </div>
            </div>
            <div className="my-4">
                <h4 className="text-center">Animation Duration</h4>
                <h4 className="text-center my-3 text-muted" style={{fontSize:"1.5rem"}}>0s--0.3s--0.6s--0.9s--1.2s--1.5s--1.8s--2.1s--2.4s--2.7s--3s</h4>
                <input type="range" data-toggle="tooltip" data-placement="top"  class="custom-range disabledrag" onChange={(e) => {
                    dispatch({type:"contactanimations",payload:{...ContactAnimation,duration:e.target.value}})
                }} min="0" max="3" step="0.3" value={ContactAnimation.duration}

                    id="customRange3"></input>
            </div>
            <div className="my-4">
                <h4 className="text-center">Animation Delay</h4>
                <h4 className="text-center my-3 text-muted" style={{fontSize:"1.5rem"}}>0s--0.3s--0.6s--0.9s--1.2s--1.5s--1.8s--2.1s--2.4s--2.7s--3s</h4>
                <input type="range" data-toggle="tooltip" data-placement="top"  class="custom-range disabledrag" onChange={(e) => {
                    dispatch({type:"contactanimations",payload:{...ContactAnimation,delay:e.target.value}})
                }} min="0" max="3" step="0.3" value={ContactAnimation.delay}

                    id="customRange3"></input>
            </div>
    </div>
  );
};

export default ContactAnimations;
