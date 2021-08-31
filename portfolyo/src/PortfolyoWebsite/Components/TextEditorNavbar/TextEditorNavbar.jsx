import React from "react";
import "./TextEditorNavbar.scss";
import FontPicker from "font-picker-react";
import { useState } from "react";
import ColorPickerIcon from "../../../assets/colorPickerIcon.png";
import Button from "@material-ui/core/Button";
import { ChromePicker } from "react-color";
import Tippy from "@tippyjs/react";
import rgbHex from "rgb-hex";
import { useDispatch } from "react-redux";

const TextEditorNavbar = () => {
    const [fontStyle, setfontStyle] = useState("ubuntu");
    const [textColor, settextColor] = useState("#000000");
    const [visible, setVisible] = useState(false);
    const show = () => setVisible(true);
    const hide = () => setVisible(false);
    const dispatch = useDispatch();

    return (
        <div className="TextEditorNavbarDiv" onClickOutside={(e) => {
            dispatch({ type: "openMiniTextEditor" });
        }}>
            <FontPicker
                className="TextEditorNavbarFontpicker disabledrag"
                apiKey="AIzaSyA4zVMDlSV-eRzbGR5BFqvbHqz3zV-OLd0"
                activeFontFamily={fontStyle}
                onChange={(nextFont) => {
                    setfontStyle(nextFont.family);
                    // dispatch({
                    //     type: "aboutSectionTitleFontStyleChange",
                    //     payload: nextFont.family,
                    // });
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
        </div>
    );
};

export default TextEditorNavbar;
