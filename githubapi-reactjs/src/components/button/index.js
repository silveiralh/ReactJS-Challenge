import React, { useState } from 'react';
import './button.css';
import {Link} from 'react-router-dom';

// react icons
import * as Fi from "react-icons/fi";

function Button({texto, input}) {
    return (
        <Link className="link" to={`/home/${input}`}>
            <button type="button" className="button">
                {texto}
                <Fi.FiArrowRight/>
            </button>
        </Link>
    );
}

export default Button; 