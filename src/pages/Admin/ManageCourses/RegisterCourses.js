import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import * as XLSX from 'xlsx'
import axios from "axios";
import { serverurl } from '../../../reducers/Constants';

function MyVerticallyCenteredModal(props) {
    const [file, setFile] = useState(null);
    const { onHide } = props;

    function sendToServer(data) {
        console.log(data)
        axios({
            method: 'post',
            url: serverurl + '/courses/registerMultiple',
            data: data
        })
            .then(async (res) => {
                await onHide();
                alert(res.data.message)
            })
            .catch(async err => {
                alert(err.message)
                console.log(err)
            })
    }

    function aoaToJson(aoa) {
        const json = [];
        const headers = aoa[0]
        for (let i = 1; i < aoa.length; i++) {
            const obj = {};
            for (let j = 0; j < headers.length; j++) {
                obj[headers[j]] = aoa[i][j];
            }
            json.push(obj);
        }
        return json;
    }

    function handleRegisterMultiple(e) {
        e.preventDefault();
        if (!(file.name?.endsWith(".csv") || file.name?.endsWith(".xlsx"))) {
            alert("Please upload a valid file");
            return;
        }
        const fileReader = new FileReader();
        fileReader.readAsArrayBuffer(file);
        fileReader.onload = async (e) => {
            const bufferArray = e.target.result;
            const wb = XLSX.read(bufferArray, { type: "buffer" }); //workbook worksheet
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            let aoaData = [];
            aoaData = XLSX.utils.sheet_to_json(ws, { header: 1, raw: false });
            sendToServer(aoaToJson(aoaData));
        }
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
                <div className=''>
                    Register Courses
                </div>
            </Modal.Header>
            <Modal.Body >
                <div className='text-center'>Drop an Excel/CSV file</div>
                <br />
                <div className='bg-light'
                    style={{
                        margin: '0 15vw',
                        borderRadius: '10px',
                        border: '1px solid #adb5bd'
                    }}>
                    <Form className='text-center pt-4 pb-3 '
                        onSubmit={handleRegisterMultiple}
                    >
                        <input type='file'
                            onChange={(e) => setFile(e.target.files[0])}
                            style={{
                                color: 'darkgreen'
                            }}
                            required
                        />
                        <br />
                        <br />
                        <Button type='submit'
                            className="ms-3 py-1"
                            disabled={!file}
                        >Register</Button>
                    </Form>
                </div>
                <br />
                {`file column names should be: { id, name, credits, degreeid, branchid, semester, batch } `}
            </Modal.Body>
        </Modal >
    );
}

export default function RegisterMultipleCourses() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Register Courses
            </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}
