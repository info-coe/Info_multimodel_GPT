import React from 'react';

const VideoPlayer = ({ src, controls = true, loop = false, muted = true }) => {
    return (
        <video 
            src={src} 
            autoplay 
            controls={controls} 
            loop={loop} 
            muted={muted} 
            style={{ width: '100%', height: 'auto' }} // Optional styling
        >
            Your browser does not support the video tag.
        </video>
    );
};

export default VideoPlayer;
