import './App.css';
import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from './components/Login/Login';
import Comment from './components/Comment/Comment';
import ThankYou from './components/ThankYou/ThankYou';

function App()
{   
    return (
        <Router>
            <div>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/comment" component={Comment} />
                <Route path="/thankyou" component={ThankYou} />
            </Switch>
            </div>
      </Router>
    );
}

export default App;
