import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { adminRoutes, studentRoutes } from '../reducers/Routes'

export default function MenuBar() {
  return (
    <>
      <Navbar collapseOnSelect bg="white" expand="lg" fixed="top" className='border border-1'>
        <Container>
          <span className="mb-1">
            logo
          </span>
          <p
            style={{ fontWeight: 'bold', fontSize: 24, letterSpacing: 2 }}
            className="h1 mb-0 ps-3 me-auto"
          >
            <a href='/ '
              className='text-decoration-none ps-5'
            >
              AMS
            </a>
          </p>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            style={{ border: 'none' }}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">

              <NavDropdown title="Student" >
                {
                  studentRoutes.map((item, index) => {
                    return <NavDropdown.Item
                      key={index}
                      href={item.path} >
                      {item.title}
                    </NavDropdown.Item>
                  })
                }
              </NavDropdown>

              <NavDropdown title="Admin" >
                {
                  adminRoutes.map((item, index) => {
                    return <NavDropdown.Item
                      key={index}
                      href={item.path} >
                      {item.title}
                    </NavDropdown.Item>
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