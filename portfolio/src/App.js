import './App.css';
import React, {Component} from 'react';
import Section from './app/Section';
import HomeSection from '../src/app/sections/HomeSection';
import MyWorkSection from '../src/app/sections/MyWorkSection';
import AboutSection from '../src/app/sections/AboutSection';
import ContactSection from '../src/app/sections/ContactSection';

class App extends Component {
  render() {
    //Easily add sections
    return (
      <div className="App">
        <Section
        title=""
        id="homeSection" />
        <HomeSection />
        <Section
        title="My work"
        id="myWorkSection" />
        <MyWorkSection />
        <Section
        title="About"
        id="aboutSection" />
        <AboutSection />
        <Section
        title="Contact"
        id="myWorkSection" />
        <ContactSection />
      </div>
    )
  }
}

export default App;
