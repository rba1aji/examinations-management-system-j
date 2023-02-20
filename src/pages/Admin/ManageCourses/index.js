import { Table } from "react-bootstrap"
import RegisterMultipleCourses from "./RegisterCourses"
import CourseTable from "./CourseTable"

export default function ManageStudents() {

    return (
        <div style={{
            margin: '0 7.5vw',
        }}>
            <div className="h6 text-end ">Manage Courses</div>
            <Table style={{
                width: '100%'
            }}>
                <tbody>
                    <tr>
                        <td><RegisterMultipleCourses /></td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
            <CourseTable />
        </div>
    )
}