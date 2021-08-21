import React from 'react';
import "./ProjectCard4.scss";
import { useSelector, useDispatch } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import EditIcon from '@material-ui/icons/Edit';
// import $ from 'jquery';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const ProjectCard4 = (props) => {
    const dispatch = useDispatch();
    const projectcard = useSelector(state => state.projectcard);
    // const openeditor = useSelector(state => state.OpenEditor);
    // const currenttabpro = useSelector(state => state.currenttabpro);
    const projectcustom = useSelector(state => state.projectcustom);
    // const tabpointer = useSelector(state => state.tabpointer);
    // const [rotate, setrotate] = React.useState(false);
    // console.log(projectcard)
    const deletecard = (index) => {
        // console.log(index, projectcard.filter((ele, ind) => (ind != index)));
    // eslint-disable-next-line
        dispatch({ type: "PS_projectcard", payload: projectcard.filter((ele, ind) => (ind != index)) })
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
    try {
        return (
            <div className="projectcard4 mx-sm-3 my-5"  >
                    <div className="row p-5 " 
                    style={{ background: projectcustom.bgcolor, boxShadow: projectcustom.shadow, borderRadius: `${projectcustom.borderRadius}px` }}
                    data-aos={props.data.animation} data-aos-delay={parseFloat(props.data.delay) * 1000} data-aos-duration={parseFloat(props.data.duration) * 1000} data-aos-offset="250">
                    <div className="p-0 ml-auto" style={{marginTop:"-2rem",display:"flex",justifyContent:"space-around"}}>
                        <IconButton onClick={() => {
                            dispatch({ type: "openeditor", payload: true });
                            dispatch({ type: "tabpointer", payload: 6 });
                            dispatch({ type: "PS_currenttabpro", payload: 4 });
                            dispatch({ type: "PS_editproject", payload: { ...props.data } })
                        }} className="mr-auto" style={{display:"block"}} >
                            <EditIcon className="m-0" style={{ color: "#777" }} />
                        </IconButton>
                        <IconButton onClick={() => deletecard(props.data.index)} className="ml-auto my-0" style={{display:"block"}}>
                            <HighlightOffIcon className="m-0" style={{ color: "#f44336" }} />
                        </IconButton>
                    </div>
                    <div className="row">
                        <div className="text-center col-xl-4 col-lg-12">
                            <img className={props.data.imagetype} style={imgstyles} src={props.data.image} alt="user" />
                        </div>
                        <div className="col-xl-8 col-lg-12">
                            <h3 className="text-center" style={{ fontFamily: projectcustom.fontFamilyN, color: projectcustom.colorN }}>{props.data.title}</h3>
                            <p className="pb-3 text-center" style={{ fontFamily: projectcustom.fontFamilyA, color: projectcustom.colorA ,fontSize:"1.1rem"}}>{props.data.about}</p>
                            <div class="buttons text-center">
                                <a href={props.data.to}  style={{ textDecoration: "none" }}>
                                    <Button variant="outlined"  color="primary" style={{ fontFamily: projectcustom.fontFamilyA,fontSize:"1rem", color: projectcustom.colorBt }}>
                                        {props.data.buttonText}
                                    </Button>
                                </a>
                            </div>
                        </div>
                        <div className="col-12">
                            <div class="">
                                <h6 className="text-center pt-4 pb-3" style={{ fontFamily: projectcustom.fontFamilyT,fontSize:"1.3rem", color: projectcustom.colorTh }}>{props.data.techhead}</h6>
                                <ul className="tags ml-auto">
                                    {
                                        props.data.techs.map((ele) => (
                                            <li className="tag " style={{ fontFamily: projectcustom.fontFamilyA,fontSize:"1rem",background: projectcustom.bgtag,color:projectcustom.colorTc }}>{ele}</li>
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
        return (<></>)
    }
}

export default ProjectCard4;