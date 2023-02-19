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
            .then(res => setCourses(res.data.courseList))
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <Table style={{
                fontSize: '80%',
            }}
                bordered>
                <thead>
                    <tr>
                        <th>Sno</th>
                        <th>CourseID</th>
                        <th>Name</th>
                        <th>Credits</th>
                        <th>Degree</th>
                        <th>Branch</th>
                        <th>Semester</th>
                        <th>Batch</th>
                    </tr>
                </thead>
                <tbody>
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
        </>
    )
}