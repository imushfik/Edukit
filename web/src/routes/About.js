import React from 'react'
import {Container, Row, Col, Card, Nav, Button, Navbar } from "react-bootstrap";
import about from '../assets/images/about.svg';
import Sidebar from '../dashboad/Sidebar';

function About () {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col xs={2} id="sidebar-wrapper">      
                        <Sidebar />
                    </Col>
                    <Col xs={10} id="page-content-wrapper">
                        <div className="mt-3 ">
                            <h3>About</h3>
                            <hr/>
                            </div>
                            <div className="row">
                            <div className="col-lg-5 order-1 order-lg-1">
                                <p>We are willing to develop a Web based application hoping that it will help
                                 to provide all the required  educational assistance in a single platform.
                                 The system will help the students to make a proper plan for all kind of
                                 educational assistance and also contain different interface for each type.
                                </p>
                            </div>
                            
                            <div className="col-lg-5 order-2 order-lg-2 about-image">
                                <img src={about} alt="about" />
                            </div>
                            </div>

                            
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About;