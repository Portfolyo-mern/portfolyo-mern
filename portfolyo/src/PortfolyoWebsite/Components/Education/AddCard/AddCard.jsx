import React from 'react';
import { Button, TextField } from "@material-ui/core";
import { useSelector, useDispatch } from 'react-redux';
import EditImage from './EditImage/EditImage';

const AddCard = () => {
    const carddetailse = useSelector(state => state.carddetailse);
    const card1edu = useSelector(state => state.card1edu);
    const newimageinedu = useSelector(state => state.newimageinedu);
    const dispatch = useDispatch();
    const addCard = () => {
        // console.log([...card1edu, carddetailse]);
        dispatch({ type: "card1edu", payload: [...card1edu, {...carddetailse,image:newimageinedu}] });

    }
    const resetcard = () => {
        document.querySelector("#firstnameInput1e").value="";
        document.querySelector("#firstnameInput2e").value="";
        document.querySelector("#firstnameInput3e").value="";
        dispatch({ type: "carddetailse", payload: { title: "", year: "", description: "", animation: "fade-right", animationduration: 0, animationdelay: 0.6 } })
    }
    return (
        <div className="AddCardE mt-4">
            <div className="mx-auto" style={{ width: "max-content" }}>
                <EditImage />
            </div>
            <div className="row my-5" >
                <div className="col-md-6 mx-auto offset-1">
                    <TextField
                        className="disabledrag"
                        id="firstnameInput1e"
                        label="Title"
                        variant="outlined"
                        fullWidth
                        required
                        defaultValue={carddetailse.title}
                        multiline
                        onBlur={(e) => dispatch({ type: "carddetailse", payload: { ...carddetailse, title: e.target.value } })}
                    />
                </div>
            </div>
            <div className="row my-5" >
                <div className="col-md-6 mx-auto offset-1">
                    <TextField
                        className="disabledrag"
                        id="firstnameInput2e"
                        label="Year"
                        variant="outlined"
                        fullWidth
                        required
                        defaultValue={carddetailse.year}
                        onBlur={(e) => dispatch({ type: "carddetailse", payload: { ...carddetailse, year: e.target.value } })}
                    />
                </div>
            </div>
            <div className="row my-5" >
                <div className="col-md-6 mx-auto offset-1">
                    <TextField
                        className="disabledrag"
                        id="firstnameInput3e"
                        label="describe"
                        variant="outlined"
                        fullWidth
                        required
                        defaultValue={carddetailse.description}
                        onBlur={(e) => dispatch({ type: "carddetailse", payload: { ...carddetailse, description: e.target.value } })}
                    />
                </div>
            </div>
            <div className="mx-auto" style={{ width: "max-content" }}>
                <Button className="mx-4" onClick={addCard} color="primary" variant="contained">ADD</Button>
                <Button className="mx-4" onClick={resetcard} color="primary" variant="contained">reset</Button>
            </div>
            <div className="mx-auto" style={{ width: "max-content" }}>
            </div>
        </div>
    )
}

export default AddCard
