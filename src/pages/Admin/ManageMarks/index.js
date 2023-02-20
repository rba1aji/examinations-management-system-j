import { useState } from "react"
import { Table } from "react-bootstrap"
import RegisterExam from "./RegisterExam";
import SelectExam from "./SelectExam"

export default function ManageMarks() {
    const [selectedExam, setSelectedExam] = useState();

    return (
        <div style={{
            margin: '0 5vw',
        }}>
            <div className="h6 text-end ">Manage exam marks</div>
            <Table style={{
                width: '100%'
            }}>
                <tbody>
                    <tr>
                        <td><SelectExam
                            selectedExam={selectedExam}
                            setSelectedExam={setSelectedExam}
                        /></td>
                        <td><RegisterExam /></td>
                    </tr>
                </tbody>
            </Table>
            {/* <StudentsTable /> */}
        </div>
    )
}