import React from 'react';

import image1 from '../../assets/images/ak.jpg';
import image2 from '../../assets/images/dd.jpg';
import image3 from '../../assets/images/kranthi.jpg';


import { Row, Col } from 'antd';
import { Card } from 'antd';
const { Meta } = Card;

function creator() {
  return (
    <div id="creator" className="block featureBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Creators</h2>
          <p></p>
        </div>
        <Row gutter={[16, 16]}>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Modern Design" src={image1} />}
            >
              <Meta title="Akshay Murari" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Test" src={image2} />}
            >
              <Meta title="Deepesh Dragoneel" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Test" src={image3} />}
            >
              <Meta title="Kranthi Kumar" />
            </Card>
          </Col>
          
        </Row>
      </div>
    </div>
  );
}

export default creator;