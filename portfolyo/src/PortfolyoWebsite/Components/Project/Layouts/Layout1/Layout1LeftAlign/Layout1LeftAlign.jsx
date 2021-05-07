import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import "./Layout1LeftAlign.scss";
import Background from '../../../Backgrounds/Background';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';


const Layout1LeftAlign = () => {
    const projectheader = useSelector(state => state.projectheader);
    const dispatch = useDispatch();
    const openeditor = useSelector(state => state.OpenEditor);
    return (
        <div className="ProjectSectionLayout1LeftAlign my-5" >
            <Background/>
            <div className="container my-r">
            <Button variant="outlined" color="" style={{marginBottom:"-4rem"}}
                    onClick={()=>{
                        dispatch({ type: "openeditor", payload: !openeditor });
                        dispatch({ type: "tabpointer", payload: 6 });
                        // dispatch({ type: "currenttabe", payload: 4 });
                    }}
                    >change layout</Button>
                    <IconButton className="mr-4"
                        onClick={() => {
                            dispatch({ type: "openeditor", payload: !openeditor });
                            dispatch({ type: "tabpointer", payload: 6 });
                            dispatch({ type: "currenttabe", payload: 0 });
                        }}
                        style={{ marginLeft: "auto", display: "block" }}>
                        <EditIcon />
                    </IconButton>
                <div className="row mt-4">
                    <div className="col-md-5 col-6" data-aos="zoom-in" data-aos-duration="300">
                        <h2 className="mb-3" style={{ fontFamily: projectheader.fontFamily, fontSize: "2.1rem" }}>{projectheader.name}</h2>
                        <p className="text-muted mb-4" style={{ lineHeight: "1.8rem", fontWeight: "normal", wordSpacing: "0.4rem" }}>{projectheader.description}</p>

                    </div>
                    <div className="col-md-7 col-6">
                        {/* <div class="box item pb-2 rounded-lg" style={{ marginTop: "0rem", boxShadow: { shadowcardedu }, marginBottom: "3rem", background: fontsineb.bgcolor, boxShadow: shadowcardedu }} data-aos={ele.animation} data-aos-delay={ele.animationdelay * 1000} data-aos-duration={ele.animationduration * 1000} >
                            <img class={imagetypeedu} src={ele.image} />
                            <h3 class="name" >Title1</h3>
                            <p class="title" style={{ color: fontsineb.year, fontFamily: fontfamilyedu.year }}>{ele.year}</p>
                            <p class="description mb-0 pb-0" style={{ color: fontsineb.description, fontFamily: fontfamilyedu.description }}>{ele.description}</p>
                        </div> */}
                    </div>

                    <div className="ml-3">
                        <a href="" target="_blank">
                            <Button
                                color="primary"
                                variant="contained"
                                style={{
                                    borderRadius: "50px", padding: "0.3rem 0.5rem 0.3rem 1.5em",

                                }}
                            >more projects <KeyboardArrowRightIcon style={{
                                color: "black", background: "white", marginLeft: "1rem",
                                borderRadius: "100%", fontSize: "2rem"
                            }} /> </Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout1LeftAlign;

