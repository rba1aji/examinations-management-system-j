import axios from "axios"
import { useEffect, useState } from "react"
import { Form, Table } from "react-bootstrap";
import { useParams } from "react-router-dom"
import Timer from "../../components/Timer";
import { serverurl } from "../../reducers/Constants"

export default function Exam() {
    const { examBatchId } = useParams();
    const [examBatch, setExamBatch] = useState();
    const [students, setStudents] = useState([]);
    const marksInWords = ["ZERO", "ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE", "TEN"]
    const [remTime, setRemTime] = useState('');
    const [marks, setMarks] = useState([])
    const [data, setData] = useState([])


    useEffect(() => {
        axios({
            method: 'get',
            url: serverurl + '/exambatches/getById/' + examBatchId
        })
            .then(res => {
                setExamBatch(res.data.examBatch)
                console.log(res.data)
            })
            .catch(err => console.log(err.response.data.message))
    }, [examBatchId])

    useEffect(() => {
        if (examBatch) {
            axios({
                method: 'get',
                url: serverurl + '/students/getByStartidEndid',
                params: {
                    startid: examBatch.startStudentid,
                    endid: examBatch.endStudentid
                }
            })
                .then(res => {
                    setStudents(res.data.students)
                })
                .catch(err => console.log(err.response.data.message))
        }
    }, [examBatch])


    useEffect(() => {
        marks.length > 0 ?
            setData(marks)
            :
            setData(
                students.map(s => ({
                    studentid: s.id,
                    attendance: false,
                    mark: 0,
                    examid: examBatch.examid,
                    courseid: examBatch.courseid
                }))
            )
    }, [students, examBatch, marks])

    useEffect(() => {
        if (data.length === 0) return;
        axios({
            method: 'put',
            url: serverurl + '/marks/updateForList',
            data: data
        })
            .then(res => console.log(res.data.message))
            .catch(err => console.log(err.message))
    }, [data])

    // useEffect(() => {
    //     console.log(data)
    // }, [data])

    useEffect(() => {
        if (examBatch?.id) {
            axios({
                method: 'get',
                url: serverurl + '/marks/getByBatchidExamidCourseid',
                params: {
                    batchid: examBatch?.id,
                    examid: examBatch?.examid,
                    courseid: examBatch?.courseid
                }
            })
                .then(res => {
                    setMarks(res.data.marks)
                    console.log(res.data)
                })
                .catch(err => console.log(err.response.data.message))
        }
    }, [examBatch])

    return (
        <div style={{
            margin: '0 5vw'
        }}>
            <br />
            <Timer
                endtime={examBatch?.endtime}
                remTime={remTime}
                setRemTime={setRemTime}
            />
            <div style={{
                margin: '0 2.5vw'
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
                                            (data.find(m => m.studentid === st.id)?.mark + "").split("")?.map((i) => marksInWords[i] + " ")
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