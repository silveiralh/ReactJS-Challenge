import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
// import {store, persistor} from '../src/store';
// import {PersistGate} from 'redux-persist/integration/react';

// Páginas
import Login from './view/login';
import Home from './view/home';
import Repos from './view/repos';
import Followers from './view/followers';
import Following from './view/following';

function App() {
  
    return (
        // <Provider store={store}>
            <Router>
            <Route exact path="/" component={Login}></Route>
            <Route exact path="/home/:login" component={Home}></Route>
            <Route exact path="/repos/:login" component={Repos}></Route>
            <Route exact path="/followers/:login" component={Followers}></Route>
            <Route exact path="/following/:login" component={Following}></Route>
            </Router>
        // </Provider>
    );
}

export default App;