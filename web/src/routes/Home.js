import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import edukit from '../assets/images/edukit.svg'

function Home () {
    return (
        <div style={{backgroundColor:"#CAE2E5", minHeight: "100vh"}}>
            <Navbar/>
            <div className="container-fluid nav-bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">  
                            <div className="col-lg-8 order-2 order-lg-1 header-img">
                                <img className="home-image" src={edukit}  alt="home" />
                            </div>
                             <div className="col-md-4 pt-5 pt-lg-0 order-1 order-lg-2 d-flex justify-content-center flex-column">
                                <h1 className="title">TO DEVELOP A COMPLETE PLAN FOR ALL TYPES OF EDUCATIONAL AID</h1>  
                                <div className="mt-3">
                                    <Link to ="/register" className="btn-join">JOIN NOW</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>

    </div>
    )
}

export default Home;