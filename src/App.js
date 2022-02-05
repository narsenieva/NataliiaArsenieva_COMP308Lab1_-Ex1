import './App.css';
import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Login from './components/Login/Login';

function App()
{
    //let match = useRouteMatch({ path: to, extact: true });
    
    return (
        <Router>
            <div>
            <h1>Simple Dynamic Routing!</h1>
            <div>

            </div>
            <div>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/comment" component={Comment} />
                <Route exact path="/thankyou" component={ThankYou} />
            </Switch>
            </div>
        </div>
      </Router>
    );
    //
}
function Comment() {
  return <h2>Comment</h2>;
}

function ThankYou() {
  return <h2>Thank You!</h2>;
}

export default App;
