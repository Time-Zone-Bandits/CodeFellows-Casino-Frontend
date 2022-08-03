// 'use strict';
import {Component} from 'react';
import {Accordion} from 'react-bootstrap';
import mandyPic from './img/mandy-pic.jpg';
import joshPic from './img/josh-headshot.jpg';
import ajPic from './img/aj-headshot.jpg';
import mandelaPic from './img/mandela-headshot.jpg';

class About extends Component {


  render() {
    return (
      <>
      <h3 id="about">About Team Time Zone Bandits</h3>
      <div>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <img alt="head shot" src={joshPic} className="headshot"/>
              <h2>Joshua Frazer</h2>
            </Accordion.Header>
            <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <img alt="head shot" src={ajPic} className="headshot"/>
              <h2>Anthony Johnson</h2>
            </Accordion.Header>
            <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <img alt="head shot" src={mandyPic} className="headshot"/>
              <h2>Mandy Mason</h2>
            </Accordion.Header>
            <Accordion.Body>
            Mandy is a Software Developer who started her coding journey through Code Fellows in the Spring of 2022. She lives in Port Saint Lucie, Florida with her husband, Daniel and their cat Gizmo. From 2014-2022 Mandy taught K-12 general music, band, and choir in Tennessee and Florida, and hopes to bring her leadership and communication skills from the education field into the tech industry. She loves games, going to the beach, and helping other devs fix their bugs! 
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <img alt="head shot" src={mandelaPic} className="headshot"/>
              <h2>Mandela Steele-Dadzie</h2>
            </Accordion.Header>
            <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      </>
    )
  }

}

export default About;