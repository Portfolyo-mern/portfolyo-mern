import React from 'react'
import "./Card1.scss";
import EditIcon from '@material-ui/icons/Edit';
import { useSelector, useDispatch } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import { FormatLineSpacing } from '@material-ui/icons';
import $ from 'jquery';

const Card1 = () => {
    const card1edu = useSelector(state => state.card1edu);
    const openeditor = useSelector(state => state.OpenEditor);
    const fontsineb = useSelector(state => state.fontsineb);
    const fontfamilyedu = useSelector(state => state.fontfamilyedu);
    const shadowcardedu = useSelector(state => state.shadowcardedu);
    const dispatch = useDispatch();
    console.log(card1edu);
    const imagetypeedu = useSelector(state => state.imagetypeedu);
    const deleteCard = (index) => {
        let cc=card1edu.filter((ele,ind)=>(index!=ind)?true:false);
        dispatch({type:"card1edu",payload:cc});        
    }
    const EditCard = (info,index) => {
        dispatch({type:"editcardine",payload:{...info,index}});
        dispatch({type:"openeditor",payload:true});
        dispatch({type:"tabpointer",payload:7});
        dispatch({type:"currenttabe",payload:2});
    } 
    return (
        <div className="Card1">
            <div class="team-boxed">
                <div class="container">
                <div className="ml-auto mr-4" style={{display:"flex",justifyContent:"flex-end"}}>
                    <IconButton  onClick={()=>{
                            dispatch({type:"openeditor",payload:!openeditor});
                            dispatch({type:"tabpointer",payload:7});
                            dispatch({type:"currenttabe",payload:1});
                    }} style={{display: "block",width:"max-content"}}>
                        <AddIcon/>
                    </IconButton>
                    <IconButton onClick={()=>{
                            dispatch({type:"openeditor",payload:!openeditor});
                            dispatch({type:"tabpointer",payload:7});
                            dispatch({type:"currenttabe",payload:3});
                    }} style={{display: "block",width:"max-content"}}>
                        <EditIcon/>
                    </IconButton>
                </div>
                    <div className="row people" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
                        {card1edu.map((ele,index) =>
                        (<div class="box item pb-2 rounded-lg" style={{marginTop:"0rem",boxShadow:{shadowcardedu},marginBottom:"3rem",background:fontsineb.bgcolor,boxShadow:shadowcardedu}} data-aos={ele.animation} data-aos-delay={ele.animationdelay*1000} data-aos-duration={ele.animationduration*1000} ><img class={imagetypeedu} src={ele.image} />
                            <h3 class="name" style={{color:fontsineb.title,fontFamily:fontfamilyedu.title}}>{ele.title}</h3>
                            <p class="title" style={{color:fontsineb.year,fontFamily:fontfamilyedu.year}}>{ele.year}</p>
                            <p class="description mb-0 pb-0" style={{color:fontsineb.description,fontFamily:fontfamilyedu.description}}>{ele.description}</p>
                            {/* <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div> */}
                            <div  >
                                <IconButton onClick={()=>deleteCard(index)} className="mx-2 my-2"   >
                                    <DeleteIcon className="text-muted"/>
                                </IconButton>
                                <IconButton className="mx-2" onClick={()=>EditCard(ele,index)}    >
                                    <EditIcon style={{color:"#777"}}/>
                                </IconButton>
                            </div>
                        </div>)
                        )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card1
