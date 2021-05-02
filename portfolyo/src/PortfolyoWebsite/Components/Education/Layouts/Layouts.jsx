import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {useSelector,useDispatch} from 'react-redux';
const Layouts = () => {
    const dispatch = useDispatch();
    const layoutinedu = useSelector(state=>state.layoutinedu);
    const handleChange = (e) => {
        dispatch({type:"layoutinedu",payload:e.target.value});
    };
    return (
        <>
            <div className="container">
                <h3 className="text-center mt-4">Select Layout</h3>
                <FormControl component="fieldset">
                    <FormLabel component="legend"></FormLabel>
                    <RadioGroup style={{ display: "flex", flexWrap: "wrap", flexDirection: "row", justifyContent: "space-between" }} aria-label="select-animation-type" name="gender1" value={layoutinedu} onChange={handleChange}>
                        <FormControlLabel value="layout1" control={<Radio />} label="layout1" />
                        <FormControlLabel value="layout2" control={<Radio />} label="layout2" />
                        <FormControlLabel value="layout3" control={<Radio />} label="layout3" />
                    </RadioGroup>
                </FormControl>
            </div>
        </>
    )
}

export default Layouts
