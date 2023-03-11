import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AppState } from '../reducers/AppContextProvider'
import Login from './Login'
import LoggedinMenu from './LoggedinMenu'

export default function MenuBar() {
  const { user } = AppState()
  return (
    <>
      <Navbar collapseOnSelect bg="info" expand="lg" fixed="top" className=''>
        <Container className='p-0'>
          <img src='https://ksrct.ac.in/wp-content/uploads/2020/06/Brand_logo.png' alt='ksr'
            width='42.5' height='37.5' />
          <div
            style={{ fontWeight: 'bold' }}
            className="h1 mb-0 ps-3 me-auto ms-2"
          >
            <Link to='/ '
              className='text-decoration-none text-dark'
            >
              <div style={{
                fontSize: 18,
                letterSpacing: 2,
                paddingBottom: '3px'
              }}
              >
                K.S.Rangasamy College of Technology
              </div>
              <div style={{
                fontSize: 16.5,
                letterSpacing: 1.5
              }}><i>
                  Examinations Management System
                </i>
              </div>
            </Link>
          </div>

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