import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import { useSelector, useDispatch } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
// import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
// import { FormatLineSpacing } from '@material-ui/icons';
import "./Card2.scss"

const Card2 = () => {
    const card1edu = useSelector(state => state.card1edu);
    const openeditor = useSelector(state => state.OpenEditor);
    const fontsineb = useSelector(state => state.fontsineb);
    const fontfamilyedu = useSelector(state => state.fontfamilyedu);
    const shadowcardedu = useSelector(state => state.shadowcardedu);
    const ViewMode = useSelector(state => state.ViewMode);
    const dispatch = useDispatch();
    // console.log(card1edu);
    const imagetypeedu = useSelector(state => state.imagetypeedu);
    const deleteCard = (index) => {
        let cc = card1edu.filter((ele, ind) => (index !== ind) ? true : false);
        dispatch({ type: "card1edu", payload: cc });
    }
    const EditCard = (info, index) => {
        dispatch({ type: "editcardine", payload: { ...info, index } });
        dispatch({ type: "openeditor", payload: true });
        dispatch({ type: "tabpointer", payload: 7 });
        dispatch({ type: "currenttabe", payload: 2 });
    }
    return (
        <>
            <div class="container">
                <div className="ml-auto mr-4" style={{ display: "flex", justifyContent: "flex-end" }}>
                    <IconButton onClick={() => {
                        dispatch({ type: "openeditor", payload: !openeditor });
                        dispatch({ type: "tabpointer", payload: 7 });
                        dispatch({ type: "currenttabe", payload: 1 });
                    }} style={{ display: (ViewMode)?"none":"block", width: "max-content" }}>
                        <AddIcon />
                    </IconButton>
                    <IconButton onClick={() => {
                        dispatch({ type: "openeditor", payload: !openeditor });
                        dispatch({ type: "tabpointer", payload: 7 });
                        dispatch({ type: "currenttabe", payload: 3 });
                    }} style={{ display: (ViewMode)?"none":"block", width: "max-content" }}>
                        <EditIcon />
                    </IconButton>
                </div>
                {card1edu.map((ele, index) => (
                    <div class="card mt-4 rounded-lg" style={{ boxShadow:shadowcardedu,border:"none"}}>
                        <div class="row">
                            <div class="col-md-4" data-aos={ele.animation} data-aos-delay={ele.animationdelay * 1000} data-aos-duration={ele.animationduration * 1000}>
                                <div class="container card-body" style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                                {/* eslint-disable-next-line */}
                                    <img src={ele.image} style={{ width:"160px",height:"160px"}}  class={imagetypeedu}  />
                                </div>
                            </div>
                            <div class="col-md-8" data-aos={ele.animation} data-aos-delay={ele.animationdelay * 1000} data-aos-duration={ele.animationduration * 1000}>
                                <div class="card-body">
                                    <div class="h5" style={{ color: fontsineb.title, fontFamily: fontfamilyedu.title }}>{ele.title}</div>
                                    <p>{ele.year}</p>
                                    <p>{ele.description}</p>
                                    <IconButton onClick={() => deleteCard(index)} className="mx-0 " style={{display:(ViewMode)?"none":"inline-block"}}  >
                                        <DeleteIcon className="text-muted" />
                                    </IconButton>
                                    <IconButton className="mx-2" onClick={() => EditCard(ele, index)}  style={{display:(ViewMode)?"none":"inline-block"}}  >
                                        <EditIcon style={{ color: "#777" }} />
                                    </IconButton>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Card2

