import './App.css';
import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from './components/Login/Login';
import Comment from './components/Comment/Comment';
import ThankYou from './components/ThankYou/ThankYou';

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
                <Route path="/thankyou" component={ThankYou} />
            </Switch>
            </div>
        </div>
      </Router>
    );
    //
}

export default App;
