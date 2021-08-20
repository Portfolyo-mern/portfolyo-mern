import logo from './logo.svg';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import Home from './Home/Home';
import SignIn from './signin/signin';
import SignUp from './signup/signup';
import DashBoard from './Containers/DashBoard/DashBoard';
import Main from './PortfolyoWebsite/Containers/Main/Main'
import Store from './redux/store';
import {Provider} from 'react-redux';
import Education from './PortfolyoWebsite/Components/Education/Education';

function App() {
  return (
      <Provider store={Store}>
          <Switch>
              <Route component={Home} path="/" exact />
              <Route component={SignIn} path="/signin" exact />
              <Route component={SignUp} path="/signup" exact />
              <Route component={DashBoard} path="/dashboard" exact />
              <Route component={Main} path="/makewebsite" exact />
              <Route component={Education} path="/education" exact />
              <Route component={() => <h1>error</h1>} path="/error" exact />
          </Switch>
      </Provider>
  );
}

export default App;

export const Baseurl="http://localhost:3001";