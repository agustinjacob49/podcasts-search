import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';

const showLoader = (className) => {
    return (
      <div className={`${className} skeleton`} />
    );
};

const Image = ({ src, className }) => {
    const [loading, setLoading] = useState(true);

    return <>
      <div style={{display: loading ? "block" : "none"}}>
         {showLoader(className)}
      </div>
      <div style={{display: loading ? "none" : "block"}}>
          <img 
            alt="cover"
            className={className}
            src={src}
            onLoad={() => setLoading(false)}
          /> 
      </div>
    </>;
};

Image.propTypes = {
  src: PropTypes.string,
  className: PropTypes.string,
};

export default memo(Image);