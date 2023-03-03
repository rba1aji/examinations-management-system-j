import { Table } from "react-bootstrap"
import FacultiesTable from "./FacultiesTable"
import RegisterMultipleFaculties from "./RegisterMultipleFaculties"

export default function ManageFaculties() {

    return (
        <div style={{
            margin: '0 5vw',
        }}>
            <div className="h6 text-end mt-2 me-3 ">Manage Faculties</div>
            <RegisterMultipleFaculties />
            <br />
            <br />
            <FacultiesTable />
        </div>
    )
}