import React from 'react';
import { Button } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import { Carousel,Row, Col } from 'antd';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {useHistory} from "react-router-dom";

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79'
}

const items = [
  {
    key: '1',
    title: 'Web app for creating portfolyo website',
    content: 'These wep app is used create portfolyo websites with ease.You can create multiple portfolyo websites by our app.And all the services provided in our website are absolutly free.Enjoy our services',
    bcontent : 'Learn More',
  },
  {
    key: '2',
    title: 'sign in',
    content: 'please login if you have an account to enjoy the services click below button ⬇️',
    bcontent : 'click here',
  },
  {
    key: '3',
    title: 'sign up',
    content: 'if you dont have an account please create an account by clicking below button ⬇️',
    bcontent : 'click here',  
  },
]

function AppHero() {
  const [current,setcurrent ] = React.useState(0);
  const slider = React.useRef();
  const H = useHistory();
  return (
    <div id="hero" className="heroBlock">
      <Carousel
        // autoplay
        // arrows 
        // dots={false}
        ref={ref => {
          console.log(ref);
          slider.current = ref;
        }}
        effect="fade">
        {items.map(item => {
          return (
            <div key={item.key} className="container-fluid">
              <div className="content">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <div className="btnHolder">
                  <Button type="primary" size="large" onClick={()=>{
                    if(item.title==="sign in"){
                      H.push("./signin");
                    }else{
                      if(item.title==="sign up"){
                        H.push("./signup");
                      }
                    }
                  }}>{item.bcontent}</Button>
                  <Button type="primary" onClick={()=>{
                    slider.current.goTo((current+1)%3);
                    setcurrent((current+1)%3);
                  }} className="mx-3" size="large">Next <ArrowForwardIcon/></Button>
                </div>
              </div>
            </div>  
          );
        })}
      </Carousel>
    </div>
  );
}

export default AppHero;