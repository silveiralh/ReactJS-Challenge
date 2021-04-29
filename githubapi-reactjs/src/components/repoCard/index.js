import React, { useState } from 'react';
import './repoCard.css';
// components
import Tittle from '../tittle';
// react icons
import * as Fi from "react-icons/fi";
function RepoCard( {tittle, repoInfo}) {
    return (
            <div className="cardRepo">
                <h3><Tittle texto={tittle}/></h3>
                <div className="container-sm">
                    <p className="pb-2"> {repoInfo}</p>
                    <div className="row ">
                    <div className="col">
                        <p className="text-md-left pb-2"><Fi.FiStar className="star"/> 32</p>
                    </div>
                    <div className="col">
                        <p className="text-md text-right pr-4"><Fi.FiUnlock className="unlock"/><Fi.FiLock className="lock"/></p>
                    </div>
                </div>
                    <hr className="bg-secondary"/>
                </div>
            </div>
    );
}

export default RepoCard;