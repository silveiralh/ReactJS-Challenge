import React, { useState } from 'react';
import './userCard.css';
import {Link} from 'react-router-dom';
// components
import Tittle from '../tittle';
import ProfilePicture from '../profilePicture';
// react icons
import * as Fi from "react-icons/fi";


function UserCard( {user, nickname, source}) {
    
    return (
        <div className="container-sm userCard">
            <Link className="link" to={`/home/${nickname}`}>
                <div className="userCard pt-2">
                    <div>
                        <div className=" container text-center pb-3"></div>
                        <div className="item-left pt-2">
                            <div className=" topic "></div>
                        </div>
                        <div className="item">
                            <img className="userPicture" src={source}/>
                        </div>
                        <h5 className="item pl-4">#{nickname}</h5>
                        <p className="item-right text-md text-right pt-3 pr-4"><Fi.FiArrowRight/></p>
                        <div className="pb-3"/>
                            <hr className="bg-secondary"/>
                        </div>
                </div>
            </Link>
        </div>
    );
}

export default UserCard;