import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import "./Layout4CenterAlign.scss";
import Background from '../../../Backgrounds/Background';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
// import ProjectCard from '../../../ProjectCard/ProjectCard/ProjectCard';
// import ProjectCard5 from '../../../ProjectCard/ProjectCard5/ProjectCard5';
import ProjectCard6 from '../../../ProjectCard/ProjectCard6/ProjectCard6';


const Layout4CenterAlign = () => {
    const projectheader = useSelector(state => state.projectheader);
    const dispatch = useDispatch();
    const openeditor = useSelector(state => state.OpenEditor);
    // const projectcard = useSelector(state => state.projectcard);
    const projectbody = useSelector(state => state.projectbody);
    const ViewMode = useSelector(state => state.ViewMode);


    return (
        <div className="ProjectSectionLayout4CenterAlign my-5" style={{ boxShadow: projectbody.shadow, borderRadius: `${projectbody.borderRadius}%`, background: projectbody.backgroundColor }}>
            <Background />
            <div className="container my-r" >
            <Button variant="outlined" color="" style={{ marginBottom: "-4rem" }}
                    onClick={() => {
                        dispatch({ type: "openeditor", payload: !openeditor });
                        dispatch({ type: "tabpointer", payload: 6 });
                        // dispatch({ type: "currenttabe", payload: 4 });
                    }}
                    style={{
                        display:(ViewMode)?"none":"inherit"
                    }}
                >change layout</Button>
                <IconButton className="mr-4"
                    onClick={() => {
                        dispatch({ type: "openeditor", payload: !openeditor });
                        dispatch({ type: "tabpointer", payload: 6 });
                        dispatch({ type: "currenttabe", payload: 0 });
                    }}
                    style={{ marginLeft: "auto", display: "block", 
                        display:(ViewMode)?"none":"inherit"
                    }}>
                    <EditIcon />
                </IconButton>
                <div data-aos={projectheader.animation} data-aos-delay={parseFloat(projectheader.delay) * 1000} data-aos-duration={parseFloat(projectheader.duration) * 1000}>
                    <h2 className="mb-3 text-center" style={{ color: projectheader.color, fontFamily: projectheader.fontStyle, fontSize: "2.1rem" }}>{projectheader.name}</h2>
                    <p className="mb-4 text-center" style={{ color: projectheader.colorp, lineHeight: "1.8rem", fontFamily: projectheader.fontStylep, fontWeight: "normal", wordSpacing: "0.4rem" }}>{projectheader.description}</p>
                    <div className="mx-auto mb-4" style={{ width: "max-content" }}>
                    {/* eslint-disable-next-line */}
                        <a href="" target="_blank" style={{ textDecoration: "none" }}>
                            <Button
                                variant="contained"
                                style={{
                                    borderRadius: "50px", padding: "0.3rem 0.5rem 0.3rem 1.5em",
                                    color: projectheader.colorbt,
                                    background: projectheader.colorbbg
                                }}
                            >{projectheader.ButtonText} <KeyboardArrowRightIcon style={{
                                color: projectheader.colora, background: projectheader.colorabg, marginLeft: "1rem",
                                borderRadius: "100%", fontSize: "2rem"
                            }} /> </Button>
                        </a>
                    </div>
                </div>
                <div className="CardColumns" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
                    <ProjectCard6 />
                </div>
            </div>
        </div>
    )
}

export default Layout4CenterAlign;
