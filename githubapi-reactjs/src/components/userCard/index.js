import React, { useState } from 'react';
import './userCard.css';
import Tittle from '../tittle';
import ProfilePicture from '../profilePicture';
function UserCard( {nickname, source}) {
    return (
            <div className="container-sm userCard">
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
                    <p className="item-right text-md text-right pt-3 pr-4">seta</p>
                    <div className="pb-3"/>
                    <hr className="bg-secondary"/>
                </div>
            </div>
        </div>
    );
}

export default UserCard;