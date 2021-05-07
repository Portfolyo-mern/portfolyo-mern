import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import "./Layout1CenterAlign.scss";
import Background from '../../../Backgrounds/Background';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';


const Layout1CenterAlign = () => {
    const projectheader = useSelector(state => state.projectheader);
    const dispatch = useDispatch();
    const openeditor = useSelector(state => state.OpenEditor);
    return (
        <div className="ProjectSectionLayout1CenterAlign my-5" >
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
                    <h2 className="mb-3 text-center" style={{ fontFamily: projectheader.fontFamily, fontSize: "2.1rem" }}>{projectheader.name}</h2>
                        <p className="text-muted mb-4 text-center" style={{ lineHeight: "1.8rem", fontWeight: "normal", wordSpacing: "0.4rem" }}>{projectheader.description}</p>
                    <div className="mx-auto" style={{width:"max-content"}}>
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
    )
}

export default Layout1CenterAlign;

