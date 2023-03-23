import { Table } from "react-bootstrap"
import axios from "axios"
import { useEffect, useState } from "react"
import { serverurl } from "../../../reducers/Constants";

export default function FacultiesTable() {
    const [data, seData] = useState([]);

    useEffect(() => {
        axios({
            method: 'get',
            url: serverurl + '/faculties/getAll',
            headers: { 'Authorization': 'Bearer ' + window.localStorage.getItem('token') }
        })
            .then((res) => {
                console.log(res.data)
                seData(res.data.faculties)
            })
            .catch((err) => alert(err.response.data.message))
    }, [])

    return (
        <>
            <div style={{
                width: '100%',
                height: '75vh',
                overflow: 'scroll',
                fontSize: '85%'
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
                                ["Sno", "ID", "Name", "Department", "Designation", "Email", "Phone"].map((item, index) => {
                                    return <th
                                        key={index}
                                        className="bg-info"
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
                            data?.map((f, index) => {
                                return <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{f.id}</td>
                                    {/* <td>{f.password}</td> */}
                                    <td>{f.fullname}</td>
                                    <td>{f.department}</td>
                                    <td>{f.designation}</td>
                                    <td>{f.email}</td>
                                    <td>{f.phone}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </Table>
            </div >
        </>
    )
}