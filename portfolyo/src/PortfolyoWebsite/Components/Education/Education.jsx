import React, { useEffect } from 'react';
import './Education.scss';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import AOS from 'aos';
import { useSelector, useDispatch } from 'react-redux';
import Card1 from './Cards/Card1/Card1';
// import Fade from 'react-reveal/Fade';
// import Reveal from 'react-reveal/Reveal';
import Card2 from './Cards/Card2/Card2';
// import ScrollAnimation from 'react-animate-on-scroll';
import Card3 from './Cards/Card3/Card3';


const Education = () => {
    const dispatch = useDispatch();
    // const namee = useSelector(state => state.namee);
    const descriptione = useSelector(state => state.descriptione);
    const openeditor = useSelector(state => state.OpenEditor);
    const educationsectiontitle = useSelector(state => state.educationsectiontitle);
    const educationhfontname = useSelector(state => state.educationhfontname);
    const educationpfontname = useSelector(state => state.educationpfontname);
    const fontcolorep = useSelector(state => state.fontcolorep);
    const fontcolore = useSelector(state => state.fontcolore);
    const animationtypeeh = useSelector(state => state.animationtypeeh);
    const animationtimeeh = useSelector(state => state.animationtimeeh);
    const animationdelayeh = useSelector(state => state.animationdelayeh);
    const layoutinedu = useSelector(state=>state.layoutinedu);
    useEffect(() => {
        AOS.init({
            // duration:600,
            offset: 100
        });
    }, []);
    return (
        <div className="EducationBlock">
            <div className="container1  rounded-lg p-2 p-sm-3 p-md-5" style={{ margin: "0 5rem 0 5rem" }}>
                <div className="container">
                    <Button variant="outlined" color="" style={{marginBottom:"-4rem"}}
                    onClick={()=>{
                        dispatch({ type: "openeditor", payload: !openeditor });
                        dispatch({ type: "tabpointer", payload: 7 });
                        dispatch({ type: "currenttabe", payload: 4 });
                    }}
                    >change layout</Button>
                    <IconButton className="mr-4"
                        onClick={() => {
                            dispatch({ type: "openeditor", payload: !openeditor });
                            dispatch({ type: "tabpointer", payload: 7 });
                            dispatch({ type: "currenttabe", payload: 0 });
                        }}
                        style={{ marginLeft: "auto", display: "block" }}>
                        <EditIcon />
                    </IconButton>
                    <div data-aos={animationtypeeh} data-aos-duration={animationtimeeh * 1000} data-aos-delay={animationdelayeh * 1000}>
                        <h2 className="text-center eduname" style={{ fontFamily: educationhfontname, color: fontcolore }}>{educationsectiontitle}</h2>
                        <p className="text-center pt-3 " style={{ fontFamily: educationpfontname, color: fontcolorep }}>{descriptione}</p>
                    </div>
                </div>
                {
                    (layoutinedu==="layout1")?(
                        <Card2/>
                    ):(layoutinedu==="layout2")?(
                        <Card1 />
                    ):(layoutinedu==="layout3")?(
                        <Card3/>
                    ):""
                }
            </div>
        </div>
    )
}

export default Education;