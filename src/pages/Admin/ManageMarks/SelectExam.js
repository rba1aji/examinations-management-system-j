import axios from "axios";
import { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { serverurl } from "../../../reducers/Constants";
import RegisterExam from "./RegisterExam";

export default function SelectExam(props) {
    const [exams, setExams] = useState([]);
    const { selectedExam, setSelectedExam } = props;

    useEffect(() => {
        axios({
            method: 'GET',
            url: serverurl + '/exams/getAll'
        })
            .then(res => setExams(res.data.exams))
            .catch(err => console.log(err))
    }, []);

    return (
        <>
            <Dropdown className="d-inline mx-2" autoClose="inside" onSelect={(examid) => {
                setSelectedExam(exams.find(e => e.id === examid))
            }}>
                <Dropdown.Toggle id="dropdown-autoclose-inside">
                    Exam: {selectedExam?.name ? selectedExam.name : 'select'}
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