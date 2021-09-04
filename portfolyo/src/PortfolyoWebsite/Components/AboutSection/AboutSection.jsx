import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./AboutSection.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "reactstrap";
import TextareaAutosize from "react-textarea-autosize";

const AboutSection = () => {
    //layoutBackground
    const layoutBackgroundSelectedRedux = useSelector(
        (state) => state.aboutSectionBackground.backgroundType
    );
    // const [layoutBackgroundSelected, setlayoutBackgroundSelected] = useState(
    // 	layoutBackgroundSelectedRedux
    // );
    //layoutBackgroundColor
    const layoutBackgroundColorRedux = useSelector(
        (state) => state.aboutSectionBackground.backgroundColor
    );

    //layoutDesign
    const layoutDesginTypeRedux = useSelector(
        (state) => state.aboutSectionBackground.backgroundDesignType
    );

    //layoutTransition
    const layoutTransitionSelectedRedux = useSelector(
        (state) => state.aboutSectionBackground.backgroundTransition
    );
    //aboutTitle

    const aboutTitleRedux = useSelector(
        (state) => state.aboutSectionBackground.aboutSectionTitle
    );

    const [aboutSectionTitle, setaboutSectionTitle] = useState(
        aboutTitleRedux.text
    );

    const aboutTitleAlignment = useSelector(
        (state) => state.aboutSectionBackground.aboutSectionTitleAlignment
    );

    //aboutSectionIntro
    const introRedux = useSelector(
        (state) => state.aboutSectionBackground.aboutSectionIntro
    );

    const [aboutSectionIntro, setaboutSectionIntro] = useState(introRedux.text);

    //about section passage
    const aboutPassageRedux = useSelector(
        (state) => state.aboutSectionBackground.aboutSectionPassage
    );
    const [aboutSectionPassage, setaboutSectionPassage] = useState(
        aboutPassageRedux.text
    );

    //about Image section
    const aboutImageTitleRedux = useSelector(
        (state) => state.aboutSectionBackground.aboutSectionImageTitle
    );

    const [aboutSectionImageTitle, setaboutSectionImageTitle] = useState(
        aboutImageTitleRedux.text
    );

    //Social Media
    const aboutSocialMediaTitleRedux = useSelector(
        (state) => state.aboutSectionBackground.aboutSectionSocialMediaTitle
    );

    const [aboutSectionSocialMediaTitle, setaboutSectionSocialMediaTitle] =
        useState(aboutSocialMediaTitleRedux);

    const aboutSocialMediaLinksRedux = useSelector(
        (state) => state.aboutSectionBackground.aboutSectionSocialMediaLinks
    );

    //basic info section
    const aboutSectionBasicInfoRedux = useSelector(
        (state) => state.aboutSectionBackground.aboutSectionBasicInfo
    );

    const [aboutSectionBasicInfo, setaboutSectionBasicInfo] = useState(
        aboutSectionBasicInfoRedux
    );

    //imgage section
    const aboutSectioImageBorderRedux = useSelector(
        (state) => state.aboutSectionBackground.imageBorderColor
    );
    const aboutSectioImageRedux = useSelector(
        (state) => state.AboutSectionImageUploader
    );

    //viewmode
    const ViewMode = useSelector((state) => state.ViewMode);

    const dispatch = useDispatch();

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);
    return (
        <div className="aboutSectionPage">
            <div
                className={`aboutSectionbackground pt-0 mt-0`}
                data-aos={layoutTransitionSelectedRedux}
            >
                {layoutBackgroundSelectedRedux === 0 ? (
                    <div className="aboutSectionbackground1UpperSection">
                        <div className="aboutSectionbackground1Red"></div>
                        <div className="aboutSectionbackground1Yellow"></div>
                        <div className="aboutSectionbackground1Green"></div>
                    </div>
                ) : null}
                <div
                    className={`aboutSectionbackgroundBody ${
                        layoutBackgroundSelectedRedux === 1
                            ? `aboutSectionBackgroundboderbox`
                            : layoutBackgroundSelectedRedux === 2
                            ? `aboutSectionBackgroundNone`
                            : ``
                    }`}
                    style={{
                        backgroundColor: layoutBackgroundColorRedux,
                    }}
                >
                    {layoutDesginTypeRedux === 0 ? (
                        <div className="layoutDesignType0">
                            {ViewMode ? (
                                <p
                                    className={`aboutSectionTitle ${
                                        aboutTitleAlignment === `middle`
                                            ? `aboutTitleMiddle`
                                            : ``
                                    }`}
                                    style={{
                                        color: aboutTitleRedux.color,
                                        fontFamily: aboutTitleRedux.fontStyle,
                                    }}
                                >
                                    {aboutTitleRedux.text}
                                </p>
                            ) : (
                                <div
                                    className={`textAreaEditorDivAboutTitle`}
                                    style={{
                                        justifyContent:
                                            aboutTitleAlignment === `middle`
                                                ? "center"
                                                : "start",
                                    }}
                                >
                                    <TextareaAutosize
                                        className={`aboutSectionTitle ${
                                            aboutTitleAlignment === `middle`
                                                ? `aboutTitleMiddle`
                                                : ``
                                        }`}
                                        value={aboutSectionTitle}
                                        spellCheck="false"
                                        // cols={textAreaUsername.length}
                                        placeholder="About Section Title"
                                        style={{
                                            color: `${aboutTitleRedux.color}`,
                                            fontFamily: `${aboutTitleRedux.fontStyle}`,
                                        }}
                                        onChange={(e) => {
                                            setaboutSectionTitle(
                                                e.target.value
                                            );
                                        }}
                                        onFocus={(e) => {
                                            // settextAreaUsernameFocused(true);
                                            dispatch({
                                                type: "openMiniTextEditor",
                                            });
                                            dispatch({
                                                type: "textBeingChangedColorDispatch",
                                                payload:
                                                    "aboutSectionTitleColorChange",
                                            });
                                            dispatch({
                                                type: "textBeingChangedFontDispatch",
                                                payload:
                                                    "aboutSectionTitleFontStyleChange",
                                            });
                                            dispatch({
                                                type: "textBeingChangedColorValue",
                                                payload: aboutTitleRedux.color,
                                            });
                                            dispatch({
                                                type: "textBeingChangedFontValue",
                                                payload:
                                                    aboutTitleRedux.fontStyle,
                                            });
                                        }}
                                        onBlur={(e) => {
                                            // settextAreaUsernameFocused(false);
                                            dispatch({
                                                type: "aboutSectionTitleTextChange",
                                                payload: e.target.value,
                                            });
                                        }}
                                    ></TextareaAutosize>
                                </div>
                            )}

                            <div className="aboutSectionContent">
                                <div className="aboutSectionContentLeft">
                                    {ViewMode ? (
                                        <p
                                            className="aboutSectionContentSubTitle"
                                            style={{
                                                color: introRedux.color,
                                                fontFamily:
                                                    introRedux.fontStyle,
                                            }}
                                        >
                                            {introRedux.text}
                                        </p>
                                    ) : (
                                        <div
                                            className={`textAreaEditorDivAboutTitle`}
                                        >
                                            <TextareaAutosize
                                                className={`aboutSectionContentSubTitle`}
                                                value={aboutSectionIntro}
                                                spellCheck="false"
                                                // cols={textAreaUsername.length}
                                                placeholder="About Section Title"
                                                style={{
                                                    color: `${introRedux.color}`,
                                                    fontFamily: `${introRedux.fontStyle}`,
                                                }}
                                                onChange={(e) => {
                                                    setaboutSectionIntro(
                                                        e.target.value
                                                    );
                                                }}
                                                onFocus={(e) => {
                                                    // settextAreaUsernameFocused(true);
                                                    dispatch({
                                                        type: "openMiniTextEditor",
                                                    });
                                                    dispatch({
                                                        type: "textBeingChangedColorDispatch",
                                                        payload:
                                                            "aboutSectionIntroColorChange",
                                                    });
                                                    dispatch({
                                                        type: "textBeingChangedFontDispatch",
                                                        payload:
                                                            "aboutSectionIntroFontStyleChange",
                                                    });
                                                    dispatch({
                                                        type: "textBeingChangedColorValue",
                                                        payload:
                                                            introRedux.color,
                                                    });
                                                    dispatch({
                                                        type: "textBeingChangedFontValue",
                                                        payload:
                                                            introRedux.fontStyle,
                                                    });
                                                }}
                                                onBlur={(e) => {
                                                    // settextAreaUsernameFocused(false);
                                                    dispatch({
                                                        type: "aboutSectionIntroTextChange",
                                                        payload: e.target.value,
                                                    });
                                                }}
                                            ></TextareaAutosize>
                                        </div>
                                    )}

                                    {ViewMode ? (
                                        <p
                                            className="aboutSectionContentTitle"
                                            style={{
                                                color: aboutImageTitleRedux.color,
                                                fontFamily:
                                                    aboutImageTitleRedux.fontStyle,
                                            }}
                                        >
                                            {aboutImageTitleRedux.text}
                                        </p>
                                    ) : (
                                        <div
                                            className={`textAreaEditorDivAboutTitle`}
                                        >
                                            <TextareaAutosize
                                                className={`aboutSectionImageTitle`}
                                                value={aboutSectionImageTitle}
                                                spellCheck="false"
                                                // cols={textAreaUsername.length}
                                                placeholder="About Section Title"
                                                style={{
                                                    color: `${aboutImageTitleRedux.color}`,
                                                    fontFamily: `${aboutImageTitleRedux.fontStyle}`,
                                                }}
                                                onChange={(e) => {
                                                    setaboutSectionImageTitle(
                                                        e.target.value
                                                    );
                                                }}
                                                onFocus={(e) => {
                                                    // settextAreaUsernameFocused(true);
                                                    dispatch({
                                                        type: "openMiniTextEditor",
                                                    });
                                                    dispatch({
                                                        type: "textBeingChangedColorDispatch",
                                                        payload:
                                                            "aboutSectionImageTitleColorChange",
                                                    });
                                                    dispatch({
                                                        type: "textBeingChangedFontDispatch",
                                                        payload:
                                                            "aboutSectionImageTitleFontStyleChange",
                                                    });
                                                    dispatch({
                                                        type: "textBeingChangedColorValue",
                                                        payload:
                                                            aboutImageTitleRedux.color,
                                                    });
                                                    dispatch({
                                                        type: "textBeingChangedFontValue",
                                                        payload:
                                                            aboutImageTitleRedux.fontStyle,
                                                    });
                                                }}
                                                onBlur={(e) => {
                                                    // settextAreaUsernameFocused(false);
                                                    dispatch({
                                                        type: "aboutSectionImageTitleTextChange",
                                                        payload: e.target.value,
                                                    });
                                                }}
                                            ></TextareaAutosize>
                                        </div>
                                    )}
                                    <img
                                        style={{
                                            border: `${aboutSectioImageBorderRedux} 4px solid`,
                                        }}
                                        src={
                                            aboutSectioImageRedux
                                                ? aboutSectioImageRedux
                                                : "https://picsum.photos/500/300"
                                        }
                                        alt="about"
                                    ></img>
                                </div>
                                <div className="aboutSectionContentMiddle"></div>
                                <div className="aboutSectionContentRight">
                                    {ViewMode ? (
                                        <p
                                            className="aboutSectionContentTitle"
                                            style={{
                                                color: aboutSectionBasicInfoRedux
                                                    .title.color,
                                                fontFamily:
                                                    aboutSectionBasicInfoRedux
                                                        .title.fontStyle,
                                            }}
                                        >
                                            {aboutSectionBasicInfo.title.text}
                                        </p>
                                    ) : (
                                        <div
                                            className={`textAreaEditorDivAboutTitle`}
                                        >
                                            <TextareaAutosize
                                                className={`aboutSectionImageTitle`}
                                                value={
                                                    aboutSectionBasicInfo.title
                                                        .text
                                                }
                                                spellCheck="false"
                                                // cols={textAreaUsername.length}
                                                placeholder="Basic Information Title"
                                                style={{
                                                    color: aboutSectionBasicInfoRedux
                                                        .title.color,
                                                    fontFamily:
                                                        aboutSectionBasicInfoRedux
                                                            .title.fontStyle,
                                                }}
                                                onChange={(e) => {
                                                    setaboutSectionBasicInfo(
                                                        (prev) => ({
                                                            ...prev,
                                                            title: {
                                                                ...prev.title,
                                                                text: e.target
                                                                    .value,
                                                            },
                                                        })
                                                    );
                                                }}
                                                onFocus={(e) => {
                                                    // settextAreaUsernameFocused(true);
                                                    dispatch({
                                                        type: "openMiniTextEditor",
                                                    });
                                                    dispatch({
                                                        type: "textBeingChangedColorDispatch",
                                                        payload:
                                                            "aboutSectionBasicInfoTitleColorChange",
                                                    });
                                                    dispatch({
                                                        type: "textBeingChangedFontDispatch",
                                                        payload:
                                                            "aboutSectionBasicInfoTitleFontStyleChange",
                                                    });
                                                    dispatch({
                                                        type: "textBeingChangedColorValue",
                                                        payload:
                                                            aboutSectionBasicInfoRedux
                                                                .title.color,
                                                    });
                                                    dispatch({
                                                        type: "textBeingChangedFontValue",
                                                        payload:
                                                            aboutSectionBasicInfoRedux
                                                                .title
                                                                .fontStyle,
                                                    });
                                                }}
                                                onBlur={(e) => {
                                                    // settextAreaUsernameFocused(false);
                                                    dispatch({
                                                        type: "aboutSectionBasicInfoTitleTextChange",
                                                        payload: e.target.value,
                                                    });
                                                }}
                                            ></TextareaAutosize>
                                        </div>
                                    )}
                                    <div className="aboutSectionContentRightBasicInfo container">
                                        <div className="row">
                                            <div
                                                className="aboutSectionContentRightBasicInfoKeys col-sm-4"
                                                style={{
                                                    color: aboutSectionBasicInfoRedux
                                                        .keys.color,
                                                    fontFamily:
                                                        aboutSectionBasicInfoRedux
                                                            .keys.fontStyle,
                                                }}
                                            >
                                                Age:
                                            </div>
                                            {ViewMode ? (
                                                <div
                                                    className="col-sm-8 aboutSectionContentRightBasicInfoValues"
                                                    style={{
                                                        color: aboutSectionBasicInfoRedux
                                                            .values.color,
                                                        fontFamily:
                                                            aboutSectionBasicInfoRedux
                                                                .values
                                                                .fontStyle,
                                                    }}
                                                >
                                                    {
                                                        aboutSectionBasicInfoRedux
                                                            .values.text.age
                                                    }
                                                </div>
                                            ) : (
                                                <div
                                                    className={`col-sm-8 textAreaEditorDivAboutTitle`}
                                                >
                                                    <TextareaAutosize
                                                        className={`aboutSectionContentRightBasicInfoValues`}
                                                        value={
                                                            aboutSectionBasicInfo
                                                                .values.text.age
                                                        }
                                                        spellCheck="false"
                                                        // cols={textAreaUsername.length}
                                                        placeholder="Enter Age"
                                                        style={{
                                                            color: aboutSectionBasicInfoRedux
                                                                .values.color,
                                                            fontFamily:
                                                                aboutSectionBasicInfoRedux
                                                                    .values
                                                                    .fontStyle,
                                                        }}
                                                        onChange={(e) => {
                                                            setaboutSectionBasicInfo(
                                                                (prev) => ({
                                                                    ...prev,
                                                                    values: {
                                                                        ...prev.values,
                                                                        text: {
                                                                            ...prev
                                                                                .values
                                                                                .text,
                                                                            age: e
                                                                                .target
                                                                                .value,
                                                                        },
                                                                    },
                                                                })
                                                            );
                                                        }}
                                                        onFocus={(e) => {
                                                            // settextAreaUsernameFocused(true);
                                                            dispatch({
                                                                type: "openMiniTextEditor",
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedColorDispatch",
                                                                payload:
                                                                    "aboutSectionBasicInfoValuesColorChange",
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedFontDispatch",
                                                                payload:
                                                                    "aboutSectionBasicInfoValuesFontStyleChange",
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedColorValue",
                                                                payload:
                                                                    aboutSectionBasicInfoRedux
                                                                        .values
                                                                        .color,
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedFontValue",
                                                                payload:
                                                                    aboutSectionBasicInfoRedux
                                                                        .values
                                                                        .fontStyle,
                                                            });
                                                        }}
                                                        onBlur={(e) => {
                                                            // settextAreaUsernameFocused(false);
                                                            dispatch({
                                                                type: "aboutSectionBasicInfoValuesTextAgeChange",
                                                                payload:
                                                                    e.target
                                                                        .value,
                                                            });
                                                        }}
                                                    ></TextareaAutosize>
                                                </div>
                                            )}
                                        </div>
                                        <div className="row">
                                            <div
                                                className="aboutSectionContentRightBasicInfoKeys col-sm-4"
                                                style={{
                                                    color: aboutSectionBasicInfoRedux
                                                        .keys.color,
                                                    fontFamily:
                                                        aboutSectionBasicInfoRedux
                                                            .keys.fontStyle,
                                                }}
                                            >
                                                Email:
                                            </div>

                                            {ViewMode ? (
                                                <div
                                                    className="col-sm-8 aboutSectionContentRightBasicInfoValues"
                                                    style={{
                                                        color: aboutSectionBasicInfoRedux
                                                            .values.color,
                                                        fontFamily:
                                                            aboutSectionBasicInfoRedux
                                                                .values
                                                                .fontStyle,
                                                    }}
                                                >
                                                    {
                                                        aboutSectionBasicInfoRedux
                                                            .values.text.email
                                                    }
                                                </div>
                                            ) : (
                                                <div
                                                    className={`col-sm-8 textAreaEditorDivAboutTitle`}
                                                >
                                                    <TextareaAutosize
                                                        className={`aboutSectionContentRightBasicInfoValues`}
                                                        value={
                                                            aboutSectionBasicInfo
                                                                .values.text
                                                                .email
                                                        }
                                                        spellCheck="false"
                                                        // cols={textAreaUsername.length}
                                                        placeholder="Enter Email"
                                                        style={{
                                                            color: aboutSectionBasicInfoRedux
                                                                .values.color,
                                                            fontFamily:
                                                                aboutSectionBasicInfoRedux
                                                                    .values
                                                                    .fontStyle,
                                                        }}
                                                        onChange={(e) => {
                                                            setaboutSectionBasicInfo(
                                                                (prev) => ({
                                                                    ...prev,
                                                                    values: {
                                                                        ...prev.values,
                                                                        text: {
                                                                            ...prev
                                                                                .values
                                                                                .text,
                                                                            email: e
                                                                                .target
                                                                                .value,
                                                                        },
                                                                    },
                                                                })
                                                            );
                                                        }}
                                                        onFocus={(e) => {
                                                            // settextAreaUsernameFocused(true);
                                                            dispatch({
                                                                type: "openMiniTextEditor",
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedColorDispatch",
                                                                payload:
                                                                    "aboutSectionBasicInfoValuesColorChange",
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedFontDispatch",
                                                                payload:
                                                                    "aboutSectionBasicInfoValuesFontStyleChange",
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedColorValue",
                                                                payload:
                                                                    aboutSectionBasicInfoRedux
                                                                        .values
                                                                        .color,
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedFontValue",
                                                                payload:
                                                                    aboutSectionBasicInfoRedux
                                                                        .values
                                                                        .fontStyle,
                                                            });
                                                        }}
                                                        onBlur={(e) => {
                                                            // settextAreaUsernameFocused(false);
                                                            dispatch({
                                                                type: "aboutSectionBasicInfoValuesTextEmailChange",
                                                                payload:
                                                                    e.target
                                                                        .value,
                                                            });
                                                        }}
                                                    ></TextareaAutosize>
                                                </div>
                                            )}
                                        </div>
                                        <div className="row">
                                            <div
                                                className="aboutSectionContentRightBasicInfoKeys col-sm-4"
                                                style={{
                                                    color: aboutSectionBasicInfoRedux
                                                        .keys.color,
                                                    fontFamily:
                                                        aboutSectionBasicInfoRedux
                                                            .keys.fontStyle,
                                                }}
                                            >
                                                Phone:
                                            </div>
                                            {ViewMode ? (
                                                <div
                                                    className="col-sm-8 aboutSectionContentRightBasicInfoValues"
                                                    style={{
                                                        color: aboutSectionBasicInfoRedux
                                                            .values.color,
                                                        fontFamily:
                                                            aboutSectionBasicInfoRedux
                                                                .values
                                                                .fontStyle,
                                                    }}
                                                >
                                                    {
                                                        aboutSectionBasicInfoRedux
                                                            .values.text.phone
                                                    }
                                                </div>
                                            ) : (
                                                <div
                                                    className={`col-sm-8 textAreaEditorDivAboutTitle`}
                                                >
                                                    <TextareaAutosize
                                                        className={`aboutSectionContentRightBasicInfoValues`}
                                                        value={
                                                            aboutSectionBasicInfo
                                                                .values.text
                                                                .phone
                                                        }
                                                        spellCheck="false"
                                                        // cols={textAreaUsername.length}
                                                        placeholder="Enter PhoneNumber"
                                                        style={{
                                                            color: aboutSectionBasicInfoRedux
                                                                .values.color,
                                                            fontFamily:
                                                                aboutSectionBasicInfoRedux
                                                                    .values
                                                                    .fontStyle,
                                                        }}
                                                        onChange={(e) => {
                                                            setaboutSectionBasicInfo(
                                                                (prev) => ({
                                                                    ...prev,
                                                                    values: {
                                                                        ...prev.values,
                                                                        text: {
                                                                            ...prev
                                                                                .values
                                                                                .text,
                                                                            phone: e
                                                                                .target
                                                                                .value,
                                                                        },
                                                                    },
                                                                })
                                                            );
                                                        }}
                                                        onFocus={(e) => {
                                                            // settextAreaUsernameFocused(true);
                                                            dispatch({
                                                                type: "openMiniTextEditor",
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedColorDispatch",
                                                                payload:
                                                                    "aboutSectionBasicInfoValuesColorChange",
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedFontDispatch",
                                                                payload:
                                                                    "aboutSectionBasicInfoValuesFontStyleChange",
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedColorValue",
                                                                payload:
                                                                    aboutSectionBasicInfoRedux
                                                                        .values
                                                                        .color,
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedFontValue",
                                                                payload:
                                                                    aboutSectionBasicInfoRedux
                                                                        .values
                                                                        .fontStyle,
                                                            });
                                                        }}
                                                        onBlur={(e) => {
                                                            // settextAreaUsernameFocused(false);
                                                            dispatch({
                                                                type: "aboutSectionBasicInfoValuesTextPhoneChange",
                                                                payload:
                                                                    e.target
                                                                        .value,
                                                            });
                                                        }}
                                                    ></TextareaAutosize>
                                                </div>
                                            )}
                                        </div>
                                        <div className="row">
                                            <div
                                                className="aboutSectionContentRightBasicInfoKeys col-sm-4"
                                                style={{
                                                    color: aboutSectionBasicInfoRedux
                                                        .keys.color,
                                                    fontFamily:
                                                        aboutSectionBasicInfoRedux
                                                            .keys.fontStyle,
                                                }}
                                            >
                                                Address:
                                            </div>

                                            {ViewMode ? (
                                                <div
                                                    className="col-sm-8 aboutSectionContentRightBasicInfoValues"
                                                    style={{
                                                        color: aboutSectionBasicInfoRedux
                                                            .values.color,
                                                        fontFamily:
                                                            aboutSectionBasicInfoRedux
                                                                .values
                                                                .fontStyle,
                                                    }}
                                                >
                                                    {
                                                        aboutSectionBasicInfoRedux
                                                            .values.text.address
                                                    }
                                                </div>
                                            ) : (
                                                <div
                                                    className={`col-sm-8 textAreaEditorDivAboutTitle`}
                                                >
                                                    <TextareaAutosize
                                                        className={`aboutSectionContentRightBasicInfoValues`}
                                                        value={
                                                            aboutSectionBasicInfo
                                                                .values.text
                                                                .address
                                                        }
                                                        spellCheck="false"
                                                        // cols={textAreaUsername.length}
                                                        placeholder="Enter Address"
                                                        style={{
                                                            color: aboutSectionBasicInfoRedux
                                                                .values.color,
                                                            fontFamily:
                                                                aboutSectionBasicInfoRedux
                                                                    .values
                                                                    .fontStyle,
                                                        }}
                                                        onChange={(e) => {
                                                            setaboutSectionBasicInfo(
                                                                (prev) => ({
                                                                    ...prev,
                                                                    values: {
                                                                        ...prev.values,
                                                                        text: {
                                                                            ...prev
                                                                                .values
                                                                                .text,
                                                                            address:
                                                                                e
                                                                                    .target
                                                                                    .value,
                                                                        },
                                                                    },
                                                                })
                                                            );
                                                        }}
                                                        onFocus={(e) => {
                                                            // settextAreaUsernameFocused(true);
                                                            dispatch({
                                                                type: "openMiniTextEditor",
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedColorDispatch",
                                                                payload:
                                                                    "aboutSectionBasicInfoValuesColorChange",
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedFontDispatch",
                                                                payload:
                                                                    "aboutSectionBasicInfoValuesFontStyleChange",
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedColorValue",
                                                                payload:
                                                                    aboutSectionBasicInfoRedux
                                                                        .values
                                                                        .color,
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedFontValue",
                                                                payload:
                                                                    aboutSectionBasicInfoRedux
                                                                        .values
                                                                        .fontStyle,
                                                            });
                                                        }}
                                                        onBlur={(e) => {
                                                            // settextAreaUsernameFocused(false);
                                                            dispatch({
                                                                type: "aboutSectionBasicInfoValuesTextAddressChange",
                                                                payload:
                                                                    e.target
                                                                        .value,
                                                            });
                                                        }}
                                                    ></TextareaAutosize>
                                                </div>
                                            )}
                                        </div>
                                        <div className="row">
                                            <div
                                                className="aboutSectionContentRightBasicInfoKeys col-sm-4"
                                                style={{
                                                    color: aboutSectionBasicInfoRedux
                                                        .keys.color,
                                                    fontFamily:
                                                        aboutSectionBasicInfoRedux
                                                            .keys.fontStyle,
                                                }}
                                            >
                                                Languages:
                                            </div>

                                            {ViewMode ? (
                                                <div
                                                    className="col-sm-8 aboutSectionContentRightBasicInfoValues"
                                                    style={{
                                                        color: aboutSectionBasicInfoRedux
                                                            .values.color,
                                                        fontFamily:
                                                            aboutSectionBasicInfoRedux
                                                                .values
                                                                .fontStyle,
                                                    }}
                                                >
                                                    {
                                                        aboutSectionBasicInfoRedux
                                                            .values.text
                                                            .languages
                                                    }
                                                </div>
                                            ) : (
                                                <div
                                                    className={`col-sm-8 textAreaEditorDivAboutTitle`}
                                                >
                                                    <TextareaAutosize
                                                        className={`aboutSectionContentRightBasicInfoValues`}
                                                        value={
                                                            aboutSectionBasicInfo
                                                                .values.text
                                                                .languages
                                                        }
                                                        spellCheck="false"
                                                        // cols={textAreaUsername.length}
                                                        placeholder="Enter Languages!"
                                                        style={{
                                                            color: aboutSectionBasicInfoRedux
                                                                .values.color,
                                                            fontFamily:
                                                                aboutSectionBasicInfoRedux
                                                                    .values
                                                                    .fontStyle,
                                                        }}
                                                        onChange={(e) => {
                                                            setaboutSectionBasicInfo(
                                                                (prev) => ({
                                                                    ...prev,
                                                                    values: {
                                                                        ...prev.values,
                                                                        text: {
                                                                            ...prev
                                                                                .values
                                                                                .text,
                                                                            languages:
                                                                                e
                                                                                    .target
                                                                                    .value,
                                                                        },
                                                                    },
                                                                })
                                                            );
                                                        }}
                                                        onFocus={(e) => {
                                                            // settextAreaUsernameFocused(true);
                                                            dispatch({
                                                                type: "openMiniTextEditor",
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedColorDispatch",
                                                                payload:
                                                                    "aboutSectionBasicInfoValuesColorChange",
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedFontDispatch",
                                                                payload:
                                                                    "aboutSectionBasicInfoValuesFontStyleChange",
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedColorValue",
                                                                payload:
                                                                    aboutSectionBasicInfoRedux
                                                                        .values
                                                                        .color,
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedFontValue",
                                                                payload:
                                                                    aboutSectionBasicInfoRedux
                                                                        .values
                                                                        .fontStyle,
                                                            });
                                                        }}
                                                        onBlur={(e) => {
                                                            // settextAreaUsernameFocused(false);
                                                            dispatch({
                                                                type: "aboutSectionBasicInfoValuesTextLanguagesChange",
                                                                payload:
                                                                    e.target
                                                                        .value,
                                                            });
                                                        }}
                                                    ></TextareaAutosize>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    {ViewMode ? (
                                        <p
                                            className="aboutSectionContentTitle"
                                            style={{
                                                color: aboutSocialMediaTitleRedux.color,
                                                fontFamily:
                                                    aboutSocialMediaTitleRedux.fontStyle,
                                            }}
                                        >
                                            {aboutSectionSocialMediaTitle.text}
                                        </p>
                                    ) : (
                                        <div
                                            className={`textAreaEditorDivAboutTitle`}
                                        >
                                            <TextareaAutosize
                                                className={`aboutSectionImageTitle`}
                                                value={
                                                    aboutSectionSocialMediaTitle.text
                                                }
                                                spellCheck="false"
                                                // cols={textAreaUsername.length}
                                                placeholder="Social Media Handles Title:"
                                                style={{
                                                    color: aboutSocialMediaTitleRedux.color,
                                                    fontFamily:
                                                        aboutSocialMediaTitleRedux.fontStyle,
                                                }}
                                                onChange={(e) => {
                                                    setaboutSectionSocialMediaTitle(
                                                        (prev) => ({
                                                            ...prev,
                                                            text: e.target
                                                                .value,
                                                        })
                                                    );
                                                }}
                                                onFocus={(e) => {
                                                    // settextAreaUsernameFocused(true);
                                                    dispatch({
                                                        type: "openMiniTextEditor",
                                                    });
                                                    dispatch({
                                                        type: "textBeingChangedColorDispatch",
                                                        payload:
                                                            "aboutSectionSocialMediaTitleColorChange",
                                                    });
                                                    dispatch({
                                                        type: "textBeingChangedFontDispatch",
                                                        payload:
                                                            "aboutSectionSocialMediaTitleFontStyleChange",
                                                    });
                                                    dispatch({
                                                        type: "textBeingChangedColorValue",
                                                        payload:
                                                            aboutSectionBasicInfoRedux
                                                                .title.color,
                                                    });
                                                    dispatch({
                                                        type: "textBeingChangedFontValue",
                                                        payload:
                                                            aboutSectionBasicInfoRedux
                                                                .title
                                                                .fontStyle,
                                                    });
                                                }}
                                                onBlur={(e) => {
                                                    // settextAreaUsernameFocused(false);
                                                    dispatch({
                                                        type: "aboutSectionSocialMediaTitleTextChange",
                                                        payload: e.target.value,
                                                    });
                                                }}
                                            ></TextareaAutosize>
                                        </div>
                                    )}
                                    <div className="aboutSectionSocialMediaLinks">
                                        <NavLink
                                            to={
                                                aboutSocialMediaLinksRedux.gmail
                                            }
                                            className="btn google"
                                        >
                                            <i
                                                class="fab fa-google-plus-g"
                                                style={{
                                                    height: "fit-content",
                                                }}
                                            ></i>
                                        </NavLink>
                                        <NavLink
                                            to={
                                                aboutSocialMediaLinksRedux.instagram
                                            }
                                            className="btn instagram"
                                        >
                                            <i
                                                class="fab fa-instagram"
                                                style={{
                                                    height: "fit-content",
                                                }}
                                            ></i>
                                        </NavLink>
                                        <NavLink
                                            to={
                                                aboutSocialMediaLinksRedux.linkedIn
                                            }
                                            className="btn linkedIn"
                                        >
                                            <i
                                                class="fab fa-linkedin"
                                                style={{
                                                    height: "fit-content",
                                                }}
                                            ></i>
                                        </NavLink>
                                        <NavLink to="#" className="btn gitHub">
                                            <i
                                                class="fab fa-github"
                                                style={{
                                                    height: "fit-content",
                                                }}
                                            ></i>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : layoutDesginTypeRedux === 1 ? (
                        <div className="layoutDesignType1">
                            {ViewMode ? (
                                <p
                                    className={`aboutSectionTitle ${
                                        aboutTitleAlignment === `middle`
                                            ? `aboutTitleMiddle`
                                            : ``
                                    }`}
                                    style={{
                                        color: aboutTitleRedux.color,
                                        fontFamily: aboutTitleRedux.fontStyle,
                                    }}
                                >
                                    {aboutTitleRedux.text}
                                </p>
                            ) : (
                                <div
                                    className={`textAreaEditorDivAboutTitle`}
                                    style={{
                                        justifyContent:
                                            aboutTitleAlignment === `middle`
                                                ? "center"
                                                : "start",
                                    }}
                                >
                                    <TextareaAutosize
                                        className={`aboutSectionTitle ${
                                            aboutTitleAlignment === `middle`
                                                ? `aboutTitleMiddle`
                                                : ``
                                        }`}
                                        value={aboutSectionTitle}
                                        spellCheck="false"
                                        // cols={textAreaUsername.length}
                                        placeholder="About Section Title"
                                        style={{
                                            color: `${aboutTitleRedux.color}`,
                                            fontFamily: `${aboutTitleRedux.fontStyle}`,
                                        }}
                                        onChange={(e) => {
                                            setaboutSectionTitle(
                                                e.target.value
                                            );
                                        }}
                                        onFocus={(e) => {
                                            // settextAreaUsernameFocused(true);
                                            dispatch({
                                                type: "openMiniTextEditor",
                                            });
                                            dispatch({
                                                type: "textBeingChangedColorDispatch",
                                                payload:
                                                    "aboutSectionTitleColorChange",
                                            });
                                            dispatch({
                                                type: "textBeingChangedFontDispatch",
                                                payload:
                                                    "aboutSectionTitleFontStyleChange",
                                            });
                                            dispatch({
                                                type: "textBeingChangedColorValue",
                                                payload: aboutTitleRedux.color,
                                            });
                                            dispatch({
                                                type: "textBeingChangedFontValue",
                                                payload:
                                                    aboutTitleRedux.fontStyle,
                                            });
                                        }}
                                        onBlur={(e) => {
                                            // settextAreaUsernameFocused(false);
                                            dispatch({
                                                type: "aboutSectionTitleTextChange",
                                                payload: e.target.value,
                                            });
                                        }}
                                    ></TextareaAutosize>
                                </div>
                            )}
                            {ViewMode ? (
                                <p
                                    className="aboutSectionContentSubTitle"
                                    style={{
                                        color: introRedux.color,
                                        fontFamily: introRedux.fontStyle,
                                    }}
                                >
                                    {introRedux.text}
                                </p>
                            ) : (
                                <div className={`textAreaEditorDivAboutTitle`}>
                                    <TextareaAutosize
                                        className={`aboutSectionContentSubTitle`}
                                        value={aboutSectionIntro}
                                        spellCheck="false"
                                        // cols={textAreaUsername.length}
                                        placeholder="About Section Title"
                                        style={{
                                            color: `${introRedux.color}`,
                                            fontFamily: `${introRedux.fontStyle}`,
                                        }}
                                        onChange={(e) => {
                                            setaboutSectionIntro(
                                                e.target.value
                                            );
                                        }}
                                        onFocus={(e) => {
                                            // settextAreaUsernameFocused(true);
                                            dispatch({
                                                type: "openMiniTextEditor",
                                            });
                                            dispatch({
                                                type: "textBeingChangedColorDispatch",
                                                payload:
                                                    "aboutSectionIntroColorChange",
                                            });
                                            dispatch({
                                                type: "textBeingChangedFontDispatch",
                                                payload:
                                                    "aboutSectionIntroFontStyleChange",
                                            });
                                            dispatch({
                                                type: "textBeingChangedColorValue",
                                                payload: introRedux.color,
                                            });
                                            dispatch({
                                                type: "textBeingChangedFontValue",
                                                payload: introRedux.fontStyle,
                                            });
                                        }}
                                        onBlur={(e) => {
                                            // settextAreaUsernameFocused(false);
                                            dispatch({
                                                type: "aboutSectionIntroTextChange",
                                                payload: e.target.value,
                                            });
                                        }}
                                    ></TextareaAutosize>
                                </div>
                            )}
                            {ViewMode ? (
                                <p
                                    style={{
                                        color: aboutPassageRedux.color,
                                        fontFamily: aboutPassageRedux.fontStyle,
                                    }}
                                >
                                    {aboutPassageRedux.text}
                                </p>
                            ) : (
                                <div className={`textAreaEditorDivAboutTitle`}>
                                    <TextareaAutosize
                                        className={`aboutSectionPassage`}
                                        value={aboutSectionPassage}
                                        spellCheck="false"
                                        // cols={textAreaUsername.length}
                                        placeholder="About Yourself!"
                                        style={{
                                            color: aboutPassageRedux.color,
                                            fontFamily:
                                                aboutPassageRedux.fontStyle,
                                        }}
                                        onChange={(e) => {
                                            setaboutSectionPassage(
                                                e.target.value
                                            );
                                        }}
                                        onFocus={(e) => {
                                            // settextAreaUsernameFocused(true);
                                            dispatch({
                                                type: "openMiniTextEditor",
                                            });
                                            dispatch({
                                                type: "textBeingChangedColorDispatch",
                                                payload:
                                                    "aboutSectionPassageColorChange",
                                            });
                                            dispatch({
                                                type: "textBeingChangedFontDispatch",
                                                payload:
                                                    "aboutSectionPassageFontStyleChange",
                                            });
                                            dispatch({
                                                type: "textBeingChangedColorValue",
                                                payload:
                                                    aboutPassageRedux.color,
                                            });
                                            dispatch({
                                                type: "textBeingChangedFontValue",
                                                payload:
                                                    aboutPassageRedux.fontStyle,
                                            });
                                        }}
                                        onBlur={(e) => {
                                            // settextAreaUsernameFocused(false);
                                            dispatch({
                                                type: "aboutSectionPassageTextChange",
                                                payload: e.target.value,
                                            });
                                        }}
                                    ></TextareaAutosize>
                                </div>
                            )}
                            <div className="aboutLayoutDesignType1Flex">
                                <div className="aboutLayoutDesignType1FlexLeft">
                                    {ViewMode ? (
                                        <p
                                            className="aboutSectionContentTitle"
                                            style={{
                                                color: aboutSectionBasicInfoRedux
                                                    .title.color,
                                                fontFamily:
                                                    aboutSectionBasicInfoRedux
                                                        .title.fontStyle,
                                            }}
                                        >
                                            {aboutSectionBasicInfo.title.text}
                                        </p>
                                    ) : (
                                        <div
                                            className={`textAreaEditorDivAboutTitle`}
                                        >
                                            <TextareaAutosize
                                                className={`aboutSectionImageTitle`}
                                                value={
                                                    aboutSectionBasicInfo.title
                                                        .text
                                                }
                                                spellCheck="false"
                                                // cols={textAreaUsername.length}
                                                placeholder="Basic Information Title"
                                                style={{
                                                    color: aboutSectionBasicInfoRedux
                                                        .title.color,
                                                    fontFamily:
                                                        aboutSectionBasicInfoRedux
                                                            .title.fontStyle,
                                                }}
                                                onChange={(e) => {
                                                    setaboutSectionBasicInfo(
                                                        (prev) => ({
                                                            ...prev,
                                                            title: {
                                                                ...prev.title,
                                                                text: e.target
                                                                    .value,
                                                            },
                                                        })
                                                    );
                                                }}
                                                onFocus={(e) => {
                                                    // settextAreaUsernameFocused(true);
                                                    dispatch({
                                                        type: "openMiniTextEditor",
                                                    });
                                                    dispatch({
                                                        type: "textBeingChangedColorDispatch",
                                                        payload:
                                                            "aboutSectionBasicInfoTitleColorChange",
                                                    });
                                                    dispatch({
                                                        type: "textBeingChangedFontDispatch",
                                                        payload:
                                                            "aboutSectionBasicInfoTitleFontStyleChange",
                                                    });
                                                    dispatch({
                                                        type: "textBeingChangedColorValue",
                                                        payload:
                                                            aboutSectionBasicInfoRedux
                                                                .title.color,
                                                    });
                                                    dispatch({
                                                        type: "textBeingChangedFontValue",
                                                        payload:
                                                            aboutSectionBasicInfoRedux
                                                                .title
                                                                .fontStyle,
                                                    });
                                                }}
                                                onBlur={(e) => {
                                                    // settextAreaUsernameFocused(false);
                                                    dispatch({
                                                        type: "aboutSectionBasicInfoTitleTextChange",
                                                        payload: e.target.value,
                                                    });
                                                }}
                                            ></TextareaAutosize>
                                        </div>
                                    )}
                                    <div className="aboutSectionContentRightBasicInfo container">
                                        <div className="row">
                                            <div
                                                className="aboutSectionContentRightBasicInfoKeys col-sm-4"
                                                style={{
                                                    color: aboutSectionBasicInfoRedux
                                                        .keys.color,
                                                    fontFamily:
                                                        aboutSectionBasicInfoRedux
                                                            .keys.fontStyle,
                                                }}
                                            >
                                                Age:
                                            </div>
                                            {ViewMode ? (
                                                <div
                                                    className="col-sm-8 aboutSectionContentRightBasicInfoValues"
                                                    style={{
                                                        color: aboutSectionBasicInfoRedux
                                                            .values.color,
                                                        fontFamily:
                                                            aboutSectionBasicInfoRedux
                                                                .values
                                                                .fontStyle,
                                                    }}
                                                >
                                                    {
                                                        aboutSectionBasicInfoRedux
                                                            .values.text.age
                                                    }
                                                </div>
                                            ) : (
                                                <div
                                                    className={`col-sm-8 textAreaEditorDivAboutTitle`}
                                                >
                                                    <TextareaAutosize
                                                        className={`aboutSectionContentRightBasicInfoValues`}
                                                        value={
                                                            aboutSectionBasicInfo
                                                                .values.text.age
                                                        }
                                                        spellCheck="false"
                                                        // cols={textAreaUsername.length}
                                                        placeholder="Enter Age"
                                                        style={{
                                                            color: aboutSectionBasicInfoRedux
                                                                .values.color,
                                                            fontFamily:
                                                                aboutSectionBasicInfoRedux
                                                                    .values
                                                                    .fontStyle,
                                                        }}
                                                        onChange={(e) => {
                                                            setaboutSectionBasicInfo(
                                                                (prev) => ({
                                                                    ...prev,
                                                                    values: {
                                                                        ...prev.values,
                                                                        text: {
                                                                            ...prev
                                                                                .values
                                                                                .text,
                                                                            age: e
                                                                                .target
                                                                                .value,
                                                                        },
                                                                    },
                                                                })
                                                            );
                                                        }}
                                                        onFocus={(e) => {
                                                            // settextAreaUsernameFocused(true);
                                                            dispatch({
                                                                type: "openMiniTextEditor",
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedColorDispatch",
                                                                payload:
                                                                    "aboutSectionBasicInfoValuesColorChange",
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedFontDispatch",
                                                                payload:
                                                                    "aboutSectionBasicInfoValuesFontStyleChange",
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedColorValue",
                                                                payload:
                                                                    aboutSectionBasicInfoRedux
                                                                        .values
                                                                        .color,
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedFontValue",
                                                                payload:
                                                                    aboutSectionBasicInfoRedux
                                                                        .values
                                                                        .fontStyle,
                                                            });
                                                        }}
                                                        onBlur={(e) => {
                                                            // settextAreaUsernameFocused(false);
                                                            dispatch({
                                                                type: "aboutSectionBasicInfoValuesTextAgeChange",
                                                                payload:
                                                                    e.target
                                                                        .value,
                                                            });
                                                        }}
                                                    ></TextareaAutosize>
                                                </div>
                                            )}
                                        </div>
                                        <div className="row">
                                            <div
                                                className="aboutSectionContentRightBasicInfoKeys col-sm-4"
                                                style={{
                                                    color: aboutSectionBasicInfoRedux
                                                        .keys.color,
                                                    fontFamily:
                                                        aboutSectionBasicInfoRedux
                                                            .keys.fontStyle,
                                                }}
                                            >
                                                Email:
                                            </div>

                                            {ViewMode ? (
                                                <div
                                                    className="col-sm-8 aboutSectionContentRightBasicInfoValues"
                                                    style={{
                                                        color: aboutSectionBasicInfoRedux
                                                            .values.color,
                                                        fontFamily:
                                                            aboutSectionBasicInfoRedux
                                                                .values
                                                                .fontStyle,
                                                    }}
                                                >
                                                    {
                                                        aboutSectionBasicInfoRedux
                                                            .values.text.email
                                                    }
                                                </div>
                                            ) : (
                                                <div
                                                    className={`col-sm-8 textAreaEditorDivAboutTitle`}
                                                >
                                                    <TextareaAutosize
                                                        className={`aboutSectionContentRightBasicInfoValues`}
                                                        value={
                                                            aboutSectionBasicInfo
                                                                .values.text
                                                                .email
                                                        }
                                                        spellCheck="false"
                                                        // cols={textAreaUsername.length}
                                                        placeholder="Enter Email"
                                                        style={{
                                                            color: aboutSectionBasicInfoRedux
                                                                .values.color,
                                                            fontFamily:
                                                                aboutSectionBasicInfoRedux
                                                                    .values
                                                                    .fontStyle,
                                                        }}
                                                        onChange={(e) => {
                                                            setaboutSectionBasicInfo(
                                                                (prev) => ({
                                                                    ...prev,
                                                                    values: {
                                                                        ...prev.values,
                                                                        text: {
                                                                            ...prev
                                                                                .values
                                                                                .text,
                                                                            email: e
                                                                                .target
                                                                                .value,
                                                                        },
                                                                    },
                                                                })
                                                            );
                                                        }}
                                                        onFocus={(e) => {
                                                            // settextAreaUsernameFocused(true);
                                                            dispatch({
                                                                type: "openMiniTextEditor",
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedColorDispatch",
                                                                payload:
                                                                    "aboutSectionBasicInfoValuesColorChange",
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedFontDispatch",
                                                                payload:
                                                                    "aboutSectionBasicInfoValuesFontStyleChange",
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedColorValue",
                                                                payload:
                                                                    aboutSectionBasicInfoRedux
                                                                        .values
                                                                        .color,
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedFontValue",
                                                                payload:
                                                                    aboutSectionBasicInfoRedux
                                                                        .values
                                                                        .fontStyle,
                                                            });
                                                        }}
                                                        onBlur={(e) => {
                                                            // settextAreaUsernameFocused(false);
                                                            dispatch({
                                                                type: "aboutSectionBasicInfoValuesTextEmailChange",
                                                                payload:
                                                                    e.target
                                                                        .value,
                                                            });
                                                        }}
                                                    ></TextareaAutosize>
                                                </div>
                                            )}
                                        </div>
                                        <div className="row">
                                            <div
                                                className="aboutSectionContentRightBasicInfoKeys col-sm-4"
                                                style={{
                                                    color: aboutSectionBasicInfoRedux
                                                        .keys.color,
                                                    fontFamily:
                                                        aboutSectionBasicInfoRedux
                                                            .keys.fontStyle,
                                                }}
                                            >
                                                Phone:
                                            </div>
                                            {ViewMode ? (
                                                <div
                                                    className="col-sm-8 aboutSectionContentRightBasicInfoValues"
                                                    style={{
                                                        color: aboutSectionBasicInfoRedux
                                                            .values.color,
                                                        fontFamily:
                                                            aboutSectionBasicInfoRedux
                                                                .values
                                                                .fontStyle,
                                                    }}
                                                >
                                                    {
                                                        aboutSectionBasicInfoRedux
                                                            .values.text.phone
                                                    }
                                                </div>
                                            ) : (
                                                <div
                                                    className={`col-sm-8 textAreaEditorDivAboutTitle`}
                                                >
                                                    <TextareaAutosize
                                                        className={`aboutSectionContentRightBasicInfoValues`}
                                                        value={
                                                            aboutSectionBasicInfo
                                                                .values.text
                                                                .phone
                                                        }
                                                        spellCheck="false"
                                                        // cols={textAreaUsername.length}
                                                        placeholder="Enter PhoneNumber"
                                                        style={{
                                                            color: aboutSectionBasicInfoRedux
                                                                .values.color,
                                                            fontFamily:
                                                                aboutSectionBasicInfoRedux
                                                                    .values
                                                                    .fontStyle,
                                                        }}
                                                        onChange={(e) => {
                                                            setaboutSectionBasicInfo(
                                                                (prev) => ({
                                                                    ...prev,
                                                                    values: {
                                                                        ...prev.values,
                                                                        text: {
                                                                            ...prev
                                                                                .values
                                                                                .text,
                                                                            phone: e
                                                                                .target
                                                                                .value,
                                                                        },
                                                                    },
                                                                })
                                                            );
                                                        }}
                                                        onFocus={(e) => {
                                                            // settextAreaUsernameFocused(true);
                                                            dispatch({
                                                                type: "openMiniTextEditor",
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedColorDispatch",
                                                                payload:
                                                                    "aboutSectionBasicInfoValuesColorChange",
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedFontDispatch",
                                                                payload:
                                                                    "aboutSectionBasicInfoValuesFontStyleChange",
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedColorValue",
                                                                payload:
                                                                    aboutSectionBasicInfoRedux
                                                                        .values
                                                                        .color,
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedFontValue",
                                                                payload:
                                                                    aboutSectionBasicInfoRedux
                                                                        .values
                                                                        .fontStyle,
                                                            });
                                                        }}
                                                        onBlur={(e) => {
                                                            // settextAreaUsernameFocused(false);
                                                            dispatch({
                                                                type: "aboutSectionBasicInfoValuesTextPhoneChange",
                                                                payload:
                                                                    e.target
                                                                        .value,
                                                            });
                                                        }}
                                                    ></TextareaAutosize>
                                                </div>
                                            )}
                                        </div>
                                        <div className="row">
                                            <div
                                                className="aboutSectionContentRightBasicInfoKeys col-sm-4"
                                                style={{
                                                    color: aboutSectionBasicInfoRedux
                                                        .keys.color,
                                                    fontFamily:
                                                        aboutSectionBasicInfoRedux
                                                            .keys.fontStyle,
                                                }}
                                            >
                                                Address:
                                            </div>

                                            {ViewMode ? (
                                                <div
                                                    className="col-sm-8 aboutSectionContentRightBasicInfoValues"
                                                    style={{
                                                        color: aboutSectionBasicInfoRedux
                                                            .values.color,
                                                        fontFamily:
                                                            aboutSectionBasicInfoRedux
                                                                .values
                                                                .fontStyle,
                                                    }}
                                                >
                                                    {
                                                        aboutSectionBasicInfoRedux
                                                            .values.text.address
                                                    }
                                                </div>
                                            ) : (
                                                <div
                                                    className={`col-sm-8 textAreaEditorDivAboutTitle`}
                                                >
                                                    <TextareaAutosize
                                                        className={`aboutSectionContentRightBasicInfoValues`}
                                                        value={
                                                            aboutSectionBasicInfo
                                                                .values.text
                                                                .address
                                                        }
                                                        spellCheck="false"
                                                        // cols={textAreaUsername.length}
                                                        placeholder="Enter Address"
                                                        style={{
                                                            color: aboutSectionBasicInfoRedux
                                                                .values.color,
                                                            fontFamily:
                                                                aboutSectionBasicInfoRedux
                                                                    .values
                                                                    .fontStyle,
                                                        }}
                                                        onChange={(e) => {
                                                            setaboutSectionBasicInfo(
                                                                (prev) => ({
                                                                    ...prev,
                                                                    values: {
                                                                        ...prev.values,
                                                                        text: {
                                                                            ...prev
                                                                                .values
                                                                                .text,
                                                                            address:
                                                                                e
                                                                                    .target
                                                                                    .value,
                                                                        },
                                                                    },
                                                                })
                                                            );
                                                        }}
                                                        onFocus={(e) => {
                                                            // settextAreaUsernameFocused(true);
                                                            dispatch({
                                                                type: "openMiniTextEditor",
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedColorDispatch",
                                                                payload:
                                                                    "aboutSectionBasicInfoValuesColorChange",
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedFontDispatch",
                                                                payload:
                                                                    "aboutSectionBasicInfoValuesFontStyleChange",
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedColorValue",
                                                                payload:
                                                                    aboutSectionBasicInfoRedux
                                                                        .values
                                                                        .color,
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedFontValue",
                                                                payload:
                                                                    aboutSectionBasicInfoRedux
                                                                        .values
                                                                        .fontStyle,
                                                            });
                                                        }}
                                                        onBlur={(e) => {
                                                            // settextAreaUsernameFocused(false);
                                                            dispatch({
                                                                type: "aboutSectionBasicInfoValuesTextAddressChange",
                                                                payload:
                                                                    e.target
                                                                        .value,
                                                            });
                                                        }}
                                                    ></TextareaAutosize>
                                                </div>
                                            )}
                                        </div>
                                        <div className="row">
                                            <div
                                                className="aboutSectionContentRightBasicInfoKeys col-sm-4"
                                                style={{
                                                    color: aboutSectionBasicInfoRedux
                                                        .keys.color,
                                                    fontFamily:
                                                        aboutSectionBasicInfoRedux
                                                            .keys.fontStyle,
                                                }}
                                            >
                                                Languages:
                                            </div>

                                            {ViewMode ? (
                                                <div
                                                    className="col-sm-8 aboutSectionContentRightBasicInfoValues"
                                                    style={{
                                                        color: aboutSectionBasicInfoRedux
                                                            .values.color,
                                                        fontFamily:
                                                            aboutSectionBasicInfoRedux
                                                                .values
                                                                .fontStyle,
                                                    }}
                                                >
                                                    {
                                                        aboutSectionBasicInfoRedux
                                                            .values.text
                                                            .languages
                                                    }
                                                </div>
                                            ) : (
                                                <div
                                                    className={`col-sm-8 textAreaEditorDivAboutTitle`}
                                                >
                                                    <TextareaAutosize
                                                        className={`aboutSectionContentRightBasicInfoValues`}
                                                        value={
                                                            aboutSectionBasicInfo
                                                                .values.text
                                                                .languages
                                                        }
                                                        spellCheck="false"
                                                        // cols={textAreaUsername.length}
                                                        placeholder="Enter Languages!"
                                                        style={{
                                                            color: aboutSectionBasicInfoRedux
                                                                .values.color,
                                                            fontFamily:
                                                                aboutSectionBasicInfoRedux
                                                                    .values
                                                                    .fontStyle,
                                                        }}
                                                        onChange={(e) => {
                                                            setaboutSectionBasicInfo(
                                                                (prev) => ({
                                                                    ...prev,
                                                                    values: {
                                                                        ...prev.values,
                                                                        text: {
                                                                            ...prev
                                                                                .values
                                                                                .text,
                                                                            languages:
                                                                                e
                                                                                    .target
                                                                                    .value,
                                                                        },
                                                                    },
                                                                })
                                                            );
                                                        }}
                                                        onFocus={(e) => {
                                                            // settextAreaUsernameFocused(true);
                                                            dispatch({
                                                                type: "openMiniTextEditor",
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedColorDispatch",
                                                                payload:
                                                                    "aboutSectionBasicInfoValuesColorChange",
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedFontDispatch",
                                                                payload:
                                                                    "aboutSectionBasicInfoValuesFontStyleChange",
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedColorValue",
                                                                payload:
                                                                    aboutSectionBasicInfoRedux
                                                                        .values
                                                                        .color,
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedFontValue",
                                                                payload:
                                                                    aboutSectionBasicInfoRedux
                                                                        .values
                                                                        .fontStyle,
                                                            });
                                                        }}
                                                        onBlur={(e) => {
                                                            // settextAreaUsernameFocused(false);
                                                            dispatch({
                                                                type: "aboutSectionBasicInfoValuesTextLanguagesChange",
                                                                payload:
                                                                    e.target
                                                                        .value,
                                                            });
                                                        }}
                                                    ></TextareaAutosize>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="aboutLayoutDesignType1FlexRight">
                                    <p
                                        className="aboutSectionContentTitle"
                                        style={{
                                            color: aboutSocialMediaTitleRedux.color,
                                            fontFamily:
                                                aboutSocialMediaTitleRedux.fontStyle,
                                        }}
                                    >
                                        {aboutSocialMediaTitleRedux.text}
                                    </p>
                                    <div className="aboutSectionSocialMediaLinks">
                                        <NavLink
                                            to={
                                                aboutSocialMediaLinksRedux.gmail
                                            }
                                            className="btn google"
                                        >
                                            <i
                                                class="fab fa-google-plus-g"
                                                style={{
                                                    height: "fit-content",
                                                }}
                                            ></i>
                                        </NavLink>
                                        <NavLink
                                            to={
                                                aboutSocialMediaLinksRedux.instagram
                                            }
                                            className="btn instagram"
                                        >
                                            <i
                                                class="fab fa-instagram"
                                                style={{
                                                    height: "fit-content",
                                                }}
                                            ></i>
                                        </NavLink>
                                        <NavLink
                                            to={
                                                aboutSocialMediaLinksRedux.linkedIn
                                            }
                                            className="btn linkedIn"
                                        >
                                            <i
                                                class="fab fa-linkedin"
                                                style={{
                                                    height: "fit-content",
                                                }}
                                            ></i>
                                        </NavLink>
                                        <NavLink
                                            to={
                                                aboutSocialMediaLinksRedux.github
                                            }
                                            className="btn gitHub"
                                        >
                                            <i
                                                class="fab fa-github"
                                                style={{
                                                    height: "fit-content",
                                                }}
                                            ></i>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : layoutDesginTypeRedux === 2 ? (
                        <div className="layoutDesignType2">
                            {ViewMode ? (
                                <p
                                    className={`aboutSectionTitle ${
                                        aboutTitleAlignment === `middle`
                                            ? `aboutTitleMiddle`
                                            : ``
                                    }`}
                                    style={{
                                        color: aboutTitleRedux.color,
                                        fontFamily: aboutTitleRedux.fontStyle,
                                    }}
                                >
                                    {aboutTitleRedux.text}
                                </p>
                            ) : (
                                <div
                                    className={`textAreaEditorDivAboutTitle`}
                                    style={{
                                        justifyContent:
                                            aboutTitleAlignment === `middle`
                                                ? "center"
                                                : "start",
                                    }}
                                >
                                    <TextareaAutosize
                                        className={`aboutSectionTitle ${
                                            aboutTitleAlignment === `middle`
                                                ? `aboutTitleMiddle`
                                                : ``
                                        }`}
                                        value={aboutSectionTitle}
                                        spellCheck="false"
                                        // cols={textAreaUsername.length}
                                        placeholder="About Section Title"
                                        style={{
                                            color: `${aboutTitleRedux.color}`,
                                            fontFamily: `${aboutTitleRedux.fontStyle}`,
                                        }}
                                        onChange={(e) => {
                                            setaboutSectionTitle(
                                                e.target.value
                                            );
                                        }}
                                        onFocus={(e) => {
                                            // settextAreaUsernameFocused(true);
                                            dispatch({
                                                type: "openMiniTextEditor",
                                            });
                                            dispatch({
                                                type: "textBeingChangedColorDispatch",
                                                payload:
                                                    "aboutSectionTitleColorChange",
                                            });
                                            dispatch({
                                                type: "textBeingChangedFontDispatch",
                                                payload:
                                                    "aboutSectionTitleFontStyleChange",
                                            });
                                            dispatch({
                                                type: "textBeingChangedColorValue",
                                                payload: aboutTitleRedux.color,
                                            });
                                            dispatch({
                                                type: "textBeingChangedFontValue",
                                                payload:
                                                    aboutTitleRedux.fontStyle,
                                            });
                                        }}
                                        onBlur={(e) => {
                                            // settextAreaUsernameFocused(false);
                                            dispatch({
                                                type: "aboutSectionTitleTextChange",
                                                payload: e.target.value,
                                            });
                                        }}
                                    ></TextareaAutosize>
                                </div>
                            )}
                            <div className="aboutLayoutDesignFlex">
                                <div className="aboutLayoutDesignFlexLeft">
                                    {ViewMode ? (
                                        <p
                                            className="aboutSectionContentSubTitle"
                                            style={{
                                                color: introRedux.color,
                                                fontFamily:
                                                    introRedux.fontStyle,
                                            }}
                                        >
                                            {introRedux.text}
                                        </p>
                                    ) : (
                                        <div
                                            className={`textAreaEditorDivAboutTitle`}
                                        >
                                            <TextareaAutosize
                                                className={`aboutSectionContentSubTitle`}
                                                value={aboutSectionIntro}
                                                spellCheck="false"
                                                // cols={textAreaUsername.length}
                                                placeholder="About Section Title"
                                                style={{
                                                    color: `${introRedux.color}`,
                                                    fontFamily: `${introRedux.fontStyle}`,
                                                }}
                                                onChange={(e) => {
                                                    setaboutSectionIntro(
                                                        e.target.value
                                                    );
                                                }}
                                                onFocus={(e) => {
                                                    // settextAreaUsernameFocused(true);
                                                    dispatch({
                                                        type: "openMiniTextEditor",
                                                    });
                                                    dispatch({
                                                        type: "textBeingChangedColorDispatch",
                                                        payload:
                                                            "aboutSectionIntroColorChange",
                                                    });
                                                    dispatch({
                                                        type: "textBeingChangedFontDispatch",
                                                        payload:
                                                            "aboutSectionIntroFontStyleChange",
                                                    });
                                                    dispatch({
                                                        type: "textBeingChangedColorValue",
                                                        payload:
                                                            introRedux.color,
                                                    });
                                                    dispatch({
                                                        type: "textBeingChangedFontValue",
                                                        payload:
                                                            introRedux.fontStyle,
                                                    });
                                                }}
                                                onBlur={(e) => {
                                                    // settextAreaUsernameFocused(false);
                                                    dispatch({
                                                        type: "aboutSectionIntroTextChange",
                                                        payload: e.target.value,
                                                    });
                                                }}
                                            ></TextareaAutosize>
                                        </div>
                                    )}
                                    {ViewMode ? (
                                        <p
                                            className="aboutSectionContentTitle"
                                            style={{
                                                color: aboutSectionBasicInfoRedux
                                                    .title.color,
                                                fontFamily:
                                                    aboutSectionBasicInfoRedux
                                                        .title.fontStyle,
                                            }}
                                        >
                                            {aboutSectionBasicInfo.title.text}
                                        </p>
                                    ) : (
                                        <div
                                            className={`textAreaEditorDivAboutTitle`}
                                        >
                                            <TextareaAutosize
                                                className={`aboutSectionImageTitle`}
                                                value={
                                                    aboutSectionBasicInfo.title
                                                        .text
                                                }
                                                spellCheck="false"
                                                // cols={textAreaUsername.length}
                                                placeholder="Basic Information Title"
                                                style={{
                                                    color: aboutSectionBasicInfoRedux
                                                        .title.color,
                                                    fontFamily:
                                                        aboutSectionBasicInfoRedux
                                                            .title.fontStyle,
                                                }}
                                                onChange={(e) => {
                                                    setaboutSectionBasicInfo(
                                                        (prev) => ({
                                                            ...prev,
                                                            title: {
                                                                ...prev.title,
                                                                text: e.target
                                                                    .value,
                                                            },
                                                        })
                                                    );
                                                }}
                                                onFocus={(e) => {
                                                    // settextAreaUsernameFocused(true);
                                                    dispatch({
                                                        type: "openMiniTextEditor",
                                                    });
                                                    dispatch({
                                                        type: "textBeingChangedColorDispatch",
                                                        payload:
                                                            "aboutSectionBasicInfoTitleColorChange",
                                                    });
                                                    dispatch({
                                                        type: "textBeingChangedFontDispatch",
                                                        payload:
                                                            "aboutSectionBasicInfoTitleFontStyleChange",
                                                    });
                                                    dispatch({
                                                        type: "textBeingChangedColorValue",
                                                        payload:
                                                            aboutSectionBasicInfoRedux
                                                                .title.color,
                                                    });
                                                    dispatch({
                                                        type: "textBeingChangedFontValue",
                                                        payload:
                                                            aboutSectionBasicInfoRedux
                                                                .title
                                                                .fontStyle,
                                                    });
                                                }}
                                                onBlur={(e) => {
                                                    // settextAreaUsernameFocused(false);
                                                    dispatch({
                                                        type: "aboutSectionBasicInfoTitleTextChange",
                                                        payload: e.target.value,
                                                    });
                                                }}
                                            ></TextareaAutosize>
                                        </div>
                                    )}
                                    <div className="aboutSectionContentRightBasicInfo container">
                                        <div className="row">
                                            <div
                                                className="aboutSectionContentRightBasicInfoKeys col-sm-4"
                                                style={{
                                                    color: aboutSectionBasicInfoRedux
                                                        .keys.color,
                                                    fontFamily:
                                                        aboutSectionBasicInfoRedux
                                                            .keys.fontStyle,
                                                }}
                                            >
                                                Age:
                                            </div>
                                            {ViewMode ? (
                                                <div
                                                    className="col-sm-8 aboutSectionContentRightBasicInfoValues"
                                                    style={{
                                                        color: aboutSectionBasicInfoRedux
                                                            .values.color,
                                                        fontFamily:
                                                            aboutSectionBasicInfoRedux
                                                                .values
                                                                .fontStyle,
                                                    }}
                                                >
                                                    {
                                                        aboutSectionBasicInfoRedux
                                                            .values.text.age
                                                    }
                                                </div>
                                            ) : (
                                                <div
                                                    className={`col-sm-8 textAreaEditorDivAboutTitle`}
                                                >
                                                    <TextareaAutosize
                                                        className={`aboutSectionContentRightBasicInfoValues`}
                                                        value={
                                                            aboutSectionBasicInfo
                                                                .values.text.age
                                                        }
                                                        spellCheck="false"
                                                        // cols={textAreaUsername.length}
                                                        placeholder="Enter Age"
                                                        style={{
                                                            color: aboutSectionBasicInfoRedux
                                                                .values.color,
                                                            fontFamily:
                                                                aboutSectionBasicInfoRedux
                                                                    .values
                                                                    .fontStyle,
                                                        }}
                                                        onChange={(e) => {
                                                            setaboutSectionBasicInfo(
                                                                (prev) => ({
                                                                    ...prev,
                                                                    values: {
                                                                        ...prev.values,
                                                                        text: {
                                                                            ...prev
                                                                                .values
                                                                                .text,
                                                                            age: e
                                                                                .target
                                                                                .value,
                                                                        },
                                                                    },
                                                                })
                                                            );
                                                        }}
                                                        onFocus={(e) => {
                                                            // settextAreaUsernameFocused(true);
                                                            dispatch({
                                                                type: "openMiniTextEditor",
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedColorDispatch",
                                                                payload:
                                                                    "aboutSectionBasicInfoValuesColorChange",
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedFontDispatch",
                                                                payload:
                                                                    "aboutSectionBasicInfoValuesFontStyleChange",
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedColorValue",
                                                                payload:
                                                                    aboutSectionBasicInfoRedux
                                                                        .values
                                                                        .color,
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedFontValue",
                                                                payload:
                                                                    aboutSectionBasicInfoRedux
                                                                        .values
                                                                        .fontStyle,
                                                            });
                                                        }}
                                                        onBlur={(e) => {
                                                            // settextAreaUsernameFocused(false);
                                                            dispatch({
                                                                type: "aboutSectionBasicInfoValuesTextAgeChange",
                                                                payload:
                                                                    e.target
                                                                        .value,
                                                            });
                                                        }}
                                                    ></TextareaAutosize>
                                                </div>
                                            )}
                                        </div>
                                        <div className="row">
                                            <div
                                                className="aboutSectionContentRightBasicInfoKeys col-sm-4"
                                                style={{
                                                    color: aboutSectionBasicInfoRedux
                                                        .keys.color,
                                                    fontFamily:
                                                        aboutSectionBasicInfoRedux
                                                            .keys.fontStyle,
                                                }}
                                            >
                                                Email:
                                            </div>

                                            {ViewMode ? (
                                                <div
                                                    className="col-sm-8 aboutSectionContentRightBasicInfoValues"
                                                    style={{
                                                        color: aboutSectionBasicInfoRedux
                                                            .values.color,
                                                        fontFamily:
                                                            aboutSectionBasicInfoRedux
                                                                .values
                                                                .fontStyle,
                                                    }}
                                                >
                                                    {
                                                        aboutSectionBasicInfoRedux
                                                            .values.text.email
                                                    }
                                                </div>
                                            ) : (
                                                <div
                                                    className={`col-sm-8 textAreaEditorDivAboutTitle`}
                                                >
                                                    <TextareaAutosize
                                                        className={`aboutSectionContentRightBasicInfoValues`}
                                                        value={
                                                            aboutSectionBasicInfo
                                                                .values.text
                                                                .email
                                                        }
                                                        spellCheck="false"
                                                        // cols={textAreaUsername.length}
                                                        placeholder="Enter Email"
                                                        style={{
                                                            color: aboutSectionBasicInfoRedux
                                                                .values.color,
                                                            fontFamily:
                                                                aboutSectionBasicInfoRedux
                                                                    .values
                                                                    .fontStyle,
                                                        }}
                                                        onChange={(e) => {
                                                            setaboutSectionBasicInfo(
                                                                (prev) => ({
                                                                    ...prev,
                                                                    values: {
                                                                        ...prev.values,
                                                                        text: {
                                                                            ...prev
                                                                                .values
                                                                                .text,
                                                                            email: e
                                                                                .target
                                                                                .value,
                                                                        },
                                                                    },
                                                                })
                                                            );
                                                        }}
                                                        onFocus={(e) => {
                                                            // settextAreaUsernameFocused(true);
                                                            dispatch({
                                                                type: "openMiniTextEditor",
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedColorDispatch",
                                                                payload:
                                                                    "aboutSectionBasicInfoValuesColorChange",
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedFontDispatch",
                                                                payload:
                                                                    "aboutSectionBasicInfoValuesFontStyleChange",
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedColorValue",
                                                                payload:
                                                                    aboutSectionBasicInfoRedux
                                                                        .values
                                                                        .color,
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedFontValue",
                                                                payload:
                                                                    aboutSectionBasicInfoRedux
                                                                        .values
                                                                        .fontStyle,
                                                            });
                                                        }}
                                                        onBlur={(e) => {
                                                            // settextAreaUsernameFocused(false);
                                                            dispatch({
                                                                type: "aboutSectionBasicInfoValuesTextEmailChange",
                                                                payload:
                                                                    e.target
                                                                        .value,
                                                            });
                                                        }}
                                                    ></TextareaAutosize>
                                                </div>
                                            )}
                                        </div>
                                        <div className="row">
                                            <div
                                                className="aboutSectionContentRightBasicInfoKeys col-sm-4"
                                                style={{
                                                    color: aboutSectionBasicInfoRedux
                                                        .keys.color,
                                                    fontFamily:
                                                        aboutSectionBasicInfoRedux
                                                            .keys.fontStyle,
                                                }}
                                            >
                                                Phone:
                                            </div>
                                            {ViewMode ? (
                                                <div
                                                    className="col-sm-8 aboutSectionContentRightBasicInfoValues"
                                                    style={{
                                                        color: aboutSectionBasicInfoRedux
                                                            .values.color,
                                                        fontFamily:
                                                            aboutSectionBasicInfoRedux
                                                                .values
                                                                .fontStyle,
                                                    }}
                                                >
                                                    {
                                                        aboutSectionBasicInfoRedux
                                                            .values.text.phone
                                                    }
                                                </div>
                                            ) : (
                                                <div
                                                    className={`col-sm-8 textAreaEditorDivAboutTitle`}
                                                >
                                                    <TextareaAutosize
                                                        className={`aboutSectionContentRightBasicInfoValues`}
                                                        value={
                                                            aboutSectionBasicInfo
                                                                .values.text
                                                                .phone
                                                        }
                                                        spellCheck="false"
                                                        // cols={textAreaUsername.length}
                                                        placeholder="Enter PhoneNumber"
                                                        style={{
                                                            color: aboutSectionBasicInfoRedux
                                                                .values.color,
                                                            fontFamily:
                                                                aboutSectionBasicInfoRedux
                                                                    .values
                                                                    .fontStyle,
                                                        }}
                                                        onChange={(e) => {
                                                            setaboutSectionBasicInfo(
                                                                (prev) => ({
                                                                    ...prev,
                                                                    values: {
                                                                        ...prev.values,
                                                                        text: {
                                                                            ...prev
                                                                                .values
                                                                                .text,
                                                                            phone: e
                                                                                .target
                                                                                .value,
                                                                        },
                                                                    },
                                                                })
                                                            );
                                                        }}
                                                        onFocus={(e) => {
                                                            // settextAreaUsernameFocused(true);
                                                            dispatch({
                                                                type: "openMiniTextEditor",
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedColorDispatch",
                                                                payload:
                                                                    "aboutSectionBasicInfoValuesColorChange",
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedFontDispatch",
                                                                payload:
                                                                    "aboutSectionBasicInfoValuesFontStyleChange",
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedColorValue",
                                                                payload:
                                                                    aboutSectionBasicInfoRedux
                                                                        .values
                                                                        .color,
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedFontValue",
                                                                payload:
                                                                    aboutSectionBasicInfoRedux
                                                                        .values
                                                                        .fontStyle,
                                                            });
                                                        }}
                                                        onBlur={(e) => {
                                                            // settextAreaUsernameFocused(false);
                                                            dispatch({
                                                                type: "aboutSectionBasicInfoValuesTextPhoneChange",
                                                                payload:
                                                                    e.target
                                                                        .value,
                                                            });
                                                        }}
                                                    ></TextareaAutosize>
                                                </div>
                                            )}
                                        </div>
                                        <div className="row">
                                            <div
                                                className="aboutSectionContentRightBasicInfoKeys col-sm-4"
                                                style={{
                                                    color: aboutSectionBasicInfoRedux
                                                        .keys.color,
                                                    fontFamily:
                                                        aboutSectionBasicInfoRedux
                                                            .keys.fontStyle,
                                                }}
                                            >
                                                Address:
                                            </div>

                                            {ViewMode ? (
                                                <div
                                                    className="col-sm-8 aboutSectionContentRightBasicInfoValues"
                                                    style={{
                                                        color: aboutSectionBasicInfoRedux
                                                            .values.color,
                                                        fontFamily:
                                                            aboutSectionBasicInfoRedux
                                                                .values
                                                                .fontStyle,
                                                    }}
                                                >
                                                    {
                                                        aboutSectionBasicInfoRedux
                                                            .values.text.address
                                                    }
                                                </div>
                                            ) : (
                                                <div
                                                    className={`col-sm-8 textAreaEditorDivAboutTitle`}
                                                >
                                                    <TextareaAutosize
                                                        className={`aboutSectionContentRightBasicInfoValues`}
                                                        value={
                                                            aboutSectionBasicInfo
                                                                .values.text
                                                                .address
                                                        }
                                                        spellCheck="false"
                                                        // cols={textAreaUsername.length}
                                                        placeholder="Enter Address"
                                                        style={{
                                                            color: aboutSectionBasicInfoRedux
                                                                .values.color,
                                                            fontFamily:
                                                                aboutSectionBasicInfoRedux
                                                                    .values
                                                                    .fontStyle,
                                                        }}
                                                        onChange={(e) => {
                                                            setaboutSectionBasicInfo(
                                                                (prev) => ({
                                                                    ...prev,
                                                                    values: {
                                                                        ...prev.values,
                                                                        text: {
                                                                            ...prev
                                                                                .values
                                                                                .text,
                                                                            address:
                                                                                e
                                                                                    .target
                                                                                    .value,
                                                                        },
                                                                    },
                                                                })
                                                            );
                                                        }}
                                                        onFocus={(e) => {
                                                            // settextAreaUsernameFocused(true);
                                                            dispatch({
                                                                type: "openMiniTextEditor",
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedColorDispatch",
                                                                payload:
                                                                    "aboutSectionBasicInfoValuesColorChange",
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedFontDispatch",
                                                                payload:
                                                                    "aboutSectionBasicInfoValuesFontStyleChange",
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedColorValue",
                                                                payload:
                                                                    aboutSectionBasicInfoRedux
                                                                        .values
                                                                        .color,
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedFontValue",
                                                                payload:
                                                                    aboutSectionBasicInfoRedux
                                                                        .values
                                                                        .fontStyle,
                                                            });
                                                        }}
                                                        onBlur={(e) => {
                                                            // settextAreaUsernameFocused(false);
                                                            dispatch({
                                                                type: "aboutSectionBasicInfoValuesTextAddressChange",
                                                                payload:
                                                                    e.target
                                                                        .value,
                                                            });
                                                        }}
                                                    ></TextareaAutosize>
                                                </div>
                                            )}
                                        </div>
                                        <div className="row">
                                            <div
                                                className="aboutSectionContentRightBasicInfoKeys col-sm-4"
                                                style={{
                                                    color: aboutSectionBasicInfoRedux
                                                        .keys.color,
                                                    fontFamily:
                                                        aboutSectionBasicInfoRedux
                                                            .keys.fontStyle,
                                                }}
                                            >
                                                Languages:
                                            </div>

                                            {ViewMode ? (
                                                <div
                                                    className="col-sm-8 aboutSectionContentRightBasicInfoValues"
                                                    style={{
                                                        color: aboutSectionBasicInfoRedux
                                                            .values.color,
                                                        fontFamily:
                                                            aboutSectionBasicInfoRedux
                                                                .values
                                                                .fontStyle,
                                                    }}
                                                >
                                                    {
                                                        aboutSectionBasicInfoRedux
                                                            .values.text
                                                            .languages
                                                    }
                                                </div>
                                            ) : (
                                                <div
                                                    className={`col-sm-8 textAreaEditorDivAboutTitle`}
                                                >
                                                    <TextareaAutosize
                                                        className={`aboutSectionContentRightBasicInfoValues`}
                                                        value={
                                                            aboutSectionBasicInfo
                                                                .values.text
                                                                .languages
                                                        }
                                                        spellCheck="false"
                                                        // cols={textAreaUsername.length}
                                                        placeholder="Enter Languages!"
                                                        style={{
                                                            color: aboutSectionBasicInfoRedux
                                                                .values.color,
                                                            fontFamily:
                                                                aboutSectionBasicInfoRedux
                                                                    .values
                                                                    .fontStyle,
                                                        }}
                                                        onChange={(e) => {
                                                            setaboutSectionBasicInfo(
                                                                (prev) => ({
                                                                    ...prev,
                                                                    values: {
                                                                        ...prev.values,
                                                                        text: {
                                                                            ...prev
                                                                                .values
                                                                                .text,
                                                                            languages:
                                                                                e
                                                                                    .target
                                                                                    .value,
                                                                        },
                                                                    },
                                                                })
                                                            );
                                                        }}
                                                        onFocus={(e) => {
                                                            // settextAreaUsernameFocused(true);
                                                            dispatch({
                                                                type: "openMiniTextEditor",
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedColorDispatch",
                                                                payload:
                                                                    "aboutSectionBasicInfoValuesColorChange",
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedFontDispatch",
                                                                payload:
                                                                    "aboutSectionBasicInfoValuesFontStyleChange",
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedColorValue",
                                                                payload:
                                                                    aboutSectionBasicInfoRedux
                                                                        .values
                                                                        .color,
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedFontValue",
                                                                payload:
                                                                    aboutSectionBasicInfoRedux
                                                                        .values
                                                                        .fontStyle,
                                                            });
                                                        }}
                                                        onBlur={(e) => {
                                                            // settextAreaUsernameFocused(false);
                                                            dispatch({
                                                                type: "aboutSectionBasicInfoValuesTextLanguagesChange",
                                                                payload:
                                                                    e.target
                                                                        .value,
                                                            });
                                                        }}
                                                    ></TextareaAutosize>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <p
                                        className="aboutSectionContentTitle"
                                        style={{
                                            color: aboutSocialMediaTitleRedux.color,
                                            fontFamily:
                                                aboutSocialMediaTitleRedux.fontStyle,
                                        }}
                                    >
                                        {aboutSocialMediaTitleRedux.text}
                                    </p>
                                    <div className="aboutSectionSocialMediaLinks">
                                        <NavLink
                                            to={
                                                aboutSocialMediaLinksRedux.gmail
                                            }
                                            className="btn google"
                                        >
                                            <i
                                                class="fab fa-google-plus-g"
                                                style={{
                                                    height: "fit-content",
                                                }}
                                            ></i>
                                        </NavLink>
                                        <NavLink
                                            to={
                                                aboutSocialMediaLinksRedux.instagram
                                            }
                                            className="btn instagram"
                                        >
                                            <i
                                                class="fab fa-instagram"
                                                style={{
                                                    height: "fit-content",
                                                }}
                                            ></i>
                                        </NavLink>
                                        <NavLink
                                            to={
                                                aboutSocialMediaLinksRedux.linkedIn
                                            }
                                            className="btn linkedIn"
                                        >
                                            <i
                                                class="fab fa-linkedin"
                                                style={{
                                                    height: "fit-content",
                                                }}
                                            ></i>
                                        </NavLink>
                                        <NavLink to="#" className="btn gitHub">
                                            <i
                                                class="fab fa-github"
                                                style={{
                                                    height: "fit-content",
                                                }}
                                            ></i>
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="aboutLayoutDesignFlexMiddle"></div>
                                <div className="aboutLayoutDesignFlexRight">
                                    {ViewMode ? (
                                        <p
                                            className="aboutSectionContentTitle"
                                            style={{
                                                color: aboutImageTitleRedux.color,
                                                fontFamily:
                                                    aboutImageTitleRedux.fontStyle,
                                            }}
                                        >
                                            {aboutImageTitleRedux.text}
                                        </p>
                                    ) : (
                                        <div
                                            className={`textAreaEditorDivAboutTitle`}
                                        >
                                            <TextareaAutosize
                                                className={`aboutSectionImageTitle`}
                                                value={aboutSectionImageTitle}
                                                spellCheck="false"
                                                // cols={textAreaUsername.length}
                                                placeholder="About Section Title"
                                                style={{
                                                    color: `${aboutImageTitleRedux.color}`,
                                                    fontFamily: `${aboutImageTitleRedux.fontStyle}`,
                                                }}
                                                onChange={(e) => {
                                                    setaboutSectionImageTitle(
                                                        e.target.value
                                                    );
                                                }}
                                                onFocus={(e) => {
                                                    // settextAreaUsernameFocused(true);
                                                    dispatch({
                                                        type: "openMiniTextEditor",
                                                    });
                                                    dispatch({
                                                        type: "textBeingChangedColorDispatch",
                                                        payload:
                                                            "aboutSectionImageTitleColorChange",
                                                    });
                                                    dispatch({
                                                        type: "textBeingChangedFontDispatch",
                                                        payload:
                                                            "aboutSectionImageTitleFontStyleChange",
                                                    });
                                                    dispatch({
                                                        type: "textBeingChangedColorValue",
                                                        payload:
                                                            aboutImageTitleRedux.color,
                                                    });
                                                    dispatch({
                                                        type: "textBeingChangedFontValue",
                                                        payload:
                                                            aboutImageTitleRedux.fontStyle,
                                                    });
                                                }}
                                                onBlur={(e) => {
                                                    // settextAreaUsernameFocused(false);
                                                    dispatch({
                                                        type: "aboutSectionImageTitleTextChange",
                                                        payload: e.target.value,
                                                    });
                                                }}
                                            ></TextareaAutosize>
                                        </div>
                                    )}
                                    <img
                                        style={{
                                            border: `${aboutSectioImageBorderRedux} 4px solid`,
                                        }}
                                        src={
                                            aboutSectioImageRedux
                                                ? aboutSectioImageRedux
                                                : "https://picsum.photos/500/500"
                                        }
                                        alt="about"
                                    ></img>
                                </div>
                            </div>
                        </div>
                    ) : layoutDesginTypeRedux === 3 ? (
                        <div className="layoutDesignType3">
                            {ViewMode ? (
                                <p
                                    className={`aboutSectionTitle ${
                                        aboutTitleAlignment === `middle`
                                            ? `aboutTitleMiddle`
                                            : ``
                                    }`}
                                    style={{
                                        color: aboutTitleRedux.color,
                                        fontFamily: aboutTitleRedux.fontStyle,
                                    }}
                                >
                                    {aboutTitleRedux.text}
                                </p>
                            ) : (
                                <div
                                    className={`textAreaEditorDivAboutTitle`}
                                    style={{
                                        justifyContent:
                                            aboutTitleAlignment === `middle`
                                                ? "center"
                                                : "start",
                                    }}
                                >
                                    <TextareaAutosize
                                        className={`aboutSectionTitle ${
                                            aboutTitleAlignment === `middle`
                                                ? `aboutTitleMiddle`
                                                : ``
                                        }`}
                                        value={aboutSectionTitle}
                                        spellCheck="false"
                                        // cols={textAreaUsername.length}
                                        placeholder="About Section Title"
                                        style={{
                                            color: `${aboutTitleRedux.color}`,
                                            fontFamily: `${aboutTitleRedux.fontStyle}`,
                                        }}
                                        onChange={(e) => {
                                            setaboutSectionTitle(
                                                e.target.value
                                            );
                                        }}
                                        onFocus={(e) => {
                                            // settextAreaUsernameFocused(true);
                                            dispatch({
                                                type: "openMiniTextEditor",
                                            });
                                            dispatch({
                                                type: "textBeingChangedColorDispatch",
                                                payload:
                                                    "aboutSectionTitleColorChange",
                                            });
                                            dispatch({
                                                type: "textBeingChangedFontDispatch",
                                                payload:
                                                    "aboutSectionTitleFontStyleChange",
                                            });
                                            dispatch({
                                                type: "textBeingChangedColorValue",
                                                payload: aboutTitleRedux.color,
                                            });
                                            dispatch({
                                                type: "textBeingChangedFontValue",
                                                payload:
                                                    aboutTitleRedux.fontStyle,
                                            });
                                        }}
                                        onBlur={(e) => {
                                            // settextAreaUsernameFocused(false);
                                            dispatch({
                                                type: "aboutSectionTitleTextChange",
                                                payload: e.target.value,
                                            });
                                        }}
                                    ></TextareaAutosize>
                                </div>
                            )}
                            {ViewMode ? (
                                <p
                                    className="aboutSectionContentSubTitle"
                                    style={{
                                        color: introRedux.color,
                                        fontFamily: introRedux.fontStyle,
                                    }}
                                >
                                    {introRedux.text}
                                </p>
                            ) : (
                                <div className={`textAreaEditorDivAboutTitle`}>
                                    <TextareaAutosize
                                        className={`aboutSectionContentSubTitle`}
                                        value={aboutSectionIntro}
                                        spellCheck="false"
                                        // cols={textAreaUsername.length}
                                        placeholder="About Section Title"
                                        style={{
                                            color: `${introRedux.color}`,
                                            fontFamily: `${introRedux.fontStyle}`,
                                        }}
                                        onChange={(e) => {
                                            setaboutSectionIntro(
                                                e.target.value
                                            );
                                        }}
                                        onFocus={(e) => {
                                            // settextAreaUsernameFocused(true);
                                            dispatch({
                                                type: "openMiniTextEditor",
                                            });
                                            dispatch({
                                                type: "textBeingChangedColorDispatch",
                                                payload:
                                                    "aboutSectionIntroColorChange",
                                            });
                                            dispatch({
                                                type: "textBeingChangedFontDispatch",
                                                payload:
                                                    "aboutSectionIntroFontStyleChange",
                                            });
                                            dispatch({
                                                type: "textBeingChangedColorValue",
                                                payload: introRedux.color,
                                            });
                                            dispatch({
                                                type: "textBeingChangedFontValue",
                                                payload: introRedux.fontStyle,
                                            });
                                        }}
                                        onBlur={(e) => {
                                            // settextAreaUsernameFocused(false);
                                            dispatch({
                                                type: "aboutSectionIntroTextChange",
                                                payload: e.target.value,
                                            });
                                        }}
                                    ></TextareaAutosize>
                                </div>
                            )}
                            {ViewMode ? (
                                <p
                                    style={{
                                        color: aboutPassageRedux.color,
                                        fontFamily: aboutPassageRedux.fontStyle,
                                    }}
                                >
                                    {aboutPassageRedux.text}
                                </p>
                            ) : (
                                <div className={`textAreaEditorDivAboutTitle`}>
                                    <TextareaAutosize
                                        className={`aboutSectionPassage`}
                                        value={aboutSectionPassage}
                                        spellCheck="false"
                                        // cols={textAreaUsername.length}
                                        placeholder="About Yourself!"
                                        style={{
                                            color: aboutPassageRedux.color,
                                            fontFamily:
                                                aboutPassageRedux.fontStyle,
                                        }}
                                        onChange={(e) => {
                                            setaboutSectionPassage(
                                                e.target.value
                                            );
                                        }}
                                        onFocus={(e) => {
                                            // settextAreaUsernameFocused(true);
                                            dispatch({
                                                type: "openMiniTextEditor",
                                            });
                                            dispatch({
                                                type: "textBeingChangedColorDispatch",
                                                payload:
                                                    "aboutSectionPassageColorChange",
                                            });
                                            dispatch({
                                                type: "textBeingChangedFontDispatch",
                                                payload:
                                                    "aboutSectionPassageFontStyleChange",
                                            });
                                            dispatch({
                                                type: "textBeingChangedColorValue",
                                                payload:
                                                    aboutPassageRedux.color,
                                            });
                                            dispatch({
                                                type: "textBeingChangedFontValue",
                                                payload:
                                                    aboutPassageRedux.fontStyle,
                                            });
                                        }}
                                        onBlur={(e) => {
                                            // settextAreaUsernameFocused(false);
                                            dispatch({
                                                type: "aboutSectionPassageTextChange",
                                                payload: e.target.value,
                                            });
                                        }}
                                    ></TextareaAutosize>
                                </div>
                            )}
                            <div className="aboutLayoutDesign3Flex">
                                <div className="aboutLayoutDesign3FlexLeft">
                                    {ViewMode ? (
                                        <p
                                            className="aboutSectionContentTitle"
                                            style={{
                                                color: aboutSectionBasicInfoRedux
                                                    .title.color,
                                                fontFamily:
                                                    aboutSectionBasicInfoRedux
                                                        .title.fontStyle,
                                            }}
                                        >
                                            {aboutSectionBasicInfo.title.text}
                                        </p>
                                    ) : (
                                        <div
                                            className={`textAreaEditorDivAboutTitle`}
                                        >
                                            <TextareaAutosize
                                                className={`aboutSectionImageTitle`}
                                                value={
                                                    aboutSectionBasicInfo.title
                                                        .text
                                                }
                                                spellCheck="false"
                                                // cols={textAreaUsername.length}
                                                placeholder="Basic Information Title"
                                                style={{
                                                    color: aboutSectionBasicInfoRedux
                                                        .title.color,
                                                    fontFamily:
                                                        aboutSectionBasicInfoRedux
                                                            .title.fontStyle,
                                                }}
                                                onChange={(e) => {
                                                    setaboutSectionBasicInfo(
                                                        (prev) => ({
                                                            ...prev,
                                                            title: {
                                                                ...prev.title,
                                                                text: e.target
                                                                    .value,
                                                            },
                                                        })
                                                    );
                                                }}
                                                onFocus={(e) => {
                                                    // settextAreaUsernameFocused(true);
                                                    dispatch({
                                                        type: "openMiniTextEditor",
                                                    });
                                                    dispatch({
                                                        type: "textBeingChangedColorDispatch",
                                                        payload:
                                                            "aboutSectionBasicInfoTitleColorChange",
                                                    });
                                                    dispatch({
                                                        type: "textBeingChangedFontDispatch",
                                                        payload:
                                                            "aboutSectionBasicInfoTitleFontStyleChange",
                                                    });
                                                    dispatch({
                                                        type: "textBeingChangedColorValue",
                                                        payload:
                                                            aboutSectionBasicInfoRedux
                                                                .title.color,
                                                    });
                                                    dispatch({
                                                        type: "textBeingChangedFontValue",
                                                        payload:
                                                            aboutSectionBasicInfoRedux
                                                                .title
                                                                .fontStyle,
                                                    });
                                                }}
                                                onBlur={(e) => {
                                                    // settextAreaUsernameFocused(false);
                                                    dispatch({
                                                        type: "aboutSectionBasicInfoTitleTextChange",
                                                        payload: e.target.value,
                                                    });
                                                }}
                                            ></TextareaAutosize>
                                        </div>
                                    )}
                                    <div className="aboutSectionContentRightBasicInfo container">
                                        <div className="row">
                                            <div
                                                className="aboutSectionContentRightBasicInfoKeys col-sm-4"
                                                style={{
                                                    color: aboutSectionBasicInfoRedux
                                                        .keys.color,
                                                    fontFamily:
                                                        aboutSectionBasicInfoRedux
                                                            .keys.fontStyle,
                                                }}
                                            >
                                                Age:
                                            </div>
                                            {ViewMode ? (
                                                <div
                                                    className="col-sm-8 aboutSectionContentRightBasicInfoValues"
                                                    style={{
                                                        color: aboutSectionBasicInfoRedux
                                                            .values.color,
                                                        fontFamily:
                                                            aboutSectionBasicInfoRedux
                                                                .values
                                                                .fontStyle,
                                                    }}
                                                >
                                                    {
                                                        aboutSectionBasicInfoRedux
                                                            .values.text.age
                                                    }
                                                </div>
                                            ) : (
                                                <div
                                                    className={`col-sm-8 textAreaEditorDivAboutTitle`}
                                                >
                                                    <TextareaAutosize
                                                        className={`aboutSectionContentRightBasicInfoValues`}
                                                        value={
                                                            aboutSectionBasicInfo
                                                                .values.text.age
                                                        }
                                                        spellCheck="false"
                                                        // cols={textAreaUsername.length}
                                                        placeholder="Enter Age"
                                                        style={{
                                                            color: aboutSectionBasicInfoRedux
                                                                .values.color,
                                                            fontFamily:
                                                                aboutSectionBasicInfoRedux
                                                                    .values
                                                                    .fontStyle,
                                                        }}
                                                        onChange={(e) => {
                                                            setaboutSectionBasicInfo(
                                                                (prev) => ({
                                                                    ...prev,
                                                                    values: {
                                                                        ...prev.values,
                                                                        text: {
                                                                            ...prev
                                                                                .values
                                                                                .text,
                                                                            age: e
                                                                                .target
                                                                                .value,
                                                                        },
                                                                    },
                                                                })
                                                            );
                                                        }}
                                                        onFocus={(e) => {
                                                            // settextAreaUsernameFocused(true);
                                                            dispatch({
                                                                type: "openMiniTextEditor",
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedColorDispatch",
                                                                payload:
                                                                    "aboutSectionBasicInfoValuesColorChange",
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedFontDispatch",
                                                                payload:
                                                                    "aboutSectionBasicInfoValuesFontStyleChange",
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedColorValue",
                                                                payload:
                                                                    aboutSectionBasicInfoRedux
                                                                        .values
                                                                        .color,
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedFontValue",
                                                                payload:
                                                                    aboutSectionBasicInfoRedux
                                                                        .values
                                                                        .fontStyle,
                                                            });
                                                        }}
                                                        onBlur={(e) => {
                                                            // settextAreaUsernameFocused(false);
                                                            dispatch({
                                                                type: "aboutSectionBasicInfoValuesTextAgeChange",
                                                                payload:
                                                                    e.target
                                                                        .value,
                                                            });
                                                        }}
                                                    ></TextareaAutosize>
                                                </div>
                                            )}
                                        </div>
                                        <div className="row">
                                            <div
                                                className="aboutSectionContentRightBasicInfoKeys col-sm-4"
                                                style={{
                                                    color: aboutSectionBasicInfoRedux
                                                        .keys.color,
                                                    fontFamily:
                                                        aboutSectionBasicInfoRedux
                                                            .keys.fontStyle,
                                                }}
                                            >
                                                Email:
                                            </div>

                                            {ViewMode ? (
                                                <div
                                                    className="col-sm-8 aboutSectionContentRightBasicInfoValues"
                                                    style={{
                                                        color: aboutSectionBasicInfoRedux
                                                            .values.color,
                                                        fontFamily:
                                                            aboutSectionBasicInfoRedux
                                                                .values
                                                                .fontStyle,
                                                    }}
                                                >
                                                    {
                                                        aboutSectionBasicInfoRedux
                                                            .values.text.email
                                                    }
                                                </div>
                                            ) : (
                                                <div
                                                    className={`col-sm-8 textAreaEditorDivAboutTitle`}
                                                >
                                                    <TextareaAutosize
                                                        className={`aboutSectionContentRightBasicInfoValues`}
                                                        value={
                                                            aboutSectionBasicInfo
                                                                .values.text
                                                                .email
                                                        }
                                                        spellCheck="false"
                                                        // cols={textAreaUsername.length}
                                                        placeholder="Enter Email"
                                                        style={{
                                                            color: aboutSectionBasicInfoRedux
                                                                .values.color,
                                                            fontFamily:
                                                                aboutSectionBasicInfoRedux
                                                                    .values
                                                                    .fontStyle,
                                                        }}
                                                        onChange={(e) => {
                                                            setaboutSectionBasicInfo(
                                                                (prev) => ({
                                                                    ...prev,
                                                                    values: {
                                                                        ...prev.values,
                                                                        text: {
                                                                            ...prev
                                                                                .values
                                                                                .text,
                                                                            email: e
                                                                                .target
                                                                                .value,
                                                                        },
                                                                    },
                                                                })
                                                            );
                                                        }}
                                                        onFocus={(e) => {
                                                            // settextAreaUsernameFocused(true);
                                                            dispatch({
                                                                type: "openMiniTextEditor",
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedColorDispatch",
                                                                payload:
                                                                    "aboutSectionBasicInfoValuesColorChange",
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedFontDispatch",
                                                                payload:
                                                                    "aboutSectionBasicInfoValuesFontStyleChange",
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedColorValue",
                                                                payload:
                                                                    aboutSectionBasicInfoRedux
                                                                        .values
                                                                        .color,
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedFontValue",
                                                                payload:
                                                                    aboutSectionBasicInfoRedux
                                                                        .values
                                                                        .fontStyle,
                                                            });
                                                        }}
                                                        onBlur={(e) => {
                                                            // settextAreaUsernameFocused(false);
                                                            dispatch({
                                                                type: "aboutSectionBasicInfoValuesTextEmailChange",
                                                                payload:
                                                                    e.target
                                                                        .value,
                                                            });
                                                        }}
                                                    ></TextareaAutosize>
                                                </div>
                                            )}
                                        </div>
                                        <div className="row">
                                            <div
                                                className="aboutSectionContentRightBasicInfoKeys col-sm-4"
                                                style={{
                                                    color: aboutSectionBasicInfoRedux
                                                        .keys.color,
                                                    fontFamily:
                                                        aboutSectionBasicInfoRedux
                                                            .keys.fontStyle,
                                                }}
                                            >
                                                Phone:
                                            </div>
                                            {ViewMode ? (
                                                <div
                                                    className="col-sm-8 aboutSectionContentRightBasicInfoValues"
                                                    style={{
                                                        color: aboutSectionBasicInfoRedux
                                                            .values.color,
                                                        fontFamily:
                                                            aboutSectionBasicInfoRedux
                                                                .values
                                                                .fontStyle,
                                                    }}
                                                >
                                                    {
                                                        aboutSectionBasicInfoRedux
                                                            .values.text.phone
                                                    }
                                                </div>
                                            ) : (
                                                <div
                                                    className={`col-sm-8 textAreaEditorDivAboutTitle`}
                                                >
                                                    <TextareaAutosize
                                                        className={`aboutSectionContentRightBasicInfoValues`}
                                                        value={
                                                            aboutSectionBasicInfo
                                                                .values.text
                                                                .phone
                                                        }
                                                        spellCheck="false"
                                                        // cols={textAreaUsername.length}
                                                        placeholder="Enter PhoneNumber"
                                                        style={{
                                                            color: aboutSectionBasicInfoRedux
                                                                .values.color,
                                                            fontFamily:
                                                                aboutSectionBasicInfoRedux
                                                                    .values
                                                                    .fontStyle,
                                                        }}
                                                        onChange={(e) => {
                                                            setaboutSectionBasicInfo(
                                                                (prev) => ({
                                                                    ...prev,
                                                                    values: {
                                                                        ...prev.values,
                                                                        text: {
                                                                            ...prev
                                                                                .values
                                                                                .text,
                                                                            phone: e
                                                                                .target
                                                                                .value,
                                                                        },
                                                                    },
                                                                })
                                                            );
                                                        }}
                                                        onFocus={(e) => {
                                                            // settextAreaUsernameFocused(true);
                                                            dispatch({
                                                                type: "openMiniTextEditor",
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedColorDispatch",
                                                                payload:
                                                                    "aboutSectionBasicInfoValuesColorChange",
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedFontDispatch",
                                                                payload:
                                                                    "aboutSectionBasicInfoValuesFontStyleChange",
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedColorValue",
                                                                payload:
                                                                    aboutSectionBasicInfoRedux
                                                                        .values
                                                                        .color,
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedFontValue",
                                                                payload:
                                                                    aboutSectionBasicInfoRedux
                                                                        .values
                                                                        .fontStyle,
                                                            });
                                                        }}
                                                        onBlur={(e) => {
                                                            // settextAreaUsernameFocused(false);
                                                            dispatch({
                                                                type: "aboutSectionBasicInfoValuesTextPhoneChange",
                                                                payload:
                                                                    e.target
                                                                        .value,
                                                            });
                                                        }}
                                                    ></TextareaAutosize>
                                                </div>
                                            )}
                                        </div>
                                        <div className="row">
                                            <div
                                                className="aboutSectionContentRightBasicInfoKeys col-sm-4"
                                                style={{
                                                    color: aboutSectionBasicInfoRedux
                                                        .keys.color,
                                                    fontFamily:
                                                        aboutSectionBasicInfoRedux
                                                            .keys.fontStyle,
                                                }}
                                            >
                                                Address:
                                            </div>

                                            {ViewMode ? (
                                                <div
                                                    className="col-sm-8 aboutSectionContentRightBasicInfoValues"
                                                    style={{
                                                        color: aboutSectionBasicInfoRedux
                                                            .values.color,
                                                        fontFamily:
                                                            aboutSectionBasicInfoRedux
                                                                .values
                                                                .fontStyle,
                                                    }}
                                                >
                                                    {
                                                        aboutSectionBasicInfoRedux
                                                            .values.text.address
                                                    }
                                                </div>
                                            ) : (
                                                <div
                                                    className={`col-sm-8 textAreaEditorDivAboutTitle`}
                                                >
                                                    <TextareaAutosize
                                                        className={`aboutSectionContentRightBasicInfoValues`}
                                                        value={
                                                            aboutSectionBasicInfo
                                                                .values.text
                                                                .address
                                                        }
                                                        spellCheck="false"
                                                        // cols={textAreaUsername.length}
                                                        placeholder="Enter Address"
                                                        style={{
                                                            color: aboutSectionBasicInfoRedux
                                                                .values.color,
                                                            fontFamily:
                                                                aboutSectionBasicInfoRedux
                                                                    .values
                                                                    .fontStyle,
                                                        }}
                                                        onChange={(e) => {
                                                            setaboutSectionBasicInfo(
                                                                (prev) => ({
                                                                    ...prev,
                                                                    values: {
                                                                        ...prev.values,
                                                                        text: {
                                                                            ...prev
                                                                                .values
                                                                                .text,
                                                                            address:
                                                                                e
                                                                                    .target
                                                                                    .value,
                                                                        },
                                                                    },
                                                                })
                                                            );
                                                        }}
                                                        onFocus={(e) => {
                                                            // settextAreaUsernameFocused(true);
                                                            dispatch({
                                                                type: "openMiniTextEditor",
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedColorDispatch",
                                                                payload:
                                                                    "aboutSectionBasicInfoValuesColorChange",
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedFontDispatch",
                                                                payload:
                                                                    "aboutSectionBasicInfoValuesFontStyleChange",
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedColorValue",
                                                                payload:
                                                                    aboutSectionBasicInfoRedux
                                                                        .values
                                                                        .color,
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedFontValue",
                                                                payload:
                                                                    aboutSectionBasicInfoRedux
                                                                        .values
                                                                        .fontStyle,
                                                            });
                                                        }}
                                                        onBlur={(e) => {
                                                            // settextAreaUsernameFocused(false);
                                                            dispatch({
                                                                type: "aboutSectionBasicInfoValuesTextAddressChange",
                                                                payload:
                                                                    e.target
                                                                        .value,
                                                            });
                                                        }}
                                                    ></TextareaAutosize>
                                                </div>
                                            )}
                                        </div>
                                        <div className="row">
                                            <div
                                                className="aboutSectionContentRightBasicInfoKeys col-sm-4"
                                                style={{
                                                    color: aboutSectionBasicInfoRedux
                                                        .keys.color,
                                                    fontFamily:
                                                        aboutSectionBasicInfoRedux
                                                            .keys.fontStyle,
                                                }}
                                            >
                                                Languages:
                                            </div>

                                            {ViewMode ? (
                                                <div
                                                    className="col-sm-8 aboutSectionContentRightBasicInfoValues"
                                                    style={{
                                                        color: aboutSectionBasicInfoRedux
                                                            .values.color,
                                                        fontFamily:
                                                            aboutSectionBasicInfoRedux
                                                                .values
                                                                .fontStyle,
                                                    }}
                                                >
                                                    {
                                                        aboutSectionBasicInfoRedux
                                                            .values.text
                                                            .languages
                                                    }
                                                </div>
                                            ) : (
                                                <div
                                                    className={`col-sm-8 textAreaEditorDivAboutTitle`}
                                                >
                                                    <TextareaAutosize
                                                        className={`aboutSectionContentRightBasicInfoValues`}
                                                        value={
                                                            aboutSectionBasicInfo
                                                                .values.text
                                                                .languages
                                                        }
                                                        spellCheck="false"
                                                        // cols={textAreaUsername.length}
                                                        placeholder="Enter Languages!"
                                                        style={{
                                                            color: aboutSectionBasicInfoRedux
                                                                .values.color,
                                                            fontFamily:
                                                                aboutSectionBasicInfoRedux
                                                                    .values
                                                                    .fontStyle,
                                                        }}
                                                        onChange={(e) => {
                                                            setaboutSectionBasicInfo(
                                                                (prev) => ({
                                                                    ...prev,
                                                                    values: {
                                                                        ...prev.values,
                                                                        text: {
                                                                            ...prev
                                                                                .values
                                                                                .text,
                                                                            languages:
                                                                                e
                                                                                    .target
                                                                                    .value,
                                                                        },
                                                                    },
                                                                })
                                                            );
                                                        }}
                                                        onFocus={(e) => {
                                                            // settextAreaUsernameFocused(true);
                                                            dispatch({
                                                                type: "openMiniTextEditor",
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedColorDispatch",
                                                                payload:
                                                                    "aboutSectionBasicInfoValuesColorChange",
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedFontDispatch",
                                                                payload:
                                                                    "aboutSectionBasicInfoValuesFontStyleChange",
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedColorValue",
                                                                payload:
                                                                    aboutSectionBasicInfoRedux
                                                                        .values
                                                                        .color,
                                                            });
                                                            dispatch({
                                                                type: "textBeingChangedFontValue",
                                                                payload:
                                                                    aboutSectionBasicInfoRedux
                                                                        .values
                                                                        .fontStyle,
                                                            });
                                                        }}
                                                        onBlur={(e) => {
                                                            // settextAreaUsernameFocused(false);
                                                            dispatch({
                                                                type: "aboutSectionBasicInfoValuesTextLanguagesChange",
                                                                payload:
                                                                    e.target
                                                                        .value,
                                                            });
                                                        }}
                                                    ></TextareaAutosize>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="aboutLayoutDesign3FlexRight">
                                    <img
                                        style={{
                                            border: `${aboutSectioImageBorderRedux} 4px solid`,
                                        }}
                                        src={
                                            aboutSectioImageRedux
                                                ? aboutSectioImageRedux
                                                : "https://picsum.photos/300/300"
                                        }
                                        alt="about"
                                    ></img>
                                    <p
                                        className="aboutSectionContentTitle"
                                        style={{
                                            color: aboutSocialMediaTitleRedux.color,
                                            fontFamily:
                                                aboutSocialMediaTitleRedux.fontStyle,
                                        }}
                                    >
                                        {aboutSocialMediaTitleRedux.text}
                                    </p>
                                    <div className="aboutSectionSocialMediaLinks">
                                        <NavLink
                                            to={
                                                aboutSocialMediaLinksRedux.gmail
                                            }
                                            className="btn google"
                                        >
                                            <i
                                                class="fab fa-google-plus-g"
                                                style={{
                                                    height: "fit-content",
                                                }}
                                            ></i>
                                        </NavLink>
                                        <NavLink
                                            to={
                                                aboutSocialMediaLinksRedux.instagram
                                            }
                                            className="btn instagram"
                                        >
                                            <i
                                                class="fab fa-instagram"
                                                style={{
                                                    height: "fit-content",
                                                }}
                                            ></i>
                                        </NavLink>
                                        <NavLink
                                            to={
                                                aboutSocialMediaLinksRedux.linkedIn
                                            }
                                            className="btn linkedIn"
                                        >
                                            <i
                                                class="fab fa-linkedin"
                                                style={{
                                                    height: "fit-content",
                                                }}
                                            ></i>
                                        </NavLink>
                                        <NavLink to="#" className="btn gitHub">
                                            <i
                                                class="fab fa-github"
                                                style={{
                                                    height: "fit-content",
                                                }}
                                            ></i>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
