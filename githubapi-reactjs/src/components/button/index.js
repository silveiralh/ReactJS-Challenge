import React, { useState } from 'react';
import './button.css';

function Button({texto}) {
    return (
        <button className="button">
            {texto}
            <img className="icon" src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDY0IDY0IiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDY0IDY0IiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0zNy4zNzkgMTIuNTUyYy0uNzk5LS43NjEtMi4wNjYtLjczMS0yLjgyNy4wNjktLjc2Mi44LS43MyAyLjA2Ni4wNjkgMi44MjhsMTUuMzQyIDE0LjU1MWgtMzkuOTYzYy0xLjEwNCAwLTIgLjg5Ni0yIDJzLjg5NiAyIDIgMmgzOS44OTlsLTE1LjI3OCAxNC41NTJjLS44Ljc2Mi0uODMxIDIuMDI4LS4wNjkgMi44MjguMzkzLjQxMi45Mi42MiAxLjQ0OC42Mi40OTYgMCAuOTkyLS4xODMgMS4zNzktLjU1MmwxNy40NDktMTYuNjJjLjc1Ni0uNzU1IDEuMTcyLTEuNzU5IDEuMTcyLTIuODI4cy0uNDE2LTIuMDczLTEuMjA3LTIuODYyeiIvPjwvc3ZnPg=="/>
        </button>
    );
}

export default Button;