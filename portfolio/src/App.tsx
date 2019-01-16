import './App.css';
import * as React from 'react';
import Section from './app/Section';
import HomeSection from './app/sections/HomeSection';
import MyWorkSection from './app/sections/MyWorkSection';
import AboutSection from './app/sections/AboutSection';
import ContactSection from './app/sections/ContactSection';

export default class App extends React.Component {
  render() {
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
        id="contactSection" />
        <ContactSection />
      </div>
    )
  }
}
