import React from 'react'
import {Container, Row, Col, Card, Nav, Button} from "react-bootstrap";
import Sidebar from '../dashboad/Sidebar';
import {Link} from 'react-router-dom'

function Courses () {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col xs={2} id="sidebar-wrapper">      
                        <Sidebar />
                    </Col>
                    <Col xs={10} id="page-content-wrapper">
                        <div className="mt-3 ">
                            <h3>Courses</h3>
                            <hr/> 
                        </div>
                        <br/>
                        <h5 className="pro-crs-nm">Courses List</h5><Button variant="primary" className="btn-add-crs"> + Add Course</Button>
                        <br/>
                        <br/>
                        

                            <Card>
                                
                                <Button variant="outline-secondary"><Link to ="/resources" className="button-secondary">CSE373 Design and Analysis of Algorithms</Link> </Button>{' '}
                            </Card>
                            <br/>
                            <Card>    
                                <Button variant="outline-secondary"><Link to ="/resources" className="button-secondary">ENG111 Public Speaking</Link> </Button>{' '}
                            </Card>
                            <br/>
                            <Card>
                                <Button variant="outline-secondary"><Link to ="/resources" className="button-secondary">CSE498R Research or Internship</Link> </Button>{' '}  
                            </Card> 
                        

                    </Col>
                    
                </Row>
            </Container>
        </div>
    )
}

export default Courses;