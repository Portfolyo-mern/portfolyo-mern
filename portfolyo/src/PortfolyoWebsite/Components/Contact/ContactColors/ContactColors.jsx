import React from 'react';
import { Button } from "@material-ui/core";
import { SketchPicker } from "react-color";
import { useSelector, useDispatch } from 'react-redux';


const ContactColors = () => {
    const ContactBgColors = useSelector(state=>state.ContactBgColors);
    const dispatch = useDispatch();
    // const [button,setbutton] = React.useState(["border","",""]);
    return (
        <div className="ContactColors">
            <h4 className="text-center mt-5">font and bg colors</h4>
            <div>
            <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
                <div style={{ marginTop: "3rem", width: "max-content" }}>
                    <h4 className="text-center">Title Color</h4>
                    <span
                        id="SketchPicker"
                        className="disabledrag"
                        style={{ cursor: "pointer !important" }}
                    >
                        <SketchPicker
                            color={ContactBgColors.title}
                            onChange={(color) => dispatch({ type: "contactbgcolors", payload: {...ContactBgColors,title:color.hex} })} style={{ cursor: "pointer" }} 
                            />
                    </span>
                </div>
                <div style={{ marginTop: "3rem", width: "max-content" }}>
                    <h4 className="text-center">Dialogue Font</h4>
                    <span
                        id="SketchPicker"
                        className="disabledrag"
                        style={{ cursor: "pointer !important" }}
                    >
                        <SketchPicker
                            color={ContactBgColors.dialogue}
                            onChange={(color) => dispatch({ type: "contactbgcolors", payload: {...ContactBgColors,dialogue:color.hex} })} style={{ cursor: "pointer" }} 
                            />
                    </span>
                </div>
                <div style={{ marginTop: "3rem", width: "max-content" }}>
                    <h4 className="text-center">Headers Font</h4>
                    <span
                        id="SketchPicker"
                        className="disabledrag"
                        style={{ cursor: "pointer !important" }}
                    >
                        <SketchPicker
                            color={ContactBgColors.headers}
                            onChange={(color) => dispatch({ type: "contactbgcolors", payload: {...ContactBgColors,headers:color.hex }})} style={{ cursor: "pointer" }} 
                            />
                    </span>
                </div>
                <div style={{ marginTop: "3rem", width: "max-content" }}>
                    <h4 className="text-center">button Color</h4>
                    <span
                        id="SketchPicker"
                        className="disabledrag"
                        style={{ cursor: "pointer !important" }}
                    >
                        <SketchPicker
                            color={ContactBgColors.button}
                            onChange={(color) => dispatch({ type: "contactbgcolors", payload: {...ContactBgColors,button:color.hex} })} style={{ cursor: "pointer" }} 
                            />
                    </span>
                </div>
                <div style={{ marginTop: "3rem", width: "max-content" }}>
                    <h4 className="text-center">quotations Color</h4>
                    <span
                        id="SketchPicker"
                        className="disabledrag"
                        style={{ cursor: "pointer !important" }}
                    >
                        <SketchPicker
                            color={ContactBgColors.quotation}
                            onChange={(color) => dispatch({ type: "contactbgcolors", payload: {...ContactBgColors,quotation:color.hex} })} style={{ cursor: "pointer" }} 
                            />
                    </span>
                </div>
                <div style={{ marginTop: "3rem", width: "max-content" }}>
                    <h4 className="text-center">footer Color</h4>
                    <span
                        id="SketchPicker"
                        className="disabledrag"
                        style={{ cursor: "pointer !important" }}
                    >
                        <SketchPicker
                            color={ContactBgColors.footer}
                            onChange={(color) => dispatch({ type: "contactbgcolors", payload: {...ContactBgColors,footer:color.hex} })} style={{ cursor: "pointer" }} 
                            />
                    </span>
                </div>
                <div style={{ marginTop: "3rem", width: "max-content" }}>
                    <h4 className="text-center">Background Color</h4>
                    <span
                        id="SketchPicker"
                        className="disabledrag"
                        style={{ cursor: "pointer !important" }}
                    >
                        <SketchPicker
                            color={ContactBgColors.bgcolor}
                            onChange={(color) => dispatch({ type: "contactbgcolors", payload: {...ContactBgColors,bgcolor:color.hex} })} style={{ cursor: "pointer" }} 
                            />
                    </span>
                </div>
            </div>
            </div>
            <h4 className="text-center mt-4">Button Styles</h4>
            <div className="row my-4">
                <div className={`col-md-3 mx-auto p-4 ${ContactBgColors.border[0]}`}
                    onClick={()=>{
                        dispatch({type:"contactbgcolors", payload: {...ContactBgColors,border:["border","",""]}})
                    }}
                >
                    <Button 
                        variant="contained"
                        className="mx-auto"
                        style={{display:"block"}}
                        color="primary"
                    >
                        contained
                    </Button>
                </div>
                <div className={`col-md-3 mx-auto p-4 ${ContactBgColors.border[1]}`}
                        onClick={()=>{
                            dispatch({type:"contactbgcolors", payload: {...ContactBgColors,border:["","border",""]}})
                        }}
                >
                    <Button 
                        color="primary"
                        className="mx-auto"
                        style={{display:"block"}}
                    >
                        normal
                    </Button>
                </div>
                <div className={`col-md-3 mx-auto p-4 ${ContactBgColors.border[2]}`}
                     onClick={()=>{
                        dispatch({type:"contactbgcolors", payload: {...ContactBgColors,border:["","","border"]}})
                    }}
                >
                    <Button 
                        variant="outlined"
                        className="mx-auto"
                        style={{display:"block"}}
                        color="primary"
                    >
                        outlined
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ContactColors;
