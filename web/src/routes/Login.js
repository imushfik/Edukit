import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import image from '../assets/images/image.svg'
import {Col, Container, Row, Form, Button} from "react-bootstrap"

function Login () {
    return (
        <div style={{backgroundColor:"#CAE2E5", minHeight: "100vh"}}>
            <Navbar/>
            <div className="container-fluid nav-bg">
                <div className="row">
                    <div className="col-8 mx-auto">
                        <div className="row g-3">  
                            
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <form>
                                <div className="col-md-8">
                                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                </div>
                                <div className="col-md-8">
                                    <label for="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                                </div>
                                <br/>
                                <div className="col-8">
                                    <button type="submit" className="btn btn-primary">Sign in</button>
                                </div>
                                </form>
                                
                            </div>
                            <div className="col-lg-6 order-1 order-lg-1 header-img">
                                <img className="reg-image" src={image}  alt="home" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>

        </div>
    )
}

export default Login;