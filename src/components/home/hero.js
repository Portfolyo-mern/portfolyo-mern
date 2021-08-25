import React from 'react';
import { Button } from 'antd';

import { Carousel } from 'antd';

const items = [
  {
    key: '1',
    title: 'Web and mobile app for creating portfolyo',
    content: 'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
    bcontent : 'Learn More',
  },
  {
    key: '2',
    title: 'sign in',
    content: 'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
    bcontent : 'click here',
  },
  {
    key: '3',
    title: 'sign up',
    content: 'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
    bcontent : 'click here',  
  },
]

function AppHero() {
  return (
    <div id="hero" className="heroBlock">
      <Carousel>
        {items.map(item => {
          return (
            <div key={item.key} className="container-fluid">
              <div className="content">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <div className="btnHolder">
                  <Button type="primary" size="large">{item.bcontent}</Button>
                  
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