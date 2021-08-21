import React from 'react';
import "./ProjectCard.scss";
import { useSelector, useDispatch } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import EditIcon from '@material-ui/icons/Edit';

const ProjectCard = (props) => {
  const dispatch = useDispatch();
  const projectcard = useSelector(state => state.projectcard);
  // const openeditor = useSelector(state => state.OpenEditor);
  // const currenttabpro = useSelector(state => state.currenttabpro);
  const projectcustom = useSelector(state => state.projectcustom);
  // const tabpointer = useSelector(state => state.tabpointer);
  // console.log(projectcard)
  const deletecard = (index) => {
    // console.log(index,projectcard.filter((ele,ind)=>(ind!=index)));
    // eslint-disable-next-line
    dispatch({type:"PS_projectcard",payload:projectcard.filter((ele,ind)=>(ind!=index))})
  }
  let imgstyles={maxWidth:"150px",padding: "7px"}
    // eslint-disable-next-line
  if(props.data.imagetype!="round bord" && props.data.imagetype!="bord" && props.data.imagetype!="round bord none" && props.data.imagetype!="bord none"){
    if(props.data.imagetype.includes("none")){
      let arr = props.data.imagetype.split(" ");
      imgstyles["borderRadius"]=`${arr[0]}%`;
    }
    imgstyles["borderRadius"]=`${props.data.imagetype}%`;
    imgstyles["border"]=`1px solid ${projectcustom.colorTc}`
  }
  else{
    imgstyles["borderRadius"]=undefined;
  }
  if(props.data.imagetype.includes("none")){
    imgstyles["border"]="none";
  }
  else{
    imgstyles["border"]=`1px solid ${projectcustom.colorTc}`
  }
  try {
    return (
      <div className="projectcard1 mb-0 pb-0 mx-auto" style={{width:"max-content"}} data-aos={props.data.animation} data-aos-delay={parseFloat(props.data.delay)*1000} data-aos-duration={parseFloat(props.data.duration)*1000}  data-aos-offset="250">
        <div class="card-container pb-3 px-3 m-0" style={{background:projectcustom.bgcolor,boxShadow:projectcustom.shadow,borderRadius:`${projectcustom.borderRadius}px`}}>
        <div className="my-0" style={{position:"relative",display:"flex", justifyContent:"space-around",top:"-1rem"}}>
            <IconButton onClick={()=>{
              dispatch({type:"openeditor",payload:true});
              dispatch({type:"tabpointer",payload:6});
              dispatch({type:"PS_currenttabpro",payload:4});
              dispatch({type:"PS_editproject",payload:{...props.data}})
            }} className="mr-auto" >
                <EditIcon className="m-0" style={{color:"#777"}}/>
              </IconButton>
            <IconButton onClick={()=>deletecard(props.data.index)} className="ml-auto my-0" >
              <HighlightOffIcon className="m-0" style={{color:"#f44336"}}/>
            </IconButton>
        </div>
          <img className={props.data.imagetype} style={imgstyles} src={props.data.image} alt="user" />
          <h3 style={{fontFamily:projectcustom.fontFamilyN,color:projectcustom.colorN}}>{props.data.title}</h3>
          <p style={{fontFamily:projectcustom.fontFamilyA,color:projectcustom.colorA}}>{props.data.about}</p>
          <div class="buttons">
            <a href={props.data.to} style={{textDecoration:"none"}}>
              <Button variant="outlined" color="primary" style={{fontFamily:projectcustom.fontFamilyA,color:projectcustom.colorBt}}>
              {props.data.buttonText}
              </Button>
            </a>
          </div>
          <div class="skills my-3 ">
            <h6 className="text-center" style={{fontFamily:projectcustom.fontFamilyT,color:projectcustom.colorTh}}>{props.data.techhead}</h6>
            <ul>
              {
                props.data.techs.map((ele)=>(
                  <li style={{fontFamily:projectcustom.fontFamilyA,color:projectcustom.colorTc,border:`1px solid ${projectcustom.colorTc}`,background:projectcustom.bgtag}}>{ele}</li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
  catch{
    return (<></>)
  }
}

export default ProjectCard;