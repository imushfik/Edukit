import React from 'react'
import {Container, Row, Col, Card, Nav, Button, Navbar } from "react-bootstrap";
import Sidebar from '../dashboad/Sidebar';

function Resources () {
    return (
        <div>
            <div>
            <Container fluid>
                <Row>
                    <Col xs={2} id="sidebar-wrapper">      
                        <Sidebar />
                    </Col>
                    <Col xs={10} id="page-content-wrapper">
                        <div className="mt-3 ">
                            <h3>Course Name</h3>
                            </div>
                            <>
                                <br />
                                <Navbar bg="light" variant="light">
                                    <Container>
                                    
                                    <Nav className="me-auto">
                                    <Nav.Link href="#" active>Resources</Nav.Link>
                                    <Nav.Link href="#">Goals</Nav.Link>
                                    <Nav.Link href="#">Reminder</Nav.Link>
                                    </Nav>
                                    </Container>
                                </Navbar>
                                </>
                                <Card>
                                <Card.Body className="card-courses">
                                    Slides
                                    <Button variant="primary" style={{float:'right'}}>Open</Button>{' '}
                                </Card.Body>
                            </Card>
                            <br/>
                            <Card>
                                <Card.Body  className="card-courses">
                                    Course Outline
                                    <Button variant="primary" style={{float:'right'}}>Open</Button>{' '}
                                </Card.Body>
                            </Card>
                            <br/>
                            <Card>
                                <Card.Body  className="card-courses">
                                    Sample Question
                                    <Button variant="primary" style={{float:'right'}}>Open</Button>{' '}
                                </Card.Body>
                            </Card>

                    </Col>
                    </Row>
                    </Container>
                    
            {/* <div className=" medicine-medicine-border d-flex align-items-center mb-4">
                             
                             
                             <div className="ms-5 mt-3 d-flex">
                                  <div>
                                  <h6>Rabifast</h6>
                                   <p className="medicine-grp">Rabiprazol</p>
                                  </div>
                                   <p className="mrp mt-2">25mg</p>
                                   <p className="composition"></p>
                             </div>
                             
                           <div className="ms-auto">
                           <button className="order-btn ms-auto me-3">Select as Out of stock</button>
                           <button className="edit-btn me-3">Edit</button>
                           <button className="delete-btn me-3">Delete</button>
                           </div>
                           
                           </div> */}
        </div>
        </div>
    )
}

export default Resources;