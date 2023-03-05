import RegisterMultipleStudents from "./RegisterStudents"
import StudentsTable from "./StudentsTable"

export default function ManageStudents() {

    return (
        <div style={{
            margin: '0 7.5vw',
        }}>
            <br />
            <div className="h6 text-end mt-2 ">Manage Students</div>
            <RegisterMultipleStudents />
            <br />
            <br />
            <StudentsTable />
        </div>
    )
}