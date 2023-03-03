import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import axios from 'axios';
import { serverurl } from '../../../reducers/Constants';
import { inputFormateDateTime } from '../../../reducers/Utils';

function MyVerticallyCenteredModal(props) {
    const { onHide, selectedCourse, selectedExam, type, prevBatch } = props;
    const [faculties, setFaculties] = useState([])
    let initialVal = {
        id: '',
        name: '',
        startStudentid: '',
        endStudentid: '',
        starttime: new Date(),
        endtime: new Date(),
        facultyid: '',
        venue: '',
        courseid: selectedCourse?.id,
        examid: selectedExam?.id,
        branchid: selectedCourse?.branchid
    }
    if (type === 'edit') {
        initialVal = {
            id: prevBatch.id,
            name: prevBatch.name,
            startStudentid: prevBatch.startStudentid,
            endStudentid: prevBatch.endStudentid,
            starttime: inputFormateDateTime(prevBatch.starttime),
            endtime: inputFormateDateTime(prevBatch.endtime),
            facultyid: prevBatch.facultyid,
            venue: prevBatch.venue,
            courseid: selectedCourse?.id,
            examid: selectedExam?.id,
            branchid: selectedCourse?.branchid
        }
    }

    const [newBatch, setNewBatch] = useState(initialVal);

    async function handleRegisterBatch(e) {
        e.preventDefault();
        // setNewBatch(prev => ({
        //     ...prev,
        //     starttime: new Date(prev.starttime).toLocaleString(),
        //     endtime: new Date(prev.endtime).toLocaleString()
        // }))
        await axios({
            method: type === "create" ? 'post' : 'put',
            url: serverurl + `/exambatches/${type === 'create' ? 'register' : `${prevBatch.id}/update`}`,
            data: newBatch
        })
            .then(res => {
                alert(res.data.message)
                onHide()
                props.setRender(prev => prev + 1)
            })
            .catch(err => alert(err.message))

        console.log('update batch', newBatch)

    }

    useEffect(() => {
        axios({
            method: 'get',
            url: serverurl + '/faculties/getAll'
        })
            .then((res) => setFaculties(res.data.faculties))
            .catch((err) => alert(err.message))
    }, [])

    return (
        <Modal
            {...props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            backdrop='static'
            style={{
                backgroundColor: 'rgba(0,0,0,0.5)'
            }}
        >
            <Modal.Header closeButton style={{
                padding: '10px 20px'
            }}>
                {type === 'create' ? 'Create ' : 'Edit '}Batch
            </Modal.Header>
            <Modal.Body>
                <Form className='bg-light p-4'
                    onSubmit={handleRegisterBatch}
                    style={{
                        margin: '2vh 3vw',
                        borderRadius: '10px',
                        border: '1px solid #adb5bd',
                    }}>
                    <Row>

                        <Col>
                            <Form.Group className="mb-3 text-center" >
                                <Form.Label className='pb-2'>Batch name</Form.Label>
                                <Form.Control
                                    type="text" placeholder="Batch name" required
                                    value={newBatch.name}
                                    onChange={(e) => setNewBatch(prev => ({ ...prev, name: e.target.value }))}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3 text-center">
                                <Form.Label className='pb-2'> Student register no</Form.Label>
                                <Form.Control type="number" placeholder="Start reg no" required
                                    value={newBatch.startStudentid}
                                    onChange={e => setNewBatch(prev => ({ ...prev, startStudentid: e.target.value }))}
                                />
                                to
                                <Form.Control type="number" placeholder="End reg no" className='mt-1' required
                                    value={newBatch.endStudentid}
                                    onChange={e => setNewBatch(prev => ({ ...prev, endStudentid: e.target.value }))}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3 text-center" >
                                <Form.Label className='pb-2'>Time of exam</Form.Label>
                                <Form.Control type="datetime-local" placeholder="start" required
                                    value={newBatch.starttime}
                                    onChange={e => setNewBatch(prev => ({ ...prev, starttime: e.target.value }))}
                                    step="60"
                                />
                                to
                                <Form.Control type="datetime-local" placeholder="end" className='mt-1' required
                                    value={newBatch.endtime}
                                    onChange={e => setNewBatch(prev => ({ ...prev, endtime: e.target.value }))}
                                    step="60"
                                    min={newBatch.starttime}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3 text-center" >
                                <Form.Label className='pb-2'>Faculty</Form.Label>
                                <Form.Select
                                    required
                                    value={newBatch.facultyid}
                                    onChange={(e) => {
                                        setNewBatch(prev => ({ ...prev, facultyid: e.target.value }))
                                    }}
                                >
                                    <option value="" disabled selected>Select Faculty</option>
                                    {
                                        faculties?.map((f, ind) => {
                                            return (
                                                <option
                                                    key={ind}
                                                    value={f.id}
                                                    id={f.id}
                                                >
                                                    {f.fullname}
                                                </option>
                                            )
                                        })
                                    }
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3 text-center" >
                                <Form.Label className='pb-2'>Venue</Form.Label>
                                <Form.Control type="text" placeholder="Venue name" required
                                    value={newBatch.venue}
                                    onChange={e => setNewBatch(prev => ({ ...prev, venue: e.target.value }))}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <div className='text-center pt-2'>
                        <Button variant='info' type='submit'>{type === "create" ? 'Create' : 'Update'} Batch</Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal >
    );
}

export default function CreateOrEditBatch(props) {
    const [modalShow, setModalShow] = useState(false);
    const { selectedCourse, type } = props;


    if (!selectedCourse?.id) return <></>
    return (
        <>
            <Button variant="info" onClick={() => setModalShow(true)}
                className={type === 'edit' ? 'py-0' : 'py-0'}>
                {type === "create" ? 'Create new' : 'Edit'}
            </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                {...props}
            />
        </>
    );
}
