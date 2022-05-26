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
        <Navbar id='header'>
            <Container id='header-content'>
                <div style={{gridColumnStart: '2', background: 'rgba(255,255,255,0.5)'}}>
                  <Navbar.Brand as={Link} to='/'>Groups</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    {currentUser.id ==''? <Nav.Link as={Link} to="/login">Login</Nav.Link>: <Nav.Link onClick={handleLogout}>Logout</Nav.Link>}
                    {currentUser.id ==''? <Nav.Link as={Link} to="/signup">Signup</Nav.Link>: null}
                    </Nav>   
                </div>   
            </Container>
        </Navbar>
    )
}

export default Header