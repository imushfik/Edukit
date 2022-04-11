import React from 'react'
import {Container, Row, Col, Card, Nav, Button } from "react-bootstrap";
import Sidebar from '../dashboad/Sidebar';
import profile from "../assets/profile.png";

function Profile () {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col xs={2} id="sidebar-wrapper">      
                        <Sidebar />
                    </Col>
                    <Col xs={10} id="page-content-wrapper">
                        <div className="mt-3 ">
                            <h3>Profile</h3>
                            <hr/> 
                        </div>
                        <Row>
                            <Col Col xs={5}>
                                <h4>Mushfikul Islam</h4>
                                <h6>Mail: mushfikul.choyon@mail.com</h6>
                                <h6>Phone: 0177777777</h6>
                            </Col>
                            <Col Col xs={5}>
                                <img src={profile} className="profile-picture" alt="profile" />
                            </Col>

                        </Row>
                        <Button variant="secondary">Edit</Button>
                        <br/>
                        <br/>
                        <h5 className="pro-crs-nm">Active Courses</h5>

                        <Card>
                                <Card.Body className="card-courses">
                                    CSE373 Design and Analysis of Algorithms
                                </Card.Body>
                            </Card>
                            <br/>
                            <Card>
                                <Card.Body  className="card-courses">
                                    ENG111 Public Speaking
                                </Card.Body>
                            </Card>
                            <br/>
                            <Card>
                                <Card.Body  className="card-courses">
                                    CSE498R Research or Internship
                                </Card.Body>
                            </Card>

                    </Col>
                    
                </Row>
            </Container>
        </div>
    )
}

export default Profile;