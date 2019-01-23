import * as React from 'react';
//import ScrollImage from '../Images/scroll-icon.svg';
import { Link, animateScroll as scroll } from "react-scroll";
import '../header/styles/Menu.scss';

export default class Menu extends React.Component {
    // scrollToTop = () => {
    //     scroll.scrollToTop();
    // };

    render() {
        return (
            <nav className="menu">
                <div className="menu-content">
                    {/* <img src={ScrollImage}
                        className="menu-scroll-image"
                        alt="Scroll to top"
                        onClick={this.scrollToTop} /> */}
                    <ul className="menu-items">
                        <li className="menu-item">
                            <Link
                                activeClass="active"
                                to="homeSection"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>
                                Home
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link
                                activeClass="active"
                                to="myWorkSection"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>
                                My Work
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link
                                activeClass="active"
                                to="aboutSection"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>
                                About
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link
                                activeClass="active"
                                to="contactSection"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}