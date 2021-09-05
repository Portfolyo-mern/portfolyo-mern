import React from "react";
import "./TextEditorNavbar.scss";
import FontPicker from "font-picker-react";
import { useState } from "react";
import ColorPickerIcon from "../../../assets/colorPickerIcon.png";
import Button from "@material-ui/core/Button";
import { ChromePicker } from "react-color";
import Tippy from "@tippyjs/react";
import rgbHex from "rgb-hex";
import { useDispatch, useSelector } from "react-redux";
import FormatAlignLeftIcon from "@material-ui/icons/FormatAlignLeft";
import FormatAlignCenterIcon from "@material-ui/icons/FormatAlignCenter";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

const TextEditorNavbar = ({ alignmentSetter, alignmentValue }) => {
    const [visible, setVisible] = useState(false);
    const show = () => setVisible(true);
    const hide = () => setVisible(false);
    const dispatch = useDispatch();

    const textBeingChangedColorDispatch = useSelector(
        (state) => state.textBeingChangedColorDispatch
    );
    const textBeingChangedFontDispatch = useSelector(
        (state) => state.textBeingChangedFontDispatch
    );
    const textBeingChangedColorValue = useSelector(
        (state) => state.textBeingChangedColorValue
    );
    const textBeingChangedFontValue = useSelector(
        (state) => state.textBeingChangedFontValue
    );
    const textBeingChangedAlignment = useSelector(
        (state)=> state.textBeingChangedAlignment
    )
    const textBeingChangedAlignmentDispatch = useSelector(
        (state) => state.textBeingChangedAlignmentDispatch
    );
    const [fontStyle, setfontStyle] = useState(textBeingChangedFontValue);
    const [textColor, settextColor] = useState(textBeingChangedColorValue);
    return (
        <div className="TextEditorNavbarDiv">
            <FontPicker
                className="TextEditorNavbarFontpicker disabledrag"
                apiKey="AIzaSyA4zVMDlSV-eRzbGR5BFqvbHqz3zV-OLd0"
                activeFontFamily={fontStyle}
                onChange={(nextFont) => {
                    setfontStyle(nextFont.family);
                    dispatch({
                        type: `${textBeingChangedFontDispatch}`,
                        payload: nextFont.family,
                    });
                }}
                style={{
                    backgroundColor: "white",
                }}
            />
            <Tippy
                interactive={true}
                visible={visible}
                onClickOutside={hide}
                content={
                    <ChromePicker
                        color={textColor}
                        onChangeComplete={(newColor) => {
                            settextColor(
                                "#" +
                                    rgbHex(
                                        newColor.rgb.r,
                                        newColor.rgb.g,
                                        newColor.rgb.b,
                                        newColor.rgb.a
                                    )
                            );
                            console.log(newColor, textColor);
                            dispatch({
                                type: `${textBeingChangedColorDispatch}`,
                                payload:
                                    "#" +
                                    rgbHex(
                                        newColor.rgb.r,
                                        newColor.rgb.g,
                                        newColor.rgb.b,
                                        newColor.rgb.a
                                    ),
                            });
                        }}
                    ></ChromePicker>
                }
                placement={"bottom"}
            >
                <Button
                    style={{
                        backgroundColor: "white",
                        // border: "1px solid black",
                        padding: "0px",
                    }}
                    onClick={(e) => {
                        setVisible(!visible);
                    }}
                >
                    <img
                        src={ColorPickerIcon}
                        alt="ColorPickerIcon"
                        style={{
                            width: "2.5rem",
                            height: "2.5rem",
                        }}
                    ></img>
                </Button>
            </Tippy>
            {textBeingChangedAlignmentDispatch !== "" ? (
                <ToggleButtonGroup
                    className="skillsSectionHeaderToogler"
                    value={textBeingChangedAlignment}
                    exclusive
                    onChange={(event, newAlignment) => {
                        dispatch({
                            type: `${textBeingChangedAlignmentDispatch}`,
                            payload: newAlignment,
                        });
                        dispatch({
                            type: "textBeingChangedAlignment",
                            payload: newAlignment,
                        });
                    }}
                    aria-label="text alignment"
                >
                    <ToggleButton
                        value="left"
                        aria-label="left aligned"
                        style={{
                            height: "3rem",
                        }}
                    >
                        <FormatAlignLeftIcon />
                    </ToggleButton>
                    <ToggleButton
                        value="center"
                        aria-label="centered"
                        style={{
                            height: "3rem",
                        }}
                    >
                        <FormatAlignCenterIcon />
                    </ToggleButton>
                </ToggleButtonGroup>
            ) : null}
        </div>
    );
};

export default TextEditorNavbar;
