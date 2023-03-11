import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import ChangePassword from '../../components/ChangePassword';

import { ListGroup } from "react-bootstrap"
import { Link } from "react-router-dom";
import { adminWorkspaceRoutes } from "../../reducers/Routes";
import ManageStudents from './ManageStudents';
import ManageFaculties from './ManageFaculties';
import ManageCourses from './ManageCourses';
import ManageExams from './ManageExams';

export default function AdminWorkspace() {
    const components = [<ManageStudents />, <ManageFaculties />, <ManageCourses />, <ManageExams />, <ChangePassword />];
    const [key, setKey] = useState(0);
    return (
        <table style={{
            width: '100%',
            height: '100%',
        }}>
            <tbody><tr className=''>
                <td style={{
                    width: '15%',
                    height: '95vh',
                    backgroundColor: 'azure'
                }}
                    className='align-top pt-5 px-3 border-end'
                >
                    <Nav defaultActiveKey="exams" className=' '
                        onSelect={(ekey) => {
                            setKey(ekey);
                        }}>
                        {
                            ['Manage Students', 'Manage Faculties', 'Manage Courses', 'Manage Exams', 'Change Password']
                                .map((item, index) => {
                                    return (
                                        <Nav.Link
                                            eventKey={index}
                                            className='text-dark w-100'
                                            key={index}
                                        >
                                            <Button variant={parseInt(key) === index ? 'info' : ''}
                                                className='w-100 py-1 my-1'
                                            >
                                                {item}
                                            </Button>
                                        </Nav.Link>
                                    )
                                })
                        }
                    </Nav>
                </td>
                <td className='align-top'>
                    <br />
                    <br />
                    {components[key]}
                </td>
            </tr></tbody>
        </table >
    );
}





function AdminWsorkspace() {

    return (
        <div style={{
            padding: '0 5vw'
        }}>
            <br />
            <br />
            <br />
            <ListGroup>
                {
                    [...adminWorkspaceRoutes.filter(i => i.title !== "Admin Workspace")]
                        .map((item, index) => {
                            return <Link to={item.path} key={index} className='pb-3 text-decoration-none'>
                                <ListGroup.Item variant="info">{item.title}</ListGroup.Item>
                            </Link>;
                        })
                }
            </ListGroup>
        </div>
    )
}