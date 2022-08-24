import React from 'react';
import { Link } from 'react-router-dom';
import { navOptions } from '../../data/nav-options';
import MobileHeader from './MobileHeader';

const Header = () => {
    return (
        <div className="header">

            <Link to="/">
                <div className="nav-brand">
                    Nicole & Igor
                </div>
            </Link>
            <div className="nav">
                {navOptions.map((option, i) => (
                    <Link to={option.link} key={i}>
                        <div className="nav-item">
                            {option.name}
                        </div>
                    </Link>
                ))}
            </div>

            <MobileHeader />
        </div>
    );
};

export default Header;