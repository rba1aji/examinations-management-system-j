import { Table } from "react-bootstrap"
import RegisterMultipleStudents from "./RegisterStudents"
import StudentsTable from "./StudentsTable"

export default function ManageStudents() {

    return (
        <div style={{
            margin: '0 5vw',
        }}>
            <div className="h6 text-end ">Manage Students</div>
            <Table style={{
                width: '100%'
            }}>
                <tbody>
                    <tr>
                        <td><RegisterMultipleStudents /></td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
            <StudentsTable />
        </div>
    )
}