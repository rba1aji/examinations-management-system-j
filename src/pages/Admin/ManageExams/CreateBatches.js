import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { AppState } from '../../../reducers/AppContextProvider';
import axios from 'axios';
import { serverurl } from '../../../reducers/Constants';

function MyVerticallyCenteredModal(props) {
    const { onHide } = props;
    const [batches, setBatches] = useState([]);

    async function handleRegisterBatches(e) {
        e.preventDefault();
    }

    return (
        <Modal
            {...props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            backdrop='static'
        >
            <Modal.Header closeButton style={{
                padding: '10px 20px'
            }}>
                Create Batches
            </Modal.Header>
            <Modal.Body >
                <Form className='bg-light p-4'
                    // onSubmit={ }
                    style={{
                        margin: '2vh 3vw',
                        borderRadius: '10px',
                        border: '1px solid #adb5bd',
                    }}>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3 text-center" controlId="formBasicEmail" >
                                <Form.Label>Batch name</Form.Label>
                                <Form.Control type="text" placeholder="Batch name" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3 text-center" controlId="formBasicEmail">
                                <Form.Label>Student register no</Form.Label>
                                <Form.Control type="text" placeholder="Start reg no" className='mb-1' />
                                <Form.Control type="text" placeholder="End reg no" className='mb-1' />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3 text-center" controlId="formBasicEmail">
                                <Form.Label>Time of exam</Form.Label>
                                <Form.Control type="datetime-local" placeholder="start" className='mb-1' />
                                <Form.Control type="datetime-local" placeholder="end" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3 text-center" controlId="formBasicEmail" >
                                <Form.Label>Faculty</Form.Label>
                                <Form.Control type="text" placeholder="Faculty name" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3 text-center" controlId="formBasicEmail" >
                                <Form.Label>Venue</Form.Label>
                                <Form.Control type="text" placeholder="Venue name" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <div className='text-center pt-2'>
                        <Button variant='info'>Create Batch</Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal >
    );
}

export default function CreateBatches(props) {
    const [modalShow, setModalShow] = useState(false);
    const { selectedCourse } = props;

    if (!selectedCourse?.id) return <></>
    return (
        <>
            <Button variant="info" onClick={() => setModalShow(true)}>
                Create Batches
            </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}
