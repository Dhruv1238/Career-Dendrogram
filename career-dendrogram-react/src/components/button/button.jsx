import React from "react";
import "./button.css";

// button component

function Button({inputValue}) {
    return (
        <div className="button">
            <button>{inputValue}</button>
        </div>
    );
}

export default Button;