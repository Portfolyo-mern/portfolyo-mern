import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./SkillsSectionComponent.scss";
import FormatAlignLeftIcon from "@material-ui/icons/FormatAlignLeft";
import FormatAlignCenterIcon from "@material-ui/icons/FormatAlignCenter";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { IconButton, makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import AOS from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles((theme) => ({
    CardEditOption: {
        margin: 0,
        position: "absolute",
        bottom: "5px",
        right: "5px",
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

const SkillsSectionComponent = () => {
    const classes = useStyles();

    //redux
    const skillsSection = useSelector((state) => state.skillsSection);
    const openeditor = useSelector((state) => state.OpenEditor);
    const dispatch = useDispatch();

    //progress animate
    const [startProgress, setstartProgress] = useState("");
    const progressRef = useRef(null);

    useLayoutEffect(() => {
        const pregressBarPosition =
            progressRef.current.getBoundingClientRect().top;
        const onScroll = () => {
            const scrollPos = window.scrollY + window.innerHeight;
            if (pregressBarPosition < scrollPos) {
                setstartProgress("triggerProgressBar");
            }
        };
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);

    return (
        <div
            className={`skillsSectionMainBackground ${
                skillsSection.background.borderType === 0
                    ? `skillsSectionMainBackground0`
                    : skillsSection.background.borderType === 1
                    ? `skillsSectionMainBackground1`
                    : ``
            }`}
            style={{
                backgroundColor: skillsSection.background.color,
            }}
            data-aos={skillsSection.background.transition}
        >
            <div
                className={`skillsSectionHeaderDiv ${
                    skillsSection.skillsSectionHeader.alignment === "center"
                        ? `skillsSectionHeaderDivCenter`
                        : ``
                }`}
            >
                <p
                    className="skillsSectionHeader"
                    style={{
                        color: skillsSection.skillsSectionHeader.color,
                        fontFamily: skillsSection.skillsSectionHeader.fontStyle,
                    }}
                >
                    {skillsSection.skillsSectionHeader.text === ""
                        ? "Title is required"
                        : skillsSection.skillsSectionHeader.text}
                </p>
                <div className="skillsSectionHeaderDivEdit">
                    <IconButton
                        onClick={() => {
                            dispatch({
                                type: "openeditor",
                                payload: !openeditor,
                            });
                            dispatch({ type: "tabpointer", payload: 5 });
                            dispatch({ type: "currenttabe", payload: 4 });
                            dispatch({
                                type: "skillsSectionChangeEditPage",
                                payload: 2,
                            });
                        }}
                        style={{
                            marginLeft: "auto",
                            display: "block",
                            border: "1px solid black",
                        }}
                    >
                        <EditIcon />
                    </IconButton>
                    <ToggleButtonGroup
                        className="skillsSectionHeaderToogler"
                        value={skillsSection.skillsSectionHeader.alignment}
                        exclusive
                        onChange={(event, newAlignment) => {
                            dispatch({
                                type: "skillsSectionHeaderChangeAlignment",
                                payload: newAlignment,
                            });
                        }}
                        aria-label="text alignment"
                    >
                        <ToggleButton value="left" aria-label="left aligned">
                            <FormatAlignLeftIcon />
                        </ToggleButton>
                        <ToggleButton value="center" aria-label="centered">
                            <FormatAlignCenterIcon />
                        </ToggleButton>
                    </ToggleButtonGroup>
                </div>
            </div>
            <div className="skillsCardsDisplayMain">
                {skillsSection !== undefined &&
                skillsSection.skillsCards.length > 0
                    ? skillsSection.skillsCards.map((item, index) => (
                          <div
                              style={{
                                  width:
                                      skillsSection.cardsLayout.layoutDesign ===
                                          2 ||
                                      skillsSection.cardsLayout.layoutDesign ===
                                          3
                                          ? `100%`
                                          : `fit-content`,
                              }}
                          >
                              <div
                                  className={`${
                                      skillsSection.cardsLayout.layoutDesign ===
                                      0
                                          ? `textSkillCardLayout`
                                          : `removeSkillCard`
                                  } ${
                                      skillsSection.cardsLayout.borderType === 0
                                          ? `circularSkillsCard`
                                          : skillsSection.cardsLayout
                                                .borderType === 1
                                          ? `SquareSkillsCard`
                                          : ``
                                  }`}
                              >
                                  <p
                                      className={`skillsCardTitle`}
                                      style={{
                                          fontFamily: `${item.titleFontStyle}`,
                                          color: `${item.titleColor}`,
                                      }}
                                  >
                                      {item.title}
                                  </p>
                                  <p
                                      className={`skillsCardDesc`}
                                      style={{
                                          fontFamily: `${item.descFontStyle}`,
                                          color: `${item.descColor}`,
                                      }}
                                  >
                                      {item.desc}
                                  </p>
                                  <IconButton
                                      aria-label="delete"
                                      className={classes.CardEditOption}
                                      onClick={() => {
                                          dispatch({
                                              type: "openeditor",
                                              payload: !openeditor,
                                          });
                                          dispatch({
                                              type: "tabpointer",
                                              payload: 5,
                                          });
                                          dispatch({
                                              type: "currenttabe",
                                              payload: 4,
                                          });
                                          dispatch({
                                              type: "skillsSectionChangeEditPage",
                                              payload: 3,
                                          });
                                          dispatch({
                                              type: "skillsEditingCardNumber",
                                              payload: index,
                                          });
                                      }}
                                  >
                                      <EditIcon fontSize="medium" />
                                  </IconButton>
                              </div>
                              <div
                                  className={`${
                                      skillsSection.cardsLayout.layoutDesign ===
                                      1
                                          ? `textImageSkillCardLayout`
                                          : `removeSkillCard`
                                  } ${
                                      skillsSection.cardsLayout.borderType === 0
                                          ? `circularSkillsCard`
                                          : skillsSection.cardsLayout
                                                .borderType === 1
                                          ? `SquareSkillsCard`
                                          : ``
                                  }`}
                              >
                                  <img
                                      src={
                                          item.image
                                              ? item.image
                                              : "https://picsum.photos/300/300"
                                      }
                                      alt="Skills Icon"
                                  ></img>
                                  <p
                                      className={`skillsCardTitle`}
                                      style={{
                                          fontFamily: `${item.titleFontStyle}`,
                                          color: `${item.titleColor}`,
                                      }}
                                  >
                                      {item.title}
                                  </p>
                                  <p
                                      className={`skillsCardDesc`}
                                      style={{
                                          fontFamily: `${item.descFontStyle}`,
                                          color: `${item.descColor}`,
                                      }}
                                  >
                                      {item.desc}
                                  </p>
                                  <IconButton
                                      aria-label="delete"
                                      className={classes.CardEditOption}
                                      onClick={() => {
                                          dispatch({
                                              type: "openeditor",
                                              payload: !openeditor,
                                          });
                                          dispatch({
                                              type: "tabpointer",
                                              payload: 5,
                                          });
                                          dispatch({
                                              type: "currenttabe",
                                              payload: 4,
                                          });
                                          dispatch({
                                              type: "skillsSectionChangeEditPage",
                                              payload: 3,
                                          });
                                          dispatch({
                                              type: "skillsEditingCardNumber",
                                              payload: index,
                                          });
                                      }}
                                  >
                                      <EditIcon fontSize="medium" />
                                  </IconButton>
                              </div>
                              <div
                                  className={`${
                                      skillsSection.cardsLayout.layoutDesign ===
                                      2
                                          ? `progressBarSkillCardLayout`
                                          : `removeSkillCard`
                                  }`}
                                  style={{
                                      width: "100%",
                                  }}
                              >
                                  <div className="skillsInnerSection">
                                      <div className="professionalSkills">
                                          <div className="eachSkill">
                                              <div className="candidate">
                                                  <div className="parcial">
                                                      <div className="info">
                                                          <div className="name">
                                                              <p
                                                                  className={`skillsCardTitle`}
                                                                  style={{
                                                                      fontFamily: `${item.titleFontStyle}`,
                                                                      color: `${item.titleColor}`,
                                                                  }}
                                                              >
                                                                  {item.title}
                                                              </p>
                                                          </div>
                                                          <div className="percentageNum">
                                                              <p
                                                                  className={`skillsCardTitle`}
                                                                  style={{
                                                                      fontFamily: `${item.titleFontStyle}`,
                                                                      color: `${item.titleColor}`,
                                                                  }}
                                                              >
                                                                  {
                                                                      item.percentage
                                                                  }
                                                                  %
                                                              </p>
                                                          </div>
                                                      </div>
                                                      <div className="skillsSectionProgressBar">
                                                          <div
                                                              className={`percentagem ${startProgress}`}
                                                              ref={progressRef}
                                                              style={{
                                                                  background:
                                                                      item.progressBarColor,
                                                                  width: `${item.percentage}%`,
                                                              }}
                                                          ></div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <IconButton
                                      aria-label="Edit"
                                      onClick={() => {
                                          dispatch({
                                              type: "openeditor",
                                              payload: !openeditor,
                                          });
                                          dispatch({
                                              type: "tabpointer",
                                              payload: 5,
                                          });
                                          dispatch({
                                              type: "currenttabe",
                                              payload: 4,
                                          });
                                          dispatch({
                                              type: "skillsSectionChangeEditPage",
                                              payload: 3,
                                          });
                                          dispatch({
                                              type: "skillsEditingCardNumber",
                                              payload: index,
                                          });
                                      }}
                                  >
                                      <EditIcon fontSize="medium" />
                                  </IconButton>
                                  {/* <p className={`skillsCardTitle`}>{item.title}</p>
							<IconButton
								aria-label="delete"
								className={classes.CardEditOption}
							>
								<EditIcon fontSize="medium" />
							</IconButton> */}
                              </div>
                              <div
                                  className={`${
                                      skillsSection.cardsLayout.layoutDesign ===
                                      3
                                          ? `progressBarImageSkillCardLayout`
                                          : `removeSkillCard`
                                  }`}
                              >
                                  <div>
                                      <img
                                          src={
                                              item.image
                                                  ? item.image
                                                  : "https://picsum.photos/300/300"
                                          }
                                          alt="Skills Icon"
                                      ></img>
                                  </div>
                                  <div className="skillsInnerSection">
                                      <div className="professionalSkills">
                                          <div className="eachSkill">
                                              <div className="candidate">
                                                  <div className="parcial">
                                                      <div className="info">
                                                          <div className="name">
                                                              <p
                                                                  className={`skillsCardTitle`}
                                                                  style={{
                                                                      fontFamily: `${item.titleFontStyle}`,
                                                                      color: `${item.titleColor}`,
                                                                  }}
                                                              >
                                                                  {item.title}
                                                              </p>
                                                          </div>
                                                          <div className="percentageNum">
                                                              <p
                                                                  className={`skillsCardTitle`}
                                                                  style={{
                                                                      fontFamily: `${item.titleFontStyle}`,
                                                                      color: `${item.titleColor}`,
                                                                  }}
                                                              >
                                                                  {
                                                                      item.percentage
                                                                  }
                                                                  %
                                                              </p>
                                                          </div>
                                                      </div>
                                                      <div className="skillsSectionProgressBar">
                                                          <div
                                                              className={`percentagem ${startProgress}`}
                                                              ref={progressRef}
                                                              style={{
                                                                  background:
                                                                      item.progressBarColor,
                                                                  width: `${item.percentage}%`,
                                                              }}
                                                          ></div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <IconButton
                                      aria-label="Edit"
                                      onClick={() => {
                                          dispatch({
                                              type: "openeditor",
                                              payload: !openeditor,
                                          });
                                          dispatch({
                                              type: "tabpointer",
                                              payload: 5,
                                          });
                                          dispatch({
                                              type: "currenttabe",
                                              payload: 4,
                                          });
                                          dispatch({
                                              type: "skillsSectionChangeEditPage",
                                              payload: 3,
                                          });
                                          dispatch({
                                              type: "skillsEditingCardNumber",
                                              payload: index,
                                          });
                                      }}
                                  >
                                      <EditIcon fontSize="medium" />
                                  </IconButton>
                                  {/* <p className={`skillsCardTitle`}>{item.title}</p>
							<IconButton
								aria-label="delete"
								className={classes.CardEditOption}
							>
								<EditIcon fontSize="medium" />
							</IconButton> */}
                              </div>
                          </div>
                      ))
                    : null}
            </div>
            <div className="skillAddNewSkillButton" style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
            }}>
                <Button
                    variant="outlined"
                    style={{
                        color: "green",
                        border: "green 1px solid",
                        margin: "1rem auto",
                    }}
                    onClick={() => {
                        dispatch({
                            type: "openeditor",
                            payload: !openeditor,
                        });
                        dispatch({
                            type: "tabpointer",
                            payload: 5,
                        });
                        dispatch({
                            type: "currenttabe",
                            payload: 4,
                        });
                        dispatch({
                            type: "skillsSectionChangeEditPage",
                            payload: 4,
                        });
                    }}
                >
                    Add a Skill!
                </Button>
            </div>
        </div>
    );
};

export default SkillsSectionComponent;
