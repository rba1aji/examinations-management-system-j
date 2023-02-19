import { Table } from "react-bootstrap"
import axios from "axios"
import { useEffect, useState } from "react"
import { serverurl } from "../../../reducers/Constants";

export default function StudentsTable() {
    const [data, seData] = useState([]);

    useEffect(() => {
        axios({
            method: 'get',
            url: serverurl + '/students/getAll'
        })
            .then((res) => seData(res.data.studentsList))
            .catch((err) => console.log(err.message))
    }, [])

    return (
        <>
            <div style={{
                width: '100%',
                height: '82vh',
                overflow: 'scroll',
                fontSize: '80%'
            }}
                className=" border "
            >
                <Table style={{
                    width: '100%',
                }}
                    bordered
                >
                    <thead >
                        <tr style={{
                            position: 'sticky',
                            top: 0,
                            zIndex: 1
                        }}>
                            {
                                ["Sno", "RegNo", "Name", "Degree", "Branch", "Section", "Batch", "Email", "Phone", "DOB", "Address"].map((item, index) => {
                                    return <th
                                        key={index}
                                        className="bg-light"
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
                            data?.map((item, index) => {
                                return <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.id}</td>
                                    <td>{item.fullname}</td>
                                    <td>{item.degree}</td>
                                    <td>{item.branch}</td>
                                    <td>{item.section}</td>
                                    <td>{item.yearofjoin + "-" + item.yearofpassout}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.dateofbirth}</td>
                                    <td>{item.address}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </Table>
            </div >
        </>
    )
}