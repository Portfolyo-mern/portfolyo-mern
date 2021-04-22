import logo from './logo.svg';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import Home from './Home/Home';
import SignIn from './signin/signin';
import SignUp from './signup/signup';
import DashBoard from './Containers/DashBoard/DashBoard';

function App() {
  return (
    <Switch>
      <Route component={Home} path="/" exact />
      <Route component={SignIn} path="/signin" exact />
      <Route component={SignUp} path="/signup" exact />
      <Route component={DashBoard} path="/dashboard" exact />
    </Switch>
  );
}

export default App;

export const Baseurl="http://localhost:8000";