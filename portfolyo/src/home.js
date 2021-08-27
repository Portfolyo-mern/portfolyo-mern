import React from 'react';
import './home.scss';
import 'antd/dist/antd.css';


import AppHeader from './Home/common/header';
import AppFooter from './Home/common/footer';
import AppHome from './Home/Home';


import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

function Home() {
  return (
      <div className="mainLayout1" >
        <Layout className="mainLayout">
        <Header>
            <AppHeader/>
        </Header>
        <Content>
            <AppHome/>
        </Content>
        <Footer>
            <AppFooter/>  
        </Footer>      
        </Layout>
      </div>

  );
}

export default Home;
