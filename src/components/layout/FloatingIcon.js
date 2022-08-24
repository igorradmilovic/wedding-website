import React from 'react';
import bagel_pic from "../../assets/img/bagel.jpg";

const FloatingIcon = () => {
    return (
        <div className="floating-icon-circle">
            <a href="/bagel">
                <div className="floating-icon-inner">
                    <div className="floating-icon-front">
                        <img src={bagel_pic} alt="Bagel" />
                    </div>
                </div>
            </a>
        </div>
    );
};

export default FloatingIcon;