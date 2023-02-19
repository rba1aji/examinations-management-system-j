import { useEffect } from "react";
import { Table } from "react-bootstrap";
import { AppState } from "../../../reducers/AppContextProvider";

export default function ManageCourses() {
    const { degrees, branches } = AppState();
    useEffect(() => {
        console.log(degrees, branches);
    }, [degrees, branches])
    return (
        <>
            <div style={{
                margin: '0 7.5vw'
            }}>
                <div className="h6 text-end">Manage Courses</div>

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
                </Table>
            </div>
        </>
    )
}