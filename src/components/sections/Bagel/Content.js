import React, { useState } from 'react';

import "./style.scss";

import ImageViewer from './ImageViewer';

function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('../../../assets/img/bagel-page', false, /\.(png|jpe?g|svg)$/));
let photos = [];
images.forEach(v => {
    console.log(v);
    let image = {
        src: v.default,
    }
    photos.push(image);
});

const Content = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [openViewer, setOpenViewer] = useState(false);

    const handleClick = (e) => {
        const photo = e.target?.currentSrc;
        console.log(photo);
        setSelectedImage(photo);
        setOpenViewer(true);
    }
    return (
        <div className="section">
            <div className="gallery">
                {
                    photos?.map((photo, index) => (
                        <div className="gallery-item" key={index}>
                            <img src={photo.src} alt="bagel pic" onClick={handleClick} />
                        </div>
                    ))
                }
            </div>
            {openViewer && <ImageViewer src={selectedImage} setOpenViewer={setOpenViewer} />}
        </div>
    );
};

export default Content;