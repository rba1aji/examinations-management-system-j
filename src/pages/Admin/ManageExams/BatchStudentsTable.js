import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { serverurl } from "../../../reducers/Constants";

export default function BatchStudentsTable(props) {
    const [students, setStudents] = useState([]);
    const { selectedBatch } = props;

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
            .catch((err) => alert(err.message))
    }, [selectedBatch])

    return (
        <>
            <div style={{
                width: '100%',
                height: '82vh',
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
                                        <td></td>
                                        <td></td>
                                        <td></td>
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