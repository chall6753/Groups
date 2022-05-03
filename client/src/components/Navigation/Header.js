import React from 'react'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import {Link, useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {logout} from '../../reducers/sessionsReducer';
import LogoutButton from '../sessions/LogoutButton'

function Header(){
const currentUser = useSelector(state => state.session)
const dispatch = useDispatch()
const navigate = useNavigate()

const handleLogout = (e) => {
    e.preventDefault()
    dispatch(logout())
    navigate('/')
    
}
    return(
        <Navbar bg="light" expand="lg" id='header'>
        <Container>
        
            <Navbar.Brand as={Link} to='/'>Groups</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                {currentUser.id ==''? <Nav.Link as={Link} to="/login">Login</Nav.Link>: <Nav.Link onClick={handleLogout}>Logout</Nav.Link>}
                {currentUser.id ==''? <Nav.Link as={Link} to="/signup">Signup</Nav.Link>: null}
                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
                
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>

    )
}

export default Header