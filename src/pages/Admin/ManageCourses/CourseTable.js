import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { AppState } from "../../../reducers/AppContextProvider";
import { serverurl } from "../../../reducers/Constants";

export default function CourseTable() {
    const { degrees, branches } = AppState();
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        axios({
            method: 'GET',
            url: serverurl + '/courses/getAll'
        })
            .then(res => setCourses(res.data.courses))
            .catch(err => console.log(err))
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
                    <thead>
                        <tr style={{
                            position: 'sticky',
                            top: 0,
                            zIndex: 1
                        }}>
                            {
                                ["Sno", "CourseID", "Name", "Credits", "Degree", 'Branch', 'Semester', "Batch"]
                                    .map((item, index) => {
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
                            courses?.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index}</td>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.credits}</td>
                                        <td>{degrees.find(e => e.id === item.degreeid)?.name}</td>
                                        <td>{branches.find(e => e.id === item.branchid)?.name}</td>
                                        <td>{item.semester}</td>
                                        <td>{item.batch}</td>
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