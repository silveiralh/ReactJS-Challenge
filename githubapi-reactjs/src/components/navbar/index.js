import React, { useState } from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';


// react icons
import * as Fi from "react-icons/fi";

function Navbar({user}) {
    return (
        <div className="row bottomBar container-sm">
            <div className="text-center col ">
                <Link className="tab" to={`/home/${user}`}>
                    <Fi.FiHome />
                    <h6>Home</h6>
                </Link>
            </div>
            <div className="text-center col ">
                <Link className="tab" to={`/repos/${user}`}>
                    <Fi.FiGithub/>
                    <h6> Repos</h6>
                </Link>
            </div>
            <div className="text-center col">
                <Link className="tab" to={`/followers/${user}`}>
                    <Fi.FiUsers/>
                    <h6>Seguidores</h6>
                </Link>
            </div>
            <div className="text-center col">
                <Link className="tab" to={`/following/${user}`}>
                    <Fi.FiUsers/> 
                    <h6>Seguindo</h6>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;