import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import "./style.scss";

const ImageViewer = ({ src, setOpenViewer }) => {
    return (
        <div className="image-viewer" onClick={() => setOpenViewer(false)}>
            <div
                className="modal-content"
            >
                <div className="close-button">
                    <FontAwesomeIcon className="close-button-icon" icon={faTimes} />
                </div>
                <img src={src} alt={"bagel"} />
            </div>
        </div>
    );
};

export default ImageViewer;