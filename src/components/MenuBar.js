import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { adminRoutes, facultyRoutes, studentRoutes } from '../reducers/Routes'
import { Link } from 'react-router-dom'

export default function MenuBar() {
  return (
    <>
      <Navbar collapseOnSelect bg="info" expand="lg" fixed="top" className='py-2'>
        <Container className='border-dark'>
          <span className="">
            logo
          </span>
          <p
            style={{ fontWeight: 'bold', fontSize: 25, letterSpacing: 3 }}
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

              <NavDropdown title="Student" className='text-white ps-3'
                style={{
                  fontSize: '100%',
                  fontWeight: '600'
                }} >
                {
                  studentRoutes.map((item, index) => {
                    return <Link to={item.path}
                      key={index}
                      className='text-decoration-none'
                    >
                      <NavDropdown.Item
                        href={item.path} >
                        {item.title}
                      </NavDropdown.Item>
                    </Link>
                  })
                }
              </NavDropdown>


              <NavDropdown title="Faculty" className='text-white ps-3'
                style={{
                  fontSize: '100%',
                  fontWeight: '600'
                }} >
                {
                  facultyRoutes.map((item, index) => {
                    return <Link to={item.path}
                      key={index}
                      className='text-decoration-none'
                    >
                      <NavDropdown.Item
                        href={item.path} >
                        {item.title}
                      </NavDropdown.Item>
                    </Link>
                  })
                }
              </NavDropdown>

              <NavDropdown title="Admin" className='ps-3'
                style={{
                  fontSize: '100%',
                  fontWeight: '600'
                }}
              >
                {
                  adminRoutes.map((item, index) => {
                    return <Link to={item.path}
                      key={index}
                      className='text-decoration-none'
                    >
                      <NavDropdown.Item
                        href={item.path}
                      >
                        {item.title}
                      </NavDropdown.Item>
                    </Link>
                  })
                }
              </NavDropdown>


            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}