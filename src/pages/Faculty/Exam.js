import axios from "axios"
import { useEffect, useState } from "react"
import { Button, Form, Table } from "react-bootstrap";
// import { render } from "react-dom";
import { Link, useParams } from "react-router-dom"
import Timer from "../../components/Timer";
import { serverurl } from "../../reducers/Constants"
import { numbersToWords } from "../../reducers/Utils";
import ExamData from "./ExamData";

export default function Exam() {
    const { examBatchId } = useParams();
    const [examBatch, setExamBatch] = useState({});
    const [students, setStudents] = useState([]);
    const [remTime, setRemTime] = useState('');
    const [marks, setMarks] = useState([])
    const [data, setData] = useState([])
    const [examName, setExamName] = useState('');
    const [courseName, setCourseName] = useState('');


    useEffect(() => {   //init marks
        // console.log(examBatch)
        marks.length > 0 ?
            setData(marks)
            :
            setData(
                students.map(s => ({
                    studentid: s.id,
                    attendance: false,
                    mark: 0,
                    examid: examBatch.examid,
                    courseid: examBatch.courseid,
                    branchid: examBatch.branchid
                }))
            )
    }, [students, examBatch, marks])

    useEffect(() => {   //update marks
        // console.log(data)
        if (data.length === 0) return;

        let count = 0;
        data.forEach(d => {
            if (d.mark === 0 && !d.attendance) count++;
        })
        if (count === data.length) return;

        else axios({
            method: 'put',
            url: serverurl + '/marks/updateForList',
            data: data,
            headers: { 'Authorization': 'Bearer ' + window.localStorage.getItem('token') }
        })
            .then(res => console.log(res.data.message))
            .catch(err => console.log(err.message))
    }, [data])


    useEffect(() => {   // set examnames coursenames
        if (examBatch?.examid) {
            axios({
                method: 'get',
                url: serverurl + '/exams/' + examBatch?.examid + '/getName',
                headers: { 'Authorization': 'Bearer ' + window.localStorage.getItem('token') }
            })
                .then(res => {
                    setExamName(res.data.examName)
                })
                .catch(err => console.log(err.response.data.message))

            axios({
                method: 'get',
                url: serverurl + '/courses/' + examBatch?.courseid + '/getName',
                headers: { 'Authorization': 'Bearer ' + window.localStorage.getItem('token') }
            })
                .then(res => {
                    setCourseName(examBatch.courseid + " " + res.data.courseName)
                })
                .catch(err => console.log(err.response.data.message))

        }
    }, [examBatch])


    return (
        <div style={{
            margin: '0 7.5vw'
        }}>
            <ExamData
                examBatchId={examBatchId}
                examBatch={examBatch}
                setExamBatch={setExamBatch}
                setStudents={setStudents}
                setMarks={setMarks}
            />
            <br />
            <Timer
                endtime={examBatch?.endtime}
                remTime={remTime}
                setRemTime={setRemTime}
            />

            <div className="mb-3">
                <span className="pe-4">Batch: {examBatch?.name}</span>
                <span className="pe-4">Exam: {examName}</span>
                <span className="pe-4">Course: {courseName}</span>
                <span className="pe-4">Venue: {examBatch?.venue}</span>
                <span className="pe-4">
                    <Button variant="info" className="ms-auto px-4 py-1"
                        as={Link}
                        to={`/faculty/exam/${examBatchId}/print-1`}
                        target="blank"
                    >
                        Print 1
                    </Button>
                </span>
                <span className="">
                    <Button variant="info" className=" ms-auto px-4 py-1"
                        as={Link}
                        to={`/faculty/exam/${examBatchId}/print-2`}
                        target="blank"
                    >
                        Print 2
                    </Button>
                </span>
            </div>

            <div style={{
                // margin: '0 2.5vw'
            }}>
                <Table bordered>
                    <thead className="bg-info">
                        <tr>
                            <th>Sno</th>
                            <th>Register no</th>
                            <th>Name</th>
                            <th className="text-center">Attendance</th>
                            <th className="text-center">Marks in numbers</th>
                            <th className="text-center">Marks in words</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students.map((st, ind) => (
                                <tr key={ind} className='align-middle'>
                                    <td>{ind + 1}</td>
                                    <td>{st.id}</td>
                                    <td>{st.fullname}</td>
                                    <td className="text-center attendance">
                                        <Form.Check
                                            disabled={remTime === "0 : 0 : 0 : 0"}
                                            checked={data.find(i => i.studentid === st.id)?.attendance}
                                            onChange={(e) => {
                                                let newData = [...data];
                                                newData.find(i => i.studentid === st.id).attendance = e.target.checked;
                                                setData(newData);
                                            }}
                                            size="lg"
                                        />
                                    </td>
                                    <td className="text-center" style={{
                                        width: '250px'
                                    }}>
                                        <Form.Group className="px-5">
                                            <Form.Control
                                                disabled={remTime === "0 : 0 : 0 : 0"}
                                                type='number'
                                                className="py-1 text-center "
                                                style={{
                                                    borderColor: 'black'
                                                }}
                                                value={data.find(m => m.studentid === st.id)?.mark}
                                                onChange={e => {
                                                    const newData = [...data];
                                                    newData.find(m => m.studentid === st.id).mark = e.target.value;
                                                    setData(newData)
                                                }}
                                                min={0}
                                            />
                                        </Form.Group>
                                    </td>
                                    <td className="text-center">
                                        {
                                            numbersToWords(data.find(m => m.studentid === st.id)?.mark)
                                        }
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
            <br />
            <br />
        </div>
    )
}