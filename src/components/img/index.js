import React, { useState } from 'react';

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
            onLoad={() => setLoading(false)} />
      </div>
    </>;
};

export default Image;