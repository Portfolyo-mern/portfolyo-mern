import React from 'react';
import { Button, makeStyles, TextField } from "@material-ui/core";
import FontPicker from "font-picker-react";
import { SketchPicker, ChromePicker } from "react-color";
import { useSelector, useDispatch } from 'react-redux';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const ContactText = () => {
    const ContactText = useSelector(state=>state.ContactText);
    const ContactTextFont = useSelector(state=>state.ContactTextFont);
    const dispatch = useDispatch();
    return (
        <div className="ContactText">
            <h4 className="text-center mt-4">Edit Text</h4>
            <div className="row my-5">
                <div className="col-6 offset-1">
                    <TextField
                        className="disabledrag"
                        id="firstnameInput"
                        label="Title"
                        variant="outlined"
                        fullWidth
                        required
                        value={ContactText.Title}
                        onChange={(e) => dispatch({ type: "contactchangetext", payload: {...ContactText,Title:e.target.value} })}
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
                        id="firstnameInput"
                        label="dialogue"
                        variant="outlined"
                        fullWidth
                        required
                        value={ContactText.dialogue}
                        onChange={(e) => dispatch({ type: "contactchangetext", payload: {...ContactText,dialogue:e.target.value} })}
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
                        id="firstnameInput"
                        label="addressHeading"
                        variant="outlined"
                        fullWidth
                        required
                        value={ContactText.addressh}
                        onChange={(e) => dispatch({ type: "contactchangetext", payload: {...ContactText,addressh:e.target.value} })}
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
                        id="firstnameInput"
                        label={ContactText.addressh}
                        variant="outlined"
                        fullWidth
                        required
                        value={ContactText.address}
                        onChange={(e) => dispatch({ type: "contactchangetext", payload: {...ContactText,address:e.target.value} })}
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
                        id="firstnameInput"
                        label="phoneHeading"
                        variant="outlined"
                        fullWidth
                        required
                        value={ContactText.phoneh}
                        onChange={(e) => dispatch({ type: "contactchangetext", payload: {...ContactText,phoneh:e.target.value} })}
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
                        id="firstnameInput"
                        label={ContactText.phoneh}
                        variant="outlined"
                        fullWidth
                        required
                        value={ContactText.phone}
                        onChange={(e) => dispatch({ type: "contactchangetext", payload: {...ContactText,phone:e.target.value} })}
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
                        id="firstnameInput"
                        label="emailHeading"
                        variant="outlined"
                        fullWidth
                        required
                        value={ContactText.emailh}
                        onChange={(e) => dispatch({ type: "contactchangetext", payload: {...ContactText,emailh:e.target.value} })}
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
                        id="firstnameInput"
                        label={ContactText.emailh}
                        variant="outlined"
                        fullWidth
                        required
                        value={ContactText.email}
                        onChange={(e) => dispatch({ type: "contactchangetext", payload: {...ContactText,email:e.target.value} })}
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
                        id="firstnameInput"
                        label="quotation"
                        variant="outlined"
                        fullWidth
                        required
                        value={ContactText.quotation}
                        onChange={(e) => dispatch({ type: "contactchangetext", payload: {...ContactText,quotation:e.target.value} })}
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
                        id="firstnameInput"
                        label="footer"
                        variant="outlined"
                        fullWidth
                        required
                        value={ContactText.footer}
                        onChange={(e) => dispatch({ type: "contactchangetext", payload: {...ContactText,footer:e.target.value} })}
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
