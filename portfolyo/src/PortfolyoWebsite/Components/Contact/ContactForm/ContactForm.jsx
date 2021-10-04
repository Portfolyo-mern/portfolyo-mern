import React, { useState } from "react";
import ContactEditor from "../ContactEditor/ContactEditor";
import Map from "../../../../assets/hyd-urban-main.webp";
import "./ContactForm.scss";
import TextareaAutosize from "react-textarea-autosize";
import FormatColorFillIcon from "@material-ui/icons/FormatColorFill";
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { useSelector, useDispatch } from "react-redux";
import Tippy from "@tippyjs/react";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import Button from "@material-ui/core/Button";
import { ChromePicker } from "react-color";
import rgbHex from "rgb-hex";

const ContactForm = () => {
    const ContactBackground = useSelector((state) => state.ContactBackground);
    const ContactText = useSelector((state) => state.ContactText);
    const ContactTextFont = useSelector((state) => state.ContactTextFont);
    const ContactBgColors = useSelector((state) => state.ContactBgColors);
    const [visible, setVisible] = useState(false);
    const ViewMode = useSelector((state) => state.ViewMode);
    const hide = () => setVisible(false);
    const dispatch = useDispatch();
    const [footerText, setfooterText] = useState(ContactText.quotation);
    return (
        <div>
            <Button
                variant="outlined"
                style={{ margin: "auto", display: ViewMode ? "none" : "block" }}
                onClick={() => {
                    dispatch({ type: "openeditor", payload: true });
                    dispatch({ type: "tabpointer", payload: 8 });
                    dispatch({ type: "getcurrenttabcontact", payload: 2 });
                }}
            >
                background <CameraAltIcon />
            </Button>
            <div
                background={Map}
                className="ContactForm container-fluid px-sm-3"
                style={{
                    backgroundImage: `url(${ContactBackground.image})`,
                    backgroundPosition: "center center",
                    backgroundRepeat: "norepeat",
                    backgroundSize: "cover",
                }}
            >
                {/* <img src={Map}  id="bg-image" className="mt-5" style={{zIndex:0,postion:"absolute",width:"100%"}}/> */}
                <div className="container p-sm-5 py-4" style={{ zIndex: 999 }}>
                    {/* <div className="container-md p-5 border mx-auto"> */}
                    <ContactEditor />
                    {/* </div> */}
                </div>
            </div>
            <div
                style={{
                    margin: "0",
                    padding: "20px",
                    backgroundColor: ContactBgColors.footerBgColor,
                    border: "1px solid black",
                    width: "100%",
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    marginBottom: `${ViewMode ? "3rem" : "0"}`,
                    wordBreak: "break-word",
                }}
            >
                {!ViewMode ? (
                    <Tippy
                        interactive={true}
                        visible={visible}
                        onClickOutside={hide}
                        content={
                            <ChromePicker
                                color={ContactBgColors.footerBgColor}
                                onChangeComplete={(newColor) => {
                                    dispatch({
                                        type: `contactbgcolors`,
                                        payload: {
                                            ...ContactBgColors,
                                            footerBgColor:
                                                "#" +
                                                rgbHex(
                                                    newColor.rgb.r,
                                                    newColor.rgb.g,
                                                    newColor.rgb.b,
                                                    newColor.rgb.a
                                                ),
                                        },
                                    });
                                }}
                            ></ChromePicker>
                        }
                        placement={"top"}
                    >
                        <Button
                            style={{ position: "absolute", right: "1rem" }}
                            onClick={(e) => {
                                setVisible(!visible);
                            }}
                        >
                            <FormatColorFillIcon style={{ color: "#ffffff" }} />
                        </Button>
                    </Tippy>
                ) : null}
                {!ViewMode ? (
                    <div
                        className={`col-sm-8 textAreaEditorDivAboutTitle`}
                        style={{
                            width: "100%",
                            margin: "auto",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <TextareaAutosize
                            className={`aboutSectionContentRightBasicInfoValues`}
                            id={`textEditorDIvFooter`}
                            value={footerText}
                            spellCheck="false"
                            // cols={textAreaUsername.length}
                            placeholder="Enter Text For Footer"
                            style={{
                                color: ContactBgColors.quotation,
                                fontSize: "1.3rem !important",
                                textAlign: "center",
                                fontFamily: ContactTextFont.quotation,
                            }}
                            onChange={(e) => {
                                setfooterText(e.target.value);
                            }}
                            onFocus={(e) => {
                                // settextAreaUsernameFocused(true);
                                dispatch({
                                    type: "openMiniTextEditor",
                                });
                                dispatch({
                                    type: "textBeingChangedColorDispatch",
                                    payload: "footerColorChange",
                                });
                                dispatch({
                                    type: "textBeingChangedFontDispatch",
                                    payload: "footerFontStyleChange",
                                });
                                dispatch({
                                    type: "textBeingChangedColorValue",
                                    payload: ContactBgColors.quotation,
                                });
                                dispatch({
                                    type: "textBeingChangedFontValue",
                                    payload: ContactTextFont.quotation,
                                });
                            }}
                            onBlur={(e) => {
                                // settextAreaUsernameFocused(false);
                                dispatch({
                                    type: "contactchangetext",
                                    payload: {
                                        ...ContactText,
                                        quotation: footerText,
                                    },
                                });
                            }}
                        ></TextareaAutosize>
                    </div>
                ) : (
                    <p
                        className=" text-center"
                        style={{
                            color: ContactBgColors.quotation,
                            fontSize: "1.3rem",
                            fontFamily: ContactTextFont.quotation,
                            margin: "auto",
                        }}
                    >
                        {ContactText.quotation}
                    </p>
                )}
            </div>
        </div>
    );
};

export default ContactForm;
