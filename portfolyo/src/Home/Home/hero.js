import React from 'react';
import { Button } from 'antd';
import { Carousel} from 'antd';
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
    title: 'Portfolyo',
    content: "Create your beautiful Portfolio's using our Web-App without any Web Devolopment knowledge and with absolute ease. Create Websites that matches your taste. What's better than that? All the services provided in our website are absolutly free. Happy Building!",
    bcontent : 'SignIn',
    bcontent1 : 'SignUp',
  },
  {
    key: '2',
    title: 'sign in',
    content: 'please login if you have an account to enjoy the services click below button ⬇️',
    bcontent : 'click here',
    bcontent1 : 'Back',
  },
  {
    key: '3',
    title: 'sign up',
    content: 'if you dont have an account please create an account by clicking below button ⬇️',
    bcontent : 'click here', 
    bcontent1 : 'Back', 
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
                    }else if(item.title==="sign up"){
                        H.push("./signup");
                    }
                    else if(item.key==="1"){
                      slider.current.goTo(1);
                    }
                    
                  }}>{item.bcontent}</Button>
                  <Button type="primary" onClick={()=>{
                    if(item.key==="1"){
                      slider.current.goTo(2);
                    }else {
                      slider.current.goTo(0);
                      
                    }
                   
                  }} className="mx-3" size="large">{item.bcontent1}</Button>
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