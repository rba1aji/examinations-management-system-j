import FacultiesTable from "./FacultiesTable"
import RegisterMultipleFaculties from "./RegisterMultipleFaculties"

export default function ManageFaculties() {

    return (
        <div style={{
            margin: '0 7.5vw',
        }}>
            <br />
            <div className="h6 text-end mt-2 ">Manage Faculties</div>
            <RegisterMultipleFaculties />
            <br />
            <br />
            <FacultiesTable />
        </div>
    )
}