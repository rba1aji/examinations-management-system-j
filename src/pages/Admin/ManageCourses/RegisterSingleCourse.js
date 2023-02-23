import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { AppState } from '../../../reducers/AppContextProvider';
import axios from 'axios';
import { serverurl } from '../../../reducers/Constants';

function MyVerticallyCenteredModal(props) {
    const { degrees, branches } = AppState();
    const [newCourse, setNewCourse] = useState({
        id: '',
        name: '',
        credits: '',
        degreeid: '',
        brancheid: '',
        semester: '',
        batch: ''
    });
    const [selectedDegree, setSelectedDegree] = useState([]);
    const [selectedBranch, setSelectedBranch] = useState([]);
    const { onHide } = props;


    async function handleRegisterCourse(e) {
        e.preventDefault();
        console.log(newCourse, selectedBranch);
        await axios({
            method: 'post',
            url: serverurl + '/courses/register',
            data: newCourse
        })
            .then(res => {
                onHide();
                alert(res.data.course.id + " is registered")
                setNewCourse({
                    id: '',
                    name: '',
                    credits: '',
                    degreeid: '',
                    brancheid: '',
                    semester: '',
                    batch: ''
                })
            })
            .catch(err => alert(err))
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            backdrop='static'
        >
            <Modal.Header closeButton style={{
                padding: '10px 20px'
            }}>
                Register a course
            </Modal.Header>
            <Modal.Body >
                <Form className='bg-light'
                    onSubmit={handleRegisterCourse}
                    style={{
                        margin: '0 5vw',
                        borderRadius: '10px',
                        border: '1px solid #adb5bd',
                    }}>
                    <table style={{
                        width: '100%'
                    }}><tbody><tr>
                        <td style={{
                            width: '50%',
                            padding: '2% 5% 2% 5%'
                        }}>
                            {
                                [
                                    {
                                        label: 'Course ID',
                                        placeholder: 'Enter course id',
                                        type: 'text',
                                        value: newCourse.id,
                                        onChange: (e) => setNewCourse({ ...newCourse, id: e.target.value }),
                                        required: true
                                    },
                                    {
                                        label: 'Course name',
                                        placeholder: 'Enter course name',
                                        type: 'text',
                                        value: newCourse.name,
                                        onChange: (e) => setNewCourse({ ...newCourse, name: e.target.value }),
                                        required: true
                                    },
                                    {
                                        label: 'Course credits',
                                        placeholder: 'Enter course credits',
                                        value: newCourse.credits,
                                        onChange: (e) => setNewCourse({ ...newCourse, credits: e.target.value }),
                                        required: true,
                                        type: 'number'
                                    }
                                ].map((item, index) => {
                                    return (
                                        <Form.Group className="mb-3" key={index} >
                                            <Form.Label>{item.label}</Form.Label>
                                            <Form.Control placeholder={item.placeholder}
                                                value={item.value} onChange={item.onChange}
                                                required={item.required}
                                                type={item.type}
                                            />
                                        </Form.Group>
                                    )
                                })
                            }
                        </td>
                        <td style={{
                            width: '50%',
                            padding: '2% 5% 2% 5%',
                        }}>
                            <Form.Group className="mb-3" >
                                <Form.Label>Semester</Form.Label>
                                <Form.Control
                                    placeholder='Course for which sem'
                                    value={newCourse.semester}
                                    onChange={(e) => setNewCourse({ ...newCourse, semester: e.target.value })}
                                    required={true}
                                    type='number'
                                />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Label>Degree and Branch</Form.Label>
                                <Row>
                                    <Col>
                                        <Form.Select
                                            value={newCourse.degreeid}
                                            onChange={(e) => {
                                                setNewCourse({ ...newCourse, degreeid: e.target.value });
                                                setSelectedDegree(degrees.find(degree => degree.id === e.target.value));
                                            }}
                                            required={true}
                                        >
                                            <option value=''>Select degree</option>
                                            {
                                                degrees.map((degree, index) => (
                                                    <option key={index} value={degree.id}>{degree.name}</option>
                                                ))
                                            }
                                        </Form.Select>
                                    </Col>
                                    <Col>
                                        <Form.Select
                                            value={newCourse.brancheid}
                                            onChange={(e) => {
                                                setNewCourse({ ...newCourse, brancheid: e.target.value });
                                                setSelectedBranch(branches.filter(branch => branch.id === e.target.value)[0]);
                                            }}
                                            required={true}>
                                            <option value=''>Select branch</option>
                                            {
                                                branches.filter(b => b.degreeid === selectedDegree?.id)?.map((branch, index) => (
                                                    <option key={index} value={branch.id}>{branch.id}</option>
                                                ))
                                            }
                                        </Form.Select>
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Students Batch</Form.Label>
                                <Form.Control
                                    placeholder='yyyy-YYYY'
                                    value={newCourse.batch}
                                    onChange={(e) => setNewCourse({ ...newCourse, batch: e.target.value })}
                                    required={true}
                                    type='text'
                                />
                            </Form.Group>
                        </td>
                    </tr></tbody></table>
                    <div className='text-center pb-3'>
                        <Button type='submit' variant='info'>Register</Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal >
    );
}

export default function RegisterSingleCourse() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <Button variant="info" onClick={() => setModalShow(true)}>
                Register Single Course
            </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}
