import React, { useState } from 'react';
import './profileInfo.css';

function ProfileInfo( {bio, email, city}) {
    return (
        <div className="container-sm">
            <p>{email}</p>
            <p>{city}</p>
            <p>{bio}</p>
        </div>
    );
}

export default ProfileInfo;