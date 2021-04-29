import React, { useState } from 'react';
import './tittle.css';

function Tittle({texto}) {
    return (
        <div className="tittle container-sm">
            <div className="topic"></div>
            <div className="text">{texto}</div>
            
        </div>
    );
}

export default Tittle;