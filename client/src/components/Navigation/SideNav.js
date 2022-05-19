import React from "react"
import { useDispatch } from "react-redux"
import {Navbar, Nav, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function SideNav(){
    
   
        return(
            <Navbar id="sidenav">
                        <Nav.Link as={Link} to="/" id="sidenav-item">Home</Nav.Link>
                        <Nav.Link as={Link} to="/group_list" id="sidenav-item">Groups</Nav.Link>
                        <Nav.Link as={Link} to="/events" id="sidenav-item">Events</Nav.Link>      
            </Navbar>      
        )
    }

export default SideNav