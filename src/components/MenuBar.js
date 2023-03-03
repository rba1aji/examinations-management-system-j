import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AppState } from '../reducers/AppContextProvider'
import Login from './Login'
import LoggedinMenu from './LoggedinMenu'

export default function MenuBar() {
  const { user } = AppState()
  return (
    <>
      <Navbar collapseOnSelect bg="info" expand="lg" fixed="top" className='py-1'>
        <Container className='border-dark'>
          <span className="">
            logo
          </span>
          <p
            style={{ fontWeight: 'bold', fontSize: 25.25, letterSpacing: 3 }}
            className="h1 mb-0 ps-3 me-auto"
          >
            <Link to='/ '
              className='text-decoration-none ps-5 text-dark'
            >
              COEAMS
            </Link>
          </p>

          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            style={{ border: 'none' }}
          />
          <Navbar.Collapse >
            <Nav className="ms-auto text-white text-bolder">

              {
                user &&
                <LoggedinMenu />
              }
              {
                !user && <Login />
              }

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}