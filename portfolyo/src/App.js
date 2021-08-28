// import logo from './logo.svg';
import './App.css';
import React, { Suspense } from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import Home from './home';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import DashBoard from './Containers/DashBoard/DashBoard';
import Main from './PortfolyoWebsite/Containers/Main/Main';
import Store from './redux/store';
import {Provider} from 'react-redux';
import Education from './PortfolyoWebsite/Components/Education/Education';
import MyWebsite from "./PortfolyoWebsite/Components/MyWebsite/MyWebsite";
import GetWebsite from "./PortfolyoWebsite/Containers/GetWebsite/GetWebsite";

function App() {
  return (
      <Provider store={Store}>
            {/* <Suspense fallback={Home} > */}
          <Switch>
              <Route component={SignIn} path="/signin" exact />
              <Route component={SignUp} path="/signup" exact />
              <Route component={DashBoard} path="/dashboard" exact />
              <Route component={Main} path="/makewebsite" exact />
              <Route component={Education} path="/education" exact />
              <Route component={MyWebsite} path="/mywebsites" exact />
              <Route component={GetWebsite} path="/portfolyo/:username/:id/" exact/>
              <Route component={() => <h1>error</h1>} path="/error" exact />
              <Route component={Home} path="/" exact />
              <Redirect to="/" />
          </Switch>
          {/* </Suspense> */}
      </Provider>
  );
}

export default App;

export const Baseurl="http://localhost:3001";