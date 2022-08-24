import React, { useEffect, useState } from 'react';

const Loader = () => {
    const [load, setLoad] = useState(false);
    useEffect(() => {
        window.addEventListener("load", () => {
            setLoad(true)
        })
    }, []);
    const hidden = load ? "hidden" : "";
    return (
        <div className={`loader-section ${hidden}`}>
            <div className="lds-heart">
                <div></div>
            </div>
        </div>
    );
};

export default Loader;