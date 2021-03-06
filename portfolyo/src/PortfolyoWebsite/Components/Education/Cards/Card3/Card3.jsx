import React from 'react';
import "./Card3.scss";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EditIcon from '@material-ui/icons/Edit';
import { useSelector, useDispatch } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
// import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
// import { FormatLineSpacing } from '@material-ui/icons';
// import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import $ from 'jquery';

const Card3 = () => {
    const card1edu = useSelector(state => state.card1edu);
    const openeditor = useSelector(state => state.OpenEditor);
    const fontsineb = useSelector(state => state.fontsineb);
    const fontfamilyedu = useSelector(state => state.fontfamilyedu);
    const shadowcardedu = useSelector(state => state.shadowcardedu);
    const ViewMode = useSelector(state => state.ViewMode);
    const dispatch = useDispatch();
    // console.log(card1edu);
    const imagetypeedu = useSelector(state => state.imagetypeedu);
    const expand = true;
    const deleteCard = (index) => {
        // eslint-disable-next-line
        let cc = card1edu.filter((ele, ind) => (index != ind) ? true : false);
        dispatch({ type: "card1edu", payload: cc });
    }
    const showcontent = (index) => {
        $(`#slide${index}`).toggle(500);
    }
    const EditCard = (info, index) => {
        dispatch({ type: "editcardine", payload: { ...info, index } });
        dispatch({ type: "openeditor", payload: true });
        dispatch({ type: "tabpointer", payload: 7 });
        dispatch({ type: "currenttabe", payload: 2 });
    }
    React.useEffect(()=>{
        $(".slide").hide(1000);
    },[]);
    return (
        <div className="Card3" style={{marginBottom:"18rem"}}>
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
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", flexWrap: "wrap",alignItems:"flex-start" }}>
                {card1edu.map((ele,index) =>
                        (<div class="rounded-lg" style={{
                            marginTop:"0rem",
                            marginBottom:"3rem",
                            background:fontsineb.bgcolor,
                            boxShadow:shadowcardedu,
                            width:"300px"}} data-aos={ele.animation} data-aos-delay={ele.animationdelay*1000} data-aos-duration={ele.animationduration*1000} >
                            <div className="mx-auto py-4" style={{width:"max-content"}}>
                                <img class={imagetypeedu} style={{width:"160px",height:"160px",margin:"auto",textAlign:"center"}} alt="select an image" src={ele.image} />
                            </div>
                            <div id={`slide${index}`} className={`slide mx-auto`}>
                                <h3 class="name text-center" style={{color:fontsineb.title,fontFamily:fontfamilyedu.title}}>{ele.title}</h3>
                                <p class="title text-center" style={{color:fontsineb.year,fontFamily:fontfamilyedu.year}}>{ele.year}</p>
                                <p class="description mb-0 pb-0 text-center" style={{color:fontsineb.description,fontFamily:fontfamilyedu.description}}>{ele.description}</p>
                            </div>
                            {
                                (expand)?
                                        (<div className="mx-auto" style={{width:"max-content"}} onClick={()=>showcontent(index)}>
                                            <IconButton><ExpandMoreIcon style={{fontSize:"2rem"}}/></IconButton>
                                        </div>):(
                                            (<div className="mx-auto" style={{width:"max-content"}} onClick={()=>showcontent(index)}>
                                            <IconButton><ExpandMoreIcon style={{fontSize:"2rem"}}/></IconButton>
                                        </div>)
                                        )
                            }
                            {/* <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div> */}
                            <div className="mx-auto" style={{width:"max-content"}}>
                                <IconButton onClick={()=>deleteCard(index)} className="mx-2 my-2"   style={{display:(ViewMode)?"none":"inline-block"}}>
                                    <DeleteIcon className="text-muted"/>
                                </IconButton>
                                <IconButton className="mx-2" onClick={()=>EditCard(ele,index)}    style={{display:(ViewMode)?"none":"inline-block"}}>
                                    <EditIcon style={{color:"#777"}}/>
                                </IconButton>
                            </div>
                        </div>)
                        )
                        }
                </div>
            </div>
        </div>
    )
}

export default Card3
