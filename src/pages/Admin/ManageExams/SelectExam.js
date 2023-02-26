import axios from "axios";
import { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { serverurl } from "../../../reducers/Constants";

export default function SelectExam(props) {
    const [exams, setExams] = useState([]);
    const { setSelectedExam } = props;

    useEffect(() => {
        axios({
            method: 'GET',
            url: serverurl + '/exams/getAll'
        })
            .then(res => {
                setExams(res.data.exams)
                console.log("exams are fetched", res.data);
            })
            .catch(err => console.log(err))
    }, []);


    return (
        <>
            <Dropdown className="d-inline" autoClose="inside" onSelect={(examid) => {
                setSelectedExam(exams.find(e => e.id == examid))
                // console.log('type', typeof (exams[0].id), typeof (examid))
            }}>
                <Dropdown.Toggle id="dropdown-autoclose-inside" style={{
                    wordWrap: 'break-word'
                }}
                    variant='info'
                >
                    Select Exam
                    {/* Exam: {selectedExam?.name ? selectedExam.name : 'select'} */}
                </Dropdown.Toggle>

                <Dropdown.Menu >
                    {
                        exams?.map((exam, ind) => {
                            return (
                                <Dropdown.Item
                                    key={ind}
                                    eventKey={exam.id}
                                >
                                    {exam.name}
                                </Dropdown.Item>
                            )
                        })
                    }
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}