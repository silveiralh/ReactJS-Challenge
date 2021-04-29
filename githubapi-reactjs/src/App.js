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
        <div>
           <Following/>
        </div>

    );
}

export default App;