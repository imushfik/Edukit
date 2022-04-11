import React from 'react'
import {Container, Row, Col, Card, Nav, Button } from "react-bootstrap";
import Sidebar from '../dashboad/Sidebar';
import chart from "../assets/chart.png";

function Dashboard () {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col xs={2} id="sidebar-wrapper">      
                        <Sidebar />
                    </Col>
                    <Col xs={10} id="page-content-wrapper">
                        <div className="mt-3 ">
                            <h3>Dashboard</h3>
                            <hr/> 
                        </div>
                        <div>
                            <h5>Working Progress</h5>
                                <Card style={{ width: '24rem' }}>
                                    <Card.Img variant="top" src={chart} />
                                    <Card.Body>
                                        
                                        
                                    </Card.Body>
                                    </Card>

                        </div>
                        <br/>
                        <div>
                            <h5>Work to do</h5>

                            <Card>
                                <Card.Body>Today, February 7
                                    <br/>
                                    <p>ENG111 / Task 3</p>
                                </Card.Body>
                            </Card>
                            <br/>
                            <Card>
                                <Card.Body>Tomorrow, February 8
                                    <br/>
                                    <p>CSE327 / Quiz 1</p>
                                </Card.Body>
                            </Card>
                                

                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Dashboard;