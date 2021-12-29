import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import image from '../assets/images/image.svg'

function Register () {
    return (
        <div style={{backgroundColor:"#CAE2E5", minHeight: "100vh"}}>
            <Navbar/>
            <div className="container-fluid nav-bg">
                <div className="row">
                    <div className="col-8 mx-auto">
                        <div className="row">  
                            
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                <form className="row g-3">
                                    <div className="col-md-4">
                                        <label for="inputEmail4" className="form-label">First Name</label>
                                        <input type="text" className="form-control" id="inputEmail4" placeholder="First Name"/>
                                    </div>
                                    <div className="col-md-4">
                                        <label for="inputPassword4" className="form-label">Last Name</label>
                                        <input type="text" className="form-control" id="inputPassword4" placeholder="Last Name"/>
                                    </div>
                                    <div className="col-8">
                                        <label for="inputAddress" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="inputAddress" placeholder="Email Address"/>
                                    </div>
                                    <div className="col-8">
                                        <label for="inputAddress2" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="inputAddress2" placeholder="Enter a new password"/>
                                    </div>
                                    <div className="col-md-8">
                                        <label for="inputCity" className="form-label">Institution</label>
                                        <input type="text" className="form-control" id="inputCity" placeholder="North South University"/>
                                    </div>
                                    <div className="col-md-8">
                                        <label for="inputState" className="form-label">Gender</label>
                                        <select id="inputState" className="form-select">
                                        <option selected>Male</option>
                                        <option>Female</option>
                                        <option>Other</option>
                                        </select>
                                    </div>
                                    <div className="col-8">
                                        <button type="submit" className="btn btn-primary">Create an account</button>
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

export default Register;