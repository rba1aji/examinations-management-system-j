import axios from "axios"
import { useEffect, useState } from "react"
import { Form, Table } from "react-bootstrap";
import { useParams } from "react-router-dom"
import { serverurl } from "../../reducers/Constants"

export default function Exam() {
    const { examBatchId } = useParams();
    const [examBatch, setExamBatch] = useState();
    const [students, setStudents] = useState([]);
    const marksInWords = ["ZERO", "ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE", "TEN"]
    const [remTime, setRemTime] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            const ms = new Date(examBatch?.endtime) - new Date(new Date().getTime() + (5.5 * 60 * 60 * 1000))
            const d = ms / (24 * 60 * 60 * 1000);
            const h = (d - parseInt(d)) * 24;
            const m = (h - parseInt(h)) * 60;
            const s = (m - parseInt(m)) * 60;
            setRemTime(
                ms <= 0 ? '0 : 0 : 0 : 0' : (d + '').split('.')[0] + " : " + (h + '').split('.')[0] + " : " + (m + '').split(".")[0] + " : " + s.toFixed()
            )
        }, 500);
        return () => clearInterval(interval);
    }, [examBatch, remTime, new Date()])

    const [data, setData] = useState([])

    useEffect(() => {
        axios({
            method: 'get',
            url: serverurl + '/exambatches/getById/' + examBatchId
        })
            .then(res => {
                setExamBatch(res.data.examBatch)
            })
            .catch(err => alert(err.message))
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
                .catch(err => console.log(err.message))
        }
    }, [examBatch])


    useEffect(() => {
        setData(
            students.map(s => ({
                studentid: s.id,
                attendance: false,
                mark: '',
                examid: examBatch.examid,
                courseid: examBatch.courseid
            }))
        )
    }, [students, examBatch])

    useEffect(() => {
        console.log(data)
    }, [data])

    return (
        <div style={{
            margin: '0 5vw'
        }}>
            <div className="text-end h5" style={{
                color: 'red'
            }}>
                <b>{remTime}</b>
            </div>
            <br />
            {/* {examBatch?.endtime}<br />
            {new Date(new Date().getTime() + 5.5 * 60 * 60 * 1000).toISOString()} */}
            <div style={{
                margin: '0 5vw'
            }}>
                <Table bordered
                    style={{
                        // tableLayout: 'fixed'
                    }}
                >
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
                                            checked={data[ind]?.attendance}
                                            onChange={(e) => {
                                                let newData = [...data];
                                                newData[ind].attendance = e.target.checked;
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
                                                value={data[ind]?.mark}
                                                onChange={e => {
                                                    const newData = [...data];
                                                    newData[ind].mark = e.target.value.replaceAll("", "");
                                                    setData(newData)
                                                }}
                                                min={0}
                                            />
                                        </Form.Group>
                                    </td>
                                    <td className="text-center">
                                        {
                                            data[ind]?.mark && (data[ind]?.mark + "").split("")?.map((i) => marksInWords[i] + " ")
                                        }
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    )
}