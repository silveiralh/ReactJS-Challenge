import React, { useState } from 'react';
import './profileInfo.css';

function ProfileInfo( {email, city}) {
    return (
        <div className="container-sm">
            <p>{email}</p>
            <p>{city}</p>
        </div>
    );
}

export default ProfileInfo;