// 'use strict';
import {Component} from 'react';
import {Accordion} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import {Alert} from 'react-bootstrap';
import mandyPic from './img/mandy-pic.jpg';
import joshPic from './img/josh-headshot.jpg';
import ajPic from './img/aj-headshot.jpg';
import mandelaPic from './img/mandela-headshot.jpg';


class About extends Component {


  render() {
    return (
      <>
      <Alert variant="success"  id="about">About Team Time Zone Bandits</Alert>
      <div id="about-content">
        <Accordion alwaysOpen>
          <Accordion.Item eventKey="0" >
            <Accordion.Header >
              <img alt="head shot" src={joshPic} className="headshot"/>
              <h2>Joshua Frazer</h2>
            </Accordion.Header>
            <Accordion.Body>
              Tech professional with 10 years IT experience, retired veteran, passionate about intersection of social sciences and technology, data nerd.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <img alt="head shot" src={ajPic} className="headshot"/>
              <h2>Anthony Johnson</h2>
            </Accordion.Header>
            <Accordion.Body>
              Anthony is a veteran, former LEO, business owner, manager and salesman. He has held a myriad of jobs, which means a myriad of talents! He loves the idea that he is going to work in an industry that values the pursuit of process improvement instead of focusing on "tradition" or the infamous line "this is how we've always done it". 
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
                Technology and Business professional learning to Code with hopes of gaining gainful employment in 2023! Currently living in Denver, CO, Mandela previously worked at DoorDash and Flexport in the Tech space in a Business Development and Pricing capacity. Following Code Fellows, Mandela is looking forward to making the transition into Product!
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Card id="about-card">
          <Card.Title id="about-title">About This Project</Card.Title>
          <Card.Body id="about-body">
            The Code Fellows Casino is Time Zone Bandit's final project for Code 301: Intermediate Software Development. This app is designed for entertainment purposes only. Users can login and out for security, view profile information and transaction history, and of course, play games! Login to play Blackjack, Roulette, and Horse Racing.
          </Card.Body>
        </Card>
      </div>
      </>
    )
  }

}

export default About;