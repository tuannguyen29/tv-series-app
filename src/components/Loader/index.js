import React from 'react';
import loaderSrc from '../../assets/loader.gif'

const Loader = (props) => {
    return (
        <div>
            <img alt="Loader icon"
                src={loaderSrc} />
        </div>
    );
}

export default Loader;
