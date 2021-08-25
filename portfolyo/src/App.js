// import logo from './logo.svg';
import './App.css';
import React, { Suspense } from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import Home from './home';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import DashBoard from './Containers/DashBoard/DashBoard';
import Main from './PortfolyoWebsite/Containers/Main/Main'
import Store from './redux/store';
import {Provider} from 'react-redux';
import Education from './PortfolyoWebsite/Components/Education/Education';

function App() {
  return (
      <Provider store={Store}>
            {/* <Suspense fallback={Home} > */}
          <Switch>
              <Route component={Home} path="/" exact />
              <Route component={SignIn} path="/signin" exact />
              <Route component={SignUp} path="/signup" exact />
              <Route component={DashBoard} path="/dashboard" exact />
              <Route component={Main} path="/makewebsite" exact />
              <Route component={Education} path="/education" exact />
              <Redirect to="/" />
              <Route component={() => <h1>error</h1>} path="/error" exact />
          </Switch>
          {/* </Suspense> */}
      </Provider>
  );
}

export default App;

export const Baseurl="http://localhost:3001";