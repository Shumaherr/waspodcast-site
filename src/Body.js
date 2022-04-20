import React from 'react';
import PodcastPlayer from '@mrpollard/react-rss-podcast-player';

import logo from './logo.svg';
import './App.css';

function Body() {
    return (
        <div className="Body">
            <PodcastPlayer url={'https://cloud.mave.digital/37800'} />
        </div>
    );
}

export default Body;
