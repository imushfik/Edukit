import React, { Profiler } from "react";
import { withRouter } from "react-router";
import "./Sidebar.css";
import profile from "../assets/profile.png";
import logout from "../dashboad/logout.svg";
import {Link} from 'react-router-dom'
import { Nav, Navbar, Form, Container, FormControl, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

const Sidebar = props => {
   

    return (
        
        <div id="sidebar">
            <Nav className="col-md-12 d-none d-md-block sidebar">
                <Nav.Item>
                    <Link to = "/profile" className="nav-link" ><img src={profile} className="profile-rounded" alt="profile" /></Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/dashboard" className="side_link">Dashboard</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/courses" className="side_link">Courses</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/services" className="side_link">Services</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/about" className="side_link">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to ="/" className="nav-link"><img src={logout}  width="15" height="25"className="logout"/></Link>
                </Nav.Item>
            </Nav>     
        </div>
        );
  };

  export default Sidebar;