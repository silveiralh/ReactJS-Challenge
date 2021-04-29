import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Páginas
import Login from './view/login';
import Home from './view/home';
import Repos from './view/repos';
import Followers from './view/followers';
import Following from './view/following';

function App() {
  
    return (
        <Router>
           <Route exact path="/" component={Login}></Route>
           <Route exact path="/home" component={Home}></Route>
           <Route exact path="/repos" component={Repos}></Route>
           <Route exact path="/followers" component={Followers}></Route>
           <Route exact path="/following" component={Following}></Route>
        </Router>

    );
}

export default App;