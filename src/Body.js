import React from 'react';
import PodcastPlayer from '@mrpollard/react-rss-podcast-player';

import logo from './logo.svg';
import './App.css';

function Body() {
    return (
        <div className="Body">
            <PodcastPlayer url={'https://anchor.fm/s/174c6e24/podcast/rss'} />
        </div>
    );
}

export default Body;