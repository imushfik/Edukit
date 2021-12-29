import React from 'react'
import logo from '../assets/logo/logo.svg'
import {Container, Navbar, Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import {Link} from 'react-router-dom'

function Navs () {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <Link to="/"><a className="navbar-brand"><img className= "navbar-brand" src={logo} alt="icon"/></a></Link>
                    <form className="d-flex">
                    <Link  to="/register"><button className="btn btn-primary" >Sign up</button></Link><div className="divide"/>
                    <Link  to="/login"><button className="btn btn-primary" >Sign in</button></Link>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Navs;