import React from "react";
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

const ContactAnimations = () => {
  const ContactAnimation = useSelector(state=>state.ContactAnimations);
  const dispatch = useDispatch();
  const handleChange = (event) => {
        // setValue(event.target.value);
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
              console.log(value);
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
                <FormControl component="fieldset">
                    <FormLabel component="legend"></FormLabel>
                    <RadioGroup style={{ display: "flex", flexWrap: "wrap", flexDirection: "row", justifyContent: "space-between" }} aria-label="select-animation-type" name="gender1" value={ContactAnimation.animation} onChange={handleChange}>
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
                    </RadioGroup>
                </FormControl>
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
