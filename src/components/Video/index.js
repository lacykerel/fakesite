import React, { Component } from 'react';
import axios from 'axios';
import styles from './video.css';

export default class Video extends Component {
  constructor() {
    super();
    this.state = {
      videos: []
    }
  }

  componentDidMount() {
    axios.get('https://vimeo.com/api/v2/channel/staffpicks/videos.json').then(res => {
      const videos = res.data;
      this.setState({videos});
    })
  }

  render() {
    return (
      <div>
        {
          this.state.videos.map(video => 
            <div className="videoInfo" key={video.id}>
              <h2>{video.title}</h2>
              <p dangerouslySetInnerHTML={{ __html: video.description }} />
            </div>
          )
        }
      </div>
    )
  }
}