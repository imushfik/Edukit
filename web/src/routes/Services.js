import React from 'react'
import {Container, Row, Col, Card, Nav, Button } from "react-bootstrap";
import Sidebar from '../dashboad/Sidebar';
import FigureImage from 'react-bootstrap/FigureImage';

function Services () {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col xs={2} id="sidebar-wrapper">      
                        <Sidebar />
                    </Col>
                    <Col xs={10} id="page-content-wrapper">
                        <div className="mt-3 ">
                            <h3>Services</h3>
                            <hr/>
                            </div>
                            <h4>Calculate CGPA</h4>
                            <br/>
                            <h5>1st Semester</h5>
                            <br/>
                            <div className='cgpa-card'>
                            <Card  style={{ width: '18rem', float: 'left' }}>
                            <Card.Body>
                                Course Name
                                
                            </Card.Body>
                            </Card>
                            <Card  style={{ width: '18rem', float: 'left' }}>
                            <Card.Body className='btn  dropdown-toggle'>
                                Grade
                                
                            </Card.Body>
                            </Card>
                            <Card  style={{ width: '18rem', float: 'left'  }}>
                            <Card.Body>
                                Credit
                                
                            </Card.Body>
                            </Card>
                            </div>
                            

                            <div className='cgpa-card'>
                            <Card  style={{ width: '18rem', float: 'left' }}>
                            <Card.Body>
                                Course Name
                                
                            </Card.Body>
                            </Card>
                            <Card  style={{ width: '18rem', float: 'left' }}>
                            <Card.Body className='btn  dropdown-toggle'>
                                Grade
                                
                            </Card.Body>
                            </Card>
                            <Card  style={{ width: '18rem', float: 'left'  }}>
                            <Card.Body >
                                Credit
                                
                            </Card.Body>
                            </Card>
                            </div>
                            
                            <div className='cgpa-card'>
                            <Card  style={{ width: '18rem', float: 'left' }}>
                            <Card.Body>
                                Course Name
                                
                            </Card.Body>
                            </Card>
                            <Card  style={{ width: '18rem', float: 'left' }}>
                            <Card.Body className='btn  dropdown-toggle'>
                                Grade
                                
                            </Card.Body>
                            </Card>
                            <Card  style={{ width: '18rem', float: 'left'  }}>
                            <Card.Body>
                                Credit
                                
                            </Card.Body>
                            </Card>
                            </div>
                            <div className="cgpa-add-crs">
                            <Button variant="success"> + Add Course</Button>{' '}
                            </div>
                            <div className='current-cgpa'>
                            1st semester GPA: 0.00
                            </div>
                            
                            
                    </Col>
                    
                </Row>
            </Container>
            
        </div>
    )
}

export default Services;