import React from "react";
import "./button.css";

// button component

function Button({inputValue, lenk} ) {
    return (
        <div className="button">
            <button href={lenk}>{inputValue}</button>
        </div>
    );
}

export default Button;