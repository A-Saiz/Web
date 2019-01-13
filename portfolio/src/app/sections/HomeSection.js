import React, { Component } from 'react';
import '../sections/styles/HomeSection.css';
import Menu from '../header/Menu';
import HeaderLinks from '../header/HeaderLinks';
import Rectangle from '../Images/rectangle.svg';
import SmallCircle from '../Images/small-circle.svg';
import LargeCircle from '../Images/large-circle.svg';
import OutOfBox from '../Images/out-of-the-box.svg';

export default class HomeSection extends Component {
  render() {
    return (
      <div className="home">
        <Menu />
        <HeaderLinks />
        <img className="rectangle-image" src={Rectangle} alt="rectangle"/>
        <img className="small-circle-image" src={SmallCircle} alt="small rectangle"/>
        <img className="large-circle-image" src={LargeCircle} alt="large rectangle"/>
        <img className="out-of-box-image" src={OutOfBox} alt="man in box"/>
        <div className="caption-section">
          <h1>Abel Saiz</h1>
          <h3>Front-end Developer and QA</h3>
          <p>Where thinking outside of the box is norm and <br />
            questioning provides better solutions for products
          </p>
          <a href="https://github.com/A-Saiz" target="blank">See projects</a>
        </div>
        <div className="rectangle"></div>
      </div>
    )
  }
}
