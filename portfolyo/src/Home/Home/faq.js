import React from "react";

import { Collapse, Button } from "antd";

const { Panel } = Collapse;

function AppFaq() {
    return (
        <div id="faq" className="block faqBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Frequently Asked Questions</h2>
                    <p>This are some of the frequently asked question</p>
                </div>
                <Collapse defaultActiveKey={["1"]}>
                    <Panel
                        header="How can I access my Portfolyo after completion?"
                        key="1"
                    >
                        <p>
                            We'll provide you the link where your portfolyo is
                            hosted once you are finished building! (Watch the
                            walk-though for aditional information).
                        </p>
                    </Panel>
                    <Panel header="How to customize components?" key="2">
                        <p>
                            We have an edit option for you to edit at each and
                            every component.
                        </p>
                    </Panel>
                    <Panel
                        header="Can we use Mobile or small screen devices to make my portfolio?"
                        key="3"
                    >
                        <p>
                            We highly recommend you to use any larger screen
                            devices such as laptop (or) tablets, because some of
                            the editing features might break in small screen
                            devices!
                        </p>
                    </Panel>
                    <Panel
                        header="How much is the cost to build and deploy my personnel portfolio?"
                        key="4"
                    >
                        <p>
                            You can build and deploy you portfolio's for
                            absolutely free of cost on our website!
                        </p>
                    </Panel>
                    <Panel header="Can I make more than one Portfolio?" key="5">
                        <p>
                            Yes you can make more than one portfolio!
                        </p>
                    </Panel>
                </Collapse>
                <div className="quickSupport">
                    <h3>Want quick support?</h3>
                    <p>
                        Please send an message to our Email provided below ⬇️
                    </p>
                    <Button type="primary" size="large">
                        <i className="fas fa-envelope"></i> Email your question
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default AppFaq;
