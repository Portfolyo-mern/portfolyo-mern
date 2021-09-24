import React, { useEffect } from "react";
import "./Education.scss";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import AOS from "aos";
import { useSelector, useDispatch } from "react-redux";
import Card1 from "./Cards/Card1/Card1";
// import Fade from 'react-reveal/Fade';
// import Reveal from 'react-reveal/Reveal';
import Card2 from "./Cards/Card2/Card2";
// import ScrollAnimation from 'react-animate-on-scroll';
import Card3 from "./Cards/Card3/Card3";
import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

const Education = () => {
    const dispatch = useDispatch();
    // const namee = useSelector(state => state.namee);
    const descriptione = useSelector((state) => state.descriptione);
    const openeditor = useSelector((state) => state.OpenEditor);
    const educationsectiontitle = useSelector(
        (state) => state.educationsectiontitle
    );
    const educationhfontname = useSelector((state) => state.educationhfontname);
    const educationsectiontitleAlignment = useSelector(
        (state) => state.educationsectiontitleAlignment
    );
    const educationpfontname = useSelector((state) => state.educationpfontname);
    const fontcolorep = useSelector((state) => state.fontcolorep);
    const fontcolore = useSelector((state) => state.fontcolore);
    const animationtypeeh = useSelector((state) => state.animationtypeeh);
    const animationtimeeh = useSelector((state) => state.animationtimeeh);
    const animationdelayeh = useSelector((state) => state.animationdelayeh);
    const layoutinedu = useSelector((state) => state.layoutinedu);
    const ViewMode = useSelector((state) => state.ViewMode);
    const educationsectionDescAlignment = useSelector(
        (state) => state.educationsectionDescAlignment
    );
    const [educationTitle, seteducationTitle] = useState(educationsectiontitle);
    useEffect(() => {
        seteducationTitle(educationsectiontitle);
    }, [educationsectiontitle]);
    const [educationDesc, seteducationDesc] = useState(descriptione);
    useEffect(() => {
        seteducationDesc(descriptione);
    }, [descriptione]);
    return (
        <div className="EducationBlock" data-aos-offset="300">
            <div
                className="container1  rounded-lg p-2 p-sm-3 p-md-5"
                style={{ margin: "0 5rem 0 5rem" }}
            >
                <div className="container">
                    <Button
                        variant="outlined"
                        color=""
                        style={{ marginBottom: "-4rem" }}
                        onClick={() => {
                            dispatch({
                                type: "openeditor",
                                payload: !openeditor,
                            });
                            dispatch({ type: "tabpointer", payload: 7 });
                            dispatch({ type: "currenttabe", payload: 4 });
                        }}
                        style={{
                            display: ViewMode ? "none" : "inherit",
                        }}
                    >
                        change layout
                    </Button>
                    <IconButton
                        className="mr-4"
                        onClick={() => {
                            dispatch({
                                type: "openeditor",
                                payload: !openeditor,
                            });
                            dispatch({ type: "tabpointer", payload: 7 });
                            dispatch({ type: "currenttabe", payload: 0 });
                        }}
                        style={{
                            marginLeft: "auto",
                            display: ViewMode ? "none" : "block",
                        }}
                    >
                        <EditIcon />
                    </IconButton>
                    <div
                        data-aos={animationtypeeh}
                        data-aos-offset="300"
                        data-aos-duration={animationtimeeh * 1000}
                        data-aos-delay={animationdelayeh * 1000}
                        style={{
                            textAlign: `${
                                educationsectiontitleAlignment === "middle"
                                    ? "center"
                                    : ""
                            }`,
                        }}
                    >
                        {ViewMode ? (
                            <h2
                                className="text-center eduname"
                                style={{
                                    fontFamily: educationhfontname,
                                    color: fontcolore,
                                    display: "inline-block",
                                }}
                            >
                                {educationsectiontitle}
                            </h2>
                        ) : (
                            <div className={`textAreaEditorDiv`}>
                                <TextareaAutosize
                                    className={`textAreaUsername`}
                                    value={educationTitle}
                                    spellCheck="false"
                                    // cols={textAreaUsername.length}
                                    placeholder="Education Title"
                                    style={{
                                        color: `${fontcolore}`,
                                        fontFamily: `${educationhfontname}`,
                                        textAlign: `${
                                            educationsectiontitleAlignment ===
                                            "center"
                                                ? "center"
                                                : ""
                                        }`,
                                        margin: "auto",
                                        width: "100%",
                                    }}
                                    onChange={(e) => {
                                        seteducationTitle(e.target.value);
                                    }}
                                    onFocus={(e) => {
                                        // settextAreaUsernameFocused(true);
                                        dispatch({
                                            type: "openMiniTextEditor",
                                        });
                                        dispatch({
                                            type: "textBeingChangedColorDispatch",
                                            payload: "fontcolore",
                                        });
                                        dispatch({
                                            type: "textBeingChangedFontDispatch",
                                            payload: "educationhfontname",
                                        });
                                        dispatch({
                                            type: "textBeingChangedColorValue",
                                            payload: fontcolore,
                                        });
                                        dispatch({
                                            type: "textBeingChangedFontValue",
                                            payload: educationhfontname,
                                        });
                                        dispatch({
                                            type: "textBeingChangedAlignmentDispatch",
                                            payload:
                                                "educationsectiontitleAlignment",
                                        });
                                        dispatch({
                                            type: "textBeingChangedAlignment",
                                            payload:
                                                educationsectiontitleAlignment,
                                        });
                                    }}
                                    onBlur={(e) => {
                                        // settextAreaUsernameFocused(false);
                                        dispatch({
                                            type: "educationsectiontitle",
                                            payload: e.target.value,
                                        });
                                    }}
                                ></TextareaAutosize>
                            </div>
                        )}
                        {ViewMode ? (
                            <p
                                className="text-center pt-3 "
                                style={{
                                    fontFamily: educationpfontname,
                                    color: fontcolorep,
                                    fontSize: "1rem",
                                }}
                            >
                                {descriptione}
                            </p>
                        ) : (
                            <div className={`textAreaEditorDiv`}>
                                <TextareaAutosize
                                    className={`textAreaDesc`}
                                    id="educationDesc"
                                    value={educationDesc}
                                    spellCheck="false"
                                    // cols={textAreaUsername.length}
                                    placeholder="Education Descpription"
                                    style={{
                                        color: `${fontcolorep}`,
                                        fontFamily: `${educationpfontname}`,
                                        textAlign: `${
                                            educationsectionDescAlignment ===
                                            "center"
                                                ? "center"
                                                : ""
                                        }`,
                                        margin: "auto",
                                        width: "100%",
                                        fontSize: "0.5rem",
                                    }}
                                    onChange={(e) => {
                                        seteducationDesc(e.target.value);
                                    }}
                                    onFocus={(e) => {
                                        // settextAreaUsernameFocused(true);
                                        dispatch({
                                            type: "openMiniTextEditor",
                                        });
                                        dispatch({
                                            type: "textBeingChangedColorDispatch",
                                            payload: "fontcolorep",
                                        });
                                        dispatch({
                                            type: "textBeingChangedFontDispatch",
                                            payload: "educationpfontname",
                                        });
                                        dispatch({
                                            type: "textBeingChangedColorValue",
                                            payload: fontcolore,
                                        });
                                        dispatch({
                                            type: "textBeingChangedFontValue",
                                            payload: educationhfontname,
                                        });
                                        dispatch({
                                            type: "textBeingChangedAlignmentDispatch",
                                            payload:
                                                "educationsectionDescAlignment",
                                        });
                                        dispatch({
                                            type: "textBeingChangedAlignment",
                                            payload:
                                                educationsectionDescAlignment,
                                        });
                                    }}
                                    onBlur={(e) => {
                                        // settextAreaUsernameFocused(false);
                                        dispatch({
                                            type: "descriptione",
                                            payload: e.target.value,
                                        });
                                    }}
                                ></TextareaAutosize>
                            </div>
                        )}
                    </div>
                    {layoutinedu === "layout1" ? (
                        <Card2 />
                    ) : layoutinedu === "layout2" ? (
                        <Card1 />
                    ) : layoutinedu === "layout3" ? (
                        <Card3 />
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </div>
    );
};

export default Education;
