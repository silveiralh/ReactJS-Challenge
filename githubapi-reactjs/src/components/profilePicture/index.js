import React, { useState } from 'react';
import './profilePicture.css';

function ProfilePicture( {source}) {
    return (
        <div className="container-sm">
            <img className="picture" src={source}/> 
        </div>
    );
}

export default ProfilePicture;