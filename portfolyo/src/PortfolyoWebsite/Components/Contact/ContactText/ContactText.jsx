import React from 'react';
import {  TextField } from "@material-ui/core";
import FontPicker from "font-picker-react";
// import { SketchPicker, ChromePicker } from "react-color";
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';

const ContactText = () => {
    const ContactText = useSelector(state=>state.ContactText);
    const ContactTextFont = useSelector(state=>state.ContactTextFont);
    const dispatch = useDispatch();
    return (
        <div className="ContactText">
            <h4 className="text-center mt-4">Edit Text</h4>
            <div className="mx-auto my-4" style={{display:"block",width:"max-content",position:"sticky",top:"0",zIndex:"99999"}}>
                <Button variant="contained" color="primary" onClick={()=>{
                    dispatch({ type: "contactchangetext", payload: {...ContactText,Title:document.querySelector("#ContactTitle").value,
                        dialogue:document.querySelector("#contactdialogue").value,
                        addressh:document.querySelector("#contactaddressh").value,
                        address:document.querySelector("#contactaddress").value,
                        phoneh:document.querySelector("#contactphoneh").value,
                        phone:document.querySelector("#contactphone").value,
                        emailh:document.querySelector("#contactemailh").value,
                        email:document.querySelector("#contactemail").value,
                        footer:document.querySelector("#contactfooter").value,
                        quotation:document.querySelector("#contactquotation").value,
                } })
                }}>
                    update changes
                </Button>
            </div>
            <div className="row my-5">
                <div className="col-6 offset-1">
                    <TextField
                        className="disabledrag"
                        id="ContactTitle"
                        label="Title"
                        variant="outlined"
                        fullWidth
                        required
                        defaultValue={ContactText.Title}
                        // onChange={(e) => dispatch({ type: "contactchangetext", payload: {...ContactText,Title:e.target.value} })}
                    />
                </div>
                <div className="col-4 offset-1 mt-0">
                    <FontPicker
                        pickerId="1"
                        className="profileSectionEditorFontpicker disabledrag"
                        apiKey="AIzaSyA4zVMDlSV-eRzbGR5BFqvbHqz3zV-OLd0"
                        activeFontFamily={ContactTextFont.Title}
                        onChange={(nextFont) => {
                            dispatch({ type: "contacttextfont", payload: {...ContactTextFont,Title:nextFont.family} })
                        }
                        }
                    />
                </div>
            </div>
            <div className="row my-5">
                <div className="col-6 offset-1">
                    <TextField
                        className="disabledrag"
                        id="contactdialogue"
                        label="dialogue"
                        variant="outlined"
                        fullWidth
                        required
                        defaultValue={ContactText.dialogue}
                        // onChange={(e) => dispatch({ type: "contactchangetext", payload: {...ContactText,dialogue:e.target.value} })}
                        // onChange={(e) => dispatch({ type: "educationsectiontitle", payload: e.target.value })}
                    />
                </div>
                <div className="col-4 offset-1 mt-0">
                    <FontPicker
                        className="profileSectionEditorFontpicker disabledrag"
                        apiKey="AIzaSyA4zVMDlSV-eRzbGR5BFqvbHqz3zV-OLd0"
                        activeFontFamily={ContactTextFont.dialogue}
                        pickerId="2"
                        onChange={(nextFont) => {
                            dispatch({ type: "contacttextfont", payload: {...ContactTextFont,dialogue:nextFont.family} })
                        }
                        }
                    />
                </div>
            </div>
            <div className="row my-5">
                <div className="col-6 offset-1">
                    <TextField
                        className="disabledrag"
                        id="contactaddressh"
                        label="addressHeading"
                        variant="outlined"
                        fullWidth
                        required
                        defaultValue={ContactText.addressh}
                        // onChange={(e) => dispatch({ type: "contactchangetext", payload: {...ContactText,addressh:e.target.value} })}
                        // onChange={(e) => dispatch({ type: "educationsectiontitle", payload: e.target.value })}
                    />
                </div>
                <div className="col-4 offset-1 mt-0">
                    <FontPicker
                        className="profileSectionEditorFontpicker disabledrag"
                        apiKey="AIzaSyA4zVMDlSV-eRzbGR5BFqvbHqz3zV-OLd0"
                        activeFontFamily={ContactTextFont.addressh}
                        pickerId="3"
                        onChange={(nextFont) => {
                            dispatch({ type: "contacttextfont", payload: {...ContactTextFont,addressh:nextFont.family} })
                        }
                        }
                    />
                </div>
            </div>
            <div className="row my-5">
                <div className="col-6 offset-1">
                    <TextField
                        className="disabledrag"
                        id="contactaddress"
                        label={ContactText.addressh}
                        variant="outlined"
                        fullWidth
                        required
                        defaultValue={ContactText.address}
                        // onChange={(e) => dispatch({ type: "contactchangetext", payload: {...ContactText,address:e.target.value} })}
                        // onChange={(e) => dispatch({ type: "educationsectiontitle", payload: e.target.value })}
                    />
                </div>
                <div className="col-4 offset-1 mt-0">
                    <FontPicker
                        className="profileSectionEditorFontpicker disabledrag"
                        apiKey="AIzaSyA4zVMDlSV-eRzbGR5BFqvbHqz3zV-OLd0"
                        activeFontFamily={ContactTextFont.address}
                        pickerId="4"
                        onChange={(nextFont) => {
                            dispatch({ type: "contacttextfont", payload: {...ContactTextFont,address:nextFont.family} })
                        }
                        }
                    />
                </div>
            </div>
            <div className="row my-5">
                <div className="col-6 offset-1">
                    <TextField
                        className="disabledrag"
                        id="contactphoneh"
                        label="phoneHeading"
                        variant="outlined"
                        fullWidth
                        required
                        defaultValue={ContactText.phoneh}
                        // onChange={(e) => dispatch({ type: "contactchangetext", payload: {...ContactText,phoneh:e.target.value} })}
                        // value={educationsectiontitle}
                        // onChange={(e) => dispatch({ type: "educationsectiontitle", payload: e.target.value })}
                    />
                </div>
                <div className="col-4 offset-1 mt-0">
                    <FontPicker
                        className="profileSectionEditorFontpicker disabledrag"
                        apiKey="AIzaSyA4zVMDlSV-eRzbGR5BFqvbHqz3zV-OLd0"
                        activeFontFamily={ContactTextFont.phoneh}
                        pickerId="5"
                        onChange={(nextFont) => {
                            dispatch({ type: "contacttextfont", payload: {...ContactTextFont,phoneh:nextFont.family} })
                        }
                        }
                    />
                </div>
            </div>
            <div className="row my-5">
                <div className="col-6 offset-1">
                    <TextField
                        className="disabledrag"
                        id="contactphone"
                        label={ContactText.phoneh}
                        variant="outlined"
                        fullWidth
                        required
                        defaultValue={ContactText.phone}
                        // onChange={(e) => dispatch({ type: "contactchangetext", payload: {...ContactText,phone:e.target.value} })}
                        // value={educationsectiontitle}
                        // onChange={(e) => dispatch({ type: "educationsectiontitle", payload: e.target.value })}
                    />
                </div>
                <div className="col-4 offset-1 mt-0">
                    <FontPicker
                        className="profileSectionEditorFontpicker disabledrag"
                        apiKey="AIzaSyA4zVMDlSV-eRzbGR5BFqvbHqz3zV-OLd0"
                        activeFontFamily={ContactTextFont.phone}
                        pickerId="6"
                        onChange={(nextFont) => {
                            dispatch({ type: "contacttextfont", payload: {...ContactTextFont,phone:nextFont.family} })
                        }
                        }
                    />
                </div>
            </div>
            <div className="row my-5">
                <div className="col-6 offset-1">
                    <TextField
                        className="disabledrag"
                        id="contactemailh"
                        label="emailHeading"
                        variant="outlined"
                        fullWidth
                        required
                        defaultValue={ContactText.emailh}
                        // onChange={(e) => dispatch({ type: "contactchangetext", payload: {...ContactText,emailh:e.target.value} })}
                        // value={educationsectiontitle}
                        // onChange={(e) => dispatch({ type: "educationsectiontitle", payload: e.target.value })}
                    />
                </div>
                <div className="col-4 offset-1 mt-0">
                    <FontPicker
                        className="profileSectionEditorFontpicker disabledrag"
                        apiKey="AIzaSyA4zVMDlSV-eRzbGR5BFqvbHqz3zV-OLd0"
                        activeFontFamily={ContactTextFont.emailh}
                        pickerId="7"
                        onChange={(nextFont) => {
                            dispatch({ type: "contacttextfont", payload: {...ContactTextFont,emailh:nextFont.family} })
                        }
                        }
                    />
                </div>
            </div>
            <div className="row my-5">
                <div className="col-6 offset-1">
                    <TextField
                        className="disabledrag"
                        id="contactemail"
                        label={ContactText.emailh}
                        variant="outlined"
                        fullWidth
                        required
                        defaultValue={ContactText.email}
                        // onChange={(e) => dispatch({ type: "contactchangetext", payload: {...ContactText,email:e.target.value} })}
                        // value={educationsectiontitle}
                        // onChange={(e) => dispatch({ type: "educationsectiontitle", payload: e.target.value })}
                    />
                </div>
                <div className="col-4 offset-1 mt-0">
                    <FontPicker
                        className="profileSectionEditorFontpicker disabledrag"
                        apiKey="AIzaSyA4zVMDlSV-eRzbGR5BFqvbHqz3zV-OLd0"
                        activeFontFamily={ContactTextFont.email}
                        pickerId="8"
                        onChange={(nextFont) => {
                            dispatch({ type: "contacttextfont", payload: {...ContactTextFont,email:nextFont.family} })
                        }
                        }
                    />
                </div>
            </div>
            <div className="row my-5">
                <div className="col-6 offset-1">
                    <TextField
                        className="disabledrag"
                        id="contactquotation"
                        label="quotation"
                        variant="outlined"
                        fullWidth
                        required
                        defaultValue={ContactText.quotation}
                        // onChange={(e) => dispatch({ type: "contactchangetext", payload: {...ContactText,quotation:e.target.value} })}
                        // value={educationsectiontitle}
                        // onChange={(e) => dispatch({ type: "educationsectiontitle", payload: e.target.value })}
                    />
                </div>
                <div className="col-4 offset-1 mt-0">
                    <FontPicker
                        className="profileSectionEditorFontpicker disabledrag"
                        apiKey="AIzaSyA4zVMDlSV-eRzbGR5BFqvbHqz3zV-OLd0"
                        activeFontFamily={ContactTextFont.quotation}
                        pickerId="9"
                        onChange={(nextFont) => {
                            dispatch({ type: "contacttextfont", payload: {...ContactTextFont,quotation:nextFont.family} })
                        }
                        }
                    />
                </div>
            </div>
            <div className="row my-5">
                <div className="col-6 offset-1">
                    <TextField
                        className="disabledrag"
                        id="contactfooter"
                        label="footer"
                        variant="outlined"
                        fullWidth
                        required
                        defaultValue={ContactText.footer}
                        // onChange={(e) => dispatch({ type: "contactchangetext", payload: {...ContactText,footer:e.target.value} })}
                        // value={educationsectiontitle}
                        // onChange={(e) => dispatch({ type: "educationsectiontitle", payload: e.target.value })}
                    />
                </div>
                <div className="col-4 offset-1 mt-0">
                    <FontPicker
                        className="profileSectionEditorFontpicker disabledrag"
                        apiKey="AIzaSyA4zVMDlSV-eRzbGR5BFqvbHqz3zV-OLd0"
                        activeFontFamily={ContactTextFont.footer}
                        pickerId="10"
                        onChange={(nextFont) => {
                            dispatch({ type: "contacttextfont", payload: {...ContactTextFont,footer:nextFont.family} })
                        }
                        }
                    />
                </div>
            </div>
        </div>
    )
}

export default ContactText
