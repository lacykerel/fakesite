import React, { Component } from 'react';
import axios from 'axios';



export default class Video extends Component {

  componentDidMount() {
    axios.get('./videos.json').then(res => {
      console.log(res.data, 'data');
    })
  }
  render() {
    return (
      <div>
        <h1>Video</h1>
      </div>
    )
  }
}