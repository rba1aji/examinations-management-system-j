import axios from "axios";
import { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { serverurl } from "../../../reducers/Constants";

export default function SelectBatch(props) {
    const [batches, setBatches] = useState([]);
    const { setSelectedBatch, selectedCourse, selectedExam } = props;

    useEffect(() => {
        if (selectedCourse?.id) {
            axios({
                method: 'GET',
                url: serverurl + '/exambatches/getByBranchidExamidCourseid',
                params: {
                    branchid: selectedCourse?.branchid,
                    examid: selectedExam?.id,
                    courseid: selectedCourse?.id
                },
                headers: { 'Authorization': 'Bearer ' + window.localStorage.getItem('token') }
            })
                .then(res => {
                    setBatches(res.data.examBatches)
                    console.log("batches are fetched", res.data);
                })
                .catch(err => alert(err.response.data.message))
        }
    }, [selectedCourse, selectedExam]);

    if (!selectedCourse?.id) return <></>

    return (
        <>
            <Dropdown className="d-inline" autoClose="inside"
                onSelect={(batchid) => {
                    setSelectedBatch(batches.find(e => e.id == batchid))
                    console.log("batch selected", batchid)
                }}
            >
                <Dropdown.Toggle id="dropdown-autoclose-inside" style={{
                    wordWrap: 'break-word'
                }}
                    variant='info'
                >
                    Select Batch
                </Dropdown.Toggle>

                <Dropdown.Menu >
                    {
                        batches?.map((b, ind) => {
                            return (
                                <Dropdown.Item
                                    key={ind}
                                    eventKey={b.id}
                                >
                                    {b.name}
                                </Dropdown.Item>
                            )
                        })
                    }
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}