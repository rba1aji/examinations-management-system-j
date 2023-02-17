import axios from "axios"
import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"
import { serverurl } from "../../reducers/Constants";

export default function StudentsData() {
    const [data, seData] = useState([]);
    useEffect(() => {
        axios({
            method: 'get',
            url: serverurl + '/students/getAll'
        })
            .then((res) => {
                console.log(res.data);
                seData(res.data.Students);
            })
            .catch((err) => {
                console.log(err.message)
            })
    }, [])
    return (
        <>
            <Table style={{
                margin: '5vh 5vw',
                width: '90vw',
                overflow: 'scroll'
            }}
                bordered
            >
                <thead>
                    <tr>
                        <th>Register Number</th>
                        <th>Name</th>
                        <th>Degree</th>
                        <th>Branch</th>
                        <th>Section</th>
                        <th>Batch</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Date Of Birth</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index) => {
                            return <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.fullname}</td>
                                <td>{item.degree}</td>
                                <td>{item.branch}</td>
                                <td>{item.section}</td>
                                <td>{item.yearofjoin + " - " + item.yearofpassout}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>{item.dateofbirth}</td>
                                <td>{item.address}</td>
                            </tr>
                        })
                    }
                </tbody>
            </Table>
        </>
    )
}