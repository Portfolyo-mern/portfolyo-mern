import React from 'react';
import "./ProjectCard6.scss";
import { useSelector, useDispatch } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import EditIcon from '@material-ui/icons/Edit';
import $ from 'jquery';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const ProjectCard6 = () => {
    let props = {}
    const dispatch = useDispatch();
    const projectcard = useSelector(state => state.projectcard);
    // const openeditor = useSelector(state => state.OpenEditor);
    // const currenttabpro = useSelector(state => state.currenttabpro);
    const projectcustom = useSelector(state => state.projectcustom);
    // const tabpointer = useSelector(state => state.tabpointer);
    // const [rotate, setrotate] = React.useState(false);
    const [currentindex, setcurrentindex] = React.useState(0);
    try {
    props.data = projectcard[currentindex];
    props.data.index = currentindex;
    // console.log(projectcard)
    const deletecard = (index) => {
        // console.log(currentindex, projectcard.filter((ele, ind) => (ind != currentindex)));
        // eslint-disable-next-line
        if(currentindex==projectcard.length-1){
            setcurrentindex(0);
        }
        // eslint-disable-next-line
        dispatch({ type: "PS_projectcard", payload: projectcard.filter((ele, ind) => (ind != currentindex)) })
    }
    let imgstyles = { maxWidth: "150px", padding: "7px" }
    // eslint-disable-next-line
    if (props.data.imagetype != "round bord" && props.data.imagetype != "bord" && props.data.imagetype != "round bord none" && props.data.imagetype != "bord none") {
        if (props.data.imagetype.includes("none")) {
            let arr = props.data.imagetype.split(" ");
            imgstyles["borderRadius"] = `${arr[0]}%`;
        }
        imgstyles["borderRadius"] = `${props.data.imagetype}%`;
        imgstyles["border"] = `1px solid ${projectcustom.colorTc}`
    }
    else {
        imgstyles["borderRadius"] = undefined;
    }
    if (props.data.imagetype.includes("none")) {
        imgstyles["border"] = "none";
    }
    else {
        imgstyles["border"] = `1px solid ${projectcustom.colorTc}`
    }
        return (
            <div className="projectcard6 my-5"  >
                <div className="row p-5 "
                    style={{ background: projectcustom.bgcolor, boxShadow: projectcustom.shadow, borderRadius: `${projectcustom.borderRadius}px` }}
                    data-aos={props.data.animation} data-aos-delay={parseFloat(props.data.delay) * 1000} data-aos-duration={parseFloat(props.data.duration) * 1000} data-aos-offset="250">
                    <div className="p-0 " style={{ marginTop: "-1rem",position:"relative",left:"50%",transform: "translate(-50%,-50%)" }}>
                            {
                                projectcard.map((ele, index) => (
                                    // eslint-disable-next-line
                                    <span><FiberManualRecordIcon style={{ color: (currentindex == index) ? "#ccc" : "#eee" }} /></span>
                                ))
                            }
                        </div>
                    <div className="p-0 ml-auto" style={{ marginTop: "-2rem", display: "flex", justifyContent: "space-around" }}>
                        <IconButton onClick={() => {
                            dispatch({ type: "openeditor", payload: true });
                            dispatch({ type: "tabpointer", payload: 6 });
                            dispatch({ type: "PS_currenttabpro", payload: 4 });
                            dispatch({ type: "PS_editproject", payload: { ...props.data } })
                        }} className="mr-auto" style={{ display: "block" }} >
                            <EditIcon className="m-0" style={{ color: "#777" }} />
                        </IconButton>
                        <IconButton onClick={() => deletecard(props.data.index)} className="ml-auto my-0" style={{ display: "block" }}>
                            <HighlightOffIcon className="m-0" style={{ color: "#f44336" }} />
                        </IconButton>
                    </div>
                    <div className="row" id="slideleftinpc5">
                        <div className="text-center col-md-3">
                            <img className={props.data.imagetype} style={imgstyles} src={props.data.image} alt="user" />
                        </div>
                        <IconButton style={{ position: "fixed", top: "50%", left: "97%", transform: "translate(-50%,-50%)" }}
                            onClick={() => {
                                // console.log("cjcj",currentindex,projectcard.length,(currentindex+1)%(projectcard.length))
                                $("#slideleftinpc5").fadeOut(0);
                                setcurrentindex((currentindex + 1) % (projectcard.length));
                                $("#slideleftinpc5").fadeIn(500);
                            }}
                        >
                            <ChevronRightIcon />
                        </IconButton>
                        <IconButton style={{ position: "fixed", top: "50%", left: "0%", transform: "translate(0%,-50%)" }}
                            onClick={() => {
                                // eslint-disable-next-line
                                if (currentindex != 0) {
                                    $("#slideleftinpc5").fadeOut(0);
                                    setcurrentindex(currentindex - 1)
                                    $("#slideleftinpc5").fadeIn(500);
                                }
                                else {
                                    $("#slideleftinpc5").fadeOut(0);
                                    setcurrentindex(projectcard.length - 1)
                                    $("#slideleftinpc5").fadeIn(500);
                                }
                            }}>
                            <ChevronLeftIcon />
                        </IconButton>
                        <div className="col-md-8">
                            <h3 className="text-center" style={{ fontFamily: projectcustom.fontFamilyN, color: projectcustom.colorN }}>{props.data.title}</h3>
                            <p className="pb-3 text-center" style={{ fontFamily: projectcustom.fontFamilyA, color: projectcustom.colorA, fontSize: "1.1rem" }}>{props.data.about}</p>
                            <div class="buttons text-center">
                                <a href={props.data.to} style={{ textDecoration: "none" }}>
                                    <Button variant="outlined" color="primary" style={{ fontFamily: projectcustom.fontFamilyA, fontSize: "1rem", color: projectcustom.colorBt }}>
                                        {props.data.buttonText}
                                    </Button>
                                </a>
                            </div>
                        </div>
                        <div className="col">
                            <div class="">
                                <h6 className="text-center pt-4 pb-3" style={{ fontFamily: projectcustom.fontFamilyT, fontSize: "1.3rem", color: projectcustom.colorTh }}>{props.data.techhead}</h6>
                                <ul className="tags ml-auto">
                                    {
                                        props.data.techs.map((ele) => (
                                            <li className="tag " style={{ fontFamily: projectcustom.fontFamilyA, fontSize: "1rem", background: projectcustom.bgtag, color: projectcustom.colorTc }}>{ele}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
                {/* </div> */}
            </div>
        )
    }
    catch {
        return (<>
        </>)
    }
}

export default ProjectCard6