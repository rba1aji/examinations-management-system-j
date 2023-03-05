import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { serverurl } from "../../../reducers/Constants";

export default function BatchStudentsTable(props) {
    const [students, setStudents] = useState([]);
    const { selectedBatch } = props;
    const [marks, setMarks] = useState([]);
    const marksinWords = ['ZERO', 'ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN', 'EIGHT', 'NINE', 'TEN']

    useEffect(() => {
        axios({
            method: 'get',
            url: serverurl + '/marks/getByBatchidExamidCourseid',
            params: {
                batchid: selectedBatch.id,
                examid: selectedBatch.examid,
                courseid: selectedBatch.courseid
            }
        })
            .then((res) => {
                setMarks(res.data.marks)
                console.log('marks are fetched', res.data)
            })
            .catch((err) =>
                alert(err.response.data.message)
            )
    }, [selectedBatch])

    useEffect(() => {
        axios({
            method: 'get',
            url: serverurl + '/students/getByStartidEndid',
            params: {
                startid: selectedBatch.startStudentid,
                endid: selectedBatch.endStudentid
            }
        })
            .then((res) => setStudents(res.data.students))
            .catch((err) =>
                alert(err.response.data.message)
            )
    }, [selectedBatch])

    return (
        <>
            <div style={{
                width: '100%',
                height: '77.5vh',
                overflow: 'scroll',
                fontSize: '90%'
            }}
                className=" border "
            >

                <Table style={{
                    width: '100%',
                }}
                    bordered
                >
                    <thead>
                        <tr style={{
                            position: 'sticky',
                            top: 0,
                            zIndex: 1
                        }}>
                            {
                                ["Sno", "Register no", "Name", "Attendance", "Marks in numbers", "Marks in words"]
                                    .map((item, index) => {
                                        return <th
                                            key={index}
                                            className="bg-info"
                                            style={{
                                                // backgroundColor: 'azure'
                                            }}
                                        >
                                            {item}
                                        </th>;
                                    })
                            }
                        </tr>
                    </thead>
                    <tbody
                        style={{
                            height: '70vh',
                            overflow: 'scroll'
                        }}>
                        {
                            students?.map((st, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{st.id}</td>
                                        <td>{st.fullname}</td>
                                        <td>
                                            {
                                                marks?.find((m) => m.studentid === st.id)?.attendance === true ? "P" : "Ab"
                                            }
                                        </td>
                                        <td>
                                            {
                                                marks?.find((m) => m.studentid === st.id)?.mark
                                            }
                                        </td>
                                        <td>
                                            {
                                                (marks?.find((m) => m.studentid === st.id)?.mark + '')?.split('')?.map((m) => marksinWords[m] + " ")
                                            }
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
        </>
    )
}