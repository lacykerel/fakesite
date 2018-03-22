import React, { Component } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import Truncate from 'react-truncate-html';
import styles from './video.css';

export default class Video extends Component {
  constructor() {
    super();
    this.state = {
      videos: [],
      videosLoading: true
    }
  }

  componentDidMount() {
    axios.get('https://vimeo.com/api/v2/channel/staffpicks/videos.json').then(res => {
      const videos = res.data;
      this.setState({videos, videosLoading: false});
    })
  }

  render() {
    const settings = {
      dots: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <section className={styles.video}>
        <div className={this.state.videosLoading ? styles.show : styles.hide}>Yeah we're loading....</div>
        <div className={styles['video-info-wrap']}>
          <Slider {...settings}>
            {
              this.state.videos.map(video =>
                <div key={video.id}>
                  <div className={styles['video-info']} >
                    <h2>{video.title}</h2>
                    <Truncate
                      className={styles['video-copy']}
                      lines={3}
                      dangerouslySetInnerHTML={{ __html: video.description }} />
                  </div>
                  <div className={styles['video-placeholder']}>
                    <a href={video.url} target="_blank" className={styles['video-icon']}></a>
                  </div>
                </div>
              )
            }
          </Slider>
        </div>
      </section>
    )
  }
}