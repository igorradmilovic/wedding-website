import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navOptions } from '../../data/nav-options';

const MobileHeader = () => {
    const [selected, setSelected] = useState(null);
    const [navExpanded, setNavExpanded] = useState(false);
    return (
        <div className={`nav-mobile`} onClick={() => setNavExpanded(!navExpanded)}>
            <div className="nav-hamburger-icon">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={`nav-mobile-content`} style={{ display: navExpanded ? 'block' : 'none' }}>
                <div className="nav-brand">
                    Menu
                </div>
                <hr />
                {navOptions.map((option, i) => (
                    <Link to={option.link} onClick={() => {
                        setSelected(option.name);
                        setNavExpanded(!navExpanded);
                    }} key={i}>
                        <div className={`nav-item ${selected === option.name ? "selected" : ""}`}>
                            {option.name}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default MobileHeader;