import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { AppState } from '../../../reducers/AppContextProvider';
import axios from 'axios';
import { serverurl } from '../../../reducers/Constants';

function MyVerticallyCenteredModal(props) {
    const { degrees, branches } = AppState();
    const [newExam, setNewExam] = useState({
        id: '',
        name: '',
        semester: '',
        batch: ''
    });
    const [selectedDegree, setSelectedDegree] = useState([]);
    const [selectedBranch, setSelectedBranch] = useState([]);
    const { onHide } = props;

    async function handleRegisterExam(e) {
        e.preventDefault();
        console.log(newExam, selectedBranch);
        await axios({
            method: 'post',
            url: serverurl + '/exams/register',
            data: {
                exam: newExam,
                branchidList: selectedBranch
            }
        })
            .then(res => {
                onHide();
                alert(res.data.message)
                setNewExam({
                    id: '',
                    name: '',
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
                Manage Batches
            </Modal.Header>
            <Modal.Body >
                batch info - edit -faculty
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
            />
        </>
    );
}
