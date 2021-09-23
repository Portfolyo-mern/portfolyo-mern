import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import "./Layout4LeftAlign.scss";
import Background from "../../../Backgrounds/Background";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
// import ProjectCard from '../../../ProjectCard/ProjectCard/ProjectCard';
import ProjectCard5 from "../../../ProjectCard/ProjectCard5/ProjectCard5";
import TextareaAutosize from "react-textarea-autosize";

const Layout4LeftAlign = () => {
    const projectheader = useSelector((state) => state.projectheader);
    const dispatch = useDispatch();
    const openeditor = useSelector((state) => state.OpenEditor);
    // const projectcard = useSelector(state => state.projectcard);
    const projectbody = useSelector((state) => state.projectbody);
    const ViewMode = useSelector((state) => state.ViewMode);
    const [projectTitle, setprojectTitle] = useState(projectheader.name);
    const [projectDesc, setprojectDesc] = useState(projectheader.description);
    // console.log(projectcard);
    return (
        <div
            className="ProjectSectionLayout4LeftAlign my-5"
            style={{
                boxShadow: projectbody.shadow,
                borderRadius: `${projectbody.borderRadius}%`,
                background: projectbody.backgroundColor,
            }}
        >
            <Background />
            <div className="container my-r">
                <Button
                    variant="outlined"
                    color=""
                    style={{ marginBottom: "-4rem" }}
                    onClick={() => {
                        dispatch({ type: "openeditor", payload: !openeditor });
                        dispatch({ type: "tabpointer", payload: 6 });
                        // dispatch({ type: "currenttabe", payload: 4 });
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
                        dispatch({ type: "openeditor", payload: !openeditor });
                        dispatch({ type: "tabpointer", payload: 6 });
                        dispatch({ type: "currenttabe", payload: 0 });
                    }}
                    style={{
                        marginLeft: "auto",
                        display: "block",
                        display: ViewMode ? "none" : "inherit",
                    }}
                >
                    <EditIcon />
                </IconButton>
                <div
                    className="mt-4 ml-0"
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                        alignItems: "start",
                    }}
                >
                    <div
                        className="col-md-6 mx-auto pl-0 mb-5"
                        style={{ height: "min-content", width: "max-content" }}
                        data-aos={projectheader.animation}
                        data-aos-delay={parseFloat(projectheader.delay) * 1000}
                        data-aos-duration={
                            parseFloat(projectheader.duration) * 1000
                        }
                    >
                        {ViewMode ? (
                            <h2
                                className="mb-3"
                                style={{
                                    color: projectheader.color,
                                    fontFamily: projectheader.fontStyle,
                                    fontSize: "2.1rem",
                                }}
                            >
                                {projectheader.name}
                            </h2>
                        ) : (
                            <TextareaAutosize
                                value={projectTitle}
                                spellCheck="false"
                                className={`textAreaEditorDiv`}
                                placeholder="Project Section Title"
                                style={{
                                    color: `${projectheader.color}`,
                                    fontFamily: `${projectheader.fontStyle}`,
                                    fontSize: "2.1rem",
                                    background: "transparent",
                                    resize: "none",
                                    border: "0 none",
                                    outline: "none",
                                }}
                                onChange={(e) => {
                                    setprojectTitle(e.target.value);
                                }}
                                onFocus={(e) => {
                                  dispatch({
                                        type: "openMiniTextEditor",
                                    });
                                    dispatch({
                                        type: "textBeingChangedColorDispatch",
                                        payload: "PS_projectname",
                                    });
                                    dispatch({
                                        type: "textBeingChangedFontDispatch",
                                        payload: "PS_projectname",
                                    });
                                    dispatch({
                                        type: "textBeingChangedColorValue",
                                        payload: projectheader.color,
                                    });
                                    dispatch({
                                        type: "textBeingChangedFontValue",
                                        payload: projectheader.fontStyle,
                                    });
                                    dispatch({
                                        type: "diffReducer",
                                        payload: "true",
                                    });
                                }}
                                onBlur={(e) => {
                                    // settextAreaUsernameFocused(false);
                                    dispatch({
                                        type: "PS_projectname",
                                        payload: {
                                            ...projectheader,
                                            name: projectTitle,
                                        },
                                    });
                                }}
                            ></TextareaAutosize>
                        )}
                        {ViewMode ? (
                            <p
                                className="mb-4"
                                style={{
                                    color: projectheader.colorp,
                                    fontFamily: projectheader.fontStylep,
                                    lineHeight: "1.8rem",
                                    fontWeight: "normal",
                                    wordSpacing: "0.4rem",
                                    fontSize: "0.9rem",
                                    wordWrap: "break-word",
                                }}
                            >
                                {projectheader.description}
                            </p>
                        ) : (
                            <TextareaAutosize
                                value={projectDesc}
                                spellCheck="false"
                                className={`textAreaEditorDiv`}
                                placeholder="Project Section Description"
                                style={{
                                    color: projectheader.colorp,
                                    fontFamily: projectheader.fontStylep,
                                    lineHeight: "1.8rem",
                                    fontWeight: "normal",
                                    wordSpacing: "0.4rem",
                                    background: "transparent",
                                    resize: "none",
                                    overflowY: "visible",
                                    scroll: "none",
                                    fontSize: "0.9rem",
                                    border: "0 none",
                                    outline: "none",
                                }}
                                onChange={(e) => {
                                    setprojectDesc(e.target.value);
                                }}
                                onFocus={(e) => {
                                  dispatch({
                                        type: "openMiniTextEditor",
                                    });
                                    dispatch({
                                        type: "textBeingChangedColorDispatch",
                                        payload: "PS_projectname",
                                    });
                                    dispatch({
                                        type: "textBeingChangedFontDispatch",
                                        payload: "PS_projectname",
                                    });
                                    dispatch({
                                        type: "textBeingChangedColorValue",
                                        payload: projectheader.colorp,
                                    });
                                    dispatch({
                                        type: "textBeingChangedFontValue",
                                        payload: projectheader.fontStylep,
                                    });
                                    dispatch({
                                        type: "diffReducer",
                                        payload: "truep",
                                    });
                                }}
                                onBlur={(e) => {
                                    // settextAreaUsernameFocused(false);
                                    dispatch({
                                        type: "PS_projectname",
                                        payload: {
                                            ...projectheader,
                                            description: projectDesc,
                                        },
                                    });
                                }}
                            ></TextareaAutosize>
                        )}
                        <div style={{ width: "max-content" }}>
                            {/* eslint-disable-next-line */}
                            <a
                                href=""
                                target="_blank"
                                style={{ textDecoration: "none" }}
                            >
                                <Button
                                    variant="contained"
                                    style={{
                                        borderRadius: "50px",
                                        padding: "0.3rem 0.5rem 0.3rem 1.5em",
                                        color: projectheader.colorbt,
                                        background: projectheader.colorbbg,
                                    }}
                                >
                                    {projectheader.ButtonText}{" "}
                                    <KeyboardArrowRightIcon
                                        style={{
                                            color: projectheader.colora,
                                            background: projectheader.colorabg,
                                            marginLeft: "1rem",
                                            borderRadius: "100%",
                                            fontSize: "2rem",
                                        }}
                                    />{" "}
                                </Button>
                            </a>
                        </div>
                    </div>
                    {
                        <div className="CardColumns mb-5 col-md-6">
                            <ProjectCard5 key="1" />
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Layout4LeftAlign;
