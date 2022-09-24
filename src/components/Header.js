import React from "react";

const Header = ({handleDarkMode}) => {
    return(
        <div className="header">
            <h1>Notes</h1>
            <button className='toggle' onClick={() => handleDarkMode(
                (previous) => !previous
            )}>Toogle Mode</button>
        </div>
    )
}

export default Header