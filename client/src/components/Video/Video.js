import React from 'react';
import YouTube from 'react-youtube';
import "./Video.css";
 
class Video extends React.Component {
  render() {
    const opts = {
      height: '625px',
      width: '100%',
      opacity: '0.5',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        'controls': 0,
        loop: 1
      }
    };
 
    return (
      <YouTube
        videoId="KYGKBgpSV_g?wmode=transparent&rel=0"
        opts={opts}
        onReady={this._onReady}
      />
    );
  }
 
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  }
}

export default Video;