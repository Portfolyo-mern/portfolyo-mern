import React from 'react';

import { Row, Col } from 'antd';

const items = [
  {
    key: '1',
    icon: <i className="fas fa-chart-pie"></i>,
    title: 'About app',
    content: 'These is a web app which is to create portfolyo websites with ease.These app allows you to create many portfolyo`s with different customizations',
  },
  {
    key: '2',
    icon: <i className="fas fa-desktop"></i>,
    title: 'easy to use',
    content: 'These app allows you to create portfolyo`s with ease dont require any coding background.You can easily manage your portfolyo`s of different customizations',
  },
  {
    key: '3',
    icon: <i className="fas fa-database"></i>,
    title: 'Software used',
    content: 'These app is built using mern stack and redis database for caching and nginx setup load balancing and docker swarm service for scaling the app',
  },
]

function AppAbout() {
  return (
    <div id="about" className="block aboutBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>About Us</h2>
          <p>We are students of cmr college of engineering, hyderebad</p>
        </div>
        <div className="contentHolder">
          <p>These is all about what the app is about and use of our app.Our app is easy to use and easy to create and manage multiple portfolyo`s with different customizations.And there is also information about what software we have used to build these app.The services provided in these app is absolutly free of cost.</p>
        </div>
        <Row gutter={[16, 16]}>   
          {items.map(item => {
            return (
              <Col md={{ span: 8 }} key={item.key}>
                <div className="content">
                  <div className="icon">
                    {item.icon}
                  </div>
                  <h3><b>{item.title}</b></h3>
                  <p>{item.content}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default AppAbout;