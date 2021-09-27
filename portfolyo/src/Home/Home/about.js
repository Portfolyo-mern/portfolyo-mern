import React from "react";

import { Row, Col } from "antd";

const items = [
    {
        key: "1",
        icon: <i className="fas fa-chart-pie"></i>,
        title: "About Portfolyo",
        content:
            "These is a Web application which is to create portfolio websites with ease.This app allows you to create any number portfolyo`s with different customizations",
    },
    {
        key: "2",
        icon: <i className="fas fa-desktop"></i>,
        title: "Easy to use",
        content:
            "These app allows you to create portfolyo`s with ease, you don't need any coding background.You can easily manage your portfolyo`s with different customizations",
    },
    {
        key: "3",
        icon: <i className="fas fa-database"></i>,
        title: "Software used",
        content:
            "These app is built upon MERN stack primarily and we used redis database for caching and nginx to setup load balancing and docker swarm service for scaling the app!",
    },
];

function AppAbout() {
    return (
        <div id="about" className="block aboutBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2
                        style={{
                            marginBottom: "1rem",
                        }}
                    >
                        About Us
                    </h2>
                    <p>
                        We are a small team of Passionate Devolopers, working
                        our level best to fulfill your needs. Our goal is to
                        make portfolio building process a lot easier for all our
                        fellow mates! People who want to build their portfolyo`s
                        which look attractive without any Web Devolopement
                        knowledge can take the most benifit from our website.
                        You can edit the templated provided by us and contomize
                        them to your taste. We have even attached a video below
                        for you walk you through the process of website creation
                        (refer that for addtional info!)We are always open to
                        discussions and suggestions, feel free to contact us at
                        any time!
                    </p>
                </div>
                <div className="contentHolder">
                    <p>
                        Our app is easy to use and easy for creating and
                        managing multiple portfolyo`s with different
                        customizations. The services provided in these app is
                        absolutly free of cost.
                    </p>
                </div>
                <Row gutter={[16, 16]}>
                    {items.map((item) => {
                        return (
                            <Col md={{ span: 8 }} key={item.key}>
                                <div className="content">
                                    <div className="icon">{item.icon}</div>
                                    <h3>
                                        <b>{item.title}</b>
                                    </h3>
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
