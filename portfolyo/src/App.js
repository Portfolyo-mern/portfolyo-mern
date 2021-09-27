import "./App.css";
import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./home";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import DashBoard from './Containers/DashBoard/DashBoard';
import Main from "./PortfolyoWebsite/Containers/Main/Main";
import Store from "./redux/store";
import { Provider } from "react-redux";
import Education from "./PortfolyoWebsite/Components/Education/Education";
import MyWebsite from "./PortfolyoWebsite/Components/MyWebsite/MyWebsite";
import GetWebsite from "./PortfolyoWebsite/Containers/GetWebsite/GetWebsite";
import EditWebsite from "./PortfolyoWebsite/Containers/EditWebsite/EditWebsite";
import Dashboardv2 from "./Dashboardv2/Dashboardv2";
import LoadingEffect from "./LoadingEffect/LoadingEffect"
import LoadingEffectV2 from "./LoadingEffect/LoadingEffectV2";
import LoadingEffectV3 from "./LoadingEffect/LoadingEffectV3";
import DownloadWebsiteLoader from "./LoadingEffect/DownloadWebsiteLoader";
// import DashBoard from "./Dashboardmain/dashboard";



function App() {
    return (
    <Provider store={Store}>
        <LoadingEffect/>
        <LoadingEffectV2/>
        <LoadingEffectV3/>
        <DownloadWebsiteLoader/>
        <Switch>
                <Route component={SignIn} path="/signin" exact />
                <Route component={SignUp} path="/signup" exact />
                    <Route component={Dashboardv2} path="/dashboard" exact />
                    <Route component={MyWebsite} path="/mywebsites" exact />
                    <Route component={Main} path="/makewebsite" exact />
                    <Route component={EditWebsite} path="/editwebsite/:id" exact />
                <Route
                    component={GetWebsite}
                    path="/portfolyo/:username/:id/"
                    exact
                />
                <Route component={Education} path="/education" exact />
                {/* <Route component={() => <h1>error</h1>} path="/error" exact /> */}
                <Route component={Home} path="/" exact />
                <Redirect to="/" />
            </Switch>
    </Provider>
    );
}

export default App;

export const Baseurl = "http://167.71.235.21:3001";

export const domain = "https://portfolyo.studio/#/"
