import React, { useState } from 'react';
import './navbar.css';

function Navbar({texto}) {
    return (
        <div className="row bottomBar container-sm">
            <div className="text-center col tab">
                Home
            </div>
            <div className="text-center col tab">
                Repos
            </div>
            <div className="text-center col tab">
                Seguidores
            </div>
            <div className="text-center col tab">
                Seguindo
            </div>
        </div>
    );
}

export default Navbar;