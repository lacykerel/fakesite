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
      arrows: false,
      dots: true,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            dots: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            dots: true,
          }
        },{
          breakpoint: 992,
          settings: {
            dots: true
          }
        }
      ]
    };

    return (
      <section className={styles.video}>
      <div className={styles['loader-wrap']}>
       <div className={this.state.videosLoading ? styles.show : styles.hide}><span className={styles.loader}></span> Loading videos...</div>
       </div>
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
          <p className={this.state.videosLoading ? styles.hide : styles['show-for-phone']}>Scroll to view more videos</p>
        </div>
      </section>
    )
  }
}