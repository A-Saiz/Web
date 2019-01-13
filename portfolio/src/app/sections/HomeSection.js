import React, { Component } from 'react';
import '../sections/styles/HomeSection.css';
import Menu from '../header/Menu';
import HeaderLinks from '../header/HeaderLinks';
import Rectangle from '../Images/rectangle.svg';
import OutOfBox from '../Images/out-of-the-box.svg';

export default class HomeSection extends Component {
  render() {
    return (
      <div className="home">
        <Menu />
        <HeaderLinks />
        <div><img className="rectangle-image" src={Rectangle} alt="rectangle"/></div>
        <div><img className="out-of-box-image" src={OutOfBox} alt="Man in box"/></div>
        <div className="rectangle"></div>
      </div>
    )
  }
}
