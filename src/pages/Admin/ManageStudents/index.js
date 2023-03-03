import { Table } from "react-bootstrap"
import RegisterMultipleStudents from "./RegisterStudents"
import StudentsTable from "./StudentsTable"

export default function ManageStudents() {

    return (
        <div style={{
            margin: '0 5vw',
        }}>
            <div className="h6 text-end mt-2 me-3">Manage Students</div>
            <RegisterMultipleStudents />
            <br />
            <br />
            <StudentsTable />
        </div>
    )
}