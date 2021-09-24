import React from 'react';

import { Collapse, Button } from 'antd';

const { Panel } = Collapse;

function AppFaq() {
  return(
    <div id="faq" className="block faqBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Frequently Asked Questions</h2>
          <p>This are some of the frequently asked question</p>
        </div>
        <Collapse defaultActiveKey={['1']}>
          <Panel header="About app" key="1">
            <p>This is a web used to create customized portfolyo in minutes.In this web app you can customize each and every element.</p>
          </Panel>
          <Panel header="How to customize components" key="2">
            <p>We have an edit option to edit each and every component</p>
          </Panel>
          <Panel header="How to Upload files" key="3">
            <p>We can upload picture files and Resume file with the help of an upload option</p>
          </Panel>
          <Panel header="How to change color" key="4">
            <p>We have a color panel to change color</p>
          </Panel>
          <Panel header="Question 5" key="5">
            <p>Usu dolorem ceteros te. Veri exerci ne vix, modo ignota an qui. Ne oblique antiopam quo. Ex quem saepe cum, temporibus comprehensam qui at. Aliquip habemus fierent qui at. No facete omnesque argumentum sea, est tale error nihil ad.</p>
          </Panel>
          <Panel header="Question 6" key="6">
            <p>Erant vitae alterum in mel, viris rationibus argumentum eu sea. Per ei diceret constituto, ei qui simul intellegam, ut eos dolor ceteros. Altera contentiones et eam. Discere alienum intellegat te duo. Erat dissentiet ei sed, eius dicat ne eum. Id tation everti nam, quo cu magna possit patrioque.</p>
          </Panel>
        </Collapse>
        <div className="quickSupport">
          <h3>Want quick support?</h3>
          <p>Please send an message to our gmail provided below ⬇️ </p>
          <Button type="primary" size="large"><i className="fas fa-envelope"></i> Email your question</Button>
        </div>
      </div>
    </div>  
  );
}

export default AppFaq;