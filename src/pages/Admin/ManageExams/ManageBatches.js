import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import { serverurl } from '../../../reducers/Constants';
import { outputFormateDateTime } from '../../../reducers/Utils';
import CreateOrEditBatch from './CreateOrEditBatch';

function MyVerticallyCenteredModal(props) {
    const { selectedCourse, selectedExam } = props;
    const [batches, setBatches] = useState([]);
    const [faculties, setFaculties] = useState([]);
    const [render, setRender] = useState(0);

    useEffect(() => {
        axios({
            method: 'get',
            url: serverurl + '/faculties/getAll',
            headers: { 'Authorization': 'Bearer ' + window.localStorage.getItem('token') }
        })
            .then((res) => setFaculties(res.data.faculties))
            .catch((err) => alert(err.response.data.message))
    }, []);


    useEffect(() => {
        axios({
            method: 'get',
            url: serverurl + '/exambatches/getByBranchidExamidCourseid',
            params: {
                branchid: selectedCourse?.branchid,
                examid: selectedExam?.id,
                courseid: selectedCourse?.id
            },
            headers: { 'Authorization': 'Bearer ' + window.localStorage.getItem('token') }
        })
            .then((res) => {
                console.log("exam batches fetched", res.data);
                setBatches(res.data.examBatches)
            })
    }, [selectedCourse, selectedExam, render])

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
                Manage Batches
            </Modal.Header>
            <Modal.Body style={{
                minHeight: '80vh',
            }}
                className='bg-light'>
                <div className='mx-5  my-1'>
                    <Table className='text-center align-middle bg-white' bordered>
                        <thead>
                            <tr>
                                <th>Batch Name</th>
                                <th>Student Reg no</th>
                                <th>Time of Exam</th>
                                <th>Faculty</th>
                                <th>Venue</th>
                                <th>
                                    <CreateOrEditBatch
                                        selectedExam={selectedExam}
                                        selectedCourse={selectedCourse}
                                        type="create"
                                        setRender={setRender}
                                    />
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                batches.map((b, ind) => {
                                    return (
                                        <tr key={ind}>
                                            <td style={{
                                                // fontSize: '150%'
                                            }}>{b.name}</td>
                                            <td>
                                                {b.startStudentid}<br />to<br />{b.endStudentid}
                                            </td>
                                            <td>
                                                {outputFormateDateTime(b.starttime)}
                                                <br />to<br />
                                                {outputFormateDateTime(b.endtime)}
                                            </td>
                                            <td>
                                                {faculties.find(f => f.id === b.facultyid)?.fullname}
                                            </td>
                                            <td>{b.venue}</td>
                                            <td>
                                                <CreateOrEditBatch
                                                    selectedExam={selectedExam}
                                                    selectedCourse={selectedCourse}
                                                    type="edit"
                                                    prevBatch={b}
                                                    setRender={setRender}
                                                />
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </div>
            </Modal.Body>
        </Modal >
    );
}

export default function ManageBatches(props) {
    const [modalShow, setModalShow] = useState(false);
    const { selectedCourse } = props;

    if (!selectedCourse?.id) return <></>

    return (
        <>
            <Button variant="info" onClick={() => setModalShow(true)}>
                Manage Batches
            </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                {...props}
            />
        </>
    );
}
